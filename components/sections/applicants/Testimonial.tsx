"use client";

import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import { useTranslations } from 'next-intl';

// Стилі слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
    const t = useTranslations('Testimonials');
    const sliderRef = useRef<Slider | null>(null);

    // Масив фото (мають бути в public/students/ імена як у масиві)
    const studentPhotos = [
        '/students/Orza.jpg',
        '/students/bandrivskiy.jpg',
        '/students/mirchukova.jpg',
        '/students/tarasov.jpg',
        '/students/mill.jpg',
        '/students/veretulynuk.jpg'
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true, // Плавне перетікання виглядає дорожче за зсув
        arrows: false,
    };

    return (
        <section className="bg-[#0A0A15] py-32 relative overflow-hidden">
            {/* Декоративне світіння */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {t('title')}
                    </h2>
                </div>

                <div className="relative glass-card rounded-[3rem] p-8 md:p-16 border border-white/10 max-w-5xl mx-auto shadow-2xl bg-[#0F0F1A]/40 backdrop-blur-xl">
                    {/* Велика лапка для декору */}
                    <div className="absolute top-8 left-8 text-primary/20 pointer-events-none">
                        <span className="material-symbols-outlined text-8xl md:text-[120px]">format_quote</span>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        {studentPhotos.map((photo, i) => (
                            <div key={i} className="outline-none">
                                <div className="relative z-10">
                                    {/* Текст відгуку */}
                                    <p className="text-xl md:text-2xl text-gray-200 font-light italic mb-12 leading-relaxed min-h-[160px] md:min-h-[120px]">
                                        &#34;{t(`students.${i}.text`)}&#34;
                                    </p>

                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                        {/* Автор */}
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0F0F1A] overflow-hidden ring-4 ring-primary/20 relative flex-shrink-0">
                                                <Image
                                                    src={photo}
                                                    alt={t(`students.${i}.name`)}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1">
                                                    {t(`students.${i}.name`)}
                                                </h4>
                                                <p className="text-primary text-sm font-semibold opacity-80 uppercase tracking-wider">
                                                    {t(`students.${i}.status`)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Кастомні кнопки керування */}
                    <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex gap-4 z-20">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-all active:scale-95"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full gradient-bg text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 transition-all active:scale-95"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}