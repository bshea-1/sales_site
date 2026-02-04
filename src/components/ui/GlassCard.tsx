import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    icon?: string;
    title?: string;
    description?: string;
}

export default function GlassCard({
    children,
    className = '',
    icon,
    title,
    description,
}: GlassCardProps) {
    if (icon && title && description) {
        return (
            <div className={`glass-card ${className}`}>
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <div className={`glass-card ${className}`}>
            {children}
        </div>
    );
}
