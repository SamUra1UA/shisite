import Image from 'next/image';
import Link from 'next/link';

const programsData = [
    {
        level: "Bachelor's Degree",
        title: "122 Computer Science",
        subtitle: "Artificial Intelligence Systems",
        img: "https://via.placeholder.com/800x600",
        bullets: [
            "A foundational program covering algorithm design, OOP principles, databases, web technologies, machine learning, and computer graphics.",
            "From the first term, students learn to work in a team on projects. Already in the 2nd year, each is assigned a mentor from top IT companies.",
            "Special attention is paid to the English language and essential soft skills required for modern tech environments."
        ]
    },
    {
        level: "Master's Degree",
        title: "122 Computer Science (MSc)",
        subtitle: "Applied Artificial Intelligence",
        img: "https://via.placeholder.com/800x600",
        bullets: [
            "Advanced study of neural networks, deep learning architectures, natural language processing, and computer vision.",
            "Research-oriented approach with opportunities to publish papers and participate in international AI conferences.",
            "Practical implementation of complex AI solutions for real business problems provided by our corporate partners."
        ]
    },
    {
        level: "PhD Program",
        title: "122 Computer Science (PhD)",
        subtitle: "Intelligent Systems Research",
        img: "https://via.placeholder.com/800x600",
        bullets: [
            "Cutting-edge research in specialized fields of artificial intelligence, contributing novel algorithms and methodologies to the scientific community.",
            "Teaching experience and academic mentorship, preparing for a career in academia or high-level industrial R&D.",
            "International collaboration opportunities through grants and exchange programs with leading global research institutions."
        ]
    }
];

export default function Programs() {
    return (
        <section className="bg-[#0A0A15] py-24 relative">
            <div className="container mx-auto px-8 space-y-40">

                {programsData.map((prog, index) => {
                    const isReverse = index % 2 !== 0; // Зміна сторін для Магістратури (або будь-якого парного елемента)

                    return (
                        <div key={index} className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                            {/* Текстовий блок */}
                            <div className="lg:w-1/2 relative">
                                {/* Вертикальна лінія градієнта */}
                                <div className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary to-transparent ${isReverse ? 'left-0 lg:hidden' : 'left-0 ml-3'}`}></div>

                                <div className={`relative ${isReverse ? 'pl-12 lg:pl-0 lg:pr-12' : 'pl-12'}`}>
                                    <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3 block opacity-80">CURRICULUM</span>
                                    <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">{prog.level}</h2>

                                    <div className="space-y-10 relative">
                                        {prog.bullets.map((bullet, i) => (
                                            <div key={i} className="flex gap-6">
                                                <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 ring-4 ring-primary/20 ${isReverse ? '-ml-[3.15rem] lg:hidden' : '-ml-[3.15rem]'}`}></div>
                                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                                    {bullet}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 flex flex-wrap items-center gap-8">
                                        <Link href="#" className="gradient-bg px-8 py-4 text-xs tracking-widest uppercase font-bold rounded-full text-white hover:brightness-110 transition-all shadow-[0_0_20px_rgba(108,99,255,0.3)]">
                                            About admission
                                        </Link>
                                        <Link href="#" className="text-gray-400 hover:text-white inline-flex items-center font-medium transition-colors gap-2 text-sm uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-xl">link</span>
                                            More about the program
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Блок з картинкою */}
                            <div className="lg:w-1/2 w-full">
                                <div className="glass-card rounded-[2.5rem] p-4 shadow-2xl group transition-transform duration-500 hover:-translate-y-2 border-white/5">
                                    <div className="aspect-video bg-[#0F0F1A] rounded-[2rem] overflow-hidden mb-6 relative">
                                        <Image
                                            src={prog.img}
                                            alt={prog.level}
                                            fill
                                            className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="px-6 pb-6">
                                        <h3 className="text-2xl font-bold text-white mb-1">{prog.title}</h3>
                                        <p className="text-primary font-bold opacity-80 uppercase tracking-widest text-[10px]">{prog.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}