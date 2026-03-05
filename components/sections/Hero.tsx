import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-24 overflow-hidden flex items-center">
            <div className="glow-sphere -top-40 -left-40"></div>
            <div className="glow-sphere top-1/2 -right-40"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-10 tracking-tight">
                        Кафедра систем<br />
                        <span className="gradient-text">штучного інтелекту</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl font-light leading-relaxed">
                        Формуємо нове покоління AI-фахівців, що створюють технології майбутнього.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link href="#" className="px-12 py-5 gradient-bg text-white font-bold rounded-sm hover:brightness-110 transition-all uppercase tracking-widest text-xs">Освіта</Link>
                        <Link href="#" className="px-12 py-5 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-all uppercase tracking-widest text-xs">Міжнародні</Link>
                        <Link href="#" className="px-12 py-5 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-all uppercase tracking-widest text-xs">R&D HUB</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
