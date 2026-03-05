import Link from 'next/link';

export default function RndHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center pt-40 pb-24 overflow-hidden">
            {/* Сфери з нашого globals.css */}
            <div className="glow-sphere -top-40 -left-40 opacity-70"></div>
            <div className="glow-sphere top-40 -right-20 opacity-40"></div>

            <div className="container mx-auto px-8 relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
                    <span className="gradient-text">R&D HUB</span>
                </h1>
                <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Discover our specialized research units and ongoing projects. Where theory meets cutting-edge practical application.
                </p>
                <Link
                    href="#projects"
                    className="inline-flex items-center justify-center px-10 py-4 text-xs font-bold rounded-full text-white gradient-bg hover:brightness-110 transition-all shadow-[0_0_30px_rgba(108,99,255,0.3)] uppercase tracking-widest"
                >
                    Explore Projects
                </Link>
            </div>
        </section>
    );
}