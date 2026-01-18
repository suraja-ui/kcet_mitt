import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import ExamClient from '../ExamClient';

export const dynamic = 'force-dynamic';


export default async function SubjectExamPage({
    params
}: {
    params: Promise<{ subject: string }>
}) {
    const { subject: subjectParam } = await params;
    const cookieStore = await cookies();
    const studentId = cookieStore.get('studentId')?.value;

    if (!studentId) {
        redirect('/login');
    }

    const subjectMap: Record<string, string> = {
        mathematics: 'Mathematics',
        physics: 'Physics',
        chemistry: 'Chemistry',
    };

    const subject = subjectMap[subjectParam.toLowerCase()];
    if (!subject) redirect('/exam');

    const questions = await prisma.question.findMany({
        where: { subject },
        take: 60,
    });

    // Serialize dates and transform options for the client
    // CRITICAL FIX: Transform DB fields (optionA, B...) to Client array (options: string[])
    const serializedQuestions = questions.map(q => ({
        id: q.id,
        text: q.text,
        subject: q.subject,
        createdAt: q.createdAt.toISOString(),
        correctOption: (q.correctOption.charCodeAt(0) - 'A'.charCodeAt(0)),
        options: [q.optionA, q.optionB, q.optionC, q.optionD]
    }));

    return <ExamClient questions={serializedQuestions} studentId={studentId} subject={subject} />;
}
