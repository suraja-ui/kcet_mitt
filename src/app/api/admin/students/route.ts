import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (id) {
            // First delete related records because cascading might not be set in schema
            // Responses are linked to Result, Result is linked to Student

            // Find all results for this student
            const results = await prisma.result.findMany({
                where: { studentId: id },
                select: { id: true }
            });

            const resultIds = results.map(r => r.id);

            // Delete responses for these results
            if (resultIds.length > 0) {
                await prisma.response.deleteMany({
                    where: { resultId: { in: resultIds } }
                });
            }

            // Delete results
            await prisma.result.deleteMany({
                where: { studentId: id }
            });

            // Finally delete the student
            await prisma.student.delete({ where: { id } });

            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Error deleting student' }, { status: 500 });
    }
}
