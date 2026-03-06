import { getTranslations } from 'next-intl/server';

export default async function NewsHero() {
    const t = await getTranslations('NewsPage.hero');

    return (
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex items-center min-h-[50vh] bg-[#0A0A15]">
            <div className="glow-sphere -top-40 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                    <span className="block text-white opacity-90">{t('title1')}</span>
                    <span className="block gradient-text">{t('title2')}</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    {t('desc')}
                </p>
            </div>
        </section>
    );
}