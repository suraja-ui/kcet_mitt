'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) throw new Error('Invalid credentials');
            router.push('/dashboard');
        } catch (err) {
            setError('Access Denied. Invalid Credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.bgOverlay} />

            <div style={styles.container}>
                <div style={styles.brand}>
                    <div style={styles.logoWrapper}>
                        <span style={{ fontSize: '22px', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>P2</span>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Admin Portal</h1>
                        <p style={styles.subtitle}>Authorized personnel access only</p>
                    </div>

                    {error && (
                        <div style={styles.errorBox}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} style={styles.form}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Email Address</label>
                            <input
                                type="email"
                                required
                                style={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin mail"
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Secure Key</label>
                            <input
                                type="password"
                                required
                                style={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                            />
                        </div>

                        <button type="submit" style={styles.submitBtn} disabled={loading}>
                            {loading ? 'Authenticating...' : 'Access Dashboard'}
                        </button>
                    </form>

                    <div style={styles.footerLink}>
                        <Link href="/" style={styles.backLink}>
                            ← Return to Main Portal
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        background: '#0B1121',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontFamily: "'Outfit', sans-serif",
        color: '#fff',
        padding: '20px'
    },
    bgOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
    },
    container: {
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    brand: {
        display: 'flex',
        justifyContent: 'center'
    },
    logoWrapper: {
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #EA580C, #c2410c)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 30px rgba(234,88,12,0.4)',
        overflow: 'hidden',
        padding: '0'
    },
    card: {
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
    },
    header: {
        textAlign: 'center',
        marginBottom: '32px'
    },
    title: {
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '6px',
        color: '#fff'
    },
    subtitle: {
        fontSize: '13px',
        color: '#94a3b8',
        fontWeight: 500
    },
    errorBox: {
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        color: '#f87171',
        fontSize: '13px',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    label: {
        fontSize: '12px',
        color: '#cbd5e1',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    input: {
        width: '100%',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '10px',
        padding: '12px 16px',
        color: '#fff',
        fontSize: '15px',
        outline: 'none',
        transition: 'border-color 0.2s'
    },
    submitBtn: {
        background: 'linear-gradient(135deg, #3b82f6, #2563eb)', // Blue for Admin
        color: '#fff',
        border: 'none',
        padding: '14px',
        borderRadius: '10px',
        fontWeight: 600,
        fontSize: '15px',
        cursor: 'pointer',
        marginTop: '8px',
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
    },
    footerLink: {
        marginTop: '24px',
        textAlign: 'center'
    },
    backLink: {
        color: '#64748b',
        fontSize: '13px',
        textDecoration: 'none',
        fontWeight: 500
    }
};
