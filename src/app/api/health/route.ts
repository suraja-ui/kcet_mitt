import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // 1. Check ENV Presence (Sanitized)
        const envExists = !!process.env.DATABASE_URL;
        const envStart = process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : 'NONE';

        // 2. Try raw query
        const dbCheck = await prisma.$queryRaw`SELECT 1 as connected`;
        
        // 3. Check for Admin table
        const adminCount = await prisma.admin.count();

        return NextResponse.json({
            status: 'HEALTHY',
            database: 'CONNECTED',
            env: {
                present: envExists,
                starts_with: envStart
            },
            stats: {
                admins: adminCount
            }
        });
    } catch (error: any) {
        return NextResponse.json({
            status: 'UNHEALTHY',
            error: error.message,
            code: error.code,
            env_check: process.env.DATABASE_URL ? "PRESENT" : "MISSING"
        }, { status: 500 });
    }
}
