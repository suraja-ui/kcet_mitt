import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

import React from 'react';

export const dynamic = 'force-dynamic';

export default async function ResultPage() {
    const cookieStore = await cookies();
    const studentId = cookieStore.get('studentId')?.value;

    if (!studentId) redirect('/login');

    const student = await (prisma as any).student.findUnique({
        where: { id: studentId },
        include: {
            results: {
                orderBy: { completedAt: 'desc' },
                take: 1,
                include: {
                    exam: { select: { title: true, durationMinutes: true } },
                    examResponses: {
                        include: { examQuestion: true }
                    },
                    responses: {
                        include: { question: true }
                    }
                }
            },
        },
    });

    if (!student || student.results.length === 0) {
        redirect('/student');
    }

    const result = student.results[0];
    const examType = result.examType || 'KCET';
    const examTitle = result.exam?.title || examType.replace('_', ' ');
    const isAdminExam = !!result.examId;

    // ── Section breakdown ────────────────────────────────────────────────────
    let sectionData: { name: string; score: number; max: number }[] = [];
    let grandTotalMax = 0;

    if (isAdminExam) {
        // Admin-published exam: read sectionScores from saved JSON
        const scores = (result.sectionScores as Record<string, number>) || {};
        const sectionNames = Object.keys(scores);
        // Derive max from examResponses per section
        const sectionMaxMap: Record<string, number> = {};
        (result.examResponses || []).forEach((er: any) => {
            const sec = er.examQuestion?.subject || 'General';
            sectionMaxMap[sec] = (sectionMaxMap[sec] || 0) + 1;
        });
        sectionData = sectionNames.map(name => ({
            name,
            score: scores[name] || 0,
            max: sectionMaxMap[name] || 0,
        }));
        grandTotalMax = Object.values(sectionMaxMap).reduce((a, b) => a + b, 0) || result.totalMarks || 100;
    } else if (examType === 'KCET') {
        grandTotalMax = 180;
        sectionData = [
            { name: 'Physics', score: result.marksPhy, max: 60 },
            { name: 'Chemistry', score: result.marksChem, max: 60 },
            { name: 'Mathematics', score: result.marksMath, max: 60 },
        ];
    } else {
        grandTotalMax = 100;
        const scores = (result.sectionScores as Record<string, number>) || {};
        if (examType === 'PGCET_MBA') {
            const secs = ['Proficiency in English', 'General Knowledge', 'Quantitative Analysis', 'Reasoning & General Intelligence'];
            sectionData = secs.map(s => ({ name: s, score: scores[s] || 0, max: 25 }));
        } else {
            const secs = [{ name: 'Mathematics', max: 50 }, { name: 'Statistics', max: 20 }, { name: 'Computer Awareness', max: 20 }, { name: 'Analytical Ability', max: 10 }];
            sectionData = secs.map(s => ({ name: s.name, score: scores[s.name] || 0, max: s.max }));
        }
    }

    const totalScore = result.totalMarks;
    const percentage = grandTotalMax > 0 ? Math.round((totalScore / grandTotalMax) * 100) : 0;

    // Unified response list — works for both admin (ExamResponse) and legacy (Response) exams
    const displayResponses: { subject: string; text: string; answer: string | null; correctOption: string; isCorrect: boolean }[] =
        isAdminExam
            ? (result.examResponses || []).map((er: any) => ({
                  subject: er.examQuestion?.subject || 'General',
                  text: er.examQuestion?.text || '',
                  answer: er.answer,
                  correctOption: er.examQuestion?.correctOption || '',
                  isCorrect: er.isCorrect,
              }))
            : (result.responses || []).map((r: any) => ({
                  subject: r.question?.subject || '',
                  text: r.question?.text || '',
                  answer: r.answer,
                  correctOption: r.question?.correctOption || '',
                  isCorrect: r.isCorrect,
              }));


    return (
        <div style={styles.page}>
            <div style={styles.bgOverlay} />

            <div style={styles.container}>
                {/* HEADER */}
                <header style={styles.header}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px 24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ ...styles.logoBlock }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/mit-logo.png" alt="MIT Thandavapura" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h1 style={{ ...styles.instName, marginBottom: '4px' }}>
                                MIT Thandavapura
                            </h1>
                            <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#EA580C', fontWeight: 700, letterSpacing: '1px' }}>
                                Engineering College
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '12px' }}>
                        <p style={styles.instSub}>
                            Maharaja Institute of Technology, Thandavapura — Affiliated to VTU | Approved by AICTE | Recognized by Govt. of Karnataka
                        </p>
                        <p style={styles.instAddr}>
                            NH 766, Nanjangud Taluk, Mysore District – 571302
                        </p>
                    </div>
                </header>

                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <h2 style={styles.reportTitle}>OFFICIAL SCORECARD</h2>
                        <span style={styles.examBadge}>{examTitle} — RESULT 2026</span>
                    </div>

                    {/* CANDIDATE INFO */}
                    <div style={styles.infoGrid}>
                        <InfoRow label="Candidate Name" value={student.name} />
                        <InfoRow label="PUC / Roll No" value={student.pucRollNumber} />
                        <InfoRow label="College Name" value={student.collegeName || 'N/A'} />
                        <InfoRow label="Test Date" value={new Date(result.completedAt).toLocaleDateString()} />
                    </div>

                    <div style={styles.separator} />

                    {/* SCORES */}
                    <div style={styles.scoreSection}>
                        {/* TOTAL SCORE */}
                        <div style={styles.totalBox}>
                            <h3 style={styles.totalLabel}>Grand Total</h3>
                            <div style={styles.bigScore}>
                                {totalScore} <span style={{ fontSize: '24px', color: '#94a3b8' }}>/ {grandTotalMax}</span>
                            </div>
                            <div style={styles.percentBadge}>
                                {percentage}% Score
                            </div>
                        </div>

                        {/* SECTION BREAKDOWN */}
                        <div style={styles.breakdownBox}>
                            <h3 style={styles.breakdownTitle}>Performance Analysis</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {sectionData.map((sub, i) => (
                                    <div key={i}>
                                        <div style={styles.barHeader}>
                                            <span style={styles.subName}>{sub.name}</span>
                                            <span style={styles.subScore}>
                                                {sub.score} / {sub.max}
                                            </span>
                                        </div>
                                        <div style={styles.barTrack}>
                                            <div style={{
                                                ...styles.barFill,
                                                width: `${(sub.score / sub.max) * 100}%`,
                                                background: 'linear-gradient(90deg, #EA580C, #f97316)' // Always Orange for MITT brand
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DETAILED REVIEW */}
                    <div style={{ marginTop: '40px' }}>
                        <h3 style={{ ...styles.breakdownTitle, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px', marginBottom: '24px' }}>
                            Detailed Question Review
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {displayResponses.length === 0 ? (
                                <div style={{ color: '#64748b', textAlign: 'center', padding: '20px' }}>No detailed response data available.</div>
                            ) : displayResponses.map((res, idx) => (
                                <div key={idx} style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    border: `1px solid ${res.isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                                        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Q{idx + 1} | {res.subject}</span>
                                        <span style={{
                                            fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700,
                                            background: res.isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                                            color: res.isCorrect ? '#4ade80' : '#f87171'
                                        }}>
                                            {res.isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '15px', color: '#f8fafc', marginBottom: '16px', lineHeight: '1.6' }}>{res.text}</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '12px' }}>
                                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '10px', border: res.isCorrect ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)' }}>
                                            <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>YOUR ANSWER</span>
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: res.isCorrect ? '#4ade80' : '#f87171' }}>{res.answer || 'No Answer'}</span>
                                        </div>
                                        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.3)' }}>
                                            <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>CORRECT ANSWER</span>
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#4ade80' }}>{res.correctOption}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FOOTER */}
                    <div style={styles.footer}>
                        <p style={styles.disclaimer}>
                            This is a computer-generated document. For official verification, contact the admissions office.
                            Ph: +91 96202 28002 / 28021
                        </p>

                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
                            <a href="https://mit-thandavapura.ac.in" target="_blank" style={styles.primaryBtn}>
                                Visit MIT Thandavapura Website
                            </a>
                            <Link href="/login" style={styles.secondaryBtn}>
                                Exit / Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.5px' }}>{label}</span>
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#f8fafc' }}>{value}</span>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #1e1b4b, #000000)',
        fontFamily: "'Outfit', sans-serif",
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff'
    },
    bgOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(234, 88, 12, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
    },
    container: {
        maxWidth: '900px',
        width: '100%',
        position: 'relative',
        zIndex: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px',
        gap: '6px'
    },
    logoBlock: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        padding: '0'
    },
    instName: {
        fontSize: '28px',
        fontWeight: 800,
        lineHeight: '1.2',
        color: '#fff',
        letterSpacing: '-0.5px'
    },
    instSub: { fontSize: '14px', color: '#94a3b8', marginBottom: '4px' },
    instAddr: { fontSize: '13px', color: '#64748b' },

    // Card
    card: {
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '24px'
    },
    reportTitle: { fontSize: '14px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 },
    examBadge: {
        background: 'rgba(234, 88, 12, 0.15)',
        color: '#fb923c',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 700,
        border: '1px solid rgba(234, 88, 12, 0.3)'
    },

    infoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
    },
    separator: { height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '32px' },

    scoreSection: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        marginBottom: '40px'
    },
    totalBox: {
        background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.8))',
        borderRadius: '20px',
        padding: '32px',
        border: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalLabel: { fontSize: '13px', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '1px', marginBottom: '8px' },
    bigScore: { fontSize: '64px', fontWeight: 800, color: '#fff', lineHeight: '1', marginBottom: '16px' },
    percentBadge: {
        background: '#EA580C',
        color: '#fff',
        padding: '6px 16px',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)'
    },

    breakdownBox: {},
    breakdownTitle: { fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' },
    barHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
    subName: { fontSize: '14px', color: '#cbd5e1' },
    subScore: { fontSize: '14px', fontWeight: 700, color: '#fff' },
    barTrack: { height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' },
    barFill: { height: '100%', borderRadius: '4px' },

    footer: {
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '32px'
    },
    disclaimer: { fontSize: '12px', color: '#64748b', marginBottom: '20px', lineHeight: '1.5' },
    primaryBtn: {
        display: 'inline-block',
        background: '#EA580C',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)'
    },
    secondaryBtn: {
        display: 'inline-block',
        background: 'rgba(255,255,255,0.05)',
        color: '#94a3b8',
        padding: '12px 24px',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px',
        border: '1px solid rgba(255,255,255,0.1)'
    }
};
