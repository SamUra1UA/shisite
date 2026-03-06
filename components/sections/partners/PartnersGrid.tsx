import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PartnersGrid() {
    const t = useTranslations('Partners');

    const partners = [
        { name: 'SOMATIC', desc: 'Спільні R&D у сферах Computer Vision та Robotics.', tags: [{ icon: 'science', text: t('tags.projects'), type: 'primary' }, { icon: 'work', text: t('tags.internship'), type: 'indigo' }] },
        { name: 'Vast.ai', desc: 'Хмарна інфраструктура GPU для досліджень ШІ.', tags: [{ icon: 'cloud', text: t('tags.projects'), type: 'primary' }] },
        { name: 'N-iX', desc: 'Партнерство у сфері інженерії ПЗ та аналітики даних.', tags: [{ icon: 'work', text: t('tags.internship'), type: 'indigo' }] },
        { name: 'SoftServe', desc: 'Інтеграція IT-академії та дуальна освіта.', tags: [{ icon: 'school', text: t('tags.dual'), type: 'primary' }, { icon: 'work', text: t('tags.jobs'), type: 'indigo' }] },
        { name: 'Google', desc: 'Академічні програми та хмарні сертифікації.', tags: [{ icon: 'cast_for_education', text: t('tags.lectures'), type: 'primary' }] },
        { name: 'NVIDIA', desc: 'Партнерство з Deep Learning Institute.', tags: [{ icon: 'science', text: t('tags.projects'), type: 'primary' }] },
        { name: 'EPAM', desc: 'Спонсорство університетських програм та лабораторій.', tags: [{ icon: 'work', text: t('tags.internship'), type: 'indigo' }] },
        { name: 'GlobalLogic', desc: 'Розробка навчальних планів для Embedded та IoT.', tags: [{ icon: 'school', text: t('tags.dual'), type: 'primary' }] },
        { name: 'Ciklum', desc: 'Студентські проєкти та технічні лекції.', tags: [{ icon: 'work', text: t('tags.jobs'), type: 'indigo' }] },
        { name: 'Eleks', desc: 'Data Science кемпи та R&D колаборації.', tags: [{ icon: 'science', text: t('tags.projects'), type: 'primary' }] },
    ];

    return (
        <section className="w-full flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">{t('grid.title')}</h2>
                    <p className="text-gray-400 font-light text-lg">{t('grid.description')}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {partners.map((partner, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-[2rem] glass-card aspect-square md:aspect-[4/3] flex items-center justify-center p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl border-white/5 bg-[#0F0F1A]/40">

                        {/* Логотип (Використовуємо placehold.co + unoptimized) */}
                        <div className="w-full h-full relative opacity-40 grayscale group-hover:opacity-10 transition-all duration-700">
                            <Image
                                src={`https://placehold.co/400x200/0F0F1A/6C63FF/png?text=${partner.name}`}
                                alt={partner.name}
                                fill
                                unoptimized
                                className="object-contain"
                            />
                        </div>

                        {/* Оверлей при наведенні */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0F0F1A]/95 backdrop-blur-md translate-y-4 group-hover:translate-y-0">
                            <div>
                                <h4 className="font-bold text-xl text-white mb-2 tracking-tight">{partner.name}</h4>
                                <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed">{partner.desc}</p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                                {partner.tags.map((tag, j) => (
                                    <span key={j} className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[9px] font-bold uppercase tracking-[0.15em] border transition-all ${tag.type === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-[#80E9D4]/10 text-[#80E9D4] border-[#80E9D4]/20'}`}>
                                        <span className="material-symbols-outlined text-[16px]">{tag.icon}</span>
                                        {tag.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}