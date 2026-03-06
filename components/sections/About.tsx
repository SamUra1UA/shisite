"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0A15] rounded-[3rem] border border-white/5 mx-4 md:mx-8 mb-20">
            {/* Декоративні елементи фону */}
            <div className="glow-sphere -top-24 -right-24 opacity-20 pointer-events-none"></div>
            <div className="glow-sphere -bottom-24 -left-24 opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                    {/* Текстовий блок */}
                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block animate-in fade-in slide-in-from-bottom-2 duration-700">
                            {t('badge')}
                        </span>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {t('title')}
                        </h2>

                        <div className="space-y-8 text-gray-400 leading-loose text-lg font-light animate-in fade-in slide-in-from-bottom-6 duration-1000">
                            <p>{t('desc1')}</p>
                            <p>{t('desc2')}</p>
                        </div>

                        <div className="mt-14 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <Link href="/about" className="inline-flex items-center gap-4 text-white font-bold group transition-all uppercase text-[10px] tracking-[0.2em]">
                                <span className="border-b-2 border-primary pb-2 group-hover:border-white transition-colors">
                                    {t('cta')}
                                </span>
                                <span className="material-symbols-outlined text-lg transform group-hover:translate-x-3 transition-transform text-primary">
                                    arrow_right_alt
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Візуальний блок */}
                    <div className="relative order-1 lg:order-2 animate-in fade-in zoom-in duration-1000">
                        {/* Основна картка з фото */}
                        <div className="aspect-[4/5] md:aspect-square glass-card p-3 rounded-[2.5rem] relative w-full overflow-hidden border-white/10 shadow-2xl">
                            <Image
                                src="https://placehold.co/800x800/0A0A15/6C63FF/png?text=AIS+Innovation"
                                alt="AIS Laboratory"
                                fill
                                unoptimized
                                className="object-cover rounded-[2rem] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                            />
                            {/* Градієнтне накладання */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A15] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                        </div>

                        {/* Плаваючий блок статистики */}
                        <div className="absolute -bottom-10 -left-6 md:-left-12 glass-card p-10 md:p-12 rounded-[2rem] border-primary/20 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl group hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">
                                {t('stats.value')}
                            </div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-4 font-bold leading-tight max-w-[100px]">
                                {t('stats.label')}
                            </div>
                            {/* Тонка лінія-акцент */}
                            <div className="absolute top-0 right-10 w-1 h-12 bg-primary/30 rounded-full"></div>
                        </div>

                        {/* Декоративна сфера за картинкою */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}