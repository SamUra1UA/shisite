"use client"; // Обов'язково додаємо це для використання хуків

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Масив усіх посилань для зручного керування
const navLinks = [
    { name: 'Main', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'For applicant', href: '/applicants' },
    { name: 'RnD', href: '/rnd' },
    { name: 'Research Units', href: '/research-units' },
    { name: 'News', href: '/news' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Partners', href: '/partners' },
];

export default function Navbar() {
    const pathname = usePathname(); // Отримуємо поточний шлях

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0F0F1A]/90 backdrop-blur-xl border-b border-white/5">
            <div className="container mx-auto px-8 h-24 flex items-center justify-between">

                {/* Логотип */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="w-12 h-12 flex items-center justify-center border border-primary/40 rounded-full bg-[#0F0F1A] hover:border-primary transition-colors overflow-hidden relative">
                        <Image
                            src="/ai-logo.svg"
                            alt="AIS Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Навігація */}
                <div className="hidden xl:flex items-center space-x-8 text-sm font-medium tracking-wide">
                    {navLinks.map((link) => {
                        // Перевіряємо, чи активна сторінка.
                        // Для головної '/' точний збіг, для інших перевіряємо, чи починається URL з цього шляху
                        const isActive = link.href === '/'
                            ? pathname === '/'
                            : pathname?.startsWith(link.href);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors ${
                                    isActive
                                        ? 'text-white nav-active' // Активний стиль (з лінією знизу)
                                        : 'text-gray-400 hover:text-white' // Неактивний стиль
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Права частина */}
                <div className="flex items-center gap-8">
                    <button className="text-white text-sm font-bold tracking-widest">UA</button>
                    <button className="flex items-center text-white/80 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}