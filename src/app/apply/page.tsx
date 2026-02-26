'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const WORKABLE_LINK = "https://apply.workable.com/allgrandbrands/?lng=en";

export default function ApplyPage() {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            window.open(WORKABLE_LINK, '_blank');
        }
    }, [countdown]);

    // Calculate stroke dashoffset for the ring
    const circumference = 2 * Math.PI * 54; // r=54 for 120px ring with stroke 4
    const strokeDashoffset = circumference - (countdown / 3) * circumference;

    return (
        <main className="redirect-page">
            <div className="redirect-bg-orb redirect-bg-orb-1" />
            <div className="redirect-bg-orb redirect-bg-orb-2" />
            <div className="redirect-bg-orb redirect-bg-orb-3" />

            <div className="redirect-card">
                <div className="redirect-logo">
                    <span className="logo-grand" style={{ color: '#fff' }}>GRAND</span>
                    <span className="logo-brands" style={{ color: 'var(--color-primary)' }}>BRANDS</span>
                </div>

                <div className="redirect-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </div>

                <h1 className="redirect-title">
                    Redirecting to <span className="redirect-highlight">Application</span>
                </h1>

                <p className="redirect-subtitle">
                    You are being transferred to our official Workable application portal. Please wait a moment.
                </p>

                <div className="redirect-countdown-container">
                    <svg className="redirect-ring" width="120" height="120" viewBox="0 0 120 120">
                        <circle className="redirect-ring-bg" cx="60" cy="60" r="54" />
                        <circle
                            className="redirect-ring-progress"
                            cx="60" cy="60" r="54"
                            style={{
                                strokeDasharray: circumference,
                                strokeDashoffset: strokeDashoffset
                            }}
                        />
                    </svg>
                    <div className="redirect-countdown-text">
                        <span className={`redirect-countdown-number ${countdown ? 'redirect-number-pop' : ''}`} key={countdown}>
                            {countdown}
                        </span>
                        <span className="redirect-countdown-label">Seconds</span>
                    </div>
                </div>

                <p className="redirect-subtitle" style={{ fontSize: '1rem', marginTop: '1rem' }}>
                    If the new tab didn&apos;t open automatically, <a href={WORKABLE_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontWeight: 'bold' }}>click here</a>.
                </p>

                <div className="redirect-actions" style={{ marginTop: '1.5rem' }}>
                    <a href={WORKABLE_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary redirect-go-btn">
                        Open Workable Application
                    </a>
                </div>

                <div className="redirect-divider" />

                <Link href="/" className="redirect-back-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Return to Home
                </Link>

                <div className="redirect-footer">
                    Secure Application via Workable
                </div>
            </div>
        </main>
    );
}
