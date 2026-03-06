"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('Navbar');

    // Стан для мобільного меню
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Блокуємо скрол сторінки, коли відкрито мобільне меню
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const switchLanguage = () => {
        const nextLocale = locale === 'uk' ? 'en' : 'uk';
        const newPath = pathname.replace(new RegExp(`^/${locale}`), `/${nextLocale}`);

        if (pathname === '/') {
            router.push(`/${nextLocale}`);
        } else {
            router.push(newPath);
        }
        router.refresh();
    };

    const navLinks = [
        { name: t('main'), href: `/${locale}` },
        { name: t('about'), href: `/${locale}/about` },
        { name: t('team'), href: `/${locale}/team` },
        { name: t('applicants'), href: `/${locale}/applicants` },
        { name: t('rnd'), href: `/${locale}/rnd` },
        { name: t('researchUnits'), href: `/${locale}/research-units` },
        { name: t('news'), href: `/${locale}/news` },
        { name: t('partners'), href: `/${locale}/partners` },
        { name: t('contact'), href: `/${locale}/contacts` },
    ];

    return (
        <>
            {/* Головна навігаційна панель */}
            <nav className="fixed top-0 w-full z-50 bg-[#0A0A15]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20">
                <div className="container mx-auto px-6 md:px-8 h-24 flex items-center justify-between">

                    {/* Логотип (збільшений, без кола) */}
                    <div className="flex items-center">
                        <Link href={`/${locale}`} className="relative flex items-center hover:opacity-80 transition-opacity">
                            {/* Задайте тут правильні розміри вашого логотипу */}
                            <Image
                                src="/ai-logo.svg"
                                alt="AIS Logo"
                                width={120}
                                height={40}
                                className="object-contain h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Десктопна навігація */}
                    <div className="hidden xl:flex items-center space-x-8 text-[13px] font-medium tracking-wide">
                        {navLinks.map((link) => {
                            const isActive = link.href === `/${locale}`
                                ? pathname === `/${locale}` || pathname === `/${locale}/`
                                : pathname?.startsWith(link.href);

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`transition-all duration-300 relative py-2 ${
                                        isActive
                                            ? 'text-primary'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full shadow-[0_0_10px_rgba(108,99,255,0.8)]"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Права частина: Мова, Донат та Бургер */}
                    {/* Права частина: Мова, Донат та Бургер */}
                    <div className="flex items-center gap-5 md:gap-6">
                        {/* Кнопка перемикання мови */}
                        <button
                            onClick={switchLanguage}
                            className="text-white text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors uppercase bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
                        >
                            {locale === 'uk' ? 'EN' : 'UA'}
                        </button>

                        {/* Акуратна іконка донату */}
                        <Link
                            href={`/${locale}/donate`}
                            title={t('donate')} // Підказка при наведенні
                            className="flex items-center text-white/80 hover:text-red-400 transition-all duration-300 hover:scale-110"
                        >
                            <span className="material-symbols-outlined text-[26px]">volunteer_activism</span>
                        </Link>

                        {/* Кнопка Бургер-меню (тільки для мобільних/планшетів) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="xl:hidden text-white hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Мобільне меню (Оверлей) */}
            <div className={`fixed inset-0 z-[60] bg-[#0A0A15]/95 backdrop-blur-2xl transition-all duration-500 xl:hidden flex flex-col ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                {/* Шапка мобільного меню */}
                <div className="h-24 px-6 md:px-8 flex items-center justify-between border-b border-white/5">
                    <Image src="/ai-logo.svg" alt="AIS Logo" width={100} height={32} className="object-contain h-8 w-auto" />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10"
                    >
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>

                {/* Список посилань */}
                <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-6">
                    {navLinks.map((link, i) => {
                        const isActive = link.href === `/${locale}`
                            ? pathname === `/${locale}` || pathname === `/${locale}/`
                            : pathname?.startsWith(link.href);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl font-bold tracking-tight transition-colors ${isActive ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Низ мобільного меню (Donate) */}
                <div className="p-8 border-t border-white/5 bg-[#0F0F1A]/50">
                    <Link
                        href={`/${locale}/donate`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 text-sm font-bold uppercase tracking-[0.2em]"
                    >
                        <span className="material-symbols-outlined text-xl">volunteer_activism</span>
                        {t('donate')}
                    </Link>
                </div>
            </div>
        </>
    );
}