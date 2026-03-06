import { useTranslations } from 'next-intl';

interface Member {
    name: string;
    role: string;
    desc: string;
    highlight?: boolean;
}

export default function ProjectTeam({ members = [] }: { members?: Member[] }) {
    const t = useTranslations('ProjectTeam');

    if (!members || members.length === 0) return null;

    return (
        <section className="py-16 lg:py-24 bg-[#0A0A15] border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {members.map((member, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className={`w-32 h-32 rounded-full bg-[#0F0F1A] border-2 shadow-2xl transition-all duration-500 flex items-center justify-center relative mb-6
                                ${member.highlight ? 'border-[#80E9D4] shadow-[#80E9D4]/10' : 'border-primary/20 group-hover:border-primary'}
                            `}>
                                <div className={`absolute inset-0 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${member.highlight ? 'bg-[#80E9D4]' : 'bg-primary'}`}></div>
                                <span className="material-symbols-outlined text-5xl text-gray-600 group-hover:text-primary transition-colors">
                                    person
                                </span>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                                {member.name}
                            </h4>
                            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${member.highlight ? 'text-[#80E9D4]' : 'text-primary'}`}>
                                {member.role}
                            </p>
                            <p className="text-xs text-gray-500 font-light leading-relaxed px-4">
                                {member.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}