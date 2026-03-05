const rndLabs = [
    { icon: 'smart_toy', title: 'Robotics Lab', desc: 'Розробка автономних систем, маніпуляторів та дронів на базі AI.' },
    { icon: 'psychology', title: 'AI Lab', desc: 'Глибоке навчання, нейронні мережі та системи прийняття рішень.' },
    { icon: 'database', title: 'Data Science', desc: 'Аналіз великих даних, предиктивна аналітика та візуалізація.' },
    { icon: 'language', title: 'NLP Unit', desc: 'Обробка природної мови, чат-боти та великі мовні моделі.' },
];

export default function RnD() {
    return (
        <section className="section-spacing relative overflow-hidden">
            <div className="glow-sphere bottom-0 left-1/2 -translate-x-1/2 opacity-30"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 block">Інновації</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">R&D HUB</h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">Центр практичних розробок, де студенти працюють над реальними проєктами у співпраці з бізнесом.</p>
                    </div>
                    <button className="px-10 py-4 border border-white/20 hover:bg-white/5 transition-colors uppercase text-[10px] tracking-[0.25em] font-bold text-white">Усі лабораторії</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {rndLabs.map((lab, i) => (
                        <div key={i} className="glass-card p-10 group hover:-translate-y-3 transition-all duration-500 border-white/5">
                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-8 border border-primary/20">
                                <span className="material-symbols-outlined text-3xl text-primary">{lab.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{lab.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">{lab.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}