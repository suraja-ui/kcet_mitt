import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import ExamClient from './ExamClient';

export default async function ExamPage() {
    const cookieStore = await cookies();
    const studentId = cookieStore.get('studentId')?.value;

    if (!studentId) {
        redirect('/login');
    }

    // Fetch questions for each subject to ensure specific order: Physics, Chemistry, Math
    const physicsQ = await prisma.question.findMany({ where: { subject: 'Physics' } });
    const chemistryQ = await prisma.question.findMany({ where: { subject: 'Chemistry' } });
    const mathQ = await prisma.question.findMany({ where: { subject: 'Mathematics' } });

    // Combine them into one single array
    const rawQuestions = [...physicsQ, ...chemistryQ, ...mathQ];

    // Transform for client
    const questions = rawQuestions.map(q => ({
        id: q.id,
        text: q.text,
        options: [q.optionA, q.optionB, q.optionC, q.optionD],
        correctOption: (q.correctOption.charCodeAt(0) - 'A'.charCodeAt(0)), // Convert 'A'->0
        subject: q.subject
    }));

    // Pass data to Client Component
    return <ExamClient questions={questions} studentId={studentId} />;
}
