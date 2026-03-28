import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const examType = searchParams.get('examType') || 'KCET';
        const examId = searchParams.get('examId');
        const limit = parseInt(searchParams.get('limit') || '50');

        const whereClause = examId ? { examId } : { examType };

        // Note: Prisma doesn't support distinct on linked fields easily with orderBy
        const allResults: any[] = await (prisma as any).result.findMany({
            where: whereClause,
            include: {
                student: { select: { name: true, collegeName: true, pucRollNumber: true } },
                exam: { select: { title: true, examType: true } }
            },
            orderBy: [
                { totalMarks: 'desc' },
                { completedAt: 'asc' } // Tie breaker: earlier completion is better
            ],
        });

        // Keep only the best score for each student
        const seenStudents = new Set();
        const uniqueResults = [];
        for (const r of allResults) {
            if (!seenStudents.has(r.studentId)) {
                seenStudents.add(r.studentId);
                uniqueResults.push(r);
            }
            if (uniqueResults.length >= limit) break;
        }

        // Assign ranks
        let currentRank = 1;
        let prevScore = -1;
        const ranked = uniqueResults.map((r: any, i: number) => {
            if (r.totalMarks !== prevScore) {
                currentRank = i + 1;
                prevScore = r.totalMarks;
            }
            return {
                rank: currentRank,
                studentName: r.student?.name || 'Unknown',
                collegeName: r.student?.collegeName || '',
                rollNumber: r.student?.pucRollNumber || '',
                totalMarks: r.totalMarks,
                examType: r.examType,
                examTitle: r.exam?.title || null,
                completedAt: r.completedAt,
            };
        });

        return NextResponse.json({ examType, ranked });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
    }
}
