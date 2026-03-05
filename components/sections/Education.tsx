import Link from 'next/link';

const educationPrograms = [
    { icon: 'school', title: 'Бакалаврат', desc: 'Фундаментальна підготовка з комп\'ютерних наук, розробки алгоритмів та машинного навчання.', details: ['4 роки навчання', '122 Комп’ютерні науки'] },
    { icon: 'workspace_premium', title: 'Магістратура', desc: 'Поглиблене вивчення систем штучного інтелекту та аналізу великих даних.', details: ['1.5 - 2 роки навчання', 'Науково-дослідна робота'], active: true },
    { icon: 'history_edu', title: 'PhD / Аспірантура', desc: 'Підготовка докторів філософії для наукової та викладацької діяльності.', details: ['4 роки досліджень', 'Міжнародні гранти'] },
];

export default function Education() {
    return (
        <section className="section-spacing bg-[#0A0A15]">
            <div className="container mx-auto px-8">
                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Освітні програми</h2>
                    <div className="w-24 h-1 gradient-bg mb-8"></div>
                    <p className="text-gray-400 max-w-2xl text-lg font-light">Комплексна підготовка фахівців усіх рівнів за сучасними світовими стандартами.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {educationPrograms.map((prog, i) => (
                        <div key={i} className={`glass-card p-12 hover:border-primary/60 transition-all duration-500 group ${prog.active ? 'border-primary/40' : ''}`}>
                            <div className={`w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 ${!prog.active ? 'group-hover:scale-110 transition-transform' : ''}`}>
                                <span className="material-symbols-outlined text-primary text-4xl">{prog.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">{prog.title}</h3>
                            <p className="text-gray-400 mb-10 leading-relaxed font-light">{prog.desc}</p>
                            <ul className="space-y-4 mb-12 text-sm text-gray-300">
                                {prog.details.map((detail, j) => (
                                    <li key={j} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">verified</span> {detail}
                                    </li>
                                ))}
                            </ul>
                            <Link href="#" className="text-white font-bold uppercase tracking-widest text-[10px] inline-flex items-center gap-3 group-hover:gap-5 transition-all">
                                Докладніше <span className="material-symbols-outlined text-lg">east</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}