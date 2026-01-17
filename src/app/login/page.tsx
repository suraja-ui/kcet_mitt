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
            if (res.ok) router.push('/exam');
        } catch (err) { } finally { setLoading(false); }
    };

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex flex-col items-center justify-center p-4">

            {/* Official Header Strip */}
            <div className="absolute top-0 w-full h-2 bg-[#0B3A66]"></div>

            <div className="card w-full max-w-lg bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="bg-white border-b border-gray-100 p-8 text-center pb-6">
                    <h1 className="text-2xl font-bold text-[#0B3A66]">Candidate Verification</h1>
                    <p className="text-slate-500 text-sm mt-2">Enter your official details to proceed to the examination hall.</p>
                </div>

                <div className="p-8 pt-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="input-label">Full Candidate Name</label>
                                <input type="text" name="name" required className="input-official" placeholder="As per records" value={formData.name} onChange={handleChange} />
                            </div>

                            <div>
                                <label className="input-label">Roll Number</label>
                                <input type="text" name="pucRollNumber" required className="input-official" placeholder="10 Digit ID" value={formData.pucRollNumber} onChange={handleChange} />
                            </div>

                            <div>
                                <label className="input-label">Parent Mobile</label>
                                <input type="tel" name="parentMobile" required className="input-official" placeholder="+91" value={formData.parentMobile} onChange={handleChange} />
                            </div>

                            <div className="col-span-2">
                                <label className="input-label">Current Institution / College</label>
                                <input type="text" name="collegeName" required className="input-official" placeholder="College Name & Place" value={formData.collegeName} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                            <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-[#0B3A66]">
                                Cancel
                            </Link>
                            <button type="submit" className="btn btn-primary px-8">
                                {loading ? 'Verifying...' : 'Enter Assessment'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-[#F8FAFC] p-4 text-center border-t border-gray-100">
                    <span className="text-xs text-slate-400 font-medium">Official MITT Assessment System • v2.0 Secured</span>
                </div>
            </div>
        </div>
    );
}
