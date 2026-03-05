const team = [
    { name: 'Dr. Olena Koval', role: 'Principal Investigator', desc: 'Assoc. Prof., AIS Department' },
    { name: 'Maksym Shevchenko', role: 'Lead ML Engineer', desc: 'PhD Candidate', highlight: true },
    { name: 'Iryna Boyko', role: 'Research Assistant', desc: "Master's Student" },
    { name: 'Andriy Tkach', role: 'Systems Architect', desc: 'External Collaborator' },
];

export default function ProjectTeam() {
    return (
        <section className="py-16 lg:py-24 bg-[#0A0A15] border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research Team</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">The brilliant minds behind the Horizon Europe: AI-Trust project.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className={`w-24 h-24 rounded-full bg-[#0F0F1A] border-2 ${member.highlight ? 'border-[#80E9D4]/50' : 'border-primary/30'} mb-4 overflow-hidden relative group-hover:border-primary transition-colors flex items-center justify-center`}>
                                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${member.highlight ? 'bg-[#80E9D4]' : 'bg-primary'}`}></div>
                                <span className="material-symbols-outlined text-4xl text-gray-500">person</span>
                            </div>
                            <h4 className="text-lg font-bold text-white">{member.name}</h4>
                            <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 mb-2 ${member.highlight ? 'text-[#80E9D4]' : 'text-primary'}`}>
                                {member.role}
                            </p>
                            <p className="text-xs text-gray-400 font-light">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}