'use client';

const messages = [
    "📍 Job Fair: Thursday, March 19th — 11 AM to 7 PM",
    "🚀 Ashley Outlet — 5129 Virginia Beach Blvd",
    "✨ Last year, average sales person earned $98K.*"
];

export default function TopBanner() {
    // Create a single row of text for the scrolling banner
    const combinedText = messages.join("  •  ");

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
