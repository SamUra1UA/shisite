export default function AboutHero() {
    return (
        <section className="relative min-h-screen pt-24 pb-24 flex items-center overflow-hidden">
            {/* Використовуємо класи з globals.css */}
            <div className="glow-sphere -top-40 -left-40"></div>
            <div className="glow-sphere bottom-0 -right-40"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
                        Про кафедру
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
                        We specialize in the development and implementation of innovative solutions in the field of artificial intelligence. Our goal is to advance cutting-edge technologies and train the next generation of experts.
                    </p>
                    <button className="px-10 py-4 rounded-full font-bold text-white gradient-bg hover:brightness-110 transition-all uppercase tracking-widest text-xs border border-white/10 shadow-[0_0_30px_rgba(108,99,255,0.3)]">
                        Explore Research
                    </button>
                </div>
            </div>
        </section>
    );
}