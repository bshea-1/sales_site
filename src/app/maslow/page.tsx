import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'More Than Maslow | Ashley Furniture',
    description: 'How Ashley Furniture fulfills every level of human needs, from basic security to self-actualization.',
};

export default function MaslowPage() {
    return (
        <main className="page-main">
            <div className="page-container">
                <header className="page-header">
                    <AnimatedSection>
                        <h1 className="page-title">More Than Maslow</h1>
                        <p className="page-subtitle">We fulfill every level of human needs</p>
                    </AnimatedSection>
                </header>

                <AnimatedSection>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                        <h2 style={{ color: 'var(--color-primary-light)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)' }}>What is Maslow&apos;s Hierarchy of Needs?</h2>
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

                <div className="maslow-pyramid" style={{ marginBottom: '4rem' }}>
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
                            <span className="level-desc">Competitive compensation averaging $98K* annually</span>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={400}>
                    <p className="earnings-disclaimer" style={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', fontStyle: 'italic', fontSize: 'var(--text-xs)' }}>
                        *Average earnings in 2025 for training academy graduates hired before that year. Individual results vary.
                    </p>
                </AnimatedSection>

                <div className="page-cta" style={{ marginTop: '4rem' }}>
                    <AnimatedSection>
                        <Link href="/culture" className="btn btn-primary">
                            Back to Culture →
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
