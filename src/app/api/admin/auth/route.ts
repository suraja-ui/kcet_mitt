import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        
        // Auto-seed first admin if DB is empty
        const count = await prisma.admin.count();
        if (count === 0) {
            const hashed = await bcrypt.hash('prep@KCET', 10);
            await prisma.admin.create({ data: { email: 'admin@prep2kcet.com', password: hashed } });
        }

        const admin = await prisma.admin.findUnique({ where: { email } });

        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const cookieStore = await cookies();
        cookieStore.set('adminId', admin.id, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 // 1 day
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("AUTH_ERROR:", error);
        return NextResponse.json({ 
            error: 'Server Error', 
            details: error.message,
            stack: error.stack 
        }, { status: 500 });
    }
}
