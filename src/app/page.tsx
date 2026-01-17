import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.pageWrapper}>

            {/* HEADER */}
            <header className={styles.header}>
                <div className={`container ${styles.headerInner}`}>
                    <div>
                        <h1 className={styles.brandTitle}>
                            Maharaja Institute of Technology Thandavapura
                        </h1>
                        <p className={styles.brandSubtitle}>
                            Assessment Division
                        </p>
                    </div>

                    <Link href="/login" className="btn btn-accent">
                        Candidate Login
                    </Link>
                </div>
            </header>

            {/* HERO */}
            <main className={styles.heroMain}>
                <div className={`container ${styles.heroGrid}`}>

                    {/* LEFT CONTENT */}
                    <div>
                        <div className={styles.badge}>
                            Official KCET Mock 2026
                        </div>

                        <h2 className={styles.heroHeading}>
                            Elevate Your <br />
                            <span className={styles.textAccent}>Preparation.</span>
                        </h2>

                        <p className={styles.heroDescription}>
                            The official assessment environment of <strong>MIT Thandavapura</strong>,
                            designed to mirror state-level KCET examination standards
                            in a secure and distraction-free portal.
                        </p>

                        <div className={styles.ctaGroup}>
                            <Link href="/login" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '16px' }}>
                                Start Assessment
                            </Link>

                            <div className={styles.statCard}>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase font-bold" style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                                        Duration
                                    </div>
                                    <div style={{ fontWeight: 800, color: 'var(--color-primary)' }}>
                                        180 Mins
                                    </div>
                                </div>

                                <div style={{ width: 1, background: '#e2e8f0' }}></div>

                                <div>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                                        Format
                                    </div>
                                    <div style={{ fontWeight: 800, color: 'var(--color-primary)' }}>
                                        60 MCQ / Subject
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className={styles.visualCardWrapper}>
                        <div className={`card ${styles.visualCard}`}>

                            <div className={styles.glowEffect}></div>

                            <h3 className={styles.cardTitle}>
                                Institute Highlights
                            </h3>

                            <div className={styles.cardContent}>
                                <Highlight label="CET Code" value="E-258" />
                                <Highlight label="COMED-K Code" value="E-082" />
                                <Highlight label="QS I-Gauge" value="GOLD RATED" />

                                <div className={styles.admissionsSection}>
                                    <p className={styles.admissionsLabel}>
                                        Admissions Desk
                                    </p>
                                    <p className={styles.admissionsPhone}>
                                        +91 96202 28002
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={`container ${styles.footerInner}`}>
                    <p style={{ opacity: 0.7 }}>
                        © 2025 Maharaja Institute of Technology Thandavapura • NH 766, Nanjangud Taluk, Mysore
                    </p>

                    <div className={styles.footerLinks}>
                        <Link href="/admin/login" className={styles.footerLink}>
                            Admin Login
                        </Link>
                        <a href="mailto:admissions@mitt.edu.in" style={{ color: '#fff', textDecoration: 'none' }}>
                            Support
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

/* Small helper */
function Highlight({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600 }}>{label}</span>
            <span style={{ padding: '4px 12px', borderRadius: '4px', background: '#fff7ed', color: 'var(--color-accent)', fontWeight: 800, fontSize: '0.875rem' }}>
                {value}
            </span>
        </div>
    );
}
