'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function StudentLogin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        parentMobile: '',
        collegeName: '',
        pucRollNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/student/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                // Clear any previous exam selection to force new selection
                document.cookie = 'examType=; path=/; max-age=0';
                router.push('/student');
            } else {
                const data = await res.json();
                alert(data.error || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred. Please try again.');
        } finally { setLoading(false); }
    };

    return (
        <div style={styles.page}>
            {/* Background */}
            <div style={styles.bgOverlay} />

            <div style={styles.container}>
                {/* Brand */}
                <div style={styles.brandContainer}>
                    <div style={styles.logoWrapper}>
                        <span style={{ fontSize: '20px', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>P2</span>
                    </div>
                </div>

                <h1 style={styles.pageTitle}>Student Verification</h1>
                <p style={styles.pageSub}>Enter your details to access the exam hall</p>

                <div style={styles.card}>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.grid}>
                            <div style={styles.colFull}>
                                <label style={styles.label}>Full Candidate Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    style={styles.input}
                                    placeholder="As per records"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div style={styles.colHalf}>
                                <label style={styles.label}>Roll Number</label>
                                <input
                                    type="text"
                                    name="pucRollNumber"
                                    required
                                    style={styles.input}
                                    placeholder="Roll No / ID"
                                    value={formData.pucRollNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div style={styles.colHalf}>
                                <label style={styles.label}>Parent Mobile</label>
                                <input
                                    type="tel"
                                    name="parentMobile"
                                    required
                                    style={styles.input}
                                    placeholder="+91"
                                    value={formData.parentMobile}
                                    onChange={handleChange}
                                />
                            </div>

                            <div style={styles.colFull}>
                                <label style={styles.label}>Current Institution / College</label>
                                <input
                                    type="text"
                                    name="collegeName"
                                    required
                                    style={styles.input}
                                    placeholder="College Name & Place"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div style={styles.actions}>
                            <Link href="/" style={styles.cancelLink}>
                                Back to Home
                            </Link>
                            <button type="submit" style={styles.submitBtn}>
                                {loading ? 'Verifying...' : 'Proceed to Exam'}
                            </button>
                        </div>
                    </form>
                </div>

                <div style={styles.footer}>
                    MIT Thandavapura • Mock Exam Portal
                </div>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        background: '#0B1121', // Dark Navy
        fontFamily: "'Outfit', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#f8fafc',
        padding: '20px'
    },
    bgOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at top, rgba(234, 88, 12, 0.1) 0%, transparent 60%)', // Orange glow
        zIndex: 0
    },
    container: {
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px'
    },
    brandContainer: {
        marginBottom: '24px'
    },
    logoWrapper: {
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #EA580C, #c2410c)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 40px rgba(234,88,12,0.4)',
        overflow: 'hidden',
        padding: '0'
    },
    pageTitle: {
        fontSize: '24px',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '8px'
    },
    pageSub: {
        fontSize: '14px',
        color: '#94a3b8',
        marginBottom: '32px'
    },

    card: {
        width: '100%',
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    },

    form: { padding: '32px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' },
    colFull: { gridColumn: '1 / -1' },
    colHalf: { gridColumn: 'span 1' },

    label: { display: 'block', fontSize: '12px', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' },
    input: {
        width: '100%',
        background: 'rgba(11, 17, 33, 0.6)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '10px',
        padding: '14px 16px',
        color: '#fff',
        fontSize: '15px',
        outline: 'none',
        transition: 'all 0.2s'
    },

    actions: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    cancelLink: { color: '#94a3b8', fontSize: '14px', textDecoration: 'none', fontWeight: 500 },
    submitBtn: {
        background: 'linear-gradient(135deg, #EA580C, #c2410c)', // MITT Orange
        color: '#fff',
        border: 'none',
        padding: '14px 32px',
        borderRadius: '10px',
        fontWeight: 600,
        fontSize: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(234, 88, 12, 0.3)'
    },

    footer: {
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#64748b',
        fontWeight: 500
    }
};
