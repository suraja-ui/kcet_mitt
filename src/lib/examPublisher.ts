// src/lib/examPublisher.ts
// Publishes exam questions to Vercel Blob CDN, answers to Firestore
// Falls back gracefully if BLOB_READ_WRITE_TOKEN is not yet configured

import { adminDb } from './firebaseAdmin';
import { prisma } from './prisma';

export async function publishExamToVercelBlob(examId: string): Promise<{ cdnUrl: string }> {
    const exam = await (prisma as any).exam.findUnique({
        where: { id: examId },
        include: { questions: { orderBy: { orderIndex: 'asc' } } }
    });

    if (!exam) throw new Error('Exam not found');

    // CDN-safe questions — NO correctOption
    const questionsForCDN = exam.questions.map((q: any, idx: number) => ({
        id: q.id,
        index: idx,
        q: q.text,
        imageUrl: q.imageUrl || null,
        options: [q.optionA, q.optionB, q.optionC, q.optionD],
        subject: q.subject,
    }));

    const cdnPayload = JSON.stringify({
        examId: exam.id,
        title: exam.title,
        examType: exam.examType,
        duration: exam.durationMinutes * 60,
        marksPerQuestion: exam.marksPerQuestion,
        negativeMarking: exam.negativeMarking,
        randomize: exam.randomizeQuestions || false,
        version: Date.now(),
        questions: questionsForCDN,
    });

    let cdnUrl = '';

    // Upload to Vercel Blob if token is available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
        const { put } = await import('@vercel/blob');
        const blob = await put(`exams/${examId}.json`, cdnPayload, {
            access: 'public',
            contentType: 'application/json',
            addRandomSuffix: false,
        });
        cdnUrl = blob.url;
        console.log(`✅ Questions uploaded to Vercel Blob CDN: ${cdnUrl}`);
    } else {
        // Fallback: no CDN, ExamClient will load from Prisma
        console.warn('⚠️  BLOB_READ_WRITE_TOKEN not set — questions not uploaded to CDN. ExamClient will fall back to Prisma loading.');
    }

    // Always store answer key in Firestore (server-side only)
    const correctAnswers = exam.questions.map((q: any) => ({
        id: q.id,
        correct: q.correctOption,
    }));

    await adminDb.collection('examAnswers').doc(examId).set({
        examId,
        correctAnswers,
        marksPerQuestion: exam.marksPerQuestion,
        negativeMarking: exam.negativeMarking,
        updatedAt: new Date().toISOString(),
    });

    console.log(`✅ Answer key stored in Firestore for exam: ${examId}`);
    return { cdnUrl };
}

export async function unpublishExamBlob(examId: string): Promise<void> {
    if (!process.env.BLOB_READ_WRITE_TOKEN) return;
    try {
        const { put } = await import('@vercel/blob');
        await put(`exams/${examId}.json`, JSON.stringify({ examId, unpublished: true, questions: [] }), {
            access: 'public',
            contentType: 'application/json',
            addRandomSuffix: false,
        });
    } catch { /* non-critical */ }
}
