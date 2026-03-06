import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const locale = useLocale();
    const t = useTranslations('Footer');

    return (
        <footer className="bg-[#0A0A15] text-white pt-20 md:pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Легке світіння на фоні футера */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.03),transparent_60%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 mb-20 md:mb-24">

                    {/* Ліва колонка (Лого та соцмережі) */}
                    <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                            {/* Лого у футері (без кола, велике) */}
                            <Image
                                src="/ai-logo.svg"
                                alt="AIS Logo"
                                width={80}
                                height={80}
                                className="object-contain h-16 w-auto"
                            />
                            <div>
                                <span className="text-2xl md:text-3xl font-bold tracking-tight uppercase leading-none block text-white mb-2">
                                    {t('titleTop')}
                                </span>
                                <span className="text-gray-500 text-base md:text-lg font-light tracking-wide">
                                    {t('titleBottom')}
                                </span>
                            </div>
                        </div>

                        <div className="mb-12">
                            <Link href={`/${locale}/applicants`} className="inline-flex items-center px-10 py-4 rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold text-[10px] uppercase tracking-[0.25em] hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-300">
                                {t('admissionBtn')}
                            </Link>
                        </div>
                    </div>

                    {/* Навігація */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-8">
                            {t('infoHeading')}
                        </h5>
                        <ul className="space-y-5 text-base md:text-sm font-light text-gray-400">
                            <li><Link href={`/${locale}`} className="hover:text-primary transition-colors">{t('nav.main')}</Link></li>
                            <li><Link href={`/${locale}/about`} className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href={`/${locale}/team`} className="hover:text-primary transition-colors">{t('nav.team')}</Link></li>
                            <li><Link href={`/${locale}/applicants`} className="hover:text-primary transition-colors">{t('nav.applicants')}</Link></li>
                            <li><Link href={`/${locale}/rnd`} className="hover:text-primary transition-colors">{t('nav.rnd')}</Link></li>
                        </ul>
                    </div>

                    {/* Контакти */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-8">
                            {t('contactHeading')}
                        </h5>
                        <ul className="space-y-6">
                            <li className="flex flex-col md:flex-row items-center gap-4 text-base md:text-sm text-gray-400">
                                <span className="material-symbols-outlined text-primary text-2xl md:text-xl">mail</span>
                                <a href="mailto:ai.dept@lpnu.ua" className="hover:text-white transition-colors">ai.dept@lpnu.ua</a>
                            </li>
                            <li className="flex flex-col md:flex-row items-center gap-4 text-base md:text-sm text-gray-400">
                                <span className="material-symbols-outlined text-primary text-2xl md:text-xl">location_on</span>
                                <span>{t('address')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Копірайт та юридична інформація */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center md:text-left">
                    <p>{t('copyright')}</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <Link href="#" className="hover:text-white transition-colors">{t('privacy')}</Link>
                        <Link href="#" className="hover:text-white transition-colors">{t('terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}