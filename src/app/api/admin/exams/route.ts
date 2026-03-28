import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

// GET all exams
export async function GET() {
    try {
        const exams = await prisma.exam.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                _count: { select: { questions: true, results: true } }
            }
        });
        return NextResponse.json(exams);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to fetch exams' }, { status: 500 });
    }
}

// POST create exam
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, subject, topic, examType, difficulty, marksPerQuestion, negativeMarking, durationMinutes, isDemo, randomizeQuestions } = body;

        if (!title || !subject || !examType) {
            return NextResponse.json({ error: 'title, subject, examType required' }, { status: 400 });
        }

        const exam = await prisma.exam.create({
            data: {
                title,
                subject,
                topic: topic || null,
                examType,
                difficulty: difficulty || 'Medium',
                marksPerQuestion: marksPerQuestion ?? 1,
                negativeMarking: negativeMarking ?? 0,
                durationMinutes: durationMinutes ?? 60,
                isDemo: isDemo ?? false,
                randomizeQuestions: randomizeQuestions ?? false,
                isLive: false,
            }
        });

        return NextResponse.json(exam, { status: 201 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to create exam' }, { status: 500 });
    }
}
