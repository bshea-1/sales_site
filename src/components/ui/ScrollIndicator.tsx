'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="animate-bounce"
            style={{
                color: 'var(--color-primary)',
                fontSize: '2rem',
                textAlign: 'center',
                marginTop: '2rem',
                opacity: isVisible ? 0.8 : 0,
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: 'none',
            }}
        >
            ↓
        </div>
    );
}
