'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ideal-player', label: 'Ideal Player' },
    { href: '/gratitude', label: 'Gratitude' },
    { href: '/culture', label: 'Culture' },
    { href: '/opportunity', label: 'Opportunity' },
    { href: '/maslow', label: 'Maslow' },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className="header">
            <div className="header-container">
                <Link href="/" className="nav-logo">
                    <span className="logo-grand">Ashley</span><span className="logo-brands">Furniture</span>
                </Link>

                <button
                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/apply" className="nav-link nav-cta">
                        Reserve Interview
                    </Link>
                </nav>
            </div>
        </header>
    );
}
