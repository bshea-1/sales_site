import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Ideal Team Player | Ashley Furniture',
    description: 'The Ideal Team Player at Ashley Furniture is Hungry, Humble, and Smart. Learn what it takes to join our high-performance team.',
};

export default function IdealPlayerPage() {
    return (
        <main className="page-main">
            <div className="page-container">
                <header className="page-header">
                    <AnimatedSection>
                        <h1 className="page-title">The Ideal Team Player</h1>
                        <p className="page-subtitle">The tools you need to climb Maslow&apos;s Hierarchy of Needs</p>
                    </AnimatedSection>
                </header>

                <div className="card-grid card-grid-3">
                    <AnimatedSection delay={100}>
                        <article className="player-card">
                            <div className="card-icon-wrapper" style={{ background: 'linear-gradient(135deg, #0066CC 0%, #3399FF 100%)' }}>
                                <svg width="40" height="40" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M32 2 L38 24 L50 8 L42 26 L62 32 L42 38 L50 56 L38 40 L32 62 L26 40 L14 56 L22 38 L2 32 L22 26 L14 8 L26 24 Z" />
                                </svg>
                            </div>
                            <h3 className="card-title">Hungry</h3>
                            <p className="card-description">
                                The fuel for your climb. Hunger is the relentless drive to move beyond basic survival
                                and security toward your ultimate potential. It&apos;s the desire to achieve self-actualization.
                            </p>
                            <ul className="card-traits">
                                <li>Growth-obsessed</li>
                                <li>Self-motivated</li>
                                <li>Climbing mindset</li>
                            </ul>
                        </article>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <article className="player-card">
                            <div className="card-icon-wrapper" style={{ background: 'linear-gradient(135deg, #004999 0%, #0066CC 100%)' }}>
                                <svg width="40" height="40" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="32" cy="20" r="12" />
                                    <path d="M32 36 C16 36 8 48 8 56 L56 56 C56 48 48 36 32 36 Z" />
                                    <circle cx="16" cy="24" r="8" opacity="0.6" />
                                    <circle cx="48" cy="24" r="8" opacity="0.6" />
                                </svg>
                            </div>
                            <h3 className="card-title">Humble</h3>
                            <p className="card-description">
                                Success is a collective effort. Open to feedback, quick to show gratitude,
                                and always ready to put the team before the ego. We rise together.
                            </p>
                            <ul className="card-traits">
                                <li>Team-first mindset</li>
                                <li>Coachable</li>
                                <li>Grateful</li>
                            </ul>
                        </article>
                    </AnimatedSection>

                    <AnimatedSection delay={300}>
                        <article className="player-card">
                            <div className="card-icon-wrapper" style={{ background: 'linear-gradient(135deg, #003366 0%, #004999 100%)' }}>
                                <svg width="40" height="40" viewBox="0 0 64 64" fill="currentColor">
                                    <ellipse cx="32" cy="28" rx="24" ry="20" />
                                    <path d="M24 48 L24 58 Q32 64 40 58 L40 48" />
                                </svg>
                            </div>
                            <h3 className="card-title">Smart</h3>
                            <p className="card-description">
                                High emotional intelligence. Collaborates effectively, resolves conflict
                                with grace, and understands how words and actions impact others.
                            </p>
                            <ul className="card-traits">
                                <li>High EQ</li>
                                <li>Effective communicator</li>
                                <li>Conflict resolver</li>
                            </ul>
                        </article>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={400}>
                    <div className="quote-box" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                        <p>&quot;Perfection is not attainable, but if we chase perfection we can catch excellence.&quot;</p>
                        <cite>— Vince Lombardi</cite>
                    </div>
                </AnimatedSection>
            </div>

            {/* VALUES SECTION */}
            <section className="section-dark">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title">What We Value</h2>
                    </AnimatedSection>
                    <div className="card-grid card-grid-4">
                        <AnimatedSection delay={100}>
                            <div className="value-item">
                                <span className="value-number">01</span>
                                <h3>Integrity</h3>
                                <p>We do the right thing, even when no one is watching. Our word is our bond.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="value-item">
                                <span className="value-number">02</span>
                                <h3>Excellence</h3>
                                <p>Good enough never is. We strive for excellence in every interaction.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <div className="value-item">
                                <span className="value-number">03</span>
                                <h3>Growth</h3>
                                <p>We invest in our people. Your success is our success.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={400}>
                            <div className="value-item">
                                <span className="value-number">04</span>
                                <h3>Gratitude</h3>
                                <p>We celebrate wins and express appreciation. Gratitude is the gear that drives our culture.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <div className="page-cta">
                <AnimatedSection>
                    <Link href="/gratitude" className="btn btn-primary">
                        See What Our Team Says →
                    </Link>
                </AnimatedSection>
            </div>
        </main>
    );
}
