"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

// Додаємо = [] для захисту від помилки slice
export default function NewsArchive({ initialNews = [] }: { initialNews?: any[] }) {
    // Переконайся, що в uk.json є кореневий об'єкт "NewsArchive"
    const t = useTranslations('NewsArchive');
    const locale = useLocale();

    const [isExpanded, setIsExpanded] = useState(false);

    // Безпечний slice: якщо initialNews undefined, він поверне []
    const newsToDisplay = initialNews || [];
    const displayedNews = isExpanded ? newsToDisplay : newsToDisplay.slice(0, 4);

    // Якщо новин немає взагалі, краще нічого не рендерити або вивести заглушку
    if (newsToDisplay.length === 0) return null;

    return (
        <section className="py-24 bg-[#0F0F1A] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            {t('title')}
                        </h2>
                        <div className="h-1 w-24 gradient-bg rounded-full"></div>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-primary font-bold hover:text-white flex items-center gap-2 group transition-all uppercase text-xs tracking-[0.2em] outline-none"
                    >
                        {isExpanded ? "Згорнути" : t('viewAll')}
                        <span className={`material-symbols-outlined text-lg transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-2'}`}>
                            {isExpanded ? 'expand_less' : 'arrow_forward'}
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700">
                    {displayedNews.map((news, i) => (
                        <div
                            key={news.id || i}
                            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <Link href={`/${locale}/news/${news.id}`} className="group cursor-pointer flex flex-col h-full bg-[#0A0A15]/40 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={news.img}
                                        alt={news.title}
                                        fill
                                        unoptimized
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute bottom-4 left-4 z-20 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                                        {news.date}
                                    </span>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="font-bold text-lg text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
                                        {news.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed font-light">
                                        {news.desc}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}