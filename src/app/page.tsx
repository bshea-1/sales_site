import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Counter from '@/components/ui/Counter';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background" />
        <AnimatedSection className="hero-content hero-content-upper">
          <h1 className="hero-headline">
            JOIN US AT OUR NEXT<br />
            <span className="highlight">SALES ASSOCIATE<br />JOB FAIR</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection className="hero-content hero-event-details" delay={100}>
          <div className="event-info">
            <p className="event-date">Thursday, February 19th</p>
            <p className="event-time">11 AM – 7 PM</p>
            <p className="event-address">Ashley Outlet</p>
            <p className="event-address">5129 Virginia Beach Blvd</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="hero-content hero-content-lower" delay={200}>
          <p className="hero-subheadline" style={{ marginBottom: 'var(--space-xl)' }}>
            Join the <strong>#1 Furniture Retailer in America</strong>. We don&apos;t just offer jobs;
            we offer <em>financial security</em>, <em>belonging</em>, and a path to <em>going above and beyond</em>.
          </p>
          <Link href="/apply" className="btn btn-primary btn-glow btn-large">
            CLICK HERE IF YOU WANT TO RESERVE AN INTERVIEW
          </Link>
        </AnimatedSection>
        <AnimatedSection className="hero-stats" delay={300}>
          <div className="hero-stat">
            <Counter target={75} prefix="$" suffix="K*" />
            <span className="stat-desc">Lowest Sales Person Earnings</span>
          </div>
          <div className="hero-stat">
            <Counter target={98} prefix="$" suffix="K*" />
            <span className="stat-desc">Average Sales Person Earnings</span>
          </div>
          <div className="hero-stat">
            <Counter target={78} suffix="+" />
            <span className="stat-desc">Years of Excellence</span>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={500}>
          <p className="earnings-disclaimer" style={{ position: 'relative', zIndex: 2, marginTop: '2rem' }}>
            *Sales Associates hired prior to January 1st, 2024. Individual results vary.
          </p>
        </AnimatedSection>
      </section>

      {/* WHY GRAND BRANDS SECTION */}
      <section className="section-light">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Why Ashley Furniture?</h2>
            <p className="section-subtitle">More than a job—a career that transforms lives</p>
          </AnimatedSection>

          <div className="card-grid card-grid-4">
            <AnimatedSection delay={100}>
              <div className="glass-card">
                <div className="card-icon">💰</div>
                <h3>Financial Security</h3>
                <p>Our training academy graduates average $98,000* annually. Top performers earn significantly more with uncapped commission potential.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="glass-card">
                <div className="card-icon">🤝</div>
                <h3>True Belonging</h3>
                <p>Join a family business that&apos;s been operating for 78+ years. We celebrate wins, support each other, and grow as one.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="glass-card">
                <div className="card-icon">🏆</div>
                <h3>Recognition Culture</h3>
                <p>From quarterly dinners to award ceremonies at the tallest building in Virginia—we celebrate excellence.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="glass-card">
                <div className="card-icon">🚀</div>
                <h3>Growth</h3>
                <p>Become the best version of yourself through world-class training, mentorship, and opportunities for advancement.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* CTA SECTION */}
      <section className="section-light">
        <div className="container">
          <AnimatedSection>
            <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to Go Above &amp; Beyond?</h2>
              <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                Discover what makes our team different. Learn about the traits we value most.
              </p>
              <Link href="/ideal-player" className="btn btn-primary btn-large">
                Meet the Ideal Team Player →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main >
  );
}
