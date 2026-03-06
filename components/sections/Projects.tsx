"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { projectsData } from '@/data/projectsData';

export default function Projects() {
    const t = useTranslations('FeaturedProjects');
    const locale = useLocale();

    // Вибираємо ключові проєкти для головної сторінки зі створеної бази
    const featuredSlugs = ['ai-trust', 'niania-chat', 'city-traffic'];

    const featuredProjects = featuredSlugs.map(slug => ({
        slug,
        // Захист від відсутності даних
        ...(projectsData[slug as keyof typeof projectsData] || {
            hero: { title: 'Unknown', desc: '', category: '', image: 'https://placehold.co/600x400/0A0A15/6C63FF/png' }
        })
    }));

    return (
        <section className="py-24 bg-[#0A0A15] relative overflow-hidden rounded-[3rem] border border-white/5 mx-4 md:mx-8 mb-20 shadow-2xl shadow-primary/5">
            {/* Декоративні фонові світіння */}
            <div className="glow-sphere top-0 right-0 opacity-20 pointer-events-none"></div>
            <div className="glow-sphere bottom-0 left-0 opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10">
                {/* Шапка секції з кнопкою переходу */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {t('title')}
                        </h2>
                        <div className="w-20 h-1 gradient-bg rounded-full opacity-60 mb-6"></div>
                        <p className="text-gray-400 text-lg font-light leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            {t('subtitle')}
                        </p>
                    </div>

                    <Link
                        href={`/${locale}/rnd`}
                        className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-[1.25rem] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] text-[10px] whitespace-nowrap animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
                    >
                        {t('viewAll')}
                        <span className="material-symbols-outlined text-sm">grid_view</span>
                    </Link>
                </div>

                {/* Сітка проєктів */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {featuredProjects.map((proj, i) => (
                        <div
                            key={proj.slug}
                            className="group flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-700"
                            style={{ animationDelay: `${i * 150}ms` }}
                        >
                            {/* Картка із зображенням */}
                            <div className="relative overflow-hidden rounded-[2rem] bg-[#0F0F1A] mb-8 border border-white/5 aspect-[4/3] shadow-lg">
                                <Image
                                    src={proj.hero.image}
                                    alt={proj.hero.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                                />

                                {/* Градієнт та тег категорії */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A15] via-[#0A0A15]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 backdrop-blur-md text-primary text-[9px] font-bold uppercase tracking-[0.2em] border border-primary/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="material-symbols-outlined text-[14px]">category</span>
                                        {proj.hero.category}
                                    </span>
                                </div>
                            </div>

                            {/* Текстова частина */}
                            <div className="flex flex-col flex-grow px-2">
                                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {proj.hero.title}
                                </h4>
                                <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed line-clamp-3 flex-grow">
                                    {proj.hero.desc}
                                </p>

                                {/* Лінк на детальну сторінку */}
                                <Link
                                    href={`/${locale}/projects/${proj.slug}`}
                                    className="inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.25em] group/link mt-auto w-fit"
                                >
                                    <span className="border-b border-white/20 pb-1 group-hover/link:border-primary transition-colors">
                                        {t('viewProject')}
                                    </span>
                                    <span className="material-symbols-outlined text-sm transform group-hover/link:translate-x-2 transition-transform text-primary">
                                        arrow_forward
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}