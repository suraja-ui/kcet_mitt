import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { studentId, marksPhy, marksChem, marksMath, totalMarks } = body;

        if (!studentId) {
            return NextResponse.json({ error: 'Student ID required' }, { status: 400 });
        }

        const result = await prisma.result.create({
            data: {
                studentId,
                marksPhy,
                marksChem,
                marksMath,
                totalMarks,
                completedAt: new Date(),
            }
        });

        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error('Submit error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
