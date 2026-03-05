import Link from 'next/link';

const units = [
    { icon: 'smart_toy', title: 'Robotics Lab', desc: 'Autonomous systems and human-robot interaction.' },
    { icon: 'psychology', title: 'AI Lab', desc: 'Core artificial intelligence algorithms and models.' },
    { icon: 'analytics', title: 'Data Science Club', desc: 'Big data analytics and predictive modeling.' },
    { icon: 'visibility', title: 'Computer Vision', desc: 'Image processing and visual recognition systems.' },
    { icon: 'translate', title: 'NLP Group', desc: 'Natural language processing and understanding.' },
    { icon: 'memory', title: 'Edge AI', desc: 'Implementing AI on resource-constrained devices.' },
    { icon: 'health_and_safety', title: 'AI in Healthcare', desc: 'Medical imaging and predictive diagnostics.' },
    { icon: 'security', title: 'Cybersecurity AI', desc: 'Threat detection and automated response systems.' },
];

export default function UnitsGrid() {
    return (
        <section className="py-24 bg-[#0A0A15] relative border-t border-white/5" id="units">
            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {units.map((unit, i) => (
                        <div key={i} className="glass-card rounded-2xl p-8 text-center flex flex-col items-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(108,99,255,0.2)] transition-all duration-300 group border-white/5">

                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary shadow-[0_0_20px_rgba(108,99,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-4xl">{unit.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{unit.title}</h3>

                            <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-8 font-light">
                                {unit.desc}
                            </p>

                            <Link href="#" className="text-primary hover:text-white font-bold flex items-center gap-2 transition-colors uppercase tracking-widest text-[10px]">
                                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}