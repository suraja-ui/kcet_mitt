'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
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
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
            <div className="card w-full max-w-md p-8 md:p-10 bg-white shadow-lg">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                        <div className="w-6 h-6 bg-[#0B3A66] rounded-sm"></div>
                    </div>
                    <h1 className="text-2xl font-bold text-[#0B3A66]">Admin Login</h1>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Strictly for authorized personnel only</p>
                </div>

                {error && <div className="bg-red-50 text-red-600 text-sm p-3 rounded mb-6 border border-red-100 font-medium text-center">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="input-label">Email Address</label>
                        <input type="email" required className="input-official" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@mitt.edu.in" />
                    </div>

                    <div>
                        <label className="input-label">Secure Key</label>
                        <input type="password" required className="input-official" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
                    </div>

                    <button type="submit" className="w-full btn btn-primary py-3 text-[15px]">
                        Authenticate & Enter
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm text-slate-400 hover:text-[#0B3A66] font-medium">
                        ← Return to Main Portal
                    </Link>
                </div>
            </div>
        </div>
    );
}
