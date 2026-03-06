"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function UnitsGrid() {
    const t = useTranslations('ResearchUnits');

    const icons = [
        'smart_toy', 'psychology', 'analytics', 'visibility',
        'translate', 'memory', 'health_and_safety', 'security'
    ];

    return (
        <section className="py-24 bg-[#0A0A15] relative overflow-hidden rounded-[3rem] border border-white/5 mx-4 md:mx-8 mb-20 shadow-2xl shadow-primary/5" id="units">
            {/* Фонове світіння */}
            <div className="glow-sphere -top-24 -left-24 opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10">

                {/* Заголовок секції */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        {t('subtitle')}
                    </p>
                    <div className="w-24 h-1 gradient-bg mx-auto rounded-full opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {icons.map((icon, i) => (
                        <div
                            key={i}
                            className="group relative glass-card rounded-[2.5rem] p-10 text-center flex flex-col items-center hover:-translate-y-3 hover:border-primary/40 transition-all duration-500 border-white/5 bg-[#0F0F1A]/40 overflow-hidden"
                        >
                            {/* Декоративний градієнт фону при ховері */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Іконка */}
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 text-primary shadow-lg shadow-primary/5 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                                <span className="material-symbols-outlined text-4xl">{icon}</span>
                            </div>

                            {/* Текст */}
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors relative z-10">
                                {t(`units.${i}.title`)}
                            </h3>

                            <p className="text-sm text-gray-500 leading-relaxed flex-grow mb-10 font-light relative z-10">
                                {t(`units.${i}.desc`)}
                            </p>

                            {/* Кнопка переходу */}
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary group-hover:text-white font-bold transition-all uppercase tracking-[0.2em] text-[10px] relative z-10"
                            >
                                {t('viewDetails')}
                                <span className="material-symbols-outlined text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                                    arrow_right_alt
                                </span>
                            </Link>

                            {/* Нижня лінія-акцент */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}