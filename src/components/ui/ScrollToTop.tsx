'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Force scroll to top on page load/refresh
        window.scrollTo(0, 0);

        // Disable browser's default scroll restoration to prevent it from jumping back down
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []); // Empty dependency array means this runs only on mount (refresh/initial load)

    useEffect(() => {
        // Also insure scroll to top on route change, just in case
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
