export default function UnitsHero() {
    return (
        <section className="relative min-h-[50vh] flex items-center pt-48 pb-24 overflow-hidden">
            {/* Фірмові сфери для глибини фону */}
            <div className="glow-sphere -top-40 -left-40 opacity-70"></div>
            <div className="glow-sphere top-40 -right-20 opacity-30"></div>

            <div className="container mx-auto px-8 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                    Research Units
                </h1>
                <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Specialized laboratories and clubs driving innovation in various AI domains.
                </p>
            </div>
        </section>
    );
}