import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Basic validation could go here
        const q = await prisma.question.create({
            data: {
                text: body.text,
                optionA: body.optionA,
                optionB: body.optionB,
                optionC: body.optionC,
                optionD: body.optionD,
                correctOption: body.correctOption,
                subject: body.subject,
                examType: body.examType || 'KCET'
            }
        });
        return NextResponse.json({ ...q, createdAt: q.createdAt.toISOString() });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Error creating question' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (id) {
            await prisma.question.delete({ where: { id } });
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Error deleting question' }, { status: 500 });
    }
}
