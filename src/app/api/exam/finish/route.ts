import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            studentId,
            examId,
            examType,
            totalMarks,
            marksPhy,
            marksChem,
            marksMath,
            sectionScores,
            responses,
            tabSwitchCount
        } = body;

        if (!studentId) {
            return NextResponse.json({ error: 'Student ID required' }, { status: 400 });
        }

        // Build result record, linking to the admin exam if available
        const result = await (prisma as any).result.create({
            data: {
                studentId,
                examId: examId || null,
                examType: examType || 'KCET',
                marksPhy: marksPhy ?? 0,
                marksChem: marksChem ?? 0,
                marksMath: marksMath ?? 0,
                sectionScores: sectionScores ?? {},
                totalMarks: totalMarks ?? 0,
                tabSwitchCount: tabSwitchCount ?? 0,
                completedAt: new Date(),

                // Use ExamResponse for admin-published questions (ExamQuestion IDs)
                examResponses: examId && responses?.length > 0 ? {
                    create: responses.map((r: any) => ({
                        examQuestionId: r.questionId,
                        answer: r.answer ?? null,
                        isCorrect: r.isCorrect ?? false,
                    }))
                } : undefined,
            }
        });

        return NextResponse.json({ success: true, resultId: result.id });
    } catch (error: any) {
        console.error('Submit error:', error);
        return NextResponse.json({ error: String(error.message || error) }, { status: 500 });
    }
}
