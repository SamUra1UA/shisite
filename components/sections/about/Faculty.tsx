import Image from 'next/image';
import Link from 'next/link';

const facultyMembers = [
    { img: 'https://via.placeholder.com/400x500', name: 'Dr. Ivan Petrenko', role: 'Head of Department' },
    { img: 'https://via.placeholder.com/400x500', name: 'Dr. Olena Koval', role: 'Associate Professor' },
    { img: 'https://via.placeholder.com/400x500', name: 'Maksym Shevchenko', role: 'Senior Lecturer' },
    { img: 'https://via.placeholder.com/400x500', name: 'Anna Boyko', role: 'Researcher' },
];

export default function Faculty() {
    return (
        <section className="section-spacing border-t border-white/5 bg-[#0A0A15]">
            <div className="container mx-auto px-8">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Faculty</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Our Academic Team</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facultyMembers.map((member, i) => (
                        <div key={i} className="flex flex-col group">
                            <div className="aspect-[4/5] rounded-[2rem] bg-[#0F0F1A] mb-6 overflow-hidden border border-white/5 relative">
                                <Image
                                    src={member.img}
                                    alt={`Portrait of ${member.name}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                            <h4 className="font-bold text-xl text-white mb-1">{member.name}</h4>
                            <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                            <div className="flex items-center gap-4 text-gray-500">
                                <Link href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[22px]">work</span></Link>
                                <Link href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[22px]">fingerprint</span></Link>
                                <Link href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[22px]">menu_book</span></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}