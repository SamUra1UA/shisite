export default function MissionVision() {
    return (
        <section className="section-spacing border-y border-white/5 bg-[#0A0A15]">
            <div className="container mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-16 md:gap-32">
                    <div>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-8 border border-primary/20">
                            <span className="material-symbols-outlined text-3xl">track_changes</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            To cultivate a dynamic academic environment that fosters cutting-edge research, innovative thinking, and practical application in the field of Artificial Intelligence. We strive to empower students with theoretical foundations and practical skills.
                        </p>
                    </div>
                    <div>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-8 border border-primary/20">
                            <span className="material-symbols-outlined text-3xl">visibility</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            To be a globally recognized center of excellence in Artificial Intelligence education and research, driving technological advancement and contributing to a smarter, more sustainable society through ethical AI solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}