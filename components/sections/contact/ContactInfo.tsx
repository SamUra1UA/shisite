import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ContactInfo() {
    const t = useTranslations('ContactInfo');

    return (
        <div className="flex flex-col justify-center h-full py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                {t('title')}
            </h2>

            <div className="space-y-12">
                {/* Адреса */}
                <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(108,99,255,0.1)]">
                        <span className="material-symbols-outlined text-3xl">location_on</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-white opacity-90">{t('address.label')}</h4>
                        <p className="text-gray-400 font-light leading-relaxed text-lg">
                            {t('address.value')}<br />
                            {t('address.city')}
                        </p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(108,99,255,0.1)]">
                        <span className="material-symbols-outlined text-3xl">email</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-white opacity-90">{t('email.label')}</h4>
                        <a href={`mailto:${t('email.value')}`} className="text-gray-400 font-light hover:text-primary transition-colors text-xl lg:text-2xl tracking-tight">
                            {t('email.value')}
                        </a>
                    </div>
                </div>

                {/* Телефон */}
                <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(108,99,255,0.1)]">
                        <span className="material-symbols-outlined text-3xl">phone</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-white opacity-90">{t('phone.label')}</h4>
                        <a href="tel:+380322582000" className="text-gray-400 font-light hover:text-primary transition-colors text-xl lg:text-2xl tracking-tight">
                            {t('phone.value')}
                        </a>
                    </div>
                </div>
            </div>

            {/* Соцмережі */}
            <div className="mt-16 pt-10 border-t border-white/5">
                <h4 className="text-sm font-bold mb-6 text-gray-500 uppercase tracking-[0.2em]">
                    {t('followUs')}
                </h4>
                <div className="flex gap-4">
                    {['Fb', 'Ig', 'Yt', 'Tg'].map((social, i) => (
                        <Link
                            key={i}
                            href="#"
                            className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-gray-400 border border-white/5 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all transform hover:-translate-y-2 duration-300"
                        >
                            <span className="text-xs font-bold tracking-widest uppercase">{social}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}