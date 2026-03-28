import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import ExamClient from './ExamClient';

export const dynamic = 'force-dynamic';

export default async function ExamPage() {
    const cookieStore = await cookies();
    const studentId = cookieStore.get('studentId')?.value;
    if (!studentId) redirect('/login');

    const examId = cookieStore.get('examId')?.value;
    const examTypeCookie = cookieStore.get('examType')?.value;

    if (!examId) {
        redirect('/student');
    }

    const exam = await (prisma as any).exam.findUnique({
        where: { id: examId },
        include: { _count: { select: { questions: true } } }
    });

    if (!exam || !exam.isLive) {
        redirect('/student');
    }

    // If exam has a Firebase CDN URL, ExamClient will fetch questions from there
    // Otherwise fall back to Prisma (for backward-compat with non-published exams)
    let clientQuestions: any[] = [];

    if (!exam.cdnUrl) {
        // Fallback: load from Prisma
        const rawQuestions = await (prisma as any).examQuestion.findMany({
            where: { examId },
            orderBy: { orderIndex: 'asc' }
        });

        if (!rawQuestions || rawQuestions.length === 0) {
            redirect('/student');
        }

        let finalQuestions = [...rawQuestions];
        if (exam.randomizeQuestions) {
            finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);
        }

        clientQuestions = finalQuestions.map((q: any) => ({
            id: q.id,
            text: q.text,
            imageUrl: q.imageUrl || null,
            options: [q.optionA, q.optionB, q.optionC, q.optionD],
            correctOption: q.correctOption.charCodeAt(0) - 'A'.charCodeAt(0),
            subject: q.subject || 'General',
            section: q.subject || 'General',
        }));
    }

    return (
        <ExamClient
            questions={clientQuestions}
            studentId={studentId}
            examId={examId}
            examTitle={exam.title}
            examType={examTypeCookie as any}
            durationMinutes={exam.durationMinutes || 60}
            marksPerQuestion={exam.marksPerQuestion || 1}
            negativeMarking={exam.negativeMarking || 0}
            cdnUrl={exam.cdnUrl || null}
            randomize={exam.randomizeQuestions || false}
        />
    );
}
