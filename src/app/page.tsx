import Link from 'next/link';


export default function Home() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Outfit', sans-serif",
            background: '#0B1121', // Deeper Navy inspired by logo
            color: '#f8fafc'
        }}>
            {/* Dark Background Gradient - Blue/Orange hint */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at top right, rgba(234, 88, 12, 0.15), transparent 40%), radial-gradient(circle at bottom left, #1e3a8a, transparent 50%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            {/* HEADER */}
            <header className="glass-panel" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 0,
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                background: 'rgba(11, 17, 33, 0.9)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        flexShrink: 0,
                        overflow: 'hidden'
                    }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/mit-logo.png" alt="MIT Thandavapura Logo" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <h1 style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            color: '#fff',
                            lineHeight: '1',
                            margin: 0,
                            letterSpacing: '-0.5px'
                        }}>
                            MIT Thandavapura
                        </h1>
                        <p style={{
                            fontSize: '10px',
                            color: '#EA580C',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            margin: '4px 0 0 0'
                        }}>
                            Engineering College
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Link href="/admin/login" style={{
                        textDecoration: 'none',
                        color: '#94a3b8',
                        fontSize: '13px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        transition: 'color 0.2s'
                    }}>
                        Admin Portal
                    </Link>
                    <Link href="/login" style={{
                        textDecoration: 'none',
                        fontSize: '14px',
                        padding: '10px 24px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontWeight: 600,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        Candidate Login
                    </Link>
                </div>
            </header>

            {/* HERO SECTION */}
            <main style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '140px 24px 60px',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    maxWidth: '1200px',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <div style={{ animation: 'enter 0.6s ease-out' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            background: 'rgba(22, 163, 74, 0.1)', // MITT Green tint
                            border: '1px solid rgba(22, 163, 74, 0.3)',
                            borderRadius: '30px',
                            color: '#4ade80',
                            fontSize: '12px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '32px'
                        }}>
                            Official KCET Mock 2026
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(48px, 5vw, 72px)',
                            fontWeight: 800,
                            lineHeight: '1.05',
                            marginBottom: '24px',
                            color: '#fff',
                            textShadow: '0 0 40px rgba(255,255,255,0.1)'
                        }}>
                            Elevate Your <br />
                            <span style={{
                                background: 'linear-gradient(to right, #EA580C, #F97316)', // MITT Orange Gradient
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>Preparation.</span>
                        </h2>

                        <p style={{
                            fontSize: '18px',
                            color: '#cbd5e1',
                            lineHeight: '1.7',
                            marginBottom: '48px',
                            maxWidth: '540px'
                        }}>
                            Experience a premium mock exam environment built for <strong>KCET</strong> aspirants. Designed with the precise standards of state-level entrance exams in a secure, focus-driven interface.
                        </p>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Link href="/login" style={{
                                textDecoration: 'none',
                                padding: '18px 48px',
                                fontSize: '18px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #EA580C, #c2410c)', // Strong Orange
                                color: '#fff',
                                fontWeight: 700,
                                boxShadow: '0 10px 30px rgba(234, 88, 12, 0.4)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                Start Assessment
                            </Link>

                        </div>

                    </div>

                    {/* Logo Visual Card */}
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        {/* Glow effect behind */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15), transparent 70%)',
                            zIndex: -1
                        }} />

                        <div className="glass-panel" style={{
                            padding: '50px',
                            borderRadius: '40px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(11, 17, 33, 0.8)',
                            backdropFilter: 'blur(20px)',
                            maxWidth: '400px',
                            width: '100%',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 24px',
                                    boxShadow: '0 0 40px rgba(234,88,12,0.35)',
                                    overflow: 'hidden',
                                }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/mit-logo.png" alt="MIT" style={{ width: '80px', height: '80px', objectFit: 'contain', padding: '4px' }} />
                                </div>
                                <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '4px', fontWeight: 800 }}>MIT Thandavapura</h3>
                                <p style={{ color: '#EA580C', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Engineering College</p>
                                <div style={{ width: '40px', height: '4px', background: '#EA580C', margin: '12px auto', borderRadius: '2px' }}></div>
                                <p style={{ color: '#94a3b8', fontSize: '13px' }}>Empowering Students. Building Futures.</p>
                            </div>

                            <div style={{ display: 'grid', gap: '20px' }}>
                                <FeatureItem icon="🏆" title="NAAC Accredited" desc="Quality Education" />
                                <FeatureItem icon="📍" title="Nanjangud Taluk" desc="Mysore District – 571302" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


function FeatureItem({ icon, title, desc }: { icon: string; title: string, desc: string }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ fontSize: '24px' }}>{icon}</div>
            <div>
                <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '16px' }}>{title}</div>
                <div style={{ color: '#94a3b8', fontSize: '13px' }}>{desc}</div>
            </div>
        </div>
    )
}
