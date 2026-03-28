import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Expected structure: { examType: string, section: string, questions: [] }
        // Or generic list of questions

        let questionsToCreate = [];

        // Support both single object with metadata wrapper AND raw array
        if (Array.isArray(body)) {
            // Raw array - expect each object to have examType/subject
            questionsToCreate = body;
        } else if (body.questions && Array.isArray(body.questions)) {
            // Wrapper format
            const { examType, section } = body;
            questionsToCreate = body.questions.map((q: any) => ({
                ...q,
                examType: examType || q.examType || 'KCET',
                subject: section || q.subject || 'General'
            }));
        } else {
            return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
        }

        const createdQuestions = [];

        // Use transaction or Promise.all for bulk create
        // Prisma createMany is faster but create allows us to return IDs if needed, 
        // though createMany is better for bulk. 
        // SQLite/Postgres support createMany.

        const result = await prisma.question.createMany({
            data: questionsToCreate.map((q: any) => ({
                text: q.text,
                optionA: q.options[0],
                optionB: q.options[1],
                optionC: q.options[2],
                optionD: q.options[3],
                correctOption: typeof q.correctOption === 'number' 
                    ? ['A', 'B', 'C', 'D'][q.correctOption] || 'A' 
                    : (q.correctOption || 'A'),
                subject: q.subject,
                examType: q.examType
            }))
        });

        return NextResponse.json({ success: true, count: result.count });
    } catch (error) {
        console.error('Import error:', error);
        return NextResponse.json({ error: 'Failed to import questions' }, { status: 500 });
    }
}
