import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Counter from '@/components/ui/Counter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Above & Beyond Culture | Ashley Furniture',
    description: 'Ashley Furniture Above and Beyond culture - exclusive dinners, award ceremonies, and recognition for high performers.',
};

export default function CulturePage() {
    return (
        <main className="page-main">
            <div className="page-container">
                <header className="page-header">
                    <AnimatedSection>
                        <h1 className="page-title">Above &amp; Beyond Culture</h1>
                        <p className="page-subtitle">Where high performance meets heart</p>
                    </AnimatedSection>
                </header>

                <AnimatedSection>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-lg)' }}>
                        At Ashley Furniture, going above and beyond isn&apos;t just encouraged—it&apos;s celebrated in
                        extraordinary ways. Our recognition program is designed to make you feel as exceptional
                        as the work you do.
                    </p>
                </AnimatedSection>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>


                    <AnimatedSection delay={200}>
                        <div className="culture-item featured">
                            <div className="culture-icon">🏛️</div>
                            <div className="culture-details">
                                <h3>Award Ceremony</h3>
                                <p>A symbolic and unforgettable event capturing what it means to go above and beyond.
                                    When you&apos;re celebrated here, you&apos;ve reached the pinnacle of success.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={300}>
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



            {/* MASLOW SECTION */}
            <section className="section-maslow" style={{ background: 'rgba(232, 119, 34, 0.15)', padding: 'var(--space-4xl) 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title">More Than Maslow</h2>
                        <p className="section-subtitle">We fulfill every level of human needs</p>

                        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center', background: 'rgba(232, 119, 34, 0.15)', border: '1px solid rgba(255, 154, 77, 0.3)' }}>
                            <h3 style={{ color: 'var(--color-primary-light)', marginBottom: '1rem' }}>What is Maslow&apos;s Hierarchy of Needs?</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-base)', lineHeight: '1.8' }}>
                                Abraham Maslow was a visionary psychologist who mapped out the layers of human motivation.
                                His theory shows that we all have a natural drive to move from meeting basic survival needs
                                to achieving our ultimate potential—what he called <strong>Self-Actualization</strong>.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-base)', lineHeight: '1.8', marginTop: '1rem' }}>
                                At Ashley Furniture, we don&apos;t just stop at a paycheck. We build our culture to support you as
                                you climb every level of the pyramid, helping you become the best version of yourself.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="maslow-pyramid">
                        <AnimatedSection delay={100}>
                            <div className="maslow-level level-5">
                                <span className="level-name">Self-Actualization</span>
                                <span className="level-desc">Become the best version of yourself through growth and achievement</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={150}>
                            <div className="maslow-level level-4">
                                <span className="level-name">Esteem</span>
                                <span className="level-desc">Recognition, awards, and celebration of your accomplishments</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="maslow-level level-3">
                                <span className="level-name">Belonging</span>
                                <span className="level-desc">A family culture where you&apos;re accepted and valued</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={250}>
                            <div className="maslow-level level-2">
                                <span className="level-name">Security</span>
                                <span className="level-desc">Financial stability with 78+ years of company history</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <div className="maslow-level level-1">
                                <span className="level-name">Basic Needs</span>
                                <span className="level-desc">Competitive compensation averaging $98K annually</span>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <div className="page-cta" style={{ padding: 'var(--space-4xl) var(--space-lg)' }}>
                <AnimatedSection>
                    <Link href="/opportunity" className="btn btn-primary">
                        See the Opportunity →
                    </Link>
                </AnimatedSection>
            </div>
        </main>
    );
}
