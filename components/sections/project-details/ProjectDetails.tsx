export default function ProjectDetails() {
    return (
        <section className="py-16 lg:py-24 bg-[#0A0A15] relative border-t border-white/5">
            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Details</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">Understanding the core objectives and the impact of the AI-Trust initiative.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-card rounded-2xl p-8 border-white/5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">warning</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            Current autonomous driving systems rely on deep neural networks acting as "black boxes". This lack of transparency prevents regulatory approval and limits public trust in critical situations where understanding the AI's decision is paramount.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-8 border-t-2 border-t-primary shadow-[0_-10px_30px_-15px_rgba(108,99,255,0.3)] bg-[#161B26]/60">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary border border-primary/30">
                            <span className="material-symbols-outlined text-2xl">lightbulb</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            We developed a novel neuro-symbolic architecture that combines deep learning perception with rule-based logical reasoning. This hybrid approach allows the system to generate natural language explanations for its driving decisions in real-time.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-8 border-white/5">
                        <div className="w-12 h-12 rounded-xl bg-[#80E9D4]/10 flex items-center justify-center mb-6 text-[#80E9D4] border border-[#80E9D4]/20">
                            <span className="material-symbols-outlined text-2xl">trending_up</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">The Results</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            Achieved 94% accuracy in complex urban scenarios while providing verifiable explanations for 99% of critical maneuvers. The framework has been adopted by two major European automotive manufacturers for their next-gen prototypes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}