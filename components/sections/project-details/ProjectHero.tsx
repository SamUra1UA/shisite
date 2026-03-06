// components/sections/project-details/ProjectHero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectHero({ data }: { data: any }) {
    // Якщо data undefined, підставляємо порожній об'єкт, щоб не було TypeError
    const {
        lab = "AIS Lab",
        category = "Research",
        title = "Project Title",
        desc = "",
        image = "/students/welcome1.jpg",
        links = { portal: "#", github: "#" }
    } = data || {};

    return (
        <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 min-h-[70vh] flex items-center bg-[#0A0A15]">
            <div className="glow-sphere -top-40 -left-40 opacity-70"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/30">
                                <span className="material-symbols-outlined text-[14px]">psychology</span>
                                {lab}
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#80E9D4] bg-[#80E9D4]/10 px-3 py-1 rounded-full border border-[#80E9D4]/20">
                                {category}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white leading-tight">
                            {title}
                        </h1>

                        <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                            {desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href={links.portal} className="px-8 py-4 rounded-full text-white gradient-bg text-xs font-bold uppercase tracking-widest shadow-lg">
                                Project Portal
                            </Link>
                            <Link href={links.github} className="px-8 py-4 rounded-full text-white bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                                GitHub
                            </Link>
                        </div>
                    </div>

                    <div className="relative rounded-[2.5rem] overflow-hidden glass-card p-2 border border-white/10 shadow-2xl h-[450px]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            unoptimized
                            className="rounded-[2rem] object-cover grayscale opacity-60"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}