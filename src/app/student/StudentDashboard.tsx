'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Exam = {
    id: string; title: string; subject: string; examType: string;
    difficulty: string; durationMinutes: number; marksPerQuestion: number;
    publishedAt: string; isDemo?: boolean; _count: { questions: number };
};

type PastResult = {
    id: string; totalMarks: number; examType: string; completedAt: string;
    exam?: { title: string; examType: string } | null;
};

type Student = { id: string; name: string; collegeName: string; pucRollNumber: string; };

export default function StudentDashboard({ student, liveExams, pastResults }: { student: Student; liveExams: Exam[]; pastResults: PastResult[]; }) {
    const router = useRouter();
    const [newExamNotif, setNewExamNotif] = useState<Exam | null>(null);
    const [activeTab, setActiveTab] = useState<'exams' | 'results'>('exams');

    const competitiveExams = liveExams.filter(e => !e.isDemo);
    const practiceExams = liveExams.filter(e => e.isDemo);

    // Show popup for the latest exam if it was published in the last 24h
    useEffect(() => {
        const checkNewExam = () => {
            if (liveExams.length > 0) {
                const latest = liveExams[0];
                if (!latest.publishedAt) return;
                const pubDate = new Date(latest.publishedAt).getTime();
                const now = Date.now();
                if (now - pubDate < 24 * 60 * 60 * 1000) {
                    setNewExamNotif(latest);
                }
            }
        };
        checkNewExam();
    }, [liveExams]);

    const handleStartExam = (exam: Exam) => {
        if (!exam.id) return;
        document.cookie = `examType=${exam.examType || 'CUSTOM'}; path=/; max-age=86400`;
        document.cookie = `examId=${exam.id}; path=/; max-age=86400`;
        router.push('/exam');
    };

    const diffColor = (d: string) => d === 'Easy' ? '#22c55e' : d === 'Hard' ? '#ef4444' : '#f59e0b';

    return (
        <div style={styles.page}>
            {/* Background */}
            <div style={styles.bg} />

            {/* NOTIFICATION POPUP */}
            <AnimatePresence>
                {newExamNotif && (
                    <motion.div
                        initial={{ opacity: 0, y: -60, x: '-50%' }}
                        animate={{ opacity: 1, y: 20, x: '-50%' }}
                        exit={{ opacity: 0, y: -60, x: '-50%' }}
                        style={styles.popup}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '22px' }}>🔔</span>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '14px' }}>New Exam Available!</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{newExamNotif.title}</div>
                            </div>
                            <button onClick={() => { handleStartExam(newExamNotif); setNewExamNotif(null); }} style={styles.popupBtn}>Attempt Now</button>
                            <button onClick={() => setNewExamNotif(null)} style={styles.popupClose}>✕</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HEADER */}
            <header style={{...styles.header, flexWrap: 'wrap', gap: '16px'}}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={styles.logoBadge}><span style={{ fontSize: '16px', fontWeight: 900, color: '#fff' }}>P2</span></div>
                    <div>
                        <h1 style={styles.brandName}>MIT Thandavapura</h1>
                        <p style={styles.brandSub}>Student Dashboard</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Link href="/leaderboard" style={styles.headerLink}>🏆 Leaderboard</Link>
                    <Link href="/result" style={styles.headerLink}>📄 My Results</Link>
                    <button onClick={() => { document.cookie = 'studentId=; max-age=0; path=/'; router.push('/login'); }} style={styles.logoutBtn}>Logout</button>
                </div>
            </header>

            <main style={styles.main}>
                {/* PROFILE CARD */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={styles.profileCard}>
                    <div style={styles.avatar}>{student.name[0].toUpperCase()}</div>
                    <div>
                        <h2 style={styles.studentName}>{student.name}</h2>
                        <p style={styles.studentMeta}>Roll No: <strong>{student.pucRollNumber}</strong></p>
                        <p style={styles.studentMeta}>{student.collegeName}</p>
                    </div>
                    <div style={styles.statPills}>
                        <div style={styles.statPill}><span style={{ fontSize: '20px', fontWeight: 800, color: '#EA580C' }}>{pastResults.length}</span><br /><span style={{ fontSize: '11px', color: '#64748b' }}>Attempts</span></div>
                        <div style={styles.statPill}><span style={{ fontSize: '20px', fontWeight: 800, color: '#22c55e' }}>{liveExams.length}</span><br /><span style={{ fontSize: '11px', color: '#64748b' }}>Live Exams</span></div>
                        {pastResults.length > 0 && (
                            <div style={styles.statPill}>
                                <span style={{ fontSize: '20px', fontWeight: 800, color: '#3b82f6' }}>{pastResults[0].totalMarks}</span>
                                <br /><span style={{ fontSize: '11px', color: '#64748b' }}>Best Score</span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* TABS */}
                <div style={styles.tabs}>
                    {(['exams', 'results'] as const).map(t => (
                        <button key={t} onClick={() => setActiveTab(t)} style={{ ...styles.tab, ...(activeTab === t ? styles.tabActive : {}) }}>
                            {t === 'exams' ? '📝 Available Exams' : '📊 Past Results'}
                        </button>
                    ))}
                </div>

                {/* LIVE EXAMS */}
                {activeTab === 'exams' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {competitiveExams.length > 0 && (
                            <>
                                <div style={styles.sectionLabel}>🔥 LIVE COMPETITIVE EXAMS</div>
                                <div style={styles.cardGrid}>
                                    {competitiveExams.map(exam => (
                                        <motion.div 
                                            key={exam.id} 
                                            whileHover={{ y: -6, scale: 1.01 }} 
                                            style={styles.liveExamCard}
                                        >
                                            <div style={styles.livePulse} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                                <div>
                                                    <h3 style={styles.examTitle}>{exam.title}</h3>
                                                    <p style={{ ...styles.examSub, color: '#f97316', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', marginTop: '4px' }}>
                                                        {exam.subject || 'All Subjects'}
                                                    </p>
                                                </div>
                                                <span style={{ ...styles.badge, background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>● LIVE</span>
                                            </div>
                                            
                                            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                                                <span style={styles.chip}>📊 {exam._count.questions} Questions</span>
                                                <span style={styles.chip}>⏱️ {exam.durationMinutes} min</span>
                                                <span style={{ ...styles.chip, color: diffColor(exam.difficulty) }}>Difficulty: {exam.difficulty}</span>
                                            </div>

                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleStartExam(exam); }} 
                                                style={styles.liveStartBtn}
                                            >
                                                Enter Exam Hall →
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        )}

                        {practiceExams.length > 0 && (
                            <>
                                <div style={{ ...styles.sectionLabel, marginTop: '32px' }}>📖 PRACTICE & MOCK TESTS</div>
                                <div style={styles.cardGrid}>
                                    {practiceExams.map(exam => (
                                        <motion.div 
                                            key={exam.id} 
                                            whileHover={{ y: -4 }} 
                                            style={{ ...styles.examCard, borderLeft: '4px solid #EA580C' }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                <h3 style={styles.examTitle}>{exam.title}</h3>
                                            </div>
                                            <p style={{ ...styles.examSub, color: '#94a3b8' }}>{exam.subject} • {exam._count.questions} questions</p>
                                            <div style={{ display: 'flex', gap: '10px', margin: '12px 0' }}>
                                                <span style={styles.chip}>⏱ {exam.durationMinutes}m</span>
                                                <span style={{ ...styles.chip, color: diffColor(exam.difficulty) }}>{exam.difficulty}</span>
                                            </div>
                                            <button onClick={() => handleStartExam(exam)} style={{ ...styles.startBtn, background: 'rgba(234,88,12,0.1)', border: '1px solid #EA580C', color: '#EA580C' }}>
                                                Start Mock →
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        )}

                        {liveExams.length === 0 && (
                            <div style={styles.emptyState}>
                                <div style={{ fontSize: '40px', marginBottom: '16px' }}>📅</div>
                                <p>No exams currently scheduled.</p>
                                <p style={{ fontSize: '13px', color: '#475569' }}>Check back later for new test series.</p>
                            </div>
                        )}

                        {liveExams.length === 0 && (
                            <div style={styles.emptyState}>No live exams at the moment. Practice with the demo tests above!</div>
                        )}
                    </motion.div>
                )}

                {/* PAST RESULTS */}
                {activeTab === 'results' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {pastResults.length === 0 ? (
                            <div style={styles.emptyState}>No exam attempts yet. Start with a practice test!</div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {pastResults.map((r, i) => (
                                    <motion.div key={r.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} style={styles.resultRow}>
                                        <div style={styles.resultRank}>#{i + 1}</div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '15px' }}>
                                                {r.exam?.title || r.examType.replace('_', ' ')}
                                            </div>
                                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                                                {new Date(r.completedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '22px', fontWeight: 800, color: '#EA580C' }}>{r.totalMarks}</div>
                                            <div style={{ fontSize: '11px', color: '#64748b' }}>marks</div>
                                        </div>
                                        <Link href="/result" style={{ ...styles.startBtn, background: '#1e293b', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', padding: '8px 16px', fontSize: '13px' }}>
                                            View →
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </main>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: { minHeight: '100vh', background: '#0B1121', color: '#f8fafc', fontFamily: "'Outfit', sans-serif", position: 'relative' },
    bg: { position: 'fixed', inset: 0, background: 'radial-gradient(circle at top right, rgba(234,88,12,0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(59,130,246,0.08), transparent 50%)', pointerEvents: 'none', zIndex: 0 },
    popup: { position: 'fixed', top: 0, left: '50%', zIndex: 9999, background: 'linear-gradient(135deg, #EA580C, #c2410c)', color: '#fff', padding: '16px 24px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', minWidth: '400px' },
    popupBtn: { marginLeft: 'auto', background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '13px' },
    popupClose: { background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '16px', marginLeft: '8px' },
    header: { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11,17,33,0.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px' },
    logoBadge: { width: '40px', height: '40px', background: 'linear-gradient(135deg,#EA580C,#c2410c)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    brandName: { fontSize: '18px', fontWeight: 800, margin: 0, color: '#fff' },
    brandSub: { fontSize: '11px', color: '#64748b', margin: 0 },
    headerLink: { textDecoration: 'none', color: '#94a3b8', fontSize: '13px', fontWeight: 600, padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)' },
    logoutBtn: { background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 },
    main: { maxWidth: '1100px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 },
    profileCard: { background: 'rgba(30,41,59,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px', display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' },
    avatar: { width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg,#EA580C,#c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, color: '#fff', flexShrink: 0 },
    studentName: { fontSize: '22px', fontWeight: 800, margin: '0 0 4px', color: '#fff' },
    studentMeta: { fontSize: '13px', color: '#94a3b8', margin: '2px 0' },
    statPills: { marginLeft: 'auto', display: 'flex', gap: '16px', flexWrap: 'wrap' },
    statPill: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 20px', textAlign: 'center', minWidth: '70px' },
    tabs: { display: 'flex', gap: '8px', marginBottom: '28px' },
    tab: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' },
    tabActive: { background: 'rgba(234,88,12,0.15)', borderColor: 'rgba(234,88,12,0.4)', color: '#EA580C' },
    sectionLabel: { fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px', marginTop: '8px' },
    cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginBottom: '8px' },
    examCard: { background: 'rgba(30,41,59,0.35)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', transition: 'all 0.2s', backdropFilter: 'blur(8px)' },
    liveExamCard: { 
        border: '1px solid rgba(234,88,12,0.2)', 
        borderRadius: '20px', 
        padding: '28px', 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'relative', 
        overflow: 'hidden',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
        background: 'linear-gradient(145deg, rgba(30,41,59,0.6), rgba(15,23,42,0.6))'
    },
    livePulse: { position: 'absolute', top: '16px', right: '16px', width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 12px #ef4444', animation: 'pulse 2s infinite' },
    examTitle: { fontSize: '18px', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.2px' },
    examSub: { fontSize: '13px', color: '#94a3b8', margin: 0 },
    badge: { fontSize: '10px', fontWeight: 800, padding: '4px 10px', borderRadius: '20px', letterSpacing: '0.5px' },
    chip: { fontSize: '11px', color: '#94a3b8', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '8px', fontWeight: 500 },
    startBtn: { display: 'inline-block', marginTop: '12px', padding: '12px 24px', borderRadius: '12px', border: 'none', color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' },
    liveStartBtn: { 
        background: 'linear-gradient(135deg, #EA580C, #c2410c)', 
        color: '#fff', 
        border: 'none', 
        padding: '14px 28px', 
        borderRadius: '14px', 
        fontWeight: 800, 
        fontSize: '15px', 
        cursor: 'pointer', 
        boxShadow: '0 4px 15px rgba(234,88,12,0.3)',
        textAlign: 'center',
        width: '100%',
        marginTop: 'auto'
    },
    emptyState: { textAlign: 'center', padding: '100px 40px', color: '#64748b', fontSize: '15px', background: 'rgba(30,41,59,0.2)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.04)' },
    resultRow: { background: 'rgba(30,41,59,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '18px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', transition: 'transform 0.2s' },
    resultRank: { width: '40px', height: '40px', background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#EA580C', flexShrink: 0 },
};
