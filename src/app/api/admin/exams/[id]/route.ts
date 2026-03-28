import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { publishExamToVercelBlob, unpublishExamBlob } from '@/lib/examPublisher';

// PATCH update exam (toggle live, edit config, add questions)
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await req.json();

        const updateData: any = {};
        if (body.title !== undefined) updateData.title = body.title;
        if (body.subject !== undefined) updateData.subject = body.subject;
        if (body.topic !== undefined) updateData.topic = body.topic;
        if (body.difficulty !== undefined) updateData.difficulty = body.difficulty;
        if (body.marksPerQuestion !== undefined) updateData.marksPerQuestion = body.marksPerQuestion;
        if (body.negativeMarking !== undefined) updateData.negativeMarking = body.negativeMarking;
        if (body.durationMinutes !== undefined) updateData.durationMinutes = body.durationMinutes;
        if (body.isDemo !== undefined) updateData.isDemo = body.isDemo;

        // Publish / unpublish — syncs Vercel Blob CDN + Firestore answers
        if (body.isLive !== undefined) {
            updateData.isLive = body.isLive;

            if (body.isLive) {
                updateData.publishedAt = new Date();
                // Push questions JSON to Vercel Blob CDN + answers to Firestore
                try {
                    const { cdnUrl } = await publishExamToVercelBlob(id);
                    updateData.cdnUrl = cdnUrl;
                    console.log(`✅ Exam ${id} published to Vercel Blob CDN: ${cdnUrl}`);
                } catch (err) {
                    console.error('CDN publish failed (continuing — exam still goes live):', err);
                }
            } else {
                updateData.publishedAt = null;
                updateData.cdnUrl = null;
                try { await unpublishExamBlob(id); } catch {}
            }
        }

        const exam = await prisma.exam.update({ where: { id }, data: updateData });
        return NextResponse.json(exam);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to update exam' }, { status: 500 });
    }
}

// DELETE exam
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await prisma.exam.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to delete exam' }, { status: 500 });
    }
}
