import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function ResultPage() {
    const cookieStore = await cookies();
    const studentId = cookieStore.get('studentId')?.value;

    if (!studentId) redirect('/login');

    const student = await prisma.student.findUnique({
        where: { id: studentId },
        include: {
            results: {
                orderBy: { completedAt: 'desc' },
                take: 1,
            },
        },
    });

    if (!student || student.results.length === 0) {
        redirect('/exam');
    }

    const result = student.results[0];

    const subjects = [
        { name: 'Physics', score: result.marksPhy },
        { name: 'Chemistry', score: result.marksChem },
        { name: 'Mathematics', score: result.marksMath },
    ];

    const totalScore = result.totalMarks;
    const percentage = Math.round((totalScore / 180) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#061A30] via-[#0B3A66] to-[#0E4C85] px-6 py-12">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12 space-y-12">

                {/* HEADER */}
                <header className="text-center space-y-3">
                    <h1 className="text-4xl font-extrabold tracking-wide text-[#0B3A66]">
                        MAHARAJA INSTITUTE OF TECHNOLOGY
                    </h1>
                    <h2 className="text-xl font-bold text-[#FF9F1C] tracking-widest">
                        THANDAVAPURA
                    </h2>
                    <p className="text-sm uppercase tracking-widest text-slate-500">
                        Examination Analytics & Digital Records
                    </p>
                </header>

                {/* STUDENT DETAILS */}
                <section className="border rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-[#0B3A66] mb-6">
                        Candidate Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-base leading-loose">
                        <InfoRow label="Candidate Name" value={student.name} />
                        <InfoRow label="Roll Number" value={student.pucRollNumber} />
                        <InfoRow label="Assessment" value="KCET Mock 2026" />
                        <InfoRow label="Maximum Marks" value="180" />
                    </div>
                </section>

                {/* SCORE + SUBJECTS */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* SCORE CARD */}
                    <div className="bg-gradient-to-br from-[#0B3A66] to-[#061A30] rounded-2xl p-10 text-white flex flex-col items-center justify-center space-y-4">
                        <p className="uppercase text-sm tracking-widest opacity-80">
                            Cumulative Score
                        </p>

                        <div className="text-7xl font-extrabold">
                            {totalScore}
                        </div>

                        <p className="text-sm opacity-80">
                            Out of 180
                        </p>

                        <div className="mt-4 px-12 py-4 bg-[#FF9F1C] text-[#0B3A66] rounded-full text-2xl font-bold shadow-lg">
                            {percentage}%
                        </div>
                    </div>

                    {/* SUBJECT PERFORMANCE */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-[#0B3A66]">
                            Subject-wise Performance
                        </h3>

                        {subjects.map((sub) => (
                            <div key={sub.name} className="space-y-2">
                                <div className="flex justify-between text-base font-medium text-[#0B3A66]">
                                    <span>{sub.name}</span>
                                    <span className="text-slate-500">
                                        {sub.score} / 60
                                    </span>
                                </div>

                                <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#0B3A66] via-[#1E90FF] to-[#00C6FF]"
                                        style={{ width: `${(sub.score / 60) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-500">
                        © 2026 Maharaja Institute of Technology Thandavapura
                    </p>

                    <a
                        href="https://mitt.edu.in/"
                        target="_blank"
                        className="px-10 py-4 bg-gradient-to-r from-[#FF9F1C] to-[#FFB347] text-[#0B3A66] font-bold rounded-xl shadow-xl hover:scale-105 transition"
                    >
                        Visit Official MITT Website
                    </a>
                </footer>

            </div>
        </div>
    );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between border-b pb-2">
            <span className="text-slate-500">{label}</span>
            <span className="font-semibold text-[#0B3A66]">{value}</span>
        </div>
    );
}
