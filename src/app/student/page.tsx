import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import StudentDashboard from './StudentDashboard';

export const dynamic = 'force-dynamic';

export default async function StudentDashboardPage() {
    const cookieStore = await cookies();
    const studentId = cookieStore.get('studentId')?.value;
    if (!studentId) redirect('/login');

    const p = prisma as any; // TS server stale — prisma generate ran OK, types update on restart

    const student = await p.student.findUnique({
        where: { id: studentId },
        include: {
            results: {
                orderBy: { completedAt: 'desc' },
                take: 10,
                include: { exam: { select: { title: true, examType: true } } }
            }
        }
    });

    if (!student) redirect('/login');

    const liveExams: any[] = await p.exam.findMany({
        where: { isLive: true },
        orderBy: { publishedAt: 'desc' },
        include: { _count: { select: { questions: true } } }
    });

    await p.student.update({
        where: { id: studentId },
        data: { lastLoginAt: new Date() }
    });

    return (
        <StudentDashboard
            student={student}
            liveExams={liveExams}
            pastResults={student.results}
        />
    );
}


