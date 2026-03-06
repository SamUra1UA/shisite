"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Partners() {
    const t = useTranslations('PartnersCarousel');

    // Беремо імена партнерів з вашого списку
    const partnerNames = [
        'SOMATIC', 'Vast.ai', 'N-iX', 'SoftServe', 'Google',
        'NVIDIA', 'EPAM', 'GlobalLogic', 'Ciklum', 'Eleks'
    ];

    // Дублюємо масив, щоб карусель крутилася безкінечно без "розривів"
    const carouselItems = [...partnerNames, ...partnerNames];

    return (
        <section className="py-16 md:py-24 bg-[#0A0A15] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-8 mb-12">
                <h3 className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 animate-in fade-in slide-in-from-bottom-2 duration-700">
                    {t('title')}
                </h3>
            </div>

            {/* Контейнер каруселі з ефектом затухання по краях (Mask) */}
            <div className="relative flex overflow-hidden group w-full"
                 style={{
                     maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                 }}
            >
                {/* Анімований трек */}
                <div className="flex whitespace-nowrap gap-12 md:gap-20 items-center animate-marquee group-hover:[animation-play-state:paused] w-max px-6">
                    {carouselItems.map((name, index) => (
                        <div
                            key={index}
                            className="relative w-32 h-12 md:w-40 md:h-16 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                        >
                            <Image
                                src={`https://placehold.co/400x150/0A0A15/6C63FF/png?text=${name}`}
                                alt={`Partner ${name}`}
                                fill
                                unoptimized
                                className="object-contain drop-shadow-[0_0_15px_rgba(108,99,255,0)] hover:drop-shadow-[0_0_15px_rgba(108,99,255,0.4)] transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Стилі для безкінечної анімації (щоб не лізти в tailwind.config.ts) */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); } /* Зсуваємо рівно на половину (один оригінальний масив) */
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
            `}</style>
        </section>
    );
}