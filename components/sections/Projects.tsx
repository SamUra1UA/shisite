import Image from 'next/image';
import Link from 'next/link';

const projects = [
    { img: 'https://via.placeholder.com/600x400', tag: 'Natural Resources AI', title: 'Krona', desc: 'Інтелектуальна система моніторингу лісових насаджень за супутниковими знімками.' },
    { img: 'https://via.placeholder.com/600x400', tag: 'Computer Vision', title: 'Good Pets', desc: 'Платформа для пошуку та адопції тварин з використанням AI-алгоритмів підбору.' },
    { img: 'https://via.placeholder.com/600x400', tag: 'Recommender Systems', title: 'FlatBuddy', desc: 'Сервіс пошуку житла та сусідів на основі аналізу психологічної сумісності.' },
];

export default function Projects() {
    return (
        <section className="section-spacing bg-[#0A0A15]">
            <div className="container mx-auto px-8">
                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Проєкти та розробки</h2>
                    <p className="text-gray-400 max-w-2xl text-lg font-light">Результати наукової та практичної діяльності наших студентів та викладачів.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {projects.map((proj, i) => (
                        <div key={i} className="group">
                            <div className="relative overflow-hidden rounded-2xl bg-[#0F0F1A] mb-8 border border-white/5 h-80">
                                <Image src={proj.img} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{proj.tag}</span>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{proj.title}</h4>
                            <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed">{proj.desc}</p>
                            <Link href="#" className="text-white font-bold text-[10px] uppercase tracking-[0.25em] border-b border-white/10 pb-1">
                                Переглянути проєкт
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}