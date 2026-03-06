"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

// Додаємо = [] для захисту від undefined
export default function UpcomingEvents({ initialEvents = [] }: { initialEvents: any[] }) {
    const t = useTranslations('NewsPage.events');
    const locale = useLocale();

    const [visibleCount, setVisibleCount] = useState(2);

    // Тепер .length ніколи не впаде, бо навіть якщо івентів немає, це буде [].length
    const hasMore = initialEvents && visibleCount < initialEvents.length;

    // Якщо раптом бекенд повернув порожній список, покажемо заглушку або нічого
    if (!initialEvents || initialEvents.length === 0) {
        return null; // або якийсь гарний Skeleton/Message
    }

    return (
        <section className="py-24 bg-[#0A0A15]" id="events">
            <div className="container mx-auto px-8">
                {/* ... решта коду без змін ... */}
                <div className="space-y-10">
                    {initialEvents.slice(0, visibleCount).map((event, i) => (
                        <div
                            key={event.id}
                            className="glass-card rounded-[2.5rem] overflow-hidden group hover:border-primary/40 transition-all duration-500 flex flex-col md:flex-row border-white/5 bg-[#0F0F1A]/40 animate-in fade-in slide-in-from-left-4"
                            style={{ animationDelay: `${i * 150}ms` }}
                        >
                            {/* Контент картки */}
                            <div className="w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
                                <Image src={event.img} alt={event.title} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100" />
                            </div>
                            <div className="p-10 lg:p-12 flex flex-col justify-between flex-grow">
                                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-tight leading-tight">{event.title}</h3>
                                <Link href="#" className="inline-flex items-center justify-center sm:w-max px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold rounded-2xl transition-all gradient-bg text-white">
                                    {t('register')}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setVisibleCount(initialEvents.length)}
                            className="px-12 py-5 border border-white/10 rounded-[2rem] text-xs uppercase tracking-[0.3em] font-bold text-white hover:bg-white/5 transition-all"
                        >
                            {t('loadMore')}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}