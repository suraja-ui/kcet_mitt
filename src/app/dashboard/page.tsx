import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
    let adminId: string | undefined;
    try {
        const cookieStore = await cookies();
        adminId = cookieStore.get('adminId')?.value;
    } catch (e) {
        console.error("Cookie error:", e);
    }

    if (!adminId) {
        redirect('/admin/login');
    }

    try {
        const [students, questions] = await Promise.all([
            prisma.student.findMany({
                include: { results: true },
                orderBy: { createdAt: 'desc' },
                take: 100 // Limit for performance
            }),
            prisma.question.findMany({
                orderBy: { createdAt: 'desc' }
            })
        ]);

        const sStudents = students.map(s => ({
            ...s,
            createdAt: s.createdAt.toISOString(),
            results: s.results.map(r => ({ ...r, completedAt: r.completedAt.toISOString() }))
        }));

        const sQuestions = questions.map(q => ({
            ...q,
            createdAt: q.createdAt.toISOString()
        }));

        return <DashboardClient initialStudents={sStudents} initialQuestions={sQuestions} />;
    } catch (error: any) {
        console.error('DashboardPage Database Error:', error);
        return (
            <div style={{
                minHeight: '100vh',
                background: '#0B1121',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                fontFamily: "'Outfit', sans-serif"
            }}>
                <div style={{
                    maxWidth: '600px',
                    width: '100%',
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center'
                }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#f87171', marginBottom: '16px' }}>Database Connection Error</h1>
                    <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Could not connect to the cloud database. Please check your credentials or network status.</p>

                    <div style={{ background: '#0f172a', padding: '16px', borderRadius: '8px', textAlign: 'left', fontSize: '12px', fontFamily: 'monospace', color: '#cbd5e1', overflow: 'auto', marginBottom: '24px' }}>
                        {error?.message || "Unknown error"}
                    </div>

                    <a href="/admin/login" style={{
                        display: 'inline-block',
                        padding: '10px 24px',
                        background: '#3b82f6',
                        color: '#fff',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 600
                    }}>
                        Retry Login
                    </a>
                </div>
            </div>
        );
    }
}
