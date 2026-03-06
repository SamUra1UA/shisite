import { useTranslations } from 'next-intl';

export default function PartnersCTA() {
    const t = useTranslations('Partners.cta');

    return (
        <section className="w-full rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-primary/20 relative overflow-hidden bg-[#0A0A15] shadow-2xl shadow-primary/5">
            {/* Декоративні сфери */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#80E9D4]/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                        {t('title')}
                    </h3>
                    <p className="text-gray-400 font-light max-w-xl leading-relaxed text-lg">
                        {t('description')}
                    </p>
                </div>

                <button className="flex-shrink-0 gradient-bg text-white font-bold py-5 px-12 rounded-2xl hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-3 uppercase tracking-[0.2em] text-xs">
                    {t('button')}
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}