'use client';

const messages = [
    "📍 Join our Upcoming Job Fair for Chesapeake & VA Beach!",
    "🚀 Last year, average sales person earned $98K.",
    "✨ Apply today to reserve your spot!"
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
