import type { Metadata } from 'next';
import { Montserrat, Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import TopBanner from '@/components/layout/TopBanner';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashley Furniture | Go Above and Beyond',
  description: 'Join Ashley Furniture, the #1 furniture retailer in America. We offer financial security, belonging, and a path to going above and beyond. Training academy graduates average $98,000 annually.',
  keywords: 'Ashley Furniture, sales career, furniture sales, above and beyond',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ScrollToTop />
        <TopBanner />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
