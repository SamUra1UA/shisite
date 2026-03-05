export default function UnitAbout() {
    return (
        <section className="py-24 bg-[#0A0A15] relative border-t border-white/5">
            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">About the Lab</h2>
                        <p className="text-gray-400 font-light leading-relaxed mb-6">
                            The Robotics Lab at the Department of Artificial Intelligence Systems is a state-of-the-art facility dedicated to advancing the field of robotics. We focus on bridging the gap between theoretical AI models and their physical embodiment in robotic systems.
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Our researchers and students collaborate on cutting-edge projects, pushing the boundaries of what machines can perceive, understand, and interact with in the real world.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Mission</h2>
                        <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary border-y-white/5 border-r-white/5">
                            <p className="text-lg text-white font-medium italic leading-relaxed">
                                &#34;To develop intelligent, autonomous, and safe robotic systems that augment human capabilities and solve complex real-world challenges across various industries.&#34;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}