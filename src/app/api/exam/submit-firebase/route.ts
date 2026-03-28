// src/app/api/exam/submit-firebase/route.ts
// High-performance, cache-optimized exam submission endpoint
// Uses Firestore for answer lookup (cached in-memory), saves to both Firestore + Prisma

import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { prisma } from '@/lib/prisma';

// In-memory answer cache — persists across warm serverless invocations
// This is the key optimization for 1000 concurrent users: no DB round-trip after first load
const answerCache: Record<string, {
    correctAnswers: Array<{ id: string; correct: string }>;
    marksPerQuestion: number;
    negativeMarking: number;
    cachedAt: number;
}> = {};

const CACHE_TTL_MS = 5 * 60 * 1000; // 5-minute cache TTL

async function getAnswerKey(examId: string) {
    const now = Date.now();
    const cached = answerCache[examId];

    if (cached && now - cached.cachedAt < CACHE_TTL_MS) {
        return cached;
    }

    // Fetch from Firestore (answers are NEVER in CDN JSON)
    const doc = await adminDb.collection('examAnswers').doc(examId).get();
    if (!doc.exists) throw new Error(`Answer key not found for exam: ${examId}`);

    const data = doc.data()!;
    const entry = {
        correctAnswers: data.correctAnswers,
        marksPerQuestion: data.marksPerQuestion ?? 1,
        negativeMarking: data.negativeMarking ?? 0,
        cachedAt: now,
    };
    answerCache[examId] = entry;
    return entry;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            studentId,
            examId,
            examType,
            answers,            // { [questionId]: 'A' | 'B' | 'C' | 'D' }
            tabSwitchCount,
            timeTakenSeconds,
        } = body;

        if (!studentId || !examId || !answers) {
            return NextResponse.json({ error: 'studentId, examId, answers required' }, { status: 400 });
        }

        // 1. Check if student already submitted this exam (one-attempt lock)
        const lockDoc = await adminDb
            .collection('submissions')
            .doc(`${examId}_${studentId}`)
            .get();

        if (lockDoc.exists) {
            return NextResponse.json({ 
                error: 'already_submitted', 
                score: lockDoc.data()!.score 
            }, { status: 409 });
        }

        // 2. Load answer key (cached after first user in this serverless instance)
        const { correctAnswers, marksPerQuestion, negativeMarking } = await getAnswerKey(examId);

        // 3. Score the exam
        let totalMarks = 0;
        const sectionScores: Record<string, number> = {};
        const responseRecords: Array<{ questionId: string; answer: string | null; isCorrect: boolean }> = [];

        for (const { id: questionId, correct } of correctAnswers) {
            const userAnswer = answers[questionId] ?? null;
            const isCorrect = userAnswer === correct;

            responseRecords.push({ questionId, answer: userAnswer, isCorrect });

            // Get subject from Prisma (only needed for section breakdown)
            // We batch this later — keep the hot path fast
            if (isCorrect) {
                totalMarks += marksPerQuestion;
            } else if (userAnswer !== null && negativeMarking > 0) {
                totalMarks -= negativeMarking;
            }
        }

        const finalScore = Math.max(0, totalMarks); // No negative total

        // 4. Write one-attempt lock + result to Firestore atomically (fast, fire-and-forget aware)
        const submissionRef = adminDb.collection('submissions').doc(`${examId}_${studentId}`);
        await submissionRef.set({
            studentId,
            examId,
            examType: examType || 'KCET',
            score: finalScore,
            totalQuestions: correctAnswers.length,
            tabSwitchCount: tabSwitchCount ?? 0,
            timeTakenSeconds: timeTakenSeconds ?? 0,
            submittedAt: new Date().toISOString(),
        });

        // 5. Also write to Firestore leaderboard collection (for real-time leaderboard)
        await adminDb.collection('leaderboard').doc(`${examId}_${studentId}`).set({
            studentId,
            examId,
            examType: examType || 'KCET',
            score: finalScore,
            submittedAt: new Date().toISOString(),
        });

        // 6. Also persist to Prisma (for admin dashboard, CSV export, etc.) — async
        try {
            await (prisma as any).result.create({
                data: {
                    studentId,
                    examId: examId || null,
                    examType: examType || 'KCET',
                    totalMarks: Math.round(finalScore),
                    tabSwitchCount: tabSwitchCount ?? 0,
                    completedAt: new Date(),
                    sectionScores: sectionScores,
                    examResponses: {
                        create: responseRecords.map((r) => ({
                            examQuestionId: r.questionId,
                            answer: r.answer,
                            isCorrect: r.isCorrect,
                        })),
                    },
                }
            });
        } catch (prismaErr) {
            // Prisma failure should not block the response — student already has score
            console.error('Prisma backup failed (non-critical):', prismaErr);
        }

        return NextResponse.json({ 
            success: true, 
            score: finalScore,
            totalQuestions: correctAnswers.length,
        });

    } catch (error: any) {
        console.error('Firebase submit error:', error);
        return NextResponse.json({ error: String(error.message) }, { status: 500 });
    }
}
