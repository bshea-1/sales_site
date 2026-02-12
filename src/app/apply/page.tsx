'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { InlineWidget } from 'react-calendly';

export default function ApplyPage() {
    return (
        <main className="apply-page">
            <div className="apply-content">
                <AnimatedSection>
                    <h1 className="apply-headline" style={{ marginTop: '2rem' }}>Experience Our Unique Culture!</h1>
                    <p style={{ color: 'var(--color-white)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                        Attend Our Upcoming Job Fair on February 19th
                    </p>
                    <p style={{ color: 'var(--color-white)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2rem', opacity: 0.9 }}>
                        Location: Ashley Outlet At 5129 Virginia Beach Blvd
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div className="apply-form-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="glass-card" style={{
                            marginBottom: '2rem',
                            border: '1px solid var(--color-primary-light)',
                            padding: '1.5rem',
                            background: 'rgba(0, 64, 131, 0.4)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <h2 style={{ color: 'var(--color-white)', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', textAlign: 'center', fontWeight: 800 }}>
                                Reserve Your Interview Time
                            </h2>
                            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                                Thursday, February 19th — Select a time slot below
                            </p>
                        </div>

                        <div style={{ minHeight: '700px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                            <InlineWidget
                                url="https://calendly.com/bshea-allgrandbrands/job-fair?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1b508e&text_color=ffffff&primary_color=ffffff&month=2026-02&date=2026-02-19"
                                styles={{ height: '700px' }}
                            />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <div style={{ color: 'var(--color-white)', textAlign: 'center', marginTop: '4rem', paddingBottom: '4rem' }}>
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
