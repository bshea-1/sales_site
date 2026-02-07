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
                    <h1 className="apply-headline">Upcoming Job Fair</h1>
                    <p style={{ color: 'var(--color-primary-light)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>
                        Chesapeake &amp; Virginia Beach Locations
                    </p>
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
                                <h3 style={{ color: 'var(--color-primary-light)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>
                                    Attendance Confirmed!
                                </h3>
                                <p style={{ color: 'var(--color-white)', lineHeight: 1.6 }}>
                                    We have received your request for the Chesapeake &amp; Virginia Beach job fair.<br />
                                    We look forward to meeting you!
                                </p>
                            </div>
                        ) : (
                            <form className="apply-form" onSubmit={handleSubmit}>
                                <div style={{ background: 'rgba(0, 102, 204, 0.1)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '1rem', border: '1px solid var(--color-primary-light)' }}>
                                    <h2 style={{ color: 'var(--color-primary-light)', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                                        🚀 Upcoming Job Fair
                                    </h2>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-white)', opacity: 0.9 }}>
                                        Join us for our upcoming job fair for our <strong>Chesapeake</strong> and <strong>Virginia Beach</strong> locations!
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

                                <div className="form-group">
                                    <label>Which location are you applying for?</label>
                                    <select name="location" required style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gray-light)', background: 'var(--color-white)', color: '#111827' }}>
                                        <option value="">Select a location</option>
                                        <option value="chesapeake">Chesapeake</option>
                                        <option value="virginia-beach">Virginia Beach</option>
                                        <option value="both">Both Locations</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Preferred Date &amp; Time (Job Fair)</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input type="date" name="fairDate" required style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gray-light)', background: 'var(--color-white)', color: '#111827' }} />
                                        <input type="time" name="fairTime" required style={{ width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gray-light)', background: 'var(--color-white)', color: '#111827' }} />
                                    </div>
                                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
                                        Note: Job fair hours are typically 10:00 AM – 6:00 PM
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label>Attendance Preference</label>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                                        <label className="checkbox-label" style={{ alignItems: 'center' }}>
                                            <input type="radio" name="reservation" value="make-reservation" required style={{ width: '18px', height: '18px' }} defaultChecked />
                                            <span>Make a Reservation (Our Preference)</span>
                                        </label>
                                        <label className="checkbox-label" style={{ alignItems: 'center' }}>
                                            <input type="radio" name="reservation" value="no-reservation" style={{ width: '18px', height: '18px' }} />
                                            <span>Attend without making a reservation</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Why are you Hungry, Humble, and Smart?</label>
                                    <textarea id="message" name="message" rows={3} placeholder="Tell us about yourself..." />
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" required />
                                        <span>I understand this is a commission-based role requiring weekend availability</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-large btn-block">
                                    Confirm My Attendance
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
