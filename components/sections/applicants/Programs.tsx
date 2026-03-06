import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const programImages = [
    "/students/welcome1.jpg",
    "/students/welcome8.jpg",
    "/students/welcome10.jpg"
];

export default function Programs() {
    const t = useTranslations('Programs');
    const locale = useLocale();
    const programsCount = [0, 1, 2]; // Індекси для Bachelor, Master, PhD

    return (
        <section className="bg-[#0A0A15] py-24 relative">
            <div className="container mx-auto px-8 space-y-40">

                {programsCount.map((index) => {
                    const isReverse = index % 2 !== 0;

                    return (
                        <div key={index} className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                            {/* Текстовий блок */}
                            <div className="lg:w-1/2 relative">
                                <div className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary to-transparent ${isReverse ? 'left-0 lg:hidden' : 'left-0 ml-3'}`}></div>

                                <div className={`relative ${isReverse ? 'pl-12 lg:pl-0 lg:pr-12' : 'pl-12'}`}>
                                    <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3 block opacity-80">
                                        {t('badge')}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
                                        {t(`levels.${index}.level`)}
                                    </h2>

                                    <div className="space-y-10 relative">
                                        {[0, 1, 2].map((bulletIdx) => (
                                            <div key={bulletIdx} className="flex gap-6">
                                                <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 ring-4 ring-primary/20 ${isReverse ? '-ml-[3.15rem] lg:hidden' : '-ml-[3.15rem]'}`}></div>
                                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                                    {t(`levels.${index}.bullets.${bulletIdx}`)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 flex flex-wrap items-center gap-8">
                                        <Link href={`/${locale}/contacts`} className="gradient-bg px-8 py-4 text-xs tracking-widest uppercase font-bold rounded-full text-white hover:brightness-110 transition-all shadow-[0_0_20px_rgba(108,99,255,0.3)]">
                                            {t('admissionBtn')}
                                        </Link>
                                        <Link href="#" className="text-gray-400 hover:text-white inline-flex items-center font-medium transition-colors gap-2 text-sm uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-xl">link</span>
                                            {t('moreInfo')}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Блок з картинкою */}
                            <div className="lg:w-1/2 w-full">
                                <div className="glass-card rounded-[2.5rem] p-4 shadow-2xl group transition-transform duration-500 hover:-translate-y-2 border-white/5 bg-[#0F0F1A]/40">
                                    <div className="aspect-video bg-[#0F0F1A] rounded-[2rem] overflow-hidden mb-6 relative">
                                        <Image
                                            src={programImages[index]}
                                            alt={t(`levels.${index}.level`)}
                                            fill
                                            className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="px-6 pb-6">
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {t(`levels.${index}.title`)}
                                        </h3>
                                        <p className="text-primary font-bold opacity-80 uppercase tracking-widest text-[10px]">
                                            {t(`levels.${index}.subtitle`)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}