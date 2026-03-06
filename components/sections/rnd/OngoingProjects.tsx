"use client";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { allProjects } from '@/data/allProjects'; // Імпортуємо наш оновлений масив

export default function OngoingProjects() {
    const t = useTranslations('RndPage');
    const locale = useLocale();

    const renderCategory = (categoryKey: string) => {
        const filtered = allProjects.filter(p => p.cat === categoryKey);

        return (
            <div className="mb-24 px-8">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {t(`categories.${categoryKey}`)}
                    </h2>
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((proj) => (
                        <div key={proj.slug} className="group relative p-8 rounded-[2.5rem] border border-white/5 bg-[#0F0F1A]/30 transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 flex flex-col h-full overflow-hidden shadow-2xl shadow-black/20">

                            {/* Іконка та партнер */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl">{proj.icon}</span>
                                </div>
                                <div className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] text-right max-w-[120px]">
                                    {proj.partner}
                                </div>
                            </div>

                            {/* Назва */}
                            <h3 className="text-xl font-bold text-white mb-6 leading-snug group-hover:text-primary transition-colors duration-300">
                                {proj.title}
                            </h3>

                            {/* Керівник та кнопка */}
                            <div className="mt-auto">
                                <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">{t('project.lead')}</div>
                                <div className="text-xs text-gray-400 font-light mb-8">{proj.leads}</div>

                                {/* ОНОВЛЕНА КНОПКА: Елегантна і функціональна */}
                                <Link
                                    href={`/${locale}/projects/${proj.slug}`}
                                    className="inline-flex items-center gap-3 py-3 px-6 rounded-xl border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-300 group/btn"
                                >
                                    {t('project.more')}
                                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Декоративний градієнтний промінь знизу */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        // Додано rounded та px-8 як ви просили раніше для м'якості
        <section className="py-20 bg-[#0A0A15] rounded-[3rem] border border-white/5 mx-4 md:mx-8 mb-20" id="projects">
            <div className="container mx-auto">
                {renderCategory('international')}
                {renderCategory('national')}
                {renderCategory('industrial')}
            </div>
        </section>
    );
}