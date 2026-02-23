import Link from 'next/link';
import AshleyLogo from '@/components/ui/AshleyLogo';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link href="/" className="nav-logo">
                        <AshleyLogo style={{ height: '24px', width: 'auto' }} />
                    </Link>
                    <p>The #1 Furniture Retailer in America | 78+ Years of Excellence</p>
                </div>
                <div className="footer-links">
                    <Link href="/ideal-player">Ideal Player</Link>
                    <Link href="/gratitude">Gratitude</Link>
                    <Link href="/culture">Culture</Link>
                    <Link href="/opportunity">Opportunity</Link>
                    <Link href="/maslow">Maslow</Link>
                    <Link href="/apply">Apply Now</Link>
                </div>
            </div>
        </footer>
    );
}
