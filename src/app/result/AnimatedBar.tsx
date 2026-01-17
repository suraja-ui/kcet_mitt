'use client';

import { useEffect, useState } from 'react';

export default function AnimatedBar({ percent }: { percent: number }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWidth(percent);
        }, 200); // small delay for smooth entry

        return () => clearTimeout(timeout);
    }, [percent]);

    return (
        <div className="h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner mt-4">
            <div
                className="h-full bg-gradient-to-r from-[#0B3A66] to-[#FF9F1C] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${width}%` }}
            />
        </div>
    );
}
