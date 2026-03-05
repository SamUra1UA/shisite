import Image from 'next/image';
import Link from 'next/link';

export default function ProjectHero() {
    return (
        <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden min-h-[70vh] flex items-center">
            {/* Фонове світіння */}
            <div className="glow-sphere -top-40 -left-40 opacity-70"></div>
            <div className="glow-sphere top-40 right-10 opacity-30"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Текстова частина */}
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <Link href="/research-units/ai" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-[14px]">psychology</span>
                                Developed at AI Lab
                            </Link>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#80E9D4] bg-[#80E9D4]/10 px-3 py-1 rounded-full border border-[#80E9D4]/20">
                <span className="material-symbols-outlined text-[14px]">public</span> International
              </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
                            Horizon Europe: <br />
                            <span className="gradient-text">AI-Trust</span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                            Developing explainable AI models for critical decision-making systems in autonomous vehicles. Ensuring safety, transparency, and ethical compliance in next-generation transportation.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold rounded-full text-white gradient-bg shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:brightness-110 transition-all uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                                Project Portal
                            </Link>
                            <Link href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">code</span>
                                GitHub Repo
                            </Link>
                        </div>
                    </div>

                    {/* Зображення */}
                    <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl h-full min-h-[300px] lg:min-h-[400px]">
                        <Image
                            src="https://via.placeholder.com/800x600"
                            alt="AI-Trust Neural Network Visualization"
                            fill
                            className="rounded-2xl object-cover grayscale opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/80 to-transparent pointer-events-none rounded-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}