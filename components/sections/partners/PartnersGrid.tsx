import Image from 'next/image';

const partners = [
    { name: 'SOMATIC', desc: 'Joint R&D in Computer Vision & Robotics.', tags: [{ icon: 'science', text: 'Спільні проєкти', type: 'primary' }, { icon: 'work', text: 'Стажування', type: 'indigo' }], img: 'https://via.placeholder.com/200x100?text=SOMATIC' },
    { name: 'Vast.ai', desc: 'Cloud GPU infrastructure for AI research.', tags: [{ icon: 'cloud', text: 'Спільні проєкти', type: 'primary' }], img: 'https://via.placeholder.com/200x100?text=Vast.ai' },
    { name: 'N-iX', desc: 'Software engineering and data analytics partnerships.', tags: [{ icon: 'work', text: 'Стажування', type: 'indigo' }], img: 'https://via.placeholder.com/200x100?text=N-iX' },
    { name: 'SoftServe', desc: 'IT Academy integration and dual education.', tags: [{ icon: 'school', text: 'Дуальна освіта', type: 'primary' }, { icon: 'work', text: 'Вакансії', type: 'indigo' }], img: 'https://via.placeholder.com/200x100?text=SoftServe' },
    { name: 'Google', desc: 'Academic programs and cloud certifications.', tags: [{ icon: 'cast_for_education', text: 'Гостьові лекції', type: 'primary' }], img: 'https://via.placeholder.com/200x100?text=Google' },
    { name: 'NVIDIA', desc: 'Deep Learning Institute partnerships.', tags: [{ icon: 'science', text: 'Спільні проєкти', type: 'primary' }], img: 'https://via.placeholder.com/200x100?text=NVIDIA' },
    { name: 'EPAM', desc: 'University program and lab sponsorships.', tags: [{ icon: 'work', text: 'Стажування', type: 'indigo' }], img: 'https://via.placeholder.com/200x100?text=EPAM' },
    { name: 'GlobalLogic', desc: 'Embedded systems and IoT curriculum development.', tags: [{ icon: 'school', text: 'Дуальна освіта', type: 'primary' }], img: 'https://via.placeholder.com/200x100?text=GlobalLogic' },
    { name: 'Ciklum', desc: 'Student projects and tech talks.', tags: [{ icon: 'work', text: 'Вакансії', type: 'indigo' }], img: 'https://via.placeholder.com/200x100?text=Ciklum' },
    { name: 'Eleks', desc: 'Data Science camp and R&D collaboration.', tags: [{ icon: 'science', text: 'Спільні проєкти', type: 'primary' }], img: 'https://via.placeholder.com/200x100?text=Eleks' },
];

export default function PartnersGrid() {
    return (
        <section className="w-full flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Our Industrial Partners</h2>
                    <p className="text-gray-400 font-light">Driving innovation through collaboration.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {partners.map((partner, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-2xl glass-card aspect-square md:aspect-[4/3] flex items-center justify-center p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(108,99,255,0.15)] border-white/5">

                        {/* Логотип */}
                        <div className="w-full h-full relative opacity-60 grayscale group-hover:opacity-10 transition-all duration-500">
                            <Image src={partner.img} alt={partner.name} fill className="object-contain" />
                        </div>

                        {/* Оверлей при наведенні */}
                        <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#0F0F1A]/95 backdrop-blur-sm translate-y-4 group-hover:translate-y-0">
                            <div>
                                <h4 className="font-bold text-lg text-white mb-1">{partner.name}</h4>
                                <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">{partner.desc}</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-auto">
                                {partner.tags.map((tag, j) => (
                                    <span key={j} className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${tag.type === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-[#80E9D4]/10 text-[#80E9D4] border-[#80E9D4]/20'}`}>
                    <span className="material-symbols-outlined text-[14px]">{tag.icon}</span>
                                        {tag.text}
                  </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}