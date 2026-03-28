'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, onSnapshot, limit } from 'firebase/firestore';

type LeaderboardEntry = {
    rank: number;
    studentId: string;
    studentName: string;
    collegeName: string;
    rollNumber: string;
    score: number;
    examType: string;
    submittedAt: string;
};

const EXAM_TYPES = ['KCET', 'PGCET_MBA', 'PGCET_MCA'];

export default function LeaderboardPage() {
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeExam, setActiveExam] = useState('KCET');
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
    const [liveCount, setLiveCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        setEntries([]);

        // Real-time Firestore listener — updates instantly as students submit
        const q = query(
            collection(db, 'leaderboard'),
            where('examType', '==', activeExam),
            orderBy('score', 'desc'),
            orderBy('submittedAt', 'asc'), // tie-break: earlier submission wins
            limit(100)
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const seenStudents = new Set<string>();
            const raw: any[] = [];

            snapshot.docs.forEach(doc => {
                const d = doc.data();
                if (!seenStudents.has(d.studentId)) {
                    seenStudents.add(d.studentId);
                    raw.push(d);
                }
            });

            // Assign ranks
            let currentRank = 1;
            let prevScore = -1;
            const ranked: LeaderboardEntry[] = raw.map((d, i) => {
                if (d.score !== prevScore) {
                    currentRank = i + 1;
                    prevScore = d.score;
                }
                return {
                    rank: currentRank,
                    studentId: d.studentId,
                    studentName: d.studentName || 'Student',
                    collegeName: d.collegeName || '',
                    rollNumber: d.rollNumber || '',
                    score: d.score,
                    examType: d.examType,
                    submittedAt: d.submittedAt,
                };
            });

            setEntries(ranked);
            setLiveCount(snapshot.size);
            setLastUpdated(new Date());
            setLoading(false);
        }, (err) => {
            console.error('Firestore leaderboard error:', err);
            // Fallback to REST API if Firestore fails
            fetch(`/api/leaderboard?examType=${activeExam}`)
                .then(r => r.json())
                .then(data => { setEntries(data.leaderboard || []); setLoading(false); })
                .catch(() => setLoading(false));
        });

        return () => unsub();
    }, [activeExam]);

    const getRankBadge = (rank: number) => {
        if (rank === 1) return { icon: '🥇', bg: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff' };
        if (rank === 2) return { icon: '🥈', bg: 'linear-gradient(135deg, #94a3b8, #64748b)', color: '#fff' };
        if (rank === 3) return { icon: '🥉', bg: 'linear-gradient(135deg, #ea580c, #c2410c)', color: '#fff' };
        return { icon: `#${rank}`, bg: 'rgba(255,255,255,0.05)', color: '#94a3b8' };
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #0f172a, #0B1121)',
            fontFamily: "'Outfit', sans-serif",
            color: '#f8fafc',
        }}>
            {/* Background glow */}
            <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at top center, rgba(234,88,12,0.12), transparent 60%)', pointerEvents: 'none' }} />

            {/* Header */}
            <header style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 32px', position: 'sticky', top: 0, zIndex: 50 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                        <h1 style={{ fontSize: '22px', fontWeight: 800, margin: 0 }}>🏆 Live Leaderboard</h1>
                        <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0' }}>
                            {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Connecting...'} · {liveCount} submissions
                        </p>
                    </div>

                    {/* Live dot */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                        <span style={{ fontSize: '13px', color: '#22c55e', fontWeight: 600 }}>LIVE</span>

                        {/* Exam type switcher */}
                        <div style={{ marginLeft: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '4px', display: 'flex', gap: '4px' }}>
                            {EXAM_TYPES.map(t => (
                                <button key={t} onClick={() => setActiveExam(t)} style={{
                                    background: activeExam === t ? 'linear-gradient(135deg, #EA580C, #c2410c)' : 'transparent',
                                    border: 'none', color: activeExam === t ? '#fff' : '#94a3b8',
                                    padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                                }}>{t.replace('PGCET_', '')}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '80px', color: '#64748b' }}>
                        <div style={{ fontSize: '36px', marginBottom: '16px' }}>⏳</div>
                        <p>Connecting to live data...</p>
                    </div>
                ) : entries.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px', color: '#64748b' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
                        <h3 style={{ fontWeight: 700, color: '#fff' }}>No Submissions Yet</h3>
                        <p>The leaderboard will update live as students submit their exams.</p>
                    </div>
                ) : (
                    <>
                        {/* Top 3 podium */}
                        {entries.length >= 3 && (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                                {[entries[1], entries[0], entries[2]].map((e, i) => {
                                    const heights = ['140px', '180px', '120px'];
                                    const labels = ['2nd', '1st', '3rd'];
                                    const badge = getRankBadge(e.rank);
                                    return (
                                        <div key={e.studentId} style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{badge.icon}</div>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                                                {e.studentName.split(' ')[0]}
                                            </div>
                                            <div style={{ fontSize: '20px', fontWeight: 900, color: '#fbbf24', marginBottom: '8px' }}>{e.score}</div>
                                            <div style={{
                                                width: '90px', height: heights[i], background: badge.bg,
                                                borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '14px', fontWeight: 800, color: badge.color
                                            }}>{labels[i]}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Full table */}
                        <div style={{ background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                        {['Rank', 'Student', 'College', 'Score', 'Time'].map(h => (
                                            <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {entries.map((e, i) => {
                                        const badge = getRankBadge(e.rank);
                                        const isTop3 = e.rank <= 3;
                                        return (
                                            <tr key={e.studentId} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: isTop3 ? 'rgba(234,88,12,0.04)' : 'transparent' }}>
                                                <td style={{ padding: '14px 20px' }}>
                                                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: badge.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isTop3 ? '16px' : '12px', fontWeight: 800, color: badge.color }}>
                                                        {badge.icon}
                                                    </div>
                                                </td>
                                                <td style={{ padding: '14px 20px' }}>
                                                    <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '14px' }}>{e.studentName}</div>
                                                    <div style={{ fontSize: '11px', color: '#64748b' }}>{e.rollNumber}</div>
                                                </td>
                                                <td style={{ padding: '14px 20px', fontSize: '13px', color: '#94a3b8' }}>{e.collegeName || '—'}</td>
                                                <td style={{ padding: '14px 20px' }}>
                                                    <span style={{ fontWeight: 900, color: '#fbbf24', fontSize: '18px' }}>{e.score}</span>
                                                </td>
                                                <td style={{ padding: '14px 20px', fontSize: '12px', color: '#64748b' }}>
                                                    {e.submittedAt ? new Date(e.submittedAt).toLocaleTimeString() : '—'}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </main>

            <style>{`
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&display=swap');
            `}</style>
        </div>
    );
}
