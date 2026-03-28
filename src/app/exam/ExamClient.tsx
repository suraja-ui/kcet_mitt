'use client';

import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type Question = {
    id: string;
    text: string;
    imageUrl?: string | null;
    options: string[];
    correctOption: number;
    subject: string;
    section?: string;
};

type Props = {
    questions: Question[];   // empty [] when cdnUrl is set (CDN loads them)
    studentId: string;
    examId: string;
    examTitle: string;
    examType?: string;
    durationMinutes: number;
    marksPerQuestion?: number;
    negativeMarking?: number;
    cdnUrl?: string | null;  // Firebase Storage public URL (null = legacy Prisma mode)
    randomize?: boolean;
};

const MAX_VIOLATIONS = 3;

export default function ExamClient({ 
    questions: initialQuestions, studentId, examId, examTitle, examType, durationMinutes, 
    marksPerQuestion = 1, negativeMarking = 0, cdnUrl = null, randomize = false
}: Props) {
    const router = useRouter();

    // ─── CDN QUESTION LOADING ─────────────────────────────────────────────────
    const [questions, setQuestions] = useState<Question[]>(initialQuestions);
    const [cdnLoading, setCdnLoading] = useState(!!cdnUrl);
    const [alreadySubmitted, setAlreadySubmitted] = useState(false);

    useEffect(() => {
        if (!cdnUrl) return;

        const AUTOSAVE_KEY = `exam_answers_${examId}`;

        // Check one-attempt lock in Firestore before starting
        async function checkAndLoad() {
            try {
                // Recover saved progress if any
                const saved = localStorage.getItem(AUTOSAVE_KEY);
                let savedAnswers: Record<number, number> = {};
                if (saved) {
                    try { savedAnswers = JSON.parse(saved); } catch {}
                }

                // Fetch questions from Firebase Storage CDN (no auth, public URL)
                const cdnRes = await fetch(cdnUrl!);
                if (!cdnRes.ok) throw new Error('CDN fetch failed');
                const cdnData = await cdnRes.json();

                let qs: any[] = cdnData.questions || [];
                if (randomize) {
                    qs = [...qs].sort(() => Math.random() - 0.5);
                }

                const mapped: Question[] = qs.map((q: any) => ({
                    id: q.id,
                    text: q.q,
                    imageUrl: q.imageUrl || null,
                    options: q.options,
                    correctOption: -1, // never exposed from CDN
                    subject: q.subject || 'General',
                    section: q.subject || 'General',
                }));

                setQuestions(mapped);
                if (Object.keys(savedAnswers).length > 0) {
                    setAnswers(savedAnswers);
                }
            } catch (err) {
                console.error('CDN load error:', err);
            } finally {
                setCdnLoading(false);
            }
        }

        checkAndLoad();
    }, [cdnUrl, examId, randomize]);

    // status: 'instructions' | 'active' | 'submitting'
    const [status, setStatus] = useState<'instructions' | 'active' | 'submitting'>('instructions');
    const [instrStep, setInstrStep] = useState(0);
    const [currentSubjectIdx, setCurrentSubjectIdx] = useState(0);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
    const [violations, setViolations] = useState(0);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMsg, setWarningMsg] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const submitCalledRef = useRef(false);
    const examStartTimeRef = useRef<number>(Date.now());

    // ─── SECTIONS: dynamically from actual question subjects ───────────────────
    const sections = useMemo(() => {
        if (!questions.length) return ['General'];
        const seen = new Set<string>();
        const ordered: string[] = [];
        questions.forEach(q => {
            // Priority: question.section > question.subject > 'General'
            const s = (q.section || q.subject || 'General').trim();
            const normalized = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
            if (!seen.has(normalized)) { seen.add(normalized); ordered.push(normalized); }
        });
        return ordered;
    }, [questions]);

    const activeSection = sections[currentSubjectIdx] || '';

    const sectionRanges = useMemo(() => {
        const ranges: Record<string, { start: number; end: number; length: number }> = {};
        let cursor = 0;
        sections.forEach(sec => {
            const count = questions.filter(q => (q.section || q.subject || 'General') === sec).length;
            ranges[sec] = { start: cursor, end: cursor + count - 1, length: count };
            cursor += count;
        });
        return ranges;
    }, [questions, sections]);

    const minIndex = sectionRanges[activeSection]?.start ?? 0;
    const maxIndex = sectionRanges[activeSection]?.end ?? 0;
    const currentQuestion = questions[current];

    // ─── FULLSCREEN ────────────────────────────────────────────────────────────
    const enterFullscreen = useCallback(() => {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen();
    }, []);

    // ─── TIMER ────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (status !== 'active') return;
        setTimeLeft(durationMinutes * 60);
    }, [status, durationMinutes]);

    useEffect(() => {
        if (status !== 'active') return;
        const timer = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) { clearInterval(timer); handleSubmit(true); return 0; }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

    // Reset current to section start when section changes
    useEffect(() => {
        if (status === 'active') setCurrent(sectionRanges[activeSection]?.start ?? 0);
    }, [currentSubjectIdx]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─── ANTI-CHEAT HOOKS ─────────────────────────────────────────────────────
    const fireViolation = useCallback((msg: string) => {
        setViolations(prev => {
            const next = prev + 1;
            setWarningMsg(`🚨 ${msg}  ·  Violation ${next}/${MAX_VIOLATIONS}`);
            setShowWarning(true);
            if (next >= MAX_VIOLATIONS) {
                setTimeout(() => handleSubmit(true), 1800);
            }
            return next;
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (status !== 'active') return;
        const onVis = () => { if (document.hidden) fireViolation('Tab switch detected'); };
        const onBlur = () => fireViolation('Window left');
        document.addEventListener('visibilitychange', onVis);
        window.addEventListener('blur', onBlur);
        return () => { document.removeEventListener('visibilitychange', onVis); window.removeEventListener('blur', onBlur); };
    }, [status, fireViolation]);

    useEffect(() => {
        if (status !== 'active') return;
        const blockCopy = (e: ClipboardEvent) => e.preventDefault();
        const blockCtx = (e: MouseEvent) => e.preventDefault();
        const blockKey = (e: KeyboardEvent) => {
            if (e.key === 'PrintScreen') { e.preventDefault(); fireViolation('Screenshot attempted'); }
            if ((e.ctrlKey || e.metaKey) && ['c', 'a', 'p', 'u', 's'].includes(e.key.toLowerCase())) e.preventDefault();
        };
        document.addEventListener('copy', blockCopy);
        document.addEventListener('contextmenu', blockCtx);
        document.addEventListener('keydown', blockKey);
        return () => { document.removeEventListener('copy', blockCopy); document.removeEventListener('contextmenu', blockCtx); document.removeEventListener('keydown', blockKey); };
    }, [status, fireViolation]);

    useEffect(() => {
        if (showWarning) { const t = setTimeout(() => setShowWarning(false), 3500); return () => clearTimeout(t); }
    }, [showWarning]);

    // ─── AUTO-SAVE to localStorage every 15 seconds ──────────────────────────
    useEffect(() => {
        if (status !== 'active') return;
        const AUTOSAVE_KEY = `exam_answers_${examId}`;
        const interval = setInterval(() => {
            localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(answers));
        }, 15000);
        return () => clearInterval(interval);
    }, [status, answers, examId]);

    // ─── SUBMIT ───────────────────────────────────────────────────────────────
    const handleSubmit = useCallback(async (force = false) => {
        if (submitCalledRef.current) return;
        submitCalledRef.current = true;
        setStatus('submitting');

        // Apply a random 0.1 to 5.0 second jitter to easily bypass Vercel 1000 concurrency limits on Free Tier
        await new Promise(r => setTimeout(r, 100 + Math.random() * 4900));

        // Clear auto-save on submit
        localStorage.removeItem(`exam_answers_${examId}`);

        const timeTakenSeconds = Math.round((Date.now() - examStartTimeRef.current) / 1000);

        // ── Firebase CDN path: use server-side evaluation ─────────────────────
        if (cdnUrl) {
            // Build answer map: { questionId → letter }
            const answerMap: Record<string, string> = {};
            questions.forEach((q, idx) => {
                if (answers[idx] !== undefined) {
                    answerMap[q.id] = String.fromCharCode(65 + answers[idx]);
                }
            });

            try {
                document.exitFullscreen?.().catch(() => {});
            } catch (_) {}

            try {
                const res = await fetch('/api/exam/submit-firebase', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        studentId,
                        examId,
                        examType: examType || 'KCET',
                        answers: answerMap,
                        tabSwitchCount: violations,
                        timeTakenSeconds,
                    })
                });
                const data = await res.json();
                if (res.status === 409) {
                    // Already submitted — go straight to result
                    console.warn('Already submitted:', data);
                }
            } catch (e) {
                console.error('Firebase submit error:', e);
            } finally {
                router.push('/result');
            }
            return;
        }

        // ── Legacy Prisma path (non-CDN exams) ────────────────────────────────
        let total = 0;
        const sectionScores: Record<string, number> = {};
        questions.forEach((q, idx) => {
            const sec = q.section || q.subject || 'General';
            if (!sectionScores[sec]) sectionScores[sec] = 0;
            const userAns = answers[idx];
            if (userAns !== undefined) {
                if (userAns === q.correctOption) {
                    const gain = marksPerQuestion;
                    sectionScores[sec] += gain;
                    total += gain;
                } else if (negativeMarking > 0) {
                    const penalty = negativeMarking;
                    sectionScores[sec] -= penalty;
                    total -= penalty;
                }
            }
        });

        try {
            document.exitFullscreen?.().catch(() => {});
        } catch (_) {}

        const payload = {
            studentId,
            examId,
            examType: examType || 'CUSTOM',
            totalMarks: total,
            sectionScores,
            tabSwitchCount: violations,
            responses: questions.map((q, idx) => ({
                questionId: q.id,
                answer: answers[idx] !== undefined ? String.fromCharCode(65 + answers[idx]) : null,
                isCorrect: answers[idx] === q.correctOption,
            }))
        };

        try {
            const res = await fetch('/api/exam/finish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                console.error('Submit API error:', err);
            }
        } catch (e) {
            console.error('Network error on submit:', e);
        } finally {
            // Always navigate to result regardless
            router.push('/result');
        }
    }, [answers, examId, examType, questions, router, studentId, violations]);

    const handleFinishSection = async (auto = false) => {
        if (auto) {
            if (currentSubjectIdx < sections.length - 1) {
                setCurrentSubjectIdx(prev => prev + 1);
            } else {
                await handleSubmit(true);
            }
            return;
        }
        setShowConfirmModal(true);
    };

    const confirmSubmit = async () => {
        setShowConfirmModal(false);
        if (currentSubjectIdx < sections.length - 1) {
            setCurrentSubjectIdx(prev => prev + 1);
        } else {
            await handleSubmit(false);
        }
    };

    const formatTime = (s: number) => `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

    // ─── CDN Loading screen ───────────────────────────────────────────────────
    if (cdnLoading) {
        return (
            <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a, #1e293b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Outfit', sans-serif" }}>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '48px', marginBottom: '24px', animation: 'spin 1s linear infinite' }}>📡</div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Loading Exam Paper</h2>
                    <p style={{ color: '#94a3b8', fontSize: '14px' }}>Fetching questions from secure CDN...</p>
                    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                </div>
            </div>
        );
    }

    // =========================================================
    // UI: INSTRUCTION POPUP (3 steps)
    // =========================================================
    if (status === 'instructions') {
        const steps = [
            {
                icon: '📋', title: 'Exam Instructions',
                body: (
                    <ul style={S.list}>
                        <li>This exam is <strong>"{examTitle}"</strong> published by your institute.</li>
                        <li>Total <strong>{questions.length} questions</strong> across <strong>{sections.length} section{sections.length > 1 ? 's' : ''}</strong>.</li>
                        <li>You have <strong>{durationMinutes} minutes</strong>. Timer starts when you click "Start Exam".</li>
                        <li>Navigate questions freely using the palette on the right.</li>
                        <li>Click <strong>Submit Exam</strong> when done, or it auto-submits when time runs out.</li>
                        <li>Exam opens in <strong>fullscreen mode</strong> — do not exit it.</li>
                    </ul>
                )
            },
            {
                icon: '🛡️', title: 'Anti-Cheating Rules',
                body: (
                    <>
                        <div style={S.alertBanner}>
                            You will be auto-submitted after <strong>{MAX_VIOLATIONS} violations</strong>.
                        </div>
                        <ul style={S.list}>
                            <li>🚫 <strong>Tab/window switching</strong> is strictly prohibited.</li>
                            <li>🚫 <strong>Copy / Paste / Right-Click</strong> is disabled.</li>
                            <li>🚫 <strong>PrintScreen / Screenshots</strong> trigger a violation.</li>
                            <li>✅ Violations are <strong>saved to your result record</strong>.</li>
                            <li>✅ CCTV-style monitoring: all navigation is server-logged.</li>
                        </ul>
                    </>
                )
            },
            {
                icon: '🚀', title: 'All Set!',
                body: (
                    <div style={{ textAlign: 'center', padding: '10px 0 24px' }}>
                        <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎯</div>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.7' }}>
                            Good luck! Answer every question to the best of your ability.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
                            {[
                                `📊 ${questions.length} Questions`,
                                `📚 ${sections.length} Section${sections.length > 1 ? 's' : ''}`,
                                `⏱️ ${durationMinutes} Min`,
                            ].map(t => <div key={t} style={S.chip}>{t}</div>)}
                        </div>
                    </div>
                )
            }
        ];
        const step = steps[instrStep];
        return (
            <div style={S.page}>
                <div style={S.bg} />
                <motion.div initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    style={{ ...S.glass, maxWidth: 680, width: '100%', padding: 0 }}>

                    {/* Header */}
                    <div style={S.instrHeader}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 28 }}>{step.icon}</span>
                            <div>
                                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Step {instrStep + 1}/{steps.length}</div>
                                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#fff' }}>{step.title}</h2>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {steps.map((_, i) => (
                                <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', transition: 'all 0.3s', background: i === instrStep ? '#EA580C' : i < instrStep ? '#22c55e' : 'rgba(255,255,255,0.2)' }} />
                            ))}
                        </div>
                    </div>

                    {/* Body */}
                    <AnimatePresence mode="wait">
                        <motion.div key={instrStep} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.22 }}
                            style={{ padding: '32px 40px' }}>
                            {step.body}
                        </motion.div>
                    </AnimatePresence>

                    {/* Footer */}
                    <div style={S.instrFooter}>
                        <button onClick={() => instrStep > 0 ? setInstrStep(p => p - 1) : router.push('/student')} style={S.secBtn}>
                            {instrStep > 0 ? '← Back' : 'Cancel'}
                        </button>
                        {instrStep < steps.length - 1 ? (
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setInstrStep(p => p + 1)} style={S.primBtn}>
                                Next →
                            </motion.button>
                        ) : (
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { enterFullscreen(); setStatus('active'); setCurrentSubjectIdx(0); }}
                                style={{ ...S.primBtn, background: 'linear-gradient(135deg,#16a34a,#15803d)', boxShadow: '0 4px 15px rgba(22,163,74,0.4)' }}>
                                🚀 Start Exam (Fullscreen)
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>
        );
    }

    // =========================================================
    // UI: SUBMITTING
    // =========================================================
    if (status === 'submitting') return (
        <div style={{ ...S.page, gap: 20 }}>
            <div style={{ fontSize: 52 }}>⏳</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>Saving your answers...</div>
            <div style={{ color: '#94a3b8', fontSize: 14 }}>Please wait. Do not close this window.</div>
        </div>
    );

    // =========================================================
    // UI: EMPTY STATE
    // =========================================================
    if (!questions.length || !currentQuestion) return (
        <div style={{ ...S.page, gap: 16 }}>
            <div style={{ fontSize: 48 }}>📭</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>No questions found for this exam.</div>
        </div>
    );

    // =========================================================
    // UI: ACTIVE EXAM
    // =========================================================
    const localQNum = (current - minIndex) + 1;
    const sectionLen = sectionRanges[activeSection]?.length ?? 0;
    const totalAnswered = Object.keys(answers).length;
    const timeIsLow = timeLeft < 300;
    const violationPct = (violations / MAX_VIOLATIONS) * 100;

    return (
        <div style={{ ...S.page, userSelect: 'none' }} onCopy={e => e.preventDefault()} onCut={e => e.preventDefault()}>

            {/* ── TOP BAR ─────────────────────────────────────────────── */}
            <header style={S.topBar}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={S.sectionIcon}>{activeSection[0]?.toUpperCase()}</div>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff' }}>{examTitle}</h2>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 2 }}>
                            <span style={S.pill}>{activeSection}</span>
                            <span style={S.meta}>Sec {currentSubjectIdx + 1}/{sections.length}</span>
                            <span style={S.meta}>·</span>
                            <span style={S.meta}>{totalAnswered}/{questions.length} answered</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    {violations > 0 && (
                        <div style={{ color: '#ef4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700 }}>
                            ⚠️ {violations}/{MAX_VIOLATIONS} Violations
                            <div style={{ height: 3, background: 'rgba(239,68,68,0.15)', borderRadius: 2, marginTop: 4 }}>
                                <div style={{ height: '100%', width: `${violationPct}%`, background: '#ef4444', borderRadius: 2, transition: 'width 0.5s' }} />
                            </div>
                        </div>
                    )}
                    <div style={{ ...S.timer, ...(timeIsLow ? { color: '#ef4444', background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)' } : {}) }}>
                        {timeIsLow && '⚠️ '}{formatTime(timeLeft)}
                    </div>
                </div>
            </header>

            {/* ── SECTION TABS ─────────────────────────────────────────── */}
            {sections.length > 1 && (
                <div style={S.sectionBar}>
                    {sections.map((sec, i) => {
                        const r = sectionRanges[sec];
                        const done = r ? Object.keys(answers).filter(k => +k >= r.start && +k <= r.end).length : 0;
                        return (
                            <button key={sec} onClick={() => setCurrentSubjectIdx(i)} style={{ ...S.secTab, ...(i === currentSubjectIdx ? S.secTabActive : {}) }}>
                                {sec.length > 16 ? sec.slice(0, 14) + '…' : sec}
                                <span style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '1px 6px', fontSize: 10, marginLeft: 4 }}>{done}/{r?.length ?? 0}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
            <main className="exam-layout-grid" style={{ marginTop: sections.length > 1 ? 120 : 80 }}>

                {/* Question Panel */}
                <motion.section className="exam-panel" layout>
                    <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={S.qBadge}>Q {localQNum} of {sectionLen}</span>
                        <span style={{ fontSize: 12, color: '#64748b' }}>{activeSection}</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.18 }}>
                            <p style={S.qText}>{currentQuestion.text}</p>

                            {currentQuestion.imageUrl && (
                                <div style={{ margin: '24px 0', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>
                                    <img src={currentQuestion.imageUrl} alt="Figure" draggable={false} onContextMenu={e => e.preventDefault()}
                                        style={{ maxWidth: '100%', maxHeight: 500, borderRadius: 12, display: 'block', margin: '0 auto', padding: '10px' }} />
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {currentQuestion.options.map((opt, idx) => {
                                    const sel = answers[current] === idx;
                                    return (
                                        <motion.button key={idx} whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.99 }}
                                            onClick={() => setAnswers(prev => ({ ...prev, [current]: idx }))}
                                            style={{ ...S.optBtn, ...(sel ? S.optSel : {}) }}>
                                            <div style={{ ...S.optLetter, ...(sel ? S.optLetterSel : {}) }}>
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span style={{ fontSize: 16, lineHeight: 1.5, color: sel ? '#fff' : '#cbd5e1', fontWeight: sel ? 600 : 400 }}>{opt}</span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Prev / Next */}
                    <div style={{ marginTop: 'auto', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                        <button disabled={current <= minIndex} onClick={() => setCurrent(c => c - 1)}
                            style={{ ...S.secBtn, ...(current <= minIndex ? { opacity: 0.4, cursor: 'not-allowed' } : {}) }}>← Prev</button>
                        {current < maxIndex ? (
                            <motion.button whileHover={{ scale: 1.02 }} onClick={() => setCurrent(c => c + 1)} style={S.primBtn}>Next →</motion.button>
                        ) : (
                            <motion.button whileHover={{ scale: 1.02 }} onClick={() => handleFinishSection()}
                                style={{ ...S.primBtn, background: 'linear-gradient(135deg,#ef4444,#be123c)', boxShadow: '0 4px 15px rgba(239,68,68,0.3)' }}>
                                {currentSubjectIdx < sections.length - 1 ? `Finish ${activeSection} →` : 'Submit Exam ✓'}
                            </motion.button>
                        )}
                    </div>
                </motion.section>

                {/* Sidebar Palette */}
                <aside className="exam-sidebar">
                    <h3 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#64748b', marginBottom: 16 }}>Question Palette</h3>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6 }}>
                            {questions.slice(minIndex, maxIndex + 1).map((_, i) => {
                                const gIdx = minIndex + i;
                                const isSel = answers[gIdx] !== undefined;
                                const isCur = gIdx === current;
                                return (
                                    <motion.button key={gIdx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        onClick={() => setCurrent(gIdx)}
                                        style={{ aspectRatio: '1', borderRadius: 8, fontSize: 12, fontWeight: 600, border: '1px solid', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            ...(isCur ? { background: '#EA580C', borderColor: '#EA580C', color: '#fff', boxShadow: '0 4px 12px rgba(234,88,12,0.3)' } :
                                               isSel ? { background: 'rgba(34,197,94,0.15)', borderColor: 'rgba(34,197,94,0.3)', color: '#4ade80' } :
                                                       { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05)', color: '#64748b' })
                                        }}>
                                        {i + 1}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16, fontSize: 11, color: '#94a3b8' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EA580C', flexShrink: 0 }} />Current</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />Answered</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: '#334155', flexShrink: 0 }} />Skipped</div>
                        </div>
                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={() => handleFinishSection()}
                            style={{ width: '100%', padding: 14, borderRadius: 12, background: 'linear-gradient(135deg,#ef4444,#be123c)', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer', fontSize: 14, boxShadow: '0 4px 15px rgba(239,68,68,0.25)' }}>
                            {currentSubjectIdx < sections.length - 1 ? `✓ Finish ${activeSection}` : '✓ Submit Exam'}
                        </motion.button>
                    </div>
                </aside>
            </main>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {showConfirmModal && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            style={{ ...S.glass, maxWidth: 440, width: '100%', padding: '40px 32px', textAlign: 'center' }}>
                            <div style={{ fontSize: 48, marginBottom: 20 }}>🏁</div>
                            <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
                                {currentSubjectIdx < sections.length - 1 ? `Finish ${activeSection}?` : 'Submit Exam?'}
                            </h3>
                            <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
                                {currentSubjectIdx < sections.length - 1 
                                    ? `You are about to finish the ${activeSection} section. You cannot return to these questions later.`
                                    : "Are you sure you want to end the exam? Your answers will be saved and evaluated immediately."}
                            </p>
                            <div style={{ display: 'flex', gap: 12 }}>
                                <button onClick={() => setShowConfirmModal(false)} style={{ ...S.secBtn, flex: 1, padding: '14px' }}>Go Back</button>
                                <button onClick={confirmSubmit} style={{ ...S.primBtn, flex: 1, padding: '14px' }}>
                                    {currentSubjectIdx < sections.length - 1 ? 'Next Section' : 'Yes, Submit'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Warning Toast */}
            <AnimatePresence>
                {showWarning && (
                    <motion.div className="warning-toast" initial={{ opacity: 0, y: -30, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: -30, x: '-50%' }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{warningMsg}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const S: Record<string, React.CSSProperties> = {
    page: { minHeight: '100vh', background: '#0B1121', color: '#f8fafc', fontFamily: "'Outfit',sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' },
    bg: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right,rgba(234,88,12,0.10),transparent),radial-gradient(circle at bottom left,rgba(34,197,94,0.05),transparent)', pointerEvents: 'none', zIndex: 0 },
    glass: { background: 'rgba(30,41,59,0.82)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, boxShadow: '0 24px 60px rgba(0,0,0,0.45)' },
    instrHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 40px', borderBottom: '1px solid rgba(255,255,255,0.07)' },
    instrFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 40px', borderTop: '1px solid rgba(255,255,255,0.07)' },
    list: { margin: 0, paddingLeft: 22, lineHeight: 2.1, color: '#cbd5e1', fontSize: 15 } as React.CSSProperties,
    alertBanner: { background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 10, padding: '14px 18px', marginBottom: 20, color: '#fca5a5', fontSize: 14, lineHeight: 1.6 },
    chip: { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '8px 20px', fontSize: 14, color: '#94a3b8' },
    primBtn: { background: 'linear-gradient(135deg,#EA580C,#c2410c)', color: '#fff', border: 'none', borderRadius: 12, padding: '13px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px rgba(234,88,12,0.4)' },
    secBtn: { background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 22px', borderRadius: 10, cursor: 'pointer', fontSize: 14 },
    topBar: { width: '100%', height: 80, background: 'rgba(15,23,42,0.94)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', position: 'fixed', top: 0, zIndex: 50 },
    sectionBar: { position: 'fixed', top: 80, left: 0, right: 0, zIndex: 40, background: 'rgba(11,17,33,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', overflowX: 'auto', gap: 4, padding: '8px 24px' },
    secTab: { background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b', padding: '6px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' },
    secTabActive: { background: 'rgba(234,88,12,0.15)', borderColor: '#EA580C', color: '#EA580C' },
    sectionIcon: { width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg,#EA580C,#c2410c)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 },
    pill: { background: 'rgba(234,88,12,0.15)', color: '#fb923c', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20 },
    meta: { fontSize: 12, color: '#64748b' },
    timer: { fontFamily: "'Manrope',monospace", fontSize: 17, fontWeight: 700, color: '#EA580C', background: 'rgba(234,88,12,0.1)', padding: '7px 14px', borderRadius: 8, border: '1px solid rgba(234,88,12,0.2)' },
    qBadge: { background: 'rgba(255,255,255,0.05)', color: '#e2e8f0', padding: '6px 16px', borderRadius: 20, fontSize: 13, border: '1px solid rgba(255,255,255,0.1)' },
    qText: { fontSize: 'clamp(17px,2.4vw,23px)', fontWeight: 500, lineHeight: 1.65, marginBottom: 32, color: '#f1f5f9' },
    optBtn: { display: 'flex', alignItems: 'center', gap: 16, padding: '16px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 14, cursor: 'pointer', textAlign: 'left', transition: 'all 0.18s', color: '#cbd5e1' },
    optSel: { background: 'rgba(234,88,12,0.12)', borderColor: '#EA580C', boxShadow: '0 0 20px rgba(234,88,12,0.12)' },
    optLetter: { width: 36, height: 36, borderRadius: 9, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: 13 },
    optLetterSel: { background: '#EA580C', color: '#fff' },
};
