import Image from 'next/image';

const projects = [
    {
        img: "https://via.placeholder.com/800x600",
        tag: "AI Lab",
        hosted: true,
        title: "Horizon Europe: AI-Trust",
        desc: "Developing explainable AI models for critical decision-making systems in autonomous vehicles."
    },
    {
        img: "https://via.placeholder.com/800x600",
        tag: "Robotics Lab",
        hosted: false,
        title: "Erasmus+ SmartAgri",
        desc: "Automated drone swarms for precision agriculture and crop health monitoring."
    },
    {
        img: "https://via.placeholder.com/800x600",
        tag: "Data Science",
        hosted: true,
        title: "Global Health Predictor",
        desc: "Predictive modeling of epidemiological spread using multi-modal global datasets."
    }
];

export default function OngoingProjects() {
    return (
        <section className="py-24" id="projects">
            <div className="container mx-auto px-8">

                {/* Заголовок та фільтри */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ongoing Projects</h2>
                        <p className="text-lg text-gray-400 max-w-2xl font-light">Explore the innovative solutions developed by our teams.</p>
                    </div>

                    <div className="flex overflow-x-auto pb-2 space-x-2 border-b border-white/10 hide-scrollbar">
                        <button className="px-6 py-3 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap transition-colors">International</button>
                        <button className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white whitespace-nowrap transition-colors">National</button>
                        <button className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white whitespace-nowrap transition-colors">Industrial</button>
                        <button className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white whitespace-nowrap transition-colors">Student</button>
                    </div>
                </div>

                {/* Сітка проєктів */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <div key={i} className="glass-card rounded-3xl overflow-hidden flex flex-col group border-white/5">
                            <div className="relative overflow-hidden h-56 bg-[#0F0F1A]">
                                <Image
                                    src={proj.img}
                                    alt={proj.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] to-transparent opacity-80"></div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col relative z-10 -mt-6">
                                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
                    {proj.tag}
                  </span>

                                    {proj.hosted && (
                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#34D399] bg-[#34D399]/10 px-3 py-1 rounded-full border border-[#34D399]/20">
                      <span className="material-symbols-outlined text-[14px]">cloud_done</span> Hosted on AIS
                    </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
                                <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed font-light">
                                    {proj.desc}
                                </p>

                                <button className="w-full py-4 px-6 gradient-bg text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-[0_4px_14px_rgba(108,99,255,0.2)] hover:shadow-[0_8px_25px_rgba(108,99,255,0.4)] transition-all duration-300">
                                    Join Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}