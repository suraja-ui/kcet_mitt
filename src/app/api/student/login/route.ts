import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, parentMobile, collegeName, pucRollNumber } = body;

        // Basic validation
        if (!name || !parentMobile || !collegeName || !pucRollNumber) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const student = await prisma.student.upsert({
            where: { pucRollNumber },
            update: { name, parentMobile, collegeName },
            create: {
                name,
                parentMobile,
                collegeName,
                pucRollNumber,
            },
        });

        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set('studentId', student.id, { httpOnly: true, path: '/' });

        return NextResponse.json({ success: true, studentId: student.id });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
