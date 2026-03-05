import Image from 'next/image';
import Link from 'next/link';

export default function UnitHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden">
            {/* Фонове зображення */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://via.placeholder.com/1920x1080"
                    alt="Robotics Lab Background"
                    fill
                    className="object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/80 to-transparent"></div>
            </div>

            {/* Фірмові сфери */}
            <div className="glow-sphere -top-40 -left-40 opacity-70 z-0"></div>
            <div className="glow-sphere top-40 -right-20 opacity-30 z-0"></div>

            <div className="container mx-auto px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-[10px] mb-6 shadow-[0_0_20px_rgba(108,99,255,0.15)]">
                    <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                    Research Unit
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white">
                    Robotics Lab
                </h1>

                <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Pioneering the future of autonomous systems, drone swarms, and advanced human-robot interactions.
                </p>

                <Link
                    href="#join"
                    className="inline-flex items-center justify-center px-10 py-4 text-xs font-bold rounded-full text-white gradient-bg hover:brightness-110 transition-all shadow-[0_0_30px_rgba(108,99,255,0.3)] uppercase tracking-widest"
                >
                    Join Lab
                </Link>
            </div>
        </section>
    );
}