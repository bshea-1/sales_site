'use client';

const messages = [
    "📍 Job Fair: Thursday, February 19th — 11 AM to 7 PM",
    "🚀 Ashley Outlet — 5129 Virginia Beach Blvd",
    "✨ Last year, average sales person earned $98K."
];

export default function TopBanner() {
    // Create a single row of text with specific job fair focus
    const combinedText = messages.join("    •    ");

    return (
        <div className="top-banner">
            <div className="marquee">
                <div className="marquee-content">
                    <span>{combinedText}</span>
                    <span>{combinedText}</span>
                </div>
            </div>
        </div>
    );
}
