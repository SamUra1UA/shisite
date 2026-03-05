const features = [
    { icon: 'account_tree', version: 'v2.1', title: 'Neuro-Symbolic AI', desc: 'Integrating deep neural networks with symbolic logic for robust reasoning.', color: 'text-primary' },
    { icon: 'chat', version: 'LLM', title: 'NLG Module', desc: 'Natural Language Generation for real-time human-readable explanations.', color: 'text-[#80E9D4]' },
    { icon: 'hub', version: 'Edge', title: 'Edge Inference', desc: 'Optimized models running locally on vehicle hardware for zero-latency.', color: 'text-primary' },
    { icon: 'verified_user', version: 'ISO 21448', title: 'SOTIF Compliance', desc: 'Architected following Safety of the Intended Functionality standards.', color: 'text-[#80E9D4]' },
];

export default function ProjectFeatures() {
    return (
        <section className="py-16 lg:py-24 bg-[#0F0F1A] border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features & Technologies</h2>
                    <p className="text-lg text-gray-400 font-light">Innovative approaches utilized in the development of AI-Trust.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 border-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`material-symbols-outlined text-3xl ${feature.color}`}>{feature.icon}</span>
                                <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-wider">{feature.version}</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                            <p className="text-xs text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}