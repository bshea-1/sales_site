'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ApplyPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="apply-page">
            <div className="apply-content">
                <AnimatedSection>
                    <h1 className="apply-headline">Ready to Go Above &amp; Beyond?</h1>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <blockquote className="apply-quote">
                        &quot;Change your state, change your results.&quot;
                        <cite>— Tony Robbins</cite>
                    </blockquote>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <div className="apply-form-container">
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                                <h3 style={{ color: '#003366', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>
                                    Application Submitted!
                                </h3>
                                <p style={{ color: '#475569', lineHeight: 1.6 }}>
                                    Thank you for your interest in joining Ashley Furniture.<br />
                                    We&apos;ll be in touch soon.
                                </p>
                            </div>
                        ) : (
                            <form className="apply-form" onSubmit={handleSubmit}>
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
                                <div className="form-group">
                                    <label htmlFor="message">Why are you Hungry, Humble, and Smart?</label>
                                    <textarea id="message" name="message" rows={4} placeholder="Tell us about yourself..." />
                                </div>
                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" required />
                                        <span>I understand this is a commission-based role requiring weekend availability</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-large btn-block">
                                    Submit Application
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                    <div style={{ color: 'var(--color-white)' }}>
                        <span className="logo-grand" style={{ fontSize: 'var(--text-2xl)' }}>ASHLEY</span>
                        <span className="logo-brands" style={{ fontSize: 'var(--text-2xl)' }}>FURNITURE</span>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)', marginTop: 'var(--space-sm)' }}>
                            The #1 Furniture Retailer in America | 78+ Years of Excellence
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
