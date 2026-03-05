export default function NewsHero() {
    return (
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[50vh]">
            {/* Наші фірмові сфери */}
            <div className="glow-sphere -top-40 left-1/2 -translate-x-1/2 opacity-60"></div>

            <div className="container mx-auto px-8 relative z-10 text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    <span className="block text-white opacity-90 mb-2">Події та</span>
                    <span className="block gradient-text">Новини</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
                    Stay updated with the department&#39;s latest activities, academic achievements, and upcoming opportunities in AI.
                </p>
            </div>
        </section>
    );
}