import { NextResponse } from 'next/server';
import { parseWithQwen } from '@/lib/qwenParser';

// ─────────────────────────────────────────────────────────────────────────────
// MCQ PARSER — handles all common question-paper formats
// ─────────────────────────────────────────────────────────────────────────────

type MCQ = {
    text: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctOption: string;
    subject: string;
    difficulty: string;
};

function normalizeText(raw: string): string {
    return raw
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        // Collapse excessive blank lines
        .replace(/\n{3,}/g, '\n\n')
        // Remove page numbers like "Page 1 of 10" or standalone numbers on a line
        .replace(/^\s*Page\s+\d+.*$/gim, '')
        .trim();
}

/**
 * Strips common question number prefixes:
 * "1.", "Q1.", "Q.1", "1)", "Question 1.", "Q 1."
 * Excludes "(1)" to avoid conflicting with option numbers.
 */
function stripQNum(line: string): string {
    return line
        .replace(/^\s*(?:Question\s+|Q\s*\.?)?\s*(\d+)\s*[\.\)]\s*/i, '')
        .trim();
}

const OPTION_MAP: Record<string, string> = {
    '1': 'A', '2': 'B', '3': 'C', '4': 'D'
};

function normalizeOptionLetter(letter: string): string {
    const l = letter.toUpperCase();
    return OPTION_MAP[l] || l;
}

/**
 * Strips option prefixes:
 * "A)", "(A)", "A.", "a)", "(a)", "(A.", "(1)", "1.", "1)"
 */
function stripOptPrefix(line: string): string {
    return line
        .replace(/^\s*\(?([A-Da-d1-4])[\.\)]\s*/i, '')
        .trim();
}

/**
 * Parse an answer key section at the end of the document.
 * Supports formats like:
 *   "1. B   2. C   3. A"
 *   "1-B, 2-C, 3-A"
 *   "Ans 1: B"
 */
function parseAnswerKey(text: string): Map<number, string> {
    const key = new Map<number, string>();

    // Format: "1. B" or "1) B" or "1-B" or "1:B" with optional comma/space separator
    const pattern1 = /(\d+)\s*[.\-\)\:]\s*([A-Da-d])\b/g;
    let m: RegExpExecArray | null;
    while ((m = pattern1.exec(text)) !== null) {
        key.set(parseInt(m[1]), m[2].toUpperCase());
    }

    return key;
}

/**
 * Detect if a line looks like an MCQ option (starts with A/B/C/D or 1/2/3/4 prefix)
 */
function isOptionLine(line: string): boolean {
    return /^\s*\(?[A-Da-d1-4][\.\)]\s*.+/.test(line);
}

/**
 * Detect if a line looks like a question start (starts with numbering)
 */
function isQuestionLine(line: string): boolean {
    return /^\s*(?:Question\s+|Q\s*\.?)?\s*\d+\s*[\.\)]/i.test(line);
}

/**
 * Detect answer key line embedded in question blocks
 * e.g. "Answer: B", "Ans: C", "Correct: D", "Key: A"
 */
function getInlineAnswer(line: string): string | null {
    const m = line.match(/^\s*(?:answer|ans(?:wer)?|correct\s*(?:answer)?|key)\s*[:\-]?\s*\(?([A-Da-d])\)?/i);
    return m ? m[1].toUpperCase() : null;
}

function extractMCQsFromText(raw: string): MCQ[] {
    const text = normalizeText(raw);
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    // ── Strategy 1: Detect a separate "Answer Key" section ──────────────────
    let answerKeySection = '';
    let contentSection = text;

    const answerKeyIdx = text.search(/\n\s*(?:answer\s*key|answers?|key\s*sheet|solutions?)\s*\n/i);
    if (answerKeyIdx !== -1) {
        contentSection = text.slice(0, answerKeyIdx);
        answerKeySection = text.slice(answerKeyIdx);
    }

    const globalAnswerKey = answerKeySection ? parseAnswerKey(answerKeySection) : new Map<number, string>();

    // ── Strategy 2: Line-by-line state machine parser ────────────────────────
    const questions = parseLineByLine(contentSection.split('\n').map(l => l.trim()).filter(Boolean), globalAnswerKey);

    if (questions.length > 0) return questions;

    // ── Strategy 3: Paragraph-block parser (fallback) ────────────────────────
    return parseParagraphBlocks(text, globalAnswerKey);
}

function parseLineByLine(lines: string[], answerKey: Map<number, string>): MCQ[] {
    const questions: MCQ[] = [];

    let qNum = 0;
    let qText = '';
    let opts: Record<string, string> = {};
    let inlineAnswer = '';
    let collectingQ = false;

    const flush = () => {
        if (!qText || !opts['A'] || !opts['B'] || !opts['C'] || !opts['D']) return;

        // Resolve answer: inline > answer key > default 'A'
        let correct = inlineAnswer || answerKey.get(qNum) || 'A';
        correct = correct.toUpperCase();
        if (!['A', 'B', 'C', 'D'].includes(correct)) correct = 'A';

        questions.push({
            text: qText.replace(/\s+/g, ' ').trim(),
            optionA: opts['A'],
            optionB: opts['B'],
            optionC: opts['C'],
            optionD: opts['D'],
            correctOption: correct,
            subject: 'General',
            difficulty: 'Medium',
        });

        qText = '';
        opts = {};
        inlineAnswer = '';
        collectingQ = false;
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for new question start
        if (isQuestionLine(line)) {
            flush(); // save previous question
            const numMatch = line.match(/\d+/);
            qNum = numMatch ? parseInt(numMatch[0]) : qNum + 1;
            qText = stripQNum(line);
            collectingQ = true;
            continue;
        }

        if (!collectingQ) continue;

        // Option line
        if (isOptionLine(line)) {
            const letterMatch = line.match(/^\s*\(?([A-Da-d1-4])[\.\)]/i)?.[1]?.toUpperCase();
            if (letterMatch) {
                opts[normalizeOptionLetter(letterMatch)] = stripOptPrefix(line);
            }
            continue;
        }

        // Inline answer line
        const ans = getInlineAnswer(line);
        if (ans) {
            inlineAnswer = ans;
            continue;
        }

        // Continuation of question text (before any options are found)
        if (Object.keys(opts).length === 0 && qText && line.length > 3) {
            qText += ' ' + line;
        }
    }

    flush(); // don't forget the last question
    return questions;
}

