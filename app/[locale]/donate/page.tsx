"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DonatePage() {
    const t = useTranslations('Donate');

    // Стан для відстеження, яке саме поле зараз скопійовано
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Функція копіювання тексту в буфер обміну
    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        // Повертаємо іконку копіювання назад через 2 секунди
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Масив реквізитів (щоб не дублювати код верстки)
    const donationDetails = [
        { id: 'recipient', label: t('fields.recipient'), value: t('values.recipient') },
        { id: 'edrpou', label: t('fields.edrpou'), value: '44893937' },
        { id: 'mfo', label: t('fields.mfo'), value: '325365' },
        { id: 'iban', label: t('fields.iban'), value: 'UA 5832536500000000260060044056' },
        { id: 'purpose', label: t('fields.purpose'), value: t('values.purpose') },
        { id: 'email', label: t('fields.email'), value: 'ai.dept@lpnu.ua' },
        { id: 'address', label: t('fields.address'), value: 'Kniazia Romana St, 5, Lviv, Lviv Oblast, 79000' },
    ];

    return (
        <main className="bg-[#0A0A15] min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-grow relative pt-44 pb-32 overflow-hidden flex items-center">
                {/* Фірмові фонові сфери */}
                <div className="glow-sphere -top-40 -left-40 opacity-40 pointer-events-none"></div>
                <div className="glow-sphere bottom-0 right-0 opacity-20 pointer-events-none"></div>

                {/* Центральне світіння для акценту */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.05),transparent_60%)] pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-5xl">

                    {/* Шапка сторінки */}
                    <div className="mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-6 shadow-[0_0_20px_rgba(108,99,255,0.1)] animate-in fade-in slide-in-from-bottom-2 duration-700">
                            <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                            {t('badge')}
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {t('title')}
                        </h1>

                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            {t('description')}
                        </p>
                    </div>

                    {/* Картка з реквізитами */}
                    <div className="glass-card rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 border-white/5 bg-[#0F0F1A]/60 shadow-2xl shadow-primary/5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <div className="flex flex-col gap-2">
                            {donationDetails.map((item) => (
                                <div
                                    key={item.id}
                                    className="group flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300"
                                >
                                    {/* Назва поля */}
                                    <div className="text-sm text-gray-500 font-medium md:w-1/3 shrink-0">
                                        {item.label}:
                                    </div>

                                    {/* Значення + Кнопка копіювання */}
                                    <div className="flex items-center justify-between gap-4 md:w-2/3">
                                        <div className="text-white font-mono text-sm md:text-base break-all">
                                            {item.value}
                                        </div>

                                        <button
                                            onClick={() => handleCopy(item.value, item.id)}
                                            className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                                            title="Copy to clipboard"
                                        >
                                            {copiedId === item.id ? (
                                                <span className="material-symbols-outlined text-[#80E9D4]">check</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}