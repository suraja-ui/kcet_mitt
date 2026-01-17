'use client';

import { useState } from 'react';

export default function DashboardClient({
    initialStudents,
    initialQuestions,
}: {
    initialStudents: any[];
    initialQuestions: any[];
}) {
    const [activeTab, setActiveTab] = useState<'students' | 'questions'>('students');
    const [students, setStudents] = useState(initialStudents);
    const [questions, setQuestions] = useState(initialQuestions);

    const downloadCSV = () => {
        const headers = ['Name', 'Roll No', 'College', 'Mobile', 'Math', 'Physics', 'Chemistry', 'Total'];
        const rows = students.map((s) => {
            const r = s.results[0] || {};
            return [
                s.name,
                s.pucRollNumber,
                s.collegeName,
                s.parentMobile,
                r.marksMath || 0,
                r.marksPhy || 0,
                r.marksChem || 0,
                r.totalMarks || 0,
            ];
        });

        const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const link = document.createElement('a');
        link.href = encodeURI(csv);
        link.download = 'mitt_student_results.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg)]">

            {/* HEADER */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="container flex items-center justify-between py-4">
                    <div>
                        <h1 className="text-xl font-extrabold text-[var(--color-primary)]">
                            MITT Admin Dashboard
                        </h1>
                        <p className="text-xs text-slate-500 font-medium">
                            Assessment & Results Management
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab('students')}
                            className={`btn ${activeTab === 'students' ? 'btn-primary' : 'btn-outline'}`}
                        >
                            Student Results
                        </button>
                        <button
                            onClick={() => setActiveTab('questions')}
                            className={`btn ${activeTab === 'questions' ? 'btn-primary' : 'btn-outline'}`}
                        >
                            Question Bank
                        </button>
                    </div>
                </div>
            </header>

            {/* CONTENT */}
            <main className="container py-10">

                {/* STATS */}
                <div className="grid md:grid-cols-4 gap-6 mb-10">
                    <StatCard label="Total Students" value={students.length} />
                    <StatCard label="Math Questions" value={questions.filter(q => q.subject === 'Mathematics').length} />
                    <StatCard label="Physics Questions" value={questions.filter(q => q.subject === 'Physics').length} />
                    <StatCard label="Chemistry Questions" value={questions.filter(q => q.subject === 'Chemistry').length} />
                </div>

                {/* STUDENTS TAB */}
                {activeTab === 'students' && (
                    <div className="card p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-[var(--color-primary)]">
                                Student Results
                            </h2>
                            <button onClick={downloadCSV} className="btn btn-accent">
                                Download CSV
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-600 uppercase text-xs tracking-wider">
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Roll No</th>
                                        <th className="p-3 text-left">College</th>
                                        <th className="p-3 text-left">Mobile</th>
                                        <th className="p-3 text-center">Math</th>
                                        <th className="p-3 text-center">Phy</th>
                                        <th className="p-3 text-center">Chem</th>
                                        <th className="p-3 text-center">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((s) => {
                                        const r = s.results[0] || {};
                                        return (
                                            <tr key={s.id} className="border-t hover:bg-slate-50">
                                                <td className="p-3 font-semibold">{s.name}</td>
                                                <td className="p-3">{s.pucRollNumber}</td>
                                                <td className="p-3">{s.collegeName}</td>
                                                <td className="p-3">{s.parentMobile}</td>
                                                <td className="p-3 text-center font-bold text-blue-700">{r.marksMath || 0}</td>
                                                <td className="p-3 text-center font-bold text-purple-700">{r.marksPhy || 0}</td>
                                                <td className="p-3 text-center font-bold text-green-700">{r.marksChem || 0}</td>
                                                <td className="p-3 text-center font-extrabold">{r.totalMarks || 0}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            {students.length === 0 && (
                                <div className="text-center text-slate-500 py-10">
                                    No student data available.
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* QUESTIONS TAB */}
                {activeTab === 'questions' && (
                    <QuestionManager questions={questions} setQuestions={setQuestions} />
                )}

            </main>
        </div>
    );
}

/* ---------------- SUB COMPONENTS ---------------- */

function StatCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="card p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                {label}
            </div>
            <div className="text-3xl font-extrabold text-[var(--color-primary)]">
                {value}
            </div>
        </div>
    );
}

function QuestionManager({ questions, setQuestions }: any) {
    const handleDelete = async (id: string) => {
        if (!confirm('Delete this question?')) return;
        await fetch(`/api/admin/questions?id=${id}`, { method: 'DELETE' });
        setQuestions((q: any[]) => q.filter(x => x.id !== id));
    };

    return (
        <div className="space-y-6">
            {questions.map((q: any) => (
                <div key={q.id} className="card p-6 flex justify-between items-start">
                    <div>
                        <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-700">
                            {q.subject}
                        </span>
                        <p className="mt-3 font-semibold">{q.text}</p>
                        <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-slate-600">
                            <span className={q.correctOption === 'A' ? 'text-green-600 font-bold' : ''}>A. {q.optionA}</span>
                            <span className={q.correctOption === 'B' ? 'text-green-600 font-bold' : ''}>B. {q.optionB}</span>
                            <span className={q.correctOption === 'C' ? 'text-green-600 font-bold' : ''}>C. {q.optionC}</span>
                            <span className={q.correctOption === 'D' ? 'text-green-600 font-bold' : ''}>D. {q.optionD}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => handleDelete(q.id)}
                        className="text-red-500 font-semibold hover:bg-red-50 px-3 py-1 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
