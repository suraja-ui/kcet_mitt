import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST — bulk save extracted questions to an exam
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id: examId } = await params;
        const { questions } = await req.json();

        if (!Array.isArray(questions) || questions.length === 0) {
            return NextResponse.json({ error: 'Questions array required' }, { status: 400 });
        }

        const cleanStr = (s: any) => typeof s === 'string' ? s.replace(/\0/g, '') : s;

        const created = await prisma.examQuestion.createMany({
            data: questions.map((q: any, idx: number) => ({
                examId,
                text: cleanStr(q.text),
                imageUrl: q.imageUrl || null,
                optionA: cleanStr(q.optionA),
                optionB: cleanStr(q.optionB),
                optionC: cleanStr(q.optionC),
                optionD: cleanStr(q.optionD),
                correctOption: cleanStr(q.correctOption),
                subject: cleanStr(q.subject) || 'General',
                difficulty: cleanStr(q.difficulty) || 'Medium',
                orderIndex: idx,
            }))
        });

        return NextResponse.json({ count: created.count });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: String(e.message || e) }, { status: 500 });
    }
}

// GET — fetch questions for an exam
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id: examId } = await params;
        const questions = await prisma.examQuestion.findMany({
            where: { examId },
            orderBy: { orderIndex: 'asc' }
        });
        return NextResponse.json(questions);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
    }
}

// DELETE a specific exam question
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { searchParams } = new URL(req.url);
        const questionId = searchParams.get('questionId');
        if (!questionId) return NextResponse.json({ error: 'questionId required' }, { status: 400 });
        await prisma.examQuestion.delete({ where: { id: questionId } });
        return NextResponse.json({ success: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to delete question' }, { status: 500 });
    }
}

// PATCH - update/upsert multiple questions
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id: examId } = await params;
        const { questions } = await req.json();

        const cleanStr = (s: any) => typeof s === 'string' ? s.replace(/\0/g, '') : s;

        for (let idx = 0; idx < questions.length; idx++) {
            const q = questions[idx];
            const data = {
                text: cleanStr(q.text),
                imageUrl: q.imageUrl || null,
                optionA: cleanStr(q.optionA),
                optionB: cleanStr(q.optionB),
                optionC: cleanStr(q.optionC),
                optionD: cleanStr(q.optionD),
                correctOption: cleanStr(q.correctOption),
                subject: cleanStr(q.subject) || 'General',
                difficulty: cleanStr(q.difficulty) || 'Medium',
                orderIndex: idx,
            };

            if (q.id && !q.id.startsWith('new_')) {
                await prisma.examQuestion.update({ where: { id: q.id }, data });
            } else {
                await prisma.examQuestion.create({ data: { ...data, examId } });
            }
        }
        return NextResponse.json({ success: true });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: String(e.message || e) }, { status: 500 });
    }
}
