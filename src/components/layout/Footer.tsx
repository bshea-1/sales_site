import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link href="/" className="nav-logo">
                        <span className="logo-grand">Ashley</span><span className="logo-brands">Furniture</span>
                    </Link>
                    <p>The #1 Furniture Retailer in America | 78+ Years of Excellence</p>
                </div>
                <div className="footer-links">
                    <Link href="/ideal-player">Ideal Player</Link>
                    <Link href="/gratitude">Gratitude</Link>
                    <Link href="/culture">Culture</Link>
                    <Link href="/opportunity">Opportunity</Link>
                    <Link href="/apply">Apply Now</Link>
                </div>
            </div>
        </footer>
    );
}
