import Image from 'next/image';
import Link from 'next/link';

// Масив з даними викладачів для зручного керування
const teamMembers = [
    { img: 'https://via.placeholder.com/400x500', name: 'Oleksandr Petrenko', role: 'Professor, Head of Department' },
    { img: 'https://via.placeholder.com/400x500', name: 'Maria Kovalchuk', role: 'Associate Professor' },
    { img: 'https://via.placeholder.com/400x500', name: 'Ivan Symonenko', role: 'Senior Lecturer' },
    { img: 'https://via.placeholder.com/400x500', name: 'Natalia Boyko', role: 'PhD Student, Researcher' },
    { img: 'https://via.placeholder.com/400x500', name: 'Andriy Shevchenko', role: 'Professor' },
    { img: 'https://via.placeholder.com/400x500', name: 'Oksana Tkachenko', role: 'Assistant Professor' },
    { img: 'https://via.placeholder.com/400x500', name: 'Dmytro Bondarenko', role: 'Postdoc Researcher' },
    { img: 'https://via.placeholder.com/400x500', name: 'Yuliia Kravchenko', role: 'PhD Student' },
];

export default function TeamDirectory() {
    return (
        <>
            {/* Липкий блок пошуку та фільтрів */}
            <div className="bg-[#0F0F1A]/90 backdrop-blur-md py-8 border-b border-white/5 sticky top-24 z-40">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">

                        {/* Dropdown фільтр */}
                        <div className="relative w-full md:w-auto">
                            <select className="appearance-none bg-[#1A2133]/50 border border-white/10 text-white rounded-xl pl-5 pr-12 py-3 focus:outline-none focus:border-primary w-full md:w-64 transition-colors">
                                <option value="">All Labs/Units</option>
                                <option value="ai">AI Research Lab</option>
                                <option value="cv">Computer Vision Group</option>
                                <option value="nlp">NLP Unit</option>
                                <option value="robotics">Robotics Division</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>

                        {/* Пошук */}
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search by name or position..."
                                className="bg-[#1A2133]/50 border border-white/10 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary w-full placeholder-gray-500 transition-colors"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* Сітка команди */}
            <section className="section-spacing bg-[#0A0A15]">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="glass-card rounded-[2rem] p-6 transition-all duration-500 group flex flex-col h-full hover:border-primary/40">
                                <div className="aspect-[4/5] bg-[#0F0F1A] rounded-2xl overflow-hidden mb-6 relative border border-white/5">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium text-sm mb-6">{member.role}</p>
                                </div>

                                {/* Іконки соцмереж та профілів */}
                                <div className="pt-4 border-t border-white/10 flex gap-4 text-gray-400">
                                    <Link href="#" className="hover:text-primary transition-colors" title="ORCID">
                                        <span className="material-symbols-outlined text-[20px]">badge</span>
                                    </Link>
                                    <Link href="#" className="hover:text-primary transition-colors" title="Scopus">
                                        <span className="material-symbols-outlined text-[20px]">library_books</span>
                                    </Link>
                                    <Link href="#" className="hover:text-primary transition-colors" title="LinkedIn">
                                        <span className="material-symbols-outlined text-[20px]">share</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}