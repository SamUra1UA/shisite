const researchAreas = [
    { icon: 'flight_takeoff', title: 'Drone Swarms', desc: 'Developing decentralized algorithms for multi-agent UAV coordination, formation control, and collaborative mapping in complex environments.' },
    { icon: 'handshake', title: 'Human-Robot Interaction', desc: 'Designing intuitive interfaces and predictive models for safe, efficient collaboration between humans and industrial robotic manipulators.' },
    { icon: 'precision_manufacturing', title: 'Autonomous Navigation', desc: 'Advancing SLAM (Simultaneous Localization and Mapping) techniques for reliable navigation of UGVs in dynamic, unstructured terrains.' },
];

export default function UnitAreas() {
    return (
        <section className="py-24 bg-[#0F0F1A] relative border-t border-white/5">
            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Key Research Areas</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">Focusing our expertise on the most promising and impactful domains of robotics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {researchAreas.map((area, i) => (
                        <div key={i} className="glass-card rounded-2xl p-8 flex flex-col items-start group hover:-translate-y-2 transition-transform duration-300 border-white/5">
                            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 text-white shadow-[0_0_20px_rgba(108,99,255,0.4)]">
                                <span className="material-symbols-outlined text-3xl">{area.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">{area.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}