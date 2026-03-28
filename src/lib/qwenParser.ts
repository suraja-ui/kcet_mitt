import sharp from 'sharp';

export type MCQ = {
    text: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctOption: string;
    subject: string;
    difficulty: string;
    imageUrl?: string | null;
    diagramBox?: number[] | null; // [ymin, xmin, ymax, xmax] relative to 0-1000
};

const INVOKE_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const API_KEY = "Bearer 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";

const PROMPT = `
You are an expert exam question parser.
Your task is to extract all Multiple Choice Questions (MCQs) from the provided document or image.

STRICT INSTRUCTIONS:
1. **KEY ANSWERS**: 
   - Look for an "Answer Key" at the end of the text.
   - Look for inline answers like "(Ans: A)", "[C]", or bolded options.
   - **CRITICAL**: If no answer is provided in the text, use your own expert subject knowledge (Physics, Chemistry, Math, MBA, MCA) to solve the question and provide the 'correctOption'. NEVER leave 'correctOption' blank.
2. **DIAGRAMS & AREA**: For EVERY question, provide a "diagramBox": [x1, y1, x2, y2] as relative coordinates (0-1000).
   - This box MUST cover the **entire rectangular area** of the question from start to finish (including its text, formulas, and diagrams).
   - x1, y1 is top-left; x2, y2 is bottom-right.
3. **TEXT**: Perform high-quality OCR for the question text and mathematical formulas. Replace complex formatting with clean text.
4. **FORMAT**: Output ONLY a JSON array of objects. No intro/outro text.
5. **JSON KEYS**: "text", "optionA", "optionB", "optionC", "optionD", "correctOption", "subject", "difficulty", "diagramBox".

Output strictly valid JSON.
`;

export async function parseWithQwen(
    textContext: string,
    imageBase64?: string,
    mimeType?: string
): Promise<MCQ[]> {
    // IMAGE HANDLING: If an image is provided, we process it as a single unit with cropping support
    if (imageBase64 && mimeType) {
        const questions = await invokeQwen(textContext, imageBase64, mimeType);
        
        // CROP DIAGRAMS if bounding boxes are present
        const imgBuffer = Buffer.from(imageBase64, 'base64');
        const { width, height } = await sharp(imgBuffer).metadata();
        
        if (width && height) {
            for (const q of questions) {
                if (q.diagramBox && q.diagramBox.length === 4) {
                    try {
                        // [x1, y1, x2, y2] relative to 0-1000
                        const [x1, y1, x2, y2] = q.diagramBox;
                        
                        // Normalized validation
                        const leftRaw = Math.min(x1, x2);
                        const topRaw = Math.min(y1, y2);
                        const rightRaw = Math.max(x1, x2);
                        const bottomRaw = Math.max(y1, y2);

                        // Add 10% padding for better visibility
                        const padX = (rightRaw - leftRaw) * 0.05;
                        const padY = (bottomRaw - topRaw) * 0.05;

                        const left = Math.round(Math.max(0, (leftRaw - padX) / 1000) * width);
                        const top = Math.round(Math.max(0, (topRaw - padY) / 1000) * height);
                        const right = Math.round(Math.min(1000, (rightRaw + padX) / 1000) * width);
                        const bottom = Math.round(Math.min(1000, (bottomRaw + padY) / 1000) * height);

                        const w = right - left;
                        const h = bottom - top;
                        
                        // Ensure minimal valid crop and ignore outliers
                        if (w > 20 && h > 20 && w < width && h < height) {
                            const cropped = await sharp(imgBuffer)
                                .extract({ left, top, width: w, height: h })
                                .toBuffer();
                            q.imageUrl = `data:${mimeType};base64,${cropped.toString('base64')}`;
                        }
                    } catch (e) {
                        console.error("Cropping failed for question:", e);
                    }
                }
            }
        }
        return questions;
    }

    // TEXT ONLY: Parallelize for speed
    if (textContext && textContext.length > 5000) {
        const chunks: string[] = [];
        let cur = 0;
        while (cur < textContext.length) {
            let next = Math.min(cur + 5000, textContext.length);
            if (next < textContext.length) {
                const br = textContext.lastIndexOf('\n', next);
                if (br > cur) next = br;
            }
            chunks.push(textContext.substring(cur, next).trim());
            cur = next;
        }

        const batchSize = 3;
        const totalResults: MCQ[] = [];
        for (let i = 0; i < chunks.length; i += batchSize) {
            const batch = chunks.slice(i, i + batchSize);
            const batchResults = await Promise.all(
                batch.map(chunk => invokeQwen(chunk))
            );
            totalResults.push(...batchResults.flat());
        }
        return totalResults;
    }

    return invokeQwen(textContext);
}

async function invokeQwen(
    text?: string,
    base64?: string,
    mime?: string
): Promise<MCQ[]> {
    try {
        const contentArray: any[] = [{ type: "text", text: PROMPT }];
        if (text) contentArray.push({ type: "text", text: `DOCUMENT CHUNK:\n${text}` });
        if (base64 && mime) {
            contentArray.push({
                type: "image_url",
                image_url: { url: `data:${mime};base64,${base64}` }
            });
        }

        const res = await fetch(INVOKE_URL, {
            method: "POST",
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                model: "qwen/qwen3.5-122b-a10b",
                messages: [{ role: "user", content: contentArray }],
                max_tokens: 4096,
                temperature: 0.1,
                top_p: 0.95,
            })
        });

        if (!res.ok) return [];

        const data = await res.json();
        const reply = data.choices[0]?.message?.content || "[]";
        
        let clean = reply.trim();
        if (clean.includes('```')) {
            const match = clean.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            if (match) clean = match[1];
        }

        const json = JSON.parse(clean.trim());
        return Array.isArray(json) ? json : [];
    } catch (e) {
        console.error("Qwen chunk error:", e);
        return [];
    }
}
