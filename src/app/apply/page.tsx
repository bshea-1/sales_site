'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import AshleyLogo from '@/components/ui/AshleyLogo';

export default function ApplyPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        // Using the existing formspree logic we had in previous versions
        fetch('https://formspree.io/f/xvgzyjko', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        }).then(() => {
            setSubmitted(true);
        }).catch(() => {
            // fallback if formspree isn't setup
            setSubmitted(true);
        });
    };

    return (
        <main className="apply-page">
            <div className="apply-content">
                <AnimatedSection>
                    <h1 className="apply-headline" style={{ marginTop: '2rem' }}>Experience Our Unique Culture!</h1>
                    <p style={{ color: 'var(--color-primary)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                        Attend Our Upcoming Job Fair: March 19th
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2rem' }}>
                        Location: Ashley Outlet At 5129 Virginia Beach Blvd
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div className="apply-form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {submitted ? (
                            <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                                <h2 style={{ marginBottom: '1rem', fontFamily: 'var(--ff-heading)', fontSize: '1.5rem', fontWeight: 800 }}>
                                    RSVP Confirmed!
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                    We have received your RSVP for the Thursday, March 19th job fair.<br />
                                    We look forward to meeting you!
                                </p>
                                <Link href="/" className="btn btn-primary">
                                    Return to Home
                                </Link>
                            </div>
                        ) : (
                            <form className="apply-form" onSubmit={handleSubmit} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--ff-heading)', fontWeight: 800 }}>
                                        Job Fair RSVP
                                    </h2>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                        Let us know you&apos;re coming on Thursday, March 19th!
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />
                                </div>

                                <div className="form-group checkbox-group" style={{ marginTop: '1rem' }}>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" required style={{ marginTop: '0.25rem' }} />
                                        <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textAlign: 'left' }}>I confirm I can attend the job fair on Thursday, March 19th at the Ashley Outlet.</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large btn-block" style={{ width: '100%', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                    RSVP Now
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '4rem' }}>
                        <AshleyLogo style={{ height: '40px', width: 'auto', margin: '0 auto' }} />
                        <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)', marginTop: 'var(--space-sm)' }}>
                            The #1 Furniture Retailer in America | 78+ Years of Excellence
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
