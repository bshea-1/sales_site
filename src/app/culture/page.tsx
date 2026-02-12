'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CulturePage() {
    const [heartTab, setHeartTab] = useState<'company' | 'customer' | 'employees' | 'personal'>('company');
    const [gratitudeTab, setGratitudeTab] = useState<'owner' | 'staycations' | 'vacations'>('owner');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="page-main">
            <div className="page-container">
                <header className="page-header">
                    <AnimatedSection>
                        <h1 className="page-title">Above &amp; Beyond Culture</h1>
                        <p className="page-subtitle">Recognized as the Highest Performing Licensee in the Country</p>
                    </AnimatedSection>
                </header>

                <AnimatedSection>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--color-primary-light)', background: 'rgba(51, 153, 255, 0.1)', marginBottom: '2rem' }}>
                            <h2 style={{ color: 'var(--color-primary-light)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>🏆 National #1 Ranked Region</h2>
                            <p style={{ color: 'var(--color-white)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                                In 2025, our Southeastern Virginia region was recently recognized as the <strong>highest performing licensee in the country</strong>. This level of excellence isn&apos;t accidental—it&apos;s the result of a culture that demands the best and rewards it extraordinarily.
                            </p>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>
                            We don&apos;t just hit targets; we redefine what&apos;s possible. At Ashley Furniture, going above and beyond isn&apos;t just encouraged—it&apos;s celebrated in ways that make you feel as exceptional as your results.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <div className="glass-card" style={{ padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--color-primary-light)', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>High-Performance Leadership</h3>
                            <p style={{ color: 'var(--color-white)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                Our culture is driven by the best in the business. Our Head of Sales, <strong>Matt Stein</strong>, was recognized as the <strong>#1 Sales Associate in the country</strong> for Ashley Furniture. His visionary leadership was further cemented by his selection as one of the <strong>&quot;40 Under 40&quot;</strong> Furniture Industry leaders, ensuring our team is always guided by world-class expertise.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={150}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                        <div className="animate-bounce" style={{
                            color: 'var(--color-primary-light)',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            opacity: scrolled ? 0 : 1,
                            transition: 'opacity 0.5s ease',
                            pointerEvents: 'none'
                        }}>↓</div>
                        <h2 style={{
                            color: 'var(--color-white)',
                            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            textAlign: 'center',
                            margin: 0,
                            whiteSpace: 'nowrap',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            Other Ways We Go Above &amp; Beyond
                        </h2>
                        <div className="animate-bounce" style={{
                            color: 'var(--color-primary-light)',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            opacity: scrolled ? 0 : 1,
                            transition: 'opacity 0.5s ease',
                            pointerEvents: 'none'
                        }}>↓</div>
                    </div>
                </AnimatedSection>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <AnimatedSection delay={200}>
                        <div className="culture-item featured" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', gap: 'var(--space-lg)', marginBottom: '1.5rem' }}>
                                <div className="culture-icon">❤️</div>
                                <div className="culture-details">
                                    <h3>Thinking With Your Heart is Smart</h3>
                                    <p>True high-performance is balanced by empathy. We promote the philosophy that leading with heart is the smartest way to build a winning team.</p>
                                </div>
                            </div>

                            <div className="tab-container" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <button onClick={() => setHeartTab('company')} className={`btn btn-sm ${heartTab === 'company' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>The Company</button>
                                <button onClick={() => setHeartTab('customer')} className={`btn btn-sm ${heartTab === 'customer' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>The Customer</button>
                                <button onClick={() => setHeartTab('employees')} className={`btn btn-sm ${heartTab === 'employees' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>The Employees</button>
                                <button onClick={() => setHeartTab('personal')} className={`btn btn-sm ${heartTab === 'personal' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Personal Excellence</button>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-md)', width: '100%', minHeight: '120px' }}>
                                {heartTab === 'company' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>Core Commitment</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>We find ways to subsidize and support our team financially, ensuring that our success is shared and everyone has the resources to thrive both at work and at home.</p>
                                    </div>
                                )}
                                {heartTab === 'customer' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>Empathy Driven Sales</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>We treat every customer interaction with genuine heart. By prioritizing their needs and well-being, we build relationships that last and results that speak for themselves.</p>
                                    </div>
                                )}
                                {heartTab === 'employees' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>Mutual Support</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>We support other departments through small acts that make a big difference—whether it&apos;s bringing lunch for a busy team or taking the time to express gratitude in person.</p>
                                    </div>
                                )}
                                {heartTab === 'personal' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>The Best Version of You</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Thinking with your heart means being the best employee you can be—not just for the targets, but out of respect for your craft and your colleagues.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={300}>
                        <div className="culture-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', gap: 'var(--space-lg)', marginBottom: '1.5rem' }}>
                                <div className="culture-icon">🏝️</div>
                                <div className="culture-details">
                                    <h3>Staying in Gratitude: Recognition Program</h3>
                                    <p>Gratitude is the gear that drives our culture. This is the owner&apos;s way of expressing genuine appreciation for those who go Above &amp; Beyond.</p>
                                </div>
                            </div>

                            <div className="tab-container" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <button onClick={() => setGratitudeTab('owner')} className={`btn btn-sm ${gratitudeTab === 'owner' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Owner&apos;s Appreciation</button>
                                <button onClick={() => setGratitudeTab('staycations')} className={`btn btn-sm ${gratitudeTab === 'staycations' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Staycations</button>
                                <button onClick={() => setGratitudeTab('vacations')} className={`btn btn-sm ${gratitudeTab === 'vacations' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Vacations</button>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-md)', width: '100%', minHeight: '120px' }}>
                                {gratitudeTab === 'owner' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>A Personal Thank You</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Our staying in gratitude program is a direct expression of the owner&apos;s attitude toward excellence. When you go above and beyond, it doesn&apos;t go unnoticed—it is rewarded deeply.</p>
                                    </div>
                                )}
                                {gratitudeTab === 'staycations' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>Oceanfront Retreats</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>For those recognized, we offer exclusive access to reserve a house on the oceanfront of Virginia Beach. We also provide gift certificates to premium restaurants for rest and recharge.</p>
                                    </div>
                                )}
                                {gratitudeTab === 'vacations' && (
                                    <div className="animate-fade-in">
                                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>World-Class Getaways</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Our Vacations provide airline tickets for two and spending money to stay in the company&apos;s premium properties: choose between a <strong>two-bedroom apartment in Manhattan</strong> or a <strong>one-bedroom apartment in San Francisco</strong>, offering an elite urban retreat for our top performers.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                        <div className="culture-item featured">
                            <div className="culture-icon">🏛️</div>
                            <div className="culture-details">
                                <h3>Award Ceremony</h3>
                                <p>A symbolic and unforgettable event capturing what it means to go above and beyond.
                                    When you&apos;re celebrated here, you&apos;ve reached the pinnacle of success.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={500}>
                        <div className="culture-item">
                            <div className="culture-icon">🏆</div>
                            <div className="culture-details">
                                <h3>Monetary Awards &amp; Recognition</h3>
                                <p>Each winner receives a cash bonus along with a formal presentation and
                                    certificate, acknowledging their extraordinary impact and contribution.</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <div className="page-cta" style={{ padding: 'var(--space-2xl) var(--space-lg) var(--space-4xl)' }}>
                <AnimatedSection>
                    <Link href="/opportunity" className="btn btn-primary">
                        See the Opportunity →
                    </Link>
                </AnimatedSection>
            </div>
        </main >
    );
}

