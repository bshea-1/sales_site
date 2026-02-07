import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Opportunity | Ashley Furniture',
    description: 'Uncapped earning potential at Ashley Furniture. Training academy graduates average $98,000 annually with top performers earning significantly more.',
};

export default function OpportunityPage() {
    return (
        <main className="page-main">
            <div className="page-container">
                <header className="page-header">
                    <AnimatedSection>
                        <h1 className="page-title">Uncapped Potential</h1>
                        <p className="page-subtitle">Your future has no ceiling</p>
                    </AnimatedSection>
                </header>

                <div className="card-grid card-grid-3">
                    <AnimatedSection delay={100}>
                        <div className="earnings-card featured">
                            <span className="earnings-label">Training Academy Graduates Average</span>
                            <span className="earnings-amount">$98,000*</span>
                            <span className="earnings-period">Annually</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="earnings-card">
                            <span className="earnings-label">Top Performers Earn</span>
                            <span className="earnings-amount">Significantly More</span>
                            <span className="earnings-period">Uncapped Commission</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={300}>
                        <div className="earnings-card">
                            <span className="earnings-label">Stability &amp; Growth</span>
                            <span className="earnings-amount">78+ Years</span>
                            <span className="earnings-period">Company History</span>
                        </div>
                    </AnimatedSection>
                </div>
                <AnimatedSection delay={400}>
                    <p className="earnings-disclaimer">*Average earnings in 2025 for training academy graduates hired before that year. Individual results vary.</p>
                </AnimatedSection>
            </div>

            {/* WHAT YOU GET SECTION */}
            <section className="section-dark">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title">What You Get</h2>
                    </AnimatedSection>
                    <div className="card-grid card-grid-4">
                        <AnimatedSection delay={100}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">📚</div>
                                <h3>World-Class Training</h3>
                                <p>Our academy program teaches you everything you need to succeed in furniture sales and beyond.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">👨‍🏫</div>
                                <h3>Mentorship</h3>
                                <p>Learn from top performers who genuinely want to see you win.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">📈</div>
                                <h3>Career Growth</h3>
                                <p>Clear paths to Store Manager, District Manager, and beyond. Your ambition is the only limit.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={400}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">🎉</div>
                                <h3>Recognition</h3>
                                <p>From exclusive dinners to ceremonies at the summit of the tallest complex for 200+ miles.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* TRANSPARENCY SECTION */}
            <section className="section-light">
                <div className="container">
                    <AnimatedSection>
                        <div className="transparency-box">
                            <h3 className="transparency-title">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4m0-4h.01" />
                                </svg>
                                Let&apos;s Be Transparent
                            </h3>
                            <p className="transparency-text">
                                This is a <strong>high-performance, commission-based sales role</strong>. It requires
                                <strong> weekend availability</strong> and a relentless commitment to excellence.
                                This isn&apos;t for everyone—it&apos;s for those ready to <em>change their financial future</em>.
                            </p>
                            <div className="transparency-points">
                                <div className="point">✓ Commission-based compensation</div>
                                <div className="point">✓ Weekend availability required</div>
                                <div className="point">✓ High-performance expectations</div>
                                <div className="point">✓ Self-motivated individuals thrive</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* TESTIMONIAL HIGHLIGHT */}
            <section className="section-dark">
                <div className="container">
                    <AnimatedSection>
                        <blockquote className="highlight-quote">
                            &quot;I took a big leap coming over to Ashley Furniture from my previous C suite role and
                            it is moments like this that make me know I made the right choice.&quot;
                            <cite>— Former C-Suite Executive</cite>
                        </blockquote>
                    </AnimatedSection>
                </div>
            </section>

            <div className="page-cta">
                <AnimatedSection>
                    <Link href="/apply" className="btn btn-primary btn-large btn-glow">
                        Ready? Apply Now →
                    </Link>
                </AnimatedSection>
            </div>
        </main>
    );
}
