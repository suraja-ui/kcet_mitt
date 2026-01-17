import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import * as bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const admin = await prisma.admin.findUnique({ where: { email } });

        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const cookieStore = await cookies();
        cookieStore.set('adminId', admin.id, { httpOnly: true, path: '/' });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error' }, { status: 500 });
    }
}
