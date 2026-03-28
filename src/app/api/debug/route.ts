import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
    const results: any = {
        status: 'starting',
        env: process.env.NODE_ENV,
        hasDbUrl: !!process.env.DATABASE_URL,
        steps: []
    };

    try {
        // Step 1: Check Cookies
        results.steps.push('Checking cookies...');
        const cookieStore = await cookies();
        const adminId = cookieStore.get('adminId');
        results.cookies = {
            hasAdminId: !!adminId,
            val: adminId?.value ? 'REDACTED' : 'null'
        };
        results.steps.push('Cookies checked.');

        // Step 2: DB Connection
        results.steps.push('Connecting to DB...');
        const userCount = await prisma.admin.count();
        results.db = {
            connected: true,
            adminCount: userCount
        };
        results.steps.push('DB Connected.');

        // Step 3: Fetch Questions
        results.steps.push('Fetching questions...');
        const qCount = await prisma.question.count();
        results.questions = qCount;
        results.steps.push('Questions fetched.');

        results.status = 'success';
        return NextResponse.json(results);
    } catch (e: any) {
        console.error("Debug Error:", e);
        results.status = 'error';
        results.error = e.message;
        results.stack = e.stack;
        return NextResponse.json(results, { status: 500 });
    }
}
