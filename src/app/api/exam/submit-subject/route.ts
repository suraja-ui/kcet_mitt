import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const { studentId, subject, answers } = await request.json();

        // 1. Calculate Score
        let score = 0;
        const questionIds = answers.map((a: any) => a.questionId);
        const questions = await prisma.question.findMany({
            where: { id: { in: questionIds } }
        });

        const responseData = [];

        for (const ans of answers) {
            const q = questions.find(question => question.id === ans.questionId);
            if (q) {
                const isCorrect = ans.answer === q.correctOption;
                if (isCorrect) score += 1;
                responseData.push({
                    questionId: q.id,
                    answer: ans.answer,
                    isCorrect
                });
            }
        }

        // 2. Find or Create Result
        let result = await prisma.result.findFirst({
            where: { studentId }
        });

        if (!result) {
            result = await prisma.result.create({
                data: { studentId }
            });
        }

        // 3. Update Result with subject score
        const updateData: any = {};
        if (subject === 'Mathematics') updateData.marksMath = score;
        if (subject === 'Physics') updateData.marksPhy = score;
        if (subject === 'Chemistry') updateData.marksChem = score;

        const currentMath = subject === 'Mathematics' ? score : (result.marksMath || 0);
        const currentPhy = subject === 'Physics' ? score : (result.marksPhy || 0);
        const currentChem = subject === 'Chemistry' ? score : (result.marksChem || 0);
        updateData.totalMarks = currentMath + currentPhy + currentChem;

        await prisma.result.update({
            where: { id: result.id },
            data: updateData
        });

        // 4. Save Responses
        await prisma.response.deleteMany({
            where: {
                resultId: result.id,
                questionId: { in: questionIds }
            }
        });

        if (responseData.length > 0) {
            await prisma.response.createMany({
                data: responseData.map(r => ({
                    resultId: result!.id,
                    questionId: r.questionId,
                    answer: r.answer,
                    isCorrect: r.isCorrect
                }))
            });
        }

        return NextResponse.json({ success: true, score });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
