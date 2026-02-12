import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Above & Beyond Culture | Ashley Furniture',
    description: 'Ashley Furniture Above and Beyond culture - exclusive dinners, award ceremonies, and recognition for high performers.',
};

export default function CultureLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
