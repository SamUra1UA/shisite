import { useTranslations } from 'next-intl';

interface ProjectDetailsProps {
    data?: {
        challenge: string;
        solution: string;
        results: string;
    };
}

export default function ProjectDetails({ data }: ProjectDetailsProps) {
    const t = useTranslations('ProjectDetails');

    // Якщо даних немає, не рендеримо секцію
    if (!data) return null;

    return (
        <section className="py-16 lg:py-24 bg-[#0A0A15] relative border-t border-white/5">
            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t('title')}
                    </h2>
                    <div className="w-20 h-1 gradient-bg mx-auto rounded-full opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* The Challenge */}
                    <div className="glass-card rounded-[2rem] p-10 border-white/5 bg-[#0F0F1A]/40 transition-all hover:border-red-500/20 group">
                        <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8 text-red-500 border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">warning</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t('challenge')}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            {data.challenge}
                        </p>
                    </div>

                    {/* Our Solution */}
                    <div className="glass-card rounded-[2rem] p-10 border-t-2 border-t-primary shadow-[0_-10px_40px_-15px_rgba(108,99,255,0.3)] bg-[#161B26]/80 scale-105 z-20">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 text-primary border border-primary/30">
                            <span className="material-symbols-outlined text-3xl">lightbulb</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t('solution')}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            {data.solution}
                        </p>
                    </div>

                    {/* The Results */}
                    <div className="glass-card rounded-[2rem] p-10 border-white/5 bg-[#0F0F1A]/40 transition-all hover:border-[#80E9D4]/20 group">
                        <div className="w-14 h-14 rounded-2xl bg-[#80E9D4]/10 flex items-center justify-center mb-8 text-[#80E9D4] border border-[#80E9D4]/20 group-hover:bg-[#80E9D4] group-hover:text-black transition-all">
                            <span className="material-symbols-outlined text-3xl">trending_up</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t('results')}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            {data.results}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}