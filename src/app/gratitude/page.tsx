import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gratitude | Ashley Furniture',
    description: 'Real testimonials from Ashley Furniture team members about financial security, belonging, and making an impact.',
};

const testimonials = [
    { badge: 'Security', quote: 'Please do not EVER underestimate the security that you give others due to the financial security that you provide.', icon: '🛡️', author: 'Ashley Furniture Team Member' },
    { badge: 'Security', quote: 'Ashley Furniture has been around for over 78 years and our legacy of long-tenured top performers is evident with employees that continue to grow and flourish.', icon: '⏳', author: 'Long-Tenured Associate' },
    { badge: 'Belonging', quote: 'Thank you for accepting me, my authentic self, and thank you for giving me a sense of purpose and importance. You have fulfilled the entire professional journey for me.', icon: '❤️', author: 'Ashley Furniture Team Member' },
    { badge: 'Belonging', quote: 'I truly value your mentorship and guidance and it has made me not only a better person, but a better father, and husband.', icon: '🌟', author: 'Ashley Furniture Team Member' },
    { badge: 'Impact', quote: 'Listening to those stories made me want to do better in my role and continue to contribute in a positive way. It served as a genuine recharge.', icon: '⚡', author: 'Above and Beyond Dinner Attendee' },
    { badge: 'Impact', quote: 'I took a big leap coming over to Ashley Furniture from my previous C suite role and it is moments like this that make me know I made the right choice.', icon: '🚀', author: 'Former C-Suite Executive' },
    { badge: 'Impact', quote: 'The challenges of my job took me out of my comfort zone. With all my training and mentorship, I polished myself into a great professional salesperson and Store Manager.', icon: '📈', author: 'Store Manager' },
    { badge: 'Belonging', quote: 'Celebrating at the Westin, the tallest building for over 200 miles—was very fitting as it made me feel like the sky is the limit!', icon: '🏔️', author: 'Award Ceremony Attendee' },
];

export default function GratitudePage() {
    return (
        <main className="page-main">
            <div className="page-container">
                <header className="page-header">
                    <AnimatedSection>
                        <h1 className="page-title">The Gratitude Engine</h1>
                        <p className="page-subtitle">Real words from real team members</p>
                    </AnimatedSection>
                </header>

                <div className="card-grid">
                    {testimonials.map((t, i) => (
                        <AnimatedSection key={i} delay={100 + i * 50}>
                            <div className="testimonial-card">
                                <span className="testimonial-badge">{t.badge}</span>
                                <blockquote className="testimonial-quote">{t.quote}</blockquote>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.icon}</div>
                                    <span className="author-title">{t.author}</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* CATEGORIES SECTION */}
            <section className="section-dark">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title">What Our People Value Most</h2>
                    </AnimatedSection>
                    <div className="card-grid card-grid-3">
                        <AnimatedSection delay={100}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">🛡️</div>
                                <h3>Financial Security</h3>
                                <p>Stable income, uncapped potential, and a company that&apos;s been here for 78+ years.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">❤️</div>
                                <h3>True Belonging</h3>
                                <p>A family environment where you&apos;re accepted for who you are.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <div className="glass-card" style={{ textAlign: 'center' }}>
                                <div className="card-icon">⚡</div>
                                <h3>Real Impact</h3>
                                <p>Your work matters. You make a difference every single day.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <div className="page-cta">
                <AnimatedSection>
                    <Link href="/culture" className="btn btn-primary">
                        Explore Our Culture →
                    </Link>
                </AnimatedSection>
            </div>
        </main>
    );
}
