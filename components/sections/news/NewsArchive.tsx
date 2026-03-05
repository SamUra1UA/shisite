import Image from 'next/image';
import Link from 'next/link';

const newsList = [
    { date: 'Sep 28, 2024', title: 'Department wins national AI research grant', desc: 'The AIS department was awarded a significant grant to further research in natural language processing.', img: 'https://via.placeholder.com/600x400' },
    { date: 'Sep 15, 2024', title: 'New partnership with global tech leaders', desc: 'A new memorandum has been signed to provide students with internship opportunities at top AI companies.', img: 'https://via.placeholder.com/600x400' },
    { date: 'Sep 02, 2024', title: 'Welcome to the new academic year', desc: 'Welcoming our largest cohort of freshers yet to the Artificial Intelligence Systems program.', img: 'https://via.placeholder.com/600x400' },
    { date: 'Aug 20, 2024', title: 'Alumni spotlight: Impactful AI startups', desc: 'Interview with recent graduates who successfully secured seed funding for their computer vision startup.', img: 'https://via.placeholder.com/600x400' },
];

export default function NewsArchive() {
    return (
        <section className="py-24 bg-[#0F0F1A] border-t border-white/5">
            <div className="container mx-auto px-8">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">News & Archive</h2>
                        <div className="h-1 w-20 gradient-bg rounded-full"></div>
                    </div>
                    <Link href="#" className="text-primary font-bold hover:text-white flex items-center gap-2 group transition-colors uppercase text-xs tracking-widest">
                        View all news
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newsList.map((news, i) => (
                        <Link href="#" key={i} className="group cursor-pointer flex flex-col h-full">
                            <div className="aspect-video rounded-2xl bg-[#1A1C26] border border-white/5 mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/20 to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity"></div>
                                <Image
                                    src={news.img}
                                    alt={news.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <span className="absolute bottom-4 left-4 z-20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-md border border-white/10">
                  {news.date}
                </span>
                            </div>
                            <h4 className="font-bold text-lg text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                {news.title}
                            </h4>
                            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed font-light flex-grow">
                                {news.desc}
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}