import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const adminId = cookieStore.get('adminId')?.value;

    if (!adminId) redirect('/admin/login');

    const students = await prisma.student.findMany({
        include: { results: true },
        orderBy: { createdAt: 'desc' }
    });

    const questions = await prisma.question.findMany({
        orderBy: { subject: 'asc' }
    });

    // Serialize dates
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
}
