'use client';

import { useState, useMemo, useEffect } from 'react';
// Polyfill for PDF.js on server
if (typeof window === 'undefined') {
    (global as any).DOMMatrix = class {};
}

import { pdfjs } from 'react-pdf';

// Fix worker for react-pdf
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}


const EXAM_TYPES = ['KCET', 'PGCET_MBA', 'PGCET_MCA'];

const SECTIONS_BY_EXAM: Record<string, string[]> = {
    'KCET': ['Physics', 'Chemistry', 'Mathematics'],
    'PGCET_MBA': ['Proficiency in English', 'General Knowledge', 'Reasoning and General Intelligence', 'Quantitative Analysis'],
    'PGCET_MCA': ['Computer Awareness', 'Mathematical Ability', 'Analytical Ability', 'General Awareness'],
};

export default function DashboardClient({
    initialStudents,
    initialQuestions,
}: {
    initialStudents: any[];
    initialQuestions: any[];
}) {
    // ---------------- STATE ----------------
    const [activeExam, setActiveExam] = useState('KCET');
    const [activeTab, setActiveTab] = useState<'students' | 'questions' | 'exams'>('students');
    const [students, setStudents] = useState(initialStudents);
    const [questions, setQuestions] = useState(initialQuestions);
    const [exams, setExams] = useState<any[]>([]);
    const [examsLoaded, setExamsLoaded] = useState(false);

    // Search & Sort State
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState<'totalMarks' | 'name' | 'completedAt'>('totalMarks');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    // ---------------- FILTERED DATA ----------------
    const filteredStudents = useMemo(() => {
        const base = students.filter(s => {
            const r = s.results?.[0];
            if (!r) return false;
            const rType = r.examType || 'KCET';
            const matchesExam = rType === activeExam;
            const matchesSearch = searchTerm === '' || 
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                s.pucRollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.collegeName.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesExam && matchesSearch;
        });

        return [...base].sort((a, b) => {
            const ra = a.results?.[0] || {};
            const rb = b.results?.[0] || {};

            let valA: any = sortKey === 'totalMarks' ? ra.totalMarks : sortKey === 'name' ? a.name : ra.completedAt;
            let valB: any = sortKey === 'totalMarks' ? rb.totalMarks : sortKey === 'name' ? b.name : rb.completedAt;

            if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
            if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }, [students, activeExam, searchTerm, sortKey, sortOrder]);

    const filteredQuestions = useMemo(() => {
        return questions.filter(q => (q.examType || 'KCET') === activeExam);
    }, [questions, activeExam]);

    // ---------------- ACTIONS ----------------

    const downloadCSV = () => {
        let headers = ['Name', 'Roll No', 'College', 'Mobile', 'Total Score'];
        if (activeExam === 'KCET') {
            headers.push('Physics', 'Chemistry', 'Math');
        } else {
            headers.push('Section Scores (JSON)');
        }

        const rows = filteredStudents.map((s) => {
            const r = s.results[0] || {};
            const base = [
                `"${s.name}"`, // Quote strings for CSV safety
                `"${s.pucRollNumber}"`,
                `"${s.collegeName}"`,
                `"${s.parentMobile}"`,
                r.totalMarks || 0
            ];

            if (activeExam === 'KCET') {
                base.push(r.marksPhy || 0, r.marksChem || 0, r.marksMath || 0);
            } else {
                // For JSON, escape quotes
                base.push(`"${JSON.stringify(r.sectionScores || {}).replace(/"/g, '""')}"`);
            }
            return base;
        });

        const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const link = document.createElement('a');
        link.href = encodeURI(csv);
        link.download = `mitt_${activeExam}_results.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const loadExams = async () => {
        if (examsLoaded) return;
        const res = await fetch('/api/admin/exams');
        if (res.ok) { setExams(await res.json()); setExamsLoaded(true); }
    };

    return (
        <div style={styles.page}>
            {/* Background Glow */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at top right, rgba(59,130,246,0.1), transparent 50%)', pointerEvents: 'none' }} />

            {/* HEADER */}
            <header style={styles.header}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={styles.logoBadge}>
                            <span style={{ fontSize: '14px', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>P2</span>
                        </div>
                        <div>
                            <h1 style={styles.appTitle}>MIT THANDAVAPURA ADMIN</h1>
                            <p style={styles.appSub}>Command Center</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <a href="/leaderboard" target="_blank" style={{ ...styles.examTab, color: '#fbbf24', textDecoration: 'none' }}>🏆 Leaderboard</a>
                        <button 
                            onClick={async () => {
                                await fetch('/api/admin/logout', { method: 'POST' });
                                window.location.href = '/admin/login';
                            }}
                            style={{ ...styles.examTab, color: '#f87171', background: 'rgba(239, 68, 68, 0.1)', cursor: 'pointer' }}
                        >
                            Logout
                        </button>
                        <div style={styles.examSwitcher}>
                        {EXAM_TYPES.map(type => (
                            <button
                                key={type}
                                onClick={() => setActiveExam(type)}
                                style={{
                                    ...styles.examTab,
                                    ...(activeExam === type ? styles.examTabActive : {})
                                }}
                            >
                                {type.replace('PGCET_', 'PGCET ')}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>

                {/* TABS OF SUB-PAGES */}
                <div style={styles.navBar}>
                    <button onClick={() => setActiveTab('students')} style={{ ...styles.navItem, ...(activeTab === 'students' ? styles.navItemActive : {}) }}>
                        Student Results <span style={styles.countBadge}>{filteredStudents.length}</span>
                    </button>
                    <button onClick={() => setActiveTab('questions')} style={{ ...styles.navItem, ...(activeTab === 'questions' ? styles.navItemActive : {}) }}>
                        Question Bank <span style={styles.countBadge}>{filteredQuestions.length}</span>
                    </button>
                    <button onClick={() => { setActiveTab('exams'); loadExams(); }} style={{ ...styles.navItem, ...(activeTab === 'exams' ? styles.navItemActive : {}) }}>
                        📋 Exam Manager <span style={styles.countBadge}>{exams.length}</span>
                    </button>
                </div>
            </header>

            {/* CONTENT */}
            <main style={styles.content}>

                {activeTab === 'students' && (
                    <div style={styles.glassCard}>
                        <div style={styles.cardHeader}>
                            <h2 style={styles.sectionTitle}>{activeExam.replace('_', ' ')} Results</h2>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <input 
                                    type="text" 
                                    placeholder="Search student..." 
                                    style={{ ...styles.input, width: '200px' }}
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <button onClick={downloadCSV} style={styles.actionBtn}>
                                    Download CSV
                                </button>
                            </div>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={styles.table}>
                                <thead>
                                    <tr style={styles.tHeadRow}>
                                        <th style={{ ...styles.th, cursor: 'pointer' }} onClick={() => { setSortKey('name'); setSortOrder(o => o === 'asc' ? 'desc' : 'asc'); }}>
                                            Name {sortKey === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th style={styles.th}>ID / Roll</th>
                                        <th style={styles.th}>Mobile</th>
                                        <th style={styles.th}>College</th>
                                        <th style={styles.th}>Score Breakdown</th>
                                        <th style={{ ...styles.th, cursor: 'pointer' }} onClick={() => { setSortKey('totalMarks'); setSortOrder(o => o === 'asc' ? 'desc' : 'asc'); }}>
                                            Total {sortKey === 'totalMarks' && (sortOrder === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th style={styles.th}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredStudents.map((s) => {
                                        const r = s.results[0] || {};
                                        return (
                                            <tr key={s.id} style={styles.tRow}>
                                                <td style={{ ...styles.td, fontWeight: 600, color: '#fff' }}>{s.name}</td>
                                                <td style={styles.td}>{s.pucRollNumber}</td>
                                                <td style={styles.td}>{s.parentMobile}</td>
                                                <td style={styles.td}>{s.collegeName}</td>
                                                <td style={styles.td}>
                                                    {activeExam === 'KCET' ? (
                                                        <div style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
                                                            <span style={{ color: '#EA580C' }}>M: {r.marksMath}</span>
                                                            <span style={{ color: '#fb923c' }}>P: {r.marksPhy}</span>
                                                            <span style={{ color: '#22c55e' }}>C: {r.marksChem}</span>
                                                        </div>
                                                    ) : (
                                                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                                                            Detailed View in CSV
                                                        </div>
                                                    )}
                                                </td>
                                                <td style={{ ...styles.td, color: '#fbbf24', fontWeight: 700 }}>{r.totalMarks}</td>
                                                <td style={styles.td}>
                                                    <button
                                                        onClick={() => {
                                                            if (confirm('Delete student record? This cannot be undone.')) {
                                                                // Mock delete for UI
                                                                setStudents(prev => prev.filter(x => x.id !== s.id));
                                                            }
                                                        }}
                                                        style={styles.deleteBtn}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            {filteredStudents.length === 0 && (
                                <div style={styles.emptyState}>No results found for {activeExam}</div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'questions' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ ...styles.glassCard, padding: '16px' }}>
                            <input 
                                type="text" 
                                placeholder="Search questions by text or subject..." 
                                style={styles.input}
                                onChange={e => {
                                    const val = e.target.value.toLowerCase();
                                    setQuestions(initialQuestions.filter(q => 
                                        q.text.toLowerCase().includes(val) || 
                                        q.subject?.toLowerCase().includes(val)
                                    ));
                                }}
                            />
                        </div>
                        <QuestionManager
                            questions={filteredQuestions}
                            setQuestions={setQuestions}
                            activeExam={activeExam}
                            sections={SECTIONS_BY_EXAM[activeExam]}
                        />
                    </div>
                )}

                {activeTab === 'exams' && (
                    <ExamManager exams={exams} setExams={setExams} />
                )}
            </main>
        </div>
    );
}

/* ---------------- SUB COMPONENTS ---------------- */

function QuestionManager({ questions, setQuestions, activeExam, sections }: any) {
    const [newQ, setNewQ] = useState({
        text: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: 'A',
        subject: sections[0]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isImportMode, setIsImportMode] = useState(false);
    const [jsonInput, setJsonInput] = useState('');

    useMemo(() => {
        setNewQ(prev => ({ ...prev, subject: sections[0] }));
    }, [sections]);

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this question?')) return;
        try {
            const res = await fetch(`/api/admin/questions?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setQuestions((q: any[]) => q.filter(x => x.id !== id));
            } else {
                alert('Failed to delete question');
            }
        } catch (e) {
            console.error(e);
            alert('Error deleting question');
        }
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const payload = { ...newQ, examType: activeExam };
            const res = await fetch('/api/admin/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                const addedQ = await res.json();
                setQuestions((prev: any[]) => [...prev, addedQ]);
                setNewQ(prev => ({ ...prev, text: '', optionA: '', optionB: '', optionC: '', optionD: '' }));
                alert('Question added!');
            } else {
                alert('Failed to add');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleImport = async () => {
        try {
            const parsed = JSON.parse(jsonInput);
            setIsSubmitting(true);
            const res = await fetch('/api/admin/questions/import', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(parsed)
            });
            if (res.ok) {
                const result = await res.json();
                alert(`Successfully imported ${result.count} questions. Page will reload.`);
                window.location.reload();
            } else {
                alert('Import failed. Check console.');
            }
        } catch (e) {
            alert('Invalid JSON');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    onClick={() => setIsImportMode(!isImportMode)}
                    style={styles.outlineBtn}
                >
                    {isImportMode ? 'Back to Manual Add' : 'Bulk Import (JSON)'}
                </button>
            </div>

            {isImportMode ? (
                <div style={styles.glassCard}>
                    <h3 style={styles.cardTitle}>Bulk Import Questions</h3>
                    <p style={styles.cardSub}>Paste JSON object or array containing questions.</p>
                    <textarea
                        style={{ ...styles.input, fontFamily: 'monospace', height: '200px', fontSize: '12px' }}
                        placeholder='[{"text": "...", "optionA": "...", ...}]'
                        value={jsonInput}
                        onChange={e => setJsonInput(e.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                        <button onClick={handleImport} disabled={isSubmitting} style={styles.actionBtn}>
                            {isSubmitting ? 'Importing...' : 'Upload JSON'}
                        </button>
                    </div>
                </div>
            ) : (
                <div style={styles.glassCard}>
                    <h3 style={styles.cardTitle}>Add Question to <span style={{ color: '#EA580C' }}>{activeExam}</span></h3>
                    <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <label style={styles.label}>Question Text</label>
                            <textarea required style={{ ...styles.input, minHeight: '80px' }} value={newQ.text} onChange={e => setNewQ({ ...newQ, text: e.target.value })} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                                <label style={styles.label}>Subject / Section</label>
                                <select style={styles.input} value={newQ.subject} onChange={e => setNewQ({ ...newQ, subject: e.target.value })}>
                                    {sections.map((sec: string) => <option key={sec} value={sec}>{sec}</option>)}
                                </select>
                            </div>
                            <div>
                                <label style={styles.label}>Correct Option</label>
                                <select style={styles.input} value={newQ.correctOption} onChange={e => setNewQ({ ...newQ, correctOption: e.target.value })}>
                                    {['A', 'B', 'C', 'D'].map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <input required style={styles.input} placeholder="Option A" value={newQ.optionA} onChange={e => setNewQ({ ...newQ, optionA: e.target.value })} />
                            <input required style={styles.input} placeholder="Option B" value={newQ.optionB} onChange={e => setNewQ({ ...newQ, optionB: e.target.value })} />
                            <input required style={styles.input} placeholder="Option C" value={newQ.optionC} onChange={e => setNewQ({ ...newQ, optionC: e.target.value })} />
                            <input required style={styles.input} placeholder="Option D" value={newQ.optionD} onChange={e => setNewQ({ ...newQ, optionD: e.target.value })} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" disabled={isSubmitting} style={styles.actionBtn}>
                                {isSubmitting ? 'Adding...' : 'Add Question'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {questions.map((q: any) => (
                    <div key={q.id} style={styles.questionCard}>
                        <div>
                            <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                                {q.subject}
                            </div>
                            <p style={{ color: '#e2e8f0', fontSize: '15px' }}>{q.text}</p>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '8px', fontSize: '12px', color: '#64748b' }}>
                                <span style={q.correctOption === 'A' ? { color: '#4ade80', fontWeight: 'bold' } : {}}>A) {q.optionA}</span>
                                <span style={q.correctOption === 'B' ? { color: '#4ade80', fontWeight: 'bold' } : {}}>B) {q.optionB}</span>
                                <span style={q.correctOption === 'C' ? { color: '#4ade80', fontWeight: 'bold' } : {}}>C) {q.optionC}</span>
                                <span style={q.correctOption === 'D' ? { color: '#4ade80', fontWeight: 'bold' } : {}}>D) {q.optionD}</span>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(q.id)} style={styles.deleteBtn}>
                            Remove
                        </button>
                    </div>
                ))}
                {questions.length === 0 && (
                    <div style={styles.emptyState}>No questions found for this exam type.</div>
                )}
            </div>
        </div>
    );
}

import dynamic from 'next/dynamic';
const PdfCropper = dynamic(() => import('./PdfCropper'), { ssr: false });

function ExamManager({ exams, setExams }: { exams: any[]; setExams: any }) {
    const [creating, setCreating] = useState(false);
    const [form, setForm] = useState({ title: '', subject: '', topic: '', examType: 'KCET', difficulty: 'Medium', marksPerQuestion: 1, negativeMarking: 0, durationMinutes: 60, isDemo: false, randomizeQuestions: false });
    const [saving, setSaving] = useState(false);

    // Upload & Edit state
    const [uploadExamId, setUploadExamId] = useState('');
    const [uploadFile, setUploadFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [extracted, setExtracted] = useState<any[]>([]);
    const [reviewMode, setReviewMode] = useState(false);
    const [savingQ, setSavingQ] = useState(false);
    const [qMode, setQMode] = useState<'upload' | 'edit'>('upload');
    const [snippedImage, setSnippedImage] = useState<string | null>(null);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault(); setSaving(true);
        const res = await fetch('/api/admin/exams', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
        if (res.ok) {
            const exam = await res.json();
            setExams((prev: any[]) => [exam, ...prev]);
            setCreating(false);
            setForm({ title: '', subject: '', topic: '', examType: 'KCET', difficulty: 'Medium', marksPerQuestion: 1, negativeMarking: 0, durationMinutes: 60, isDemo: false, randomizeQuestions: false });
        } else alert('Failed to create exam');
        setSaving(false);
    };

    const toggleLive = async (exam: any) => {
        const res = await fetch(`/api/admin/exams/${exam.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isLive: !exam.isLive }) });
        if (res.ok) { const updated = await res.json(); setExams((prev: any[]) => prev.map(e => e.id === exam.id ? { ...e, ...updated } : e)); }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this exam and all its questions?')) return;
        const res = await fetch(`/api/admin/exams/${id}`, { method: 'DELETE' });
        if (res.ok) setExams((prev: any[]) => prev.filter(e => e.id !== id));
    };

    const [isAutoScanning, setIsAutoScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState({ current: 0, total: 0 });

    const handleAutoExtract = async () => {
        if (!uploadFile || !uploadExamId) return alert('Select an exam and a file');
        if (!(uploadFile.name.toLowerCase().endsWith('.pdf'))) {
             return handleUpload(); // Fallback to normal upload for non-PDFs
        }

        setIsAutoScanning(true);
        setUploading(true);
        setScanProgress({ current: 0, total: 0 });

        try {
            // 1. Load PDF in browser
            const fileArrayBuffer = await uploadFile.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: fileArrayBuffer }).promise;
            const totalPages = pdf.numPages;
            setScanProgress({ current: 0, total: totalPages });

            const allQuestions: any[] = [];
            setUploading(true);
            const pageImages: File[] = [];
            for (let i = 1; i <= totalPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 4.0 }); // Ultra HD for perfect block extraction
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                await page.render({ canvasContext: context!, viewport, canvas }).promise;
                const base64 = canvas.toDataURL('image/jpeg', 0.85);
                const blob = await (await fetch(base64)).blob();
                pageImages.push(new File([blob], `page_${i}.jpg`, { type: 'image/jpeg' }));
            }

            // 3. Parallel Batch Upload for Speed
            const BATCH_SIZE = 4; // Parallel concurrent uploads
            for (let i = 0; i < pageImages.length; i += BATCH_SIZE) {
                setScanProgress(p => ({ ...p, current: Math.min(i + BATCH_SIZE, totalPages) }));
                const batch = pageImages.slice(i, i + BATCH_SIZE);
                const batchPromises = batch.map(async (file) => {
                    const fd = new FormData();
                    fd.append('file', file);
                    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd }).catch(() => null);
                    if (res && res.ok) {
                        const data = await res.json();
                        return data.questions || [];
                    }
                    return [];
                });
                const batchResults = await Promise.all(batchPromises);
                batchResults.forEach(qs => allQuestions.push(...qs));
            }

            if (allQuestions.length > 0) {
                setExtracted(allQuestions);
                setQMode('upload');
                setReviewMode(true);
            } else {
                alert('No questions detected in visual scan. Try normal upload.');
            }
        } catch (e) {
            console.error('Auto Extract Error:', e);
            alert('Visual scan failed. Falling back to text extraction.');
            handleUpload();
        } finally {
            setIsAutoScanning(false);
            setUploading(false);
        }
    };

    const handleRandomize = () => {
        setExtracted(prev => [...prev].sort(() => Math.random() - 0.5));
    };

    const handleUpload = async () => {
        if (!uploadFile || !uploadExamId) return alert('Select an exam and a file');
        setUploading(true);
        const fd = new FormData(); fd.append('file', uploadFile);
        const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
        const data = await res.json();
        if (res.ok && data.questions?.length > 0) { 
            setExtracted(data.questions); 
            setQMode('upload');
            setReviewMode(true); 
        }
        else alert(data.error || `No questions extracted (${data.count ?? 0} found). Check file format.`);
        setUploading(false);
    };

    const handleManageQuestions = async (examId: string) => {
        setUploading(true);
        const res = await fetch(`/api/admin/exams/${examId}/questions`);
        if (res.ok) {
            const data = await res.json();
            setExtracted(data);
            setUploadExamId(examId);
            setQMode('edit');
            setReviewMode(true);
        } else alert('Failed to fetch questions');
        setUploading(false);
    };

    const handleSaveExtracted = async () => {
        setSavingQ(true);
        const method = qMode === 'edit' ? 'PATCH' : 'POST';
        const res = await fetch(`/api/admin/exams/${uploadExamId}/questions`, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ questions: extracted }) });
        if (res.ok) { 
            alert(qMode === 'edit' ? '✅ Updates saved!' : `✅ Saved questions!`); 
            setReviewMode(false); setExtracted([]); setUploadFile(null); 
        }
        else {
            const errData = await res.json().catch(() => ({}));
            alert(`Failed: ${errData.error || res.statusText || 'Unknown error'}`);
        }
        setSavingQ(false);
    };

    const handleDeleteQuestion = async (i: number) => {
        const q = extracted[i];
        if (qMode === 'edit' && q.id && !q.id.startsWith('new_')) {
            if (!confirm('Delete this question permanently from the database? This cannot be undone.')) return;
            const res = await fetch(`/api/admin/exams/${uploadExamId}/questions?questionId=${q.id}`, { method: 'DELETE' });
            if (!res.ok) return alert('Failed to delete question');
        }
        setExtracted(prev => prev.filter((_, j) => j !== i));
    };

    const handleAddManualQuestion = () => {
        setExtracted(prev => [{
            id: `new_${Date.now()}`,
            text: '', imageUrl: null, optionA: '', optionB: '', optionC: '', optionD: '', correctOption: 'A', subject: 'General', difficulty: 'Medium'
        }, ...prev]);
    };

    const handleImageUpload = (i: number, file: File | null) => {
        if (!file) {
            setExtracted(prev => prev.map((x, j) => j === i ? { ...x, imageUrl: null } : x));
            return;
        }
        if (file.size > 500 * 1024) {
            alert('Image must be under 500KB. Please compress the image before uploading.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => setExtracted(prev => prev.map((x, j) => j === i ? { ...x, imageUrl: e.target?.result as string } : x));
        reader.readAsDataURL(file);
    };

    const diffColor = (d: string) => d === 'Easy' ? '#22c55e' : d === 'Hard' ? '#ef4444' : '#f59e0b';

    const [filterImagesOnly, setFilterImagesOnly] = useState(false);

    if (reviewMode) return (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* IN-BROWSER CROPPER: Only shown if a file was just uploaded */}
            {uploadFile && (
                <div style={{ flex: '1 1 500px', minWidth: '400px' }}>
                    <PdfCropper file={uploadFile} onCrop={setSnippedImage} />
                </div>
            )}

            {/* QUESTIONS REVIEW */}
            <div style={{ ...styles.glassCard, flex: '1.5 1 600px', minWidth: '450px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                    <h3 style={styles.cardTitle}>{qMode === 'edit' ? 'Manage Exam Questions' : 'Review Extracted Questions'}</h3>
                    <p style={styles.cardSub}>{extracted.length} questions total — edit or add new ones before saving</p>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <label style={{ fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={filterImagesOnly} onChange={e => setFilterImagesOnly(e.target.checked)} />
                        Show Image/Diagram Questions
                    </label>
                    <button onClick={handleRandomize} style={{ ...styles.outlineBtn, color: '#10b981', borderColor: '#10b981' }}>🎲 Randomize</button>
                    <button onClick={() => {
                        const sub = prompt('New subject for ALL questions below:');
                        if (sub) setExtracted(prev => prev.map(q => ({ ...q, subject: sub })));
                    }} style={{ ...styles.outlineBtn, color: '#8b5cf6', borderColor: '#8b5cf6' }}>Apply Bulk Subject</button>
                    <button onClick={handleAddManualQuestion} style={{ ...styles.outlineBtn, color: '#3b82f6', borderColor: '#3b82f6' }}>+ Add</button>
                    <button onClick={() => setReviewMode(false)} style={styles.outlineBtn}>← Back</button>
                    <button onClick={handleSaveExtracted} disabled={savingQ} style={styles.actionBtn}>{savingQ ? 'Saving...' : `Save`}</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '600px', overflowY: 'auto' }}>
                {extracted.map((q, i) => {
                    if (filterImagesOnly) {
                        const hasImg = !!q.imageUrl;
                        const needsImg = /(figure|diagram|shown|following circuit|graph|image|picture)/i.test(q.text);
                        if (!hasImg && !needsImg) return null;
                    }
                    return (
                        <div key={i} style={{ ...styles.questionCard, flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '11px', color: '#EA580C', fontWeight: 700 }}>Q{i + 1}</span>
                            <button onClick={() => handleDeleteQuestion(i)} style={styles.deleteBtn}>Discard</button>
                        </div>
                        <textarea style={{ ...styles.input, minHeight: '60px', fontSize: '13px' }} value={q.text || ''} onChange={e => setExtracted(prev => prev.map((x, j) => j === i ? { ...x, text: e.target.value } : x))} placeholder="Question text..." />
                        
                        {/* Image Upload Area */}
                        {q.imageUrl ? (
                            <div style={{ position: 'relative', display: 'inline-block', maxWidth: '300px' }}>
                                <img src={q.imageUrl} alt="Question ref" style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }} />
                                <button onClick={() => handleImageUpload(i, null)} style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(239, 68, 68, 0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', fontSize: '10px' }}>✕</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                <label style={{ ...styles.outlineBtn, fontSize: '10px', padding: '4px 10px', cursor: 'pointer', margin: 0 }}>
                                    + Upload Base Image
                                    <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload(i, e.target.files?.[0] || null)} />
                                </label>
                                
                                {snippedImage && (
                                    <button 
                                        onClick={() => setExtracted(prev => prev.map((x, j) => j === i ? { ...x, imageUrl: snippedImage } : x))}
                                        style={{ ...styles.outlineBtn, fontSize: '10px', padding: '4px 10px', margin: 0, color: '#f59e0b', borderColor: '#f59e0b' }}
                                    >
                                        + Paste Snipped Image
                                    </button>
                                )}
                            </div>
                        )}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            {(['A', 'B', 'C', 'D'] as const).map(opt => (
                                <input key={opt} style={{ ...styles.input, fontSize: '13px', borderColor: q.correctOption === opt ? '#22c55e' : undefined }} value={q[`option${opt}`] || ''} onChange={e => setExtracted(prev => prev.map((x, j) => j === i ? { ...x, [`option${opt}`]: e.target.value } : x))} placeholder={`Option ${opt}`} />
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <label style={styles.label}>Correct:</label>
                            <select style={{ ...styles.input, width: '80px' }} value={q.correctOption || 'A'} onChange={e => setExtracted(prev => prev.map((x, j) => j === i ? { ...x, correctOption: e.target.value } : x))}>
                                {['A', 'B', 'C', 'D'].map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                            <label style={styles.label}>Subject:</label>
                            <input style={{ ...styles.input }} value={q.subject || ''} onChange={e => setExtracted(prev => prev.map((x, j) => j === i ? { ...x, subject: e.target.value } : x))} />
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
        </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Create exam */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setCreating(!creating)} style={styles.actionBtn}>{creating ? '✕ Cancel' : '+ New Exam'}</button>
            </div>

            {creating && (
                <div style={styles.glassCard}>
                    <h3 style={styles.cardTitle}>Create New Exam</h3>
                    <form onSubmit={handleCreate} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div style={{ gridColumn: '1/-1' }}><label style={styles.label}>Exam Title *</label><input required style={styles.input} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. KCET 2025 Full Mock Test" /></div>
                        <div><label style={styles.label}>Subject *</label><input required style={styles.input} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="e.g. Physics, All Subjects" /></div>
                        <div><label style={styles.label}>Topic (optional)</label><input style={styles.input} value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} placeholder="e.g. Mechanics, Organic Chemistry" /></div>
                        <div><label style={styles.label}>Exam Type</label>
                            <select style={styles.input} value={form.examType} onChange={e => setForm({ ...form, examType: e.target.value })}>
                                {['KCET'].map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                        <div><label style={styles.label}>Difficulty</label>
                            <select style={styles.input} value={form.difficulty} onChange={e => setForm({ ...form, difficulty: e.target.value })}>
                                {['Easy', 'Medium', 'Hard'].map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                        <div><label style={styles.label}>Marks / Question</label><input type="number" style={styles.input} value={form.marksPerQuestion} onChange={e => setForm({ ...form, marksPerQuestion: +e.target.value })} /></div>
                        <div><label style={styles.label}>Negative Marking</label><input type="number" step="0.25" style={styles.input} value={form.negativeMarking} onChange={e => setForm({ ...form, negativeMarking: +e.target.value })} /></div>
                        <div><label style={styles.label}>Duration (minutes)</label><input type="number" style={styles.input} value={form.durationMinutes} onChange={e => setForm({ ...form, durationMinutes: +e.target.value })} /></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><input type="checkbox" id="isDemo" checked={form.isDemo} onChange={e => setForm({ ...form, isDemo: e.target.checked })} /><label htmlFor="isDemo" style={{ color: '#94a3b8', fontSize: '13px' }}>Mark as Demo/Practice test</label></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><input type="checkbox" id="randomize" checked={form.randomizeQuestions} onChange={e => setForm({ ...form, randomizeQuestions: e.target.checked })} /><label htmlFor="randomize" style={{ color: '#94a3b8', fontSize: '13px' }}>Randomize Question Order</label></div>
                        <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" disabled={saving} style={styles.actionBtn}>{saving ? 'Creating...' : 'Create Exam'}</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Upload questions */}
            {exams.length > 0 && (
                <div style={styles.glassCard}>
                    <h3 style={styles.cardTitle}>📄 Upload Question Paper</h3>
                    <p style={styles.cardSub}>Upload a PDF or DOCX file — questions are auto-extracted and shown for review before saving.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div><label style={styles.label}>Target Exam</label>
                            <select style={styles.input} value={uploadExamId} onChange={e => setUploadExamId(e.target.value)}>
                                <option value="">-- Select Exam --</option>
                                {exams.map(ex => <option key={ex.id} value={ex.id}>{ex.title}</option>)}
                            </select>
                        </div>
                        <div><label style={styles.label}>File (PDF / DOCX / TXT / IMG)</label>
                            <input type="file" accept=".pdf,.docx,.doc,.txt,.png,.jpg,.jpeg" style={{ ...styles.input, padding: '8px' }} onChange={e => setUploadFile(e.target.files?.[0] || null)} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', gap: '12px', alignItems: 'center' }}>
                         {isAutoScanning && (
                            <div style={{ fontSize: '13px', color: '#EA580C', fontWeight: 600 }}>
                                Scanning Page {scanProgress.current} / {scanProgress.total}...
                            </div>
                        )}
                        <button 
                            onClick={handleAutoExtract} 
                            disabled={uploading || !uploadFile || !uploadExamId} 
                            style={{ ...styles.actionBtn, background: 'linear-gradient(135deg, #EA580C, #fb923c)' }}
                        >
                            {isAutoScanning ? 'Scanning...' : 'Deep Scan (AI) ✨'}
                        </button>
                        <button 
                            onClick={handleUpload} 
                            disabled={uploading || !uploadFile || !uploadExamId} 
                            style={styles.outlineBtn}
                        >
                            {uploading && !isAutoScanning ? 'Extracting...' : 'Standard Text Extract'}
                        </button>
                    </div>
                </div>
            )}

            {/* Exam list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exams.length === 0 && <div style={styles.emptyState}>No exams yet. Create one above to get started.</div>}
                {exams.map(exam => (
                    <div key={exam.id} style={{ ...styles.glassCard, padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '16px', fontWeight: 700, color: '#f1f5f9' }}>{exam.title}</span>
                                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '20px', background: 'rgba(255,255,255,0.07)', color: '#94a3b8' }}>{exam.examType}</span>
                                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '20px', color: diffColor(exam.difficulty), border: `1px solid ${diffColor(exam.difficulty)}` }}>{exam.difficulty}</span>
                                {exam.isDemo && <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '20px', background: 'rgba(100,116,139,0.2)', color: '#94a3b8' }}>Demo</span>}
                                {exam.randomizeQuestions && <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '20px', background: 'rgba(16,185,129,0.2)', color: '#10b981', border: '1px solid #10b981' }}>🎲 Random Order</span>}
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748b' }}>{exam.subject}{exam.topic ? ` · ${exam.topic}` : ''} · {exam.durationMinutes}min · {exam.marksPerQuestion}pt/q · {exam.negativeMarking ? `-${exam.negativeMarking} neg` : 'No neg marking'}</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
                            <button onClick={() => toggleLive(exam)} style={{ ...styles.actionBtn, background: exam.isLive ? 'rgba(239,68,68,0.2)' : 'rgba(34,197,94,0.2)', color: exam.isLive ? '#f87171' : '#4ade80', boxShadow: 'none', border: `1px solid ${exam.isLive ? '#f87171' : '#4ade80'}` }}>
                                {exam.isLive ? '⏸ Unpublish' : '▶ Publish'}
                            </button>
                            <button onClick={() => handleManageQuestions(exam.id)} style={{ ...styles.outlineBtn, borderColor: '#e2e8f0', color: '#e2e8f0' }}>Edit Questions</button>
                            <button onClick={() => handleDelete(exam.id)} style={styles.deleteBtn}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #0f172a, #0B1121)',
        fontFamily: "'Outfit', sans-serif",
        color: '#f8fafc',
        position: 'relative'
    },
    header: {
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    logoBadge: {
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #EA580C, #c2410c)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(234,88,12,0.4)',
        overflow: 'hidden'
    },
    appTitle: { fontSize: '18px', fontWeight: 800, color: '#fff' },
    appSub: { fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' },

    examSwitcher: {
        background: 'rgba(255,255,255,0.05)',
        padding: '4px',
        borderRadius: '10px',
        display: 'flex',
        gap: '4px'
    },
    examTab: {
        background: 'transparent',
        border: 'none',
        color: '#94a3b8',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s'
    },
    examTabActive: {
        background: '#EA580C',
        color: '#fff',
        boxShadow: '0 2px 10px rgba(234, 88, 12, 0.3)'
    },

    navBar: {
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap'
    },
    navItem: {
        background: 'none',
        border: 'none',
        padding: '8px 0',
        color: '#64748b',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        transition: 'all 0.2s'
    },
    navItemActive: {
        color: '#fff',
        borderBottomColor: '#EA580C'
    },
    countBadge: {
        fontSize: '10px',
        background: 'rgba(255,255,255,0.1)',
        padding: '2px 6px',
        borderRadius: '10px',
        marginLeft: '6px'
    },

    content: {
        padding: '32px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
    },

    glassCard: {
        background: 'rgba(30, 41, 59, 0.4)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '20px',
        padding: '24px'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
    },
    sectionTitle: { fontSize: '20px', fontWeight: 700, color: '#fff' },
    cardTitle: { fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' },
    cardSub: { fontSize: '13px', color: '#94a3b8', marginBottom: '20px' },

    actionBtn: {
        background: 'linear-gradient(135deg, #EA580C, #c2410c)',
        color: '#fff',
        border: 'none',
        padding: '10px 24px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
        transition: 'all 0.2s ease'
    },
    outlineBtn: {
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#cbd5e1',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '12px',
        cursor: 'pointer'
    },

    table: { width: '100%', borderCollapse: 'collapse' },
    tHeadRow: { borderBottom: '1px solid rgba(255,255,255,0.1)' },
    th: { textAlign: 'left', padding: '16px', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
    tRow: { borderBottom: '1px solid rgba(255,255,255,0.05)' },
    td: { padding: '16px', fontSize: '14px', color: '#cbd5e1' },

    deleteBtn: {
        background: 'rgba(239, 68, 68, 0.1)',
        color: '#f87171',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '11px',
        fontWeight: 600,
        cursor: 'pointer'
    },
    emptyState: {
        textAlign: 'center',
        padding: '60px',
        color: '#64748b',
        fontSize: '14px'
    },

    input: {
        width: '100%',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        padding: '12px',
        color: '#fff',
        outline: 'none',
        fontSize: '14px'
    },
    label: { display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 },

    questionCard: {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start'
    }
};
