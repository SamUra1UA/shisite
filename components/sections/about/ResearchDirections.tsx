const researchTopics = [
    { icon: 'psychology', title: 'Machine Learning & Deep Learning', desc: 'Developing advanced neural network architectures, optimizing algorithms for pattern recognition, and applying deep learning to complex data sets.' },
    { icon: 'visibility', title: 'Computer Vision', desc: 'Image processing, object detection, facial recognition, and medical image analysis using state-of-the-art vision models.' },
    { icon: 'chat', title: 'Natural Language Processing', desc: 'Text analysis, sentiment classification, machine translation, and development of conversational AI systems and LLM applications.' },
    { icon: 'monitoring', title: 'Data Science & Analytics', desc: 'Big data processing, predictive modeling, statistical analysis, and extracting actionable insights from complex datasets.' },
    { icon: 'smart_toy', title: 'Robotics & Automation', desc: 'Autonomous systems, reinforcement learning for control, and intelligent robotic perception in dynamic environments.' },
    { icon: 'hub', title: 'IoT & Edge AI', desc: 'Deploying machine learning models on resource-constrained devices, sensor networks, and smart city infrastructure.' },
];

export default function ResearchDirections() {
    return (
        <section className="section-spacing relative">
            <div className="container mx-auto px-8">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Research Directions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {researchTopics.map((topic, i) => (
                        <div key={i} className="group p-10 rounded-3xl glass-card hover:border-primary/50">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-primary/20">
                                <span className="material-symbols-outlined text-3xl">{topic.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{topic.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                {topic.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Окрема картка знизу по центру */}
                <div className="mt-6 flex justify-center">
                    <div className="group p-10 rounded-3xl glass-card max-w-md w-full hover:border-primary/50">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-primary/20">
                            <span className="material-symbols-outlined text-3xl">security</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">AI Security & Ethics</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Ensuring robustness of AI models against adversarial attacks, fairness, explainability, and ethical deployment of AI.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}