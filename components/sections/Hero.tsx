"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen pt-24 overflow-hidden flex items-center bg-[#0A0A15]">
            {/* Динамічні фонові сфери */}
            <div className="glow-sphere -top-40 -left-40 opacity-60 pointer-events-none animate-pulse duration-[10s]"></div>
            <div className="glow-sphere top-1/2 -right-40 opacity-30 pointer-events-none"></div>

            {/* Сітка на фоні (опціонально для тех-стилю) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-5xl">
                    {/* Головний заголовок з анімацією */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-[1.05] mb-10 tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        {t('titleLine1')}<br />
                        <span className="gradient-text">{t('titleLine2')}</span>
                    </h1>

                    {/* Опис */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {t('description')}
                    </p>

                    {/* Група кнопок з м'якими кутами */}
                    <div className="flex flex-wrap gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <Link
                            href="/applicants"
                            className="px-10 py-5 gradient-bg text-white font-bold rounded-[1.25rem] hover:scale-105 hover:brightness-110 transition-all uppercase tracking-[0.2em] text-[10px] shadow-[0_10px_30px_rgba(108,99,255,0.3)]"
                        >
                            {t('cta.education')}
                        </Link>

                        <Link
                            href="/rnd"
                            className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-[1.25rem] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] text-[10px]"
                        >
                            {t('cta.international')}
                        </Link>

                        <Link
                            href="/research-units"
                            className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-[1.25rem] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] text-[10px]"
                        >
                            {t('cta.rnd')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Індикатор скролу вниз */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
            </div>
        </section>
    );
}