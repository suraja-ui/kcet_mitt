'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

type Question = {
    id: string;
    text: string;
    options: string[];
    correctOption: number; // 0-3
    subject: string;
};

type Props = {
    questions: Question[];
    studentId: string;
    subject?: string;
};

export default function ExamClient({ questions, studentId, subject }: Props) {
    const router = useRouter();

    // ---------------- STATE ----------------
    // 'lobby' = Subject Selection Page
    // 'active' = Full Exam Session
    const [status, setStatus] = useState<'lobby' | 'active'>('lobby');

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({}); // Index -> OptionIndex
    // 180 Minutes * 60 Seconds
    const [timeLeft, setTimeLeft] = useState(180 * 60);

    // ---------------- CALCULATIONS ----------------
    // Group questions simply to count them for the Lobby
    const counts = useMemo(() => {
        const c = { Physics: 0, Chemistry: 0, Mathematics: 0 };
        questions.forEach(q => {
            // Normalized key lookup if needed, assuming DB serves Title Case
            if (q.subject === 'Physics') c.Physics++;
            else if (q.subject === 'Chemistry') c.Chemistry++;
            else if (q.subject === 'Mathematics') c.Mathematics++;
        });
        return c;
    }, [questions]);

    const currentQuestion = questions[current];

    // ---------------- EFFECTS ----------------
    useEffect(() => {
        if (status !== 'active') return;

        const timer = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) {
                    clearInterval(timer);
                    handleFinishExam();
                    return 0;
                }
                return t - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [status]);

    // ---------------- HANDLERS ----------------

    const handleStartExam = () => {
        setStatus('active');
    };

    const handleSelectOption = (qIndex: number, optIndex: number) => {
        setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
    };

    const handleFinishExam = async () => {
        // Calculate Scores
        let marksPhy = 0;
        let marksChem = 0;
        let marksMath = 0;

        questions.forEach((q, idx) => {
            const userAnswer = answers[idx];
            if (userAnswer === q.correctOption) {
                if (q.subject === 'Physics') marksPhy++;
                else if (q.subject === 'Chemistry') marksChem++;
                else if (q.subject === 'Mathematics') marksMath++;
            }
        });

        const totalMarks = marksPhy + marksChem + marksMath;

        // Post to Backend
        try {
            await fetch('/api/exam/finish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    studentId,
                    marksPhy,
                    marksChem,
                    marksMath,
                    totalMarks
                })
            });
            // Redirect
            router.push('/result');
        } catch (e) {
            console.error(e);
            alert('Failed to submit exam. Please try again.');
        }
    };

    // ---------------- RENDER: LOBBY ----------------
    if (status === 'lobby') {
        return (
            <div style={styles.page}>
                <header style={styles.header}>
                    <div>
                        <h2 style={styles.headerTitle}>MITT Assessment Portal</h2>
                        <span style={styles.subTitle}>Select Examination Mode</span>
                    </div>
                </header>

                <main style={styles.lobbyMain}>
                    <h1 style={{ ...styles.questionText, textAlign: 'center' }}>
                        Ready to begin?
                    </h1>

                    <div style={styles.subjectGrid}>
                        {/* Physics Card */}
                        <div style={styles.subjectCard}>
                            <h3 style={styles.subjectTitle}>Physics</h3>
                            <p style={styles.subjectCount}>{counts.Physics} Questions</p>
                        </div>

                        {/* Chemistry Card */}
                        <div style={styles.subjectCard}>
                            <h3 style={styles.subjectTitle}>Chemistry</h3>
                            <p style={styles.subjectCount}>{counts.Chemistry} Questions</p>
                        </div>

                        {/* Math Card */}
                        <div style={styles.subjectCard}>
                            <h3 style={styles.subjectTitle}>Mathematics</h3>
                            <p style={styles.subjectCount}>{counts.Mathematics} Questions</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <button onClick={handleStartExam} style={styles.startBtn}>
                            Start Full Exam (180 Mins)
                        </button>
                        <p style={{ marginTop: 15, color: '#64748b', fontSize: 13 }}>
                            Please unsure you have a stable internet connection.
                        </p>
                    </div>
                </main>
            </div>
        );
    }

    // ---------------- RENDER: ACTIVE EXAM ----------------
    if (!currentQuestion) return <div style={styles.page}>Loading...</div>;

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div style={styles.page}>
            {/* Header */}
            <header style={styles.header}>
                <div>
                    <h2 style={styles.headerTitle}>{subject ? `${subject} Exam` : 'KCET Mock Exam 2026'}</h2>
                    <span style={styles.subTitle}>{subject ? 'Subject Assessment' : 'Physics • Chemistry • Mathematics'}</span>
                </div>
                <div style={styles.timer}>
                    ⏱ {formatTime(timeLeft)}
                </div>
            </header>

            <main style={styles.examGrid}>
                {/* Left: Question Area */}
                <section style={styles.questionCard}>
                    <div style={styles.questionHeader}>
                        <span style={styles.subjectBadge}>{currentQuestion.subject}</span>
                        <span style={{ fontSize: 14, color: '#64748b', fontWeight: 600 }}>
                            Question {current + 1} of {questions.length}
                        </span>
                    </div>

                    <h1 style={styles.questionText}>{currentQuestion.text}</h1>

                    <div style={styles.optionsList}>
                        {currentQuestion.options.map((opt, idx) => {
                            const isSelected = answers[current] === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleSelectOption(current, idx)}
                                    style={{
                                        ...styles.option,
                                        ...(isSelected ? styles.optionSelected : {})
                                    }}
                                >
                                    <span style={styles.optionLabel}>
                                        {String.fromCharCode(65 + idx)}
                                    </span>
                                    <span>{opt}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div style={styles.navBar}>
                        <button
                            disabled={current === 0}
                            onClick={() => setCurrent(c => c - 1)}
                            style={styles.secondaryBtn}
                        >
                            Previous
                        </button>

                        <button
                            disabled={current === questions.length - 1}
                            onClick={() => setCurrent(c => c + 1)}
                            style={styles.primaryBtn}
                        >
                            Next Question
                        </button>
                    </div>
                </section>

                {/* Right: Palette */}
                <aside style={styles.paletteCard}>
                    <h4 style={{ marginBottom: 15, fontSize: 14, fontWeight: 700, textTransform: 'uppercase' }}>
                        Question Palette
                    </h4>

                    <div style={styles.paletteGrid}>
                        {questions.map((q, i) => {
                            const isAnswered = answers[i] !== undefined;
                            const isCurrent = i === current;

                            // Determine color based on subject (Visual feedback)
                            let borderColor = '#e5e7eb';
                            if (q.subject === 'Physics') borderColor = '#bae6fd'; // Light Blue
                            if (q.subject === 'Chemistry') borderColor = '#fde68a'; // Light Yellow
                            if (q.subject === 'Mathematics') borderColor = '#bbf7d0'; // Light Green

                            return (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    style={{
                                        ...styles.paletteItem,
                                        borderColor: borderColor,
                                        ...(isAnswered ? styles.paletteAnswered : {}),
                                        ...(isCurrent ? styles.paletteActive : {})
                                    }}
                                    title={`Q${i + 1} - ${q.subject}`}
                                >
                                    {i + 1}
                                </button>
                            )
                        })}
                    </div>

                    <button
                        onClick={() => {
                            if (confirm('Are you sure you want to finish the exam? This cannot be undone.')) {
                                handleFinishExam();
                            }
                        }}
                        style={styles.finishBtn}
                    >
                        Finish Exam
                    </button>

                    <div style={{ marginTop: 20, fontSize: 11, color: '#94a3b8', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <span style={{ width: 8, height: 8, background: '#bae6fd', borderRadius: '50%' }}></span> Phy
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <span style={{ width: 8, height: 8, background: '#fde68a', borderRadius: '50%' }}></span> Chem
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <span style={{ width: 8, height: 8, background: '#bbf7d0', borderRadius: '50%' }}></span> Math
                        </span>
                    </div>
                </aside>
            </main>
        </div>
    );
}

/* ---------------- STYLES ---------------- */
const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        background: '#0f172a',
        color: '#1e293b',
        fontFamily: 'Inter, sans-serif'
    },
    header: {
        background: '#1e293b',
        color: '#fff',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #334155'
    },
    headerTitle: { margin: 0, fontSize: 20, fontWeight: 700 },
    subTitle: { fontSize: 12, opacity: 0.7, textTransform: 'uppercase', letterSpacing: 1 },

    timer: {
        fontFamily: 'monospace',
        fontSize: 18,
        fontWeight: 700,
        background: '#f59e0b',
        color: '#000',
        padding: '6px 16px',
        borderRadius: 4
    },

    // Lobby
    lobbyMain: {
        maxWidth: 900,
        margin: '60px auto',
        padding: 20
    },
    subjectGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        marginTop: 40
    },
    subjectCard: {
        background: '#fff',
        padding: 30,
        borderRadius: 12,
        textAlign: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e2e8f0'
    },
    subjectTitle: { fontSize: 18, marginBottom: 8, color: '#0f172a' },
    subjectCount: { fontSize: 13, color: '#64748b', fontWeight: 600 },
    startBtn: {
        background: '#f59e0b',
        color: '#0f172a',
        border: 'none',
        padding: '16px 48px',
        fontSize: 18,
        fontWeight: 700,
        borderRadius: 8,
        cursor: 'pointer',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
    },

    // Exam Active
    examGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: 24,
        padding: 24,
        maxWidth: 1600,
        margin: '0 auto',
        height: 'calc(100vh - 80px)'
    },
    questionCard: {
        background: '#fff',
        borderRadius: 8,
        padding: 40,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    questionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    subjectBadge: {
        background: '#eff6ff',
        color: '#1d4ed8',
        padding: '4px 12px',
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase'
    },
    questionText: {
        fontSize: 24,
        marginBottom: 32,
        lineHeight: 1.5,
        color: '#0f172a'
    },
    optionsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    option: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        background: '#f8fafc',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#e2e8f0',
        borderRadius: 8,
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: 16,
        transition: 'all 0.15s ease'
    },
    optionSelected: {
        borderColor: '#f59e0b',
        background: '#fffbeb'
    },
    optionLabel: {
        width: 32,
        height: 32,
        borderRadius: 16,
        background: '#1e293b',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 700,
        flexShrink: 0
    },
    navBar: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 20,
        borderTop: '1px solid #e2e8f0'
    },
    primaryBtn: {
        background: '#0f172a',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: 6,
        border: 'none',
        fontWeight: 600,
        cursor: 'pointer'
    },
    secondaryBtn: {
        background: '#f1f5f9',
        color: '#475569',
        padding: '12px 24px',
        borderRadius: 6,
        border: 'none',
        fontWeight: 600,
        cursor: 'pointer'
    },

    // Palette
    paletteCard: {
        background: '#fff',
        borderRadius: 8,
        padding: 20,
        overflowY: 'auto'
    },
    paletteGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 8
    },
    paletteItem: {
        aspectRatio: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'solid', // borderColor set inline
        borderRadius: 6,
        background: '#fff',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        color: '#64748b'
    },
    paletteActive: {
        background: '#0f172a',
        color: '#fff',
        borderColor: '#0f172a' // Override
    },
    paletteAnswered: {
        background: '#22c55e',
        color: '#fff',
        borderColor: '#22c55e'
    },
    finishBtn: {
        width: '100%',
        marginTop: 30,
        background: '#dc2626',
        color: '#fff',
        padding: '14px',
        border: 'none',
        borderRadius: 6,
        fontWeight: 700,
        cursor: 'pointer'
    }
};