function parseParagraphBlocks(text: string, answerKey: Map<number, string>): MCQ[] {
    const questions: MCQ[] = [];

    // Split on question number boundaries
    const blocks = text.split(/\n(?=\s*(?:Question\s+|Q\s*\.?)?\s*\d+\s*[\.\)])/i).filter(b => b.trim().length > 30);

    for (const block of blocks) {
        const blockLines = block.split('\n').map(l => l.trim()).filter(Boolean);
        if (blockLines.length < 3) continue;

        const numMatch = blockLines[0].match(/\d+/);
        const qNum = numMatch ? parseInt(numMatch[0]) : 0;
        const qText = stripQNum(blockLines[0]);
        if (!qText || qText.length < 5) continue;

        const opts: Record<string, string> = {};
        let inlineAnswer = '';
        let extraQText = qText;

        for (const line of blockLines.slice(1)) {
            if (isOptionLine(line)) {
                const letterMatch = line.match(/^\s*\(?([A-Da-d1-4])[\.\)]/i)?.[1]?.toUpperCase();
                if (letterMatch) {
                    opts[normalizeOptionLetter(letterMatch)] = stripOptPrefix(line);
                }
                continue;
            }
            const ans = getInlineAnswer(line);
            if (ans) { inlineAnswer = ans; continue; }
            // Multi-line question text before options
            if (Object.keys(opts).length === 0 && line.length > 3) {
                extraQText += ' ' + line;
            }
        }

        if (!opts['A'] || !opts['B'] || !opts['C'] || !opts['D']) continue;

        let correct = inlineAnswer || answerKey.get(qNum) || 'A';
        correct = correct.toUpperCase();
        if (!['A', 'B', 'C', 'D'].includes(correct)) correct = 'A';

        questions.push({
            text: extraQText.replace(/\s+/g, ' ').trim(),
            optionA: opts['A'],
            optionB: opts['B'],
            optionC: opts['C'],
            optionD: opts['D'],
            correctOption: correct,
            subject: 'General',
            difficulty: 'Medium',
        });
    }

    return questions;
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTE HANDLER
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const fileName = file.name.toLowerCase();
        const buffer = Buffer.from(await file.arrayBuffer());
        
        let extractedText = '';
        let base64Image = '';
        let mimeType = '';

        if (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) {
            base64Image = buffer.toString('base64');
            mimeType = fileName.endsWith('.png') ? 'image/png' : 'image/jpeg';
        } else if (fileName.endsWith('.pdf')) {
            try {
                // pdf-parse library
                const { PDFParse } = require('pdf-parse');
                // Create an instance of the parser
                const parser = new PDFParse({ data: buffer });
                const pdfData = await parser.getText();
                extractedText = pdfData.text || '';
                
                // If text is very short or missing, it might be a scanned PDF
                if (extractedText.trim().length < 50) {
                     // We could use pdf-export-images to extract the first page image here
                     // But for now, let's at least acknowledge the limitation
                     console.warn('PDF extracted text is very short. Scanned PDF?');
                }
            } catch (pdfErr: any) {
                return NextResponse.json({ error: `PDF parsing failed: ${pdfErr.message}` }, { status: 500 });
            }
        } else if (fileName.endsWith('.docx') || fileName.endsWith('.doc')) {
            try {
                const mammoth = require('mammoth');
                const result = await mammoth.extractRawText({ buffer });
                extractedText = result.value;
            } catch (docErr: any) {
                return NextResponse.json({ error: `DOCX parsing failed: ${docErr.message}` }, { status: 500 });
            }
        } else if (fileName.endsWith('.txt')) {
            extractedText = buffer.toString('utf-8');
        } else {
            return NextResponse.json({ error: 'Unsupported file type. Use PDF, DOCX, TXT, PNG, or JPG.' }, { status: 400 });
        }

        if (!extractedText.trim() && !base64Image) {
            return NextResponse.json({ error: 'No content found in the file to process.' }, { status: 400 });
        }

        // First attempt AI parsing
        const questions = await parseWithQwen(extractedText, base64Image, mimeType);

        if (!questions || questions.length === 0) {
            // Fallback to basic regex parser if Qwen fails or returns empty array
            console.log("Qwen returned 0 questions, falling back to regex parser.");
            if (extractedText) {
                const fallbackQ = extractMCQsFromText(extractedText);
                return NextResponse.json({
                    success: true,
                    count: fallbackQ.length,
                    questions: fallbackQ,
                    rawTextPreview: extractedText.substring(0, 800),
                });
            } else {
                return NextResponse.json({ error: 'Failed to extract questions from image.' }, { status: 400 });
            }
        }

        return NextResponse.json({
            success: true,
            count: questions.length,
            questions,
            rawTextPreview: extractedText.substring(0, 800) || "Image processed via Multimodal Integration",
        });
    } catch (e: any) {
        console.error('Upload error:', e);
        return NextResponse.json({ error: e.message || 'Processing failed' }, { status: 500 });
    }
}
