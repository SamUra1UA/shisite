import { useTranslations } from 'next-intl';

interface Feature {
    icon: string;
    version: string;
    title: string;
    desc: string;
    color: string;
}

export default function ProjectFeatures({ items = [] }: { items?: Feature[] }) {
    const t = useTranslations('ProjectFeatures');

    if (!items || items.length === 0) return null;

    return (
        <section className="py-16 lg:py-24 bg-[#0F0F1A] border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-500 font-light max-w-2xl italic">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((feature, i) => (
                        <div key={i} className="group glass-card rounded-[2rem] p-8 border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-8">
                                <span className={`material-symbols-outlined text-4xl ${feature.color} group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </span>
                                <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-[0.2em]">
                                    {feature.version}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-xs text-gray-500 font-light leading-loose">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}