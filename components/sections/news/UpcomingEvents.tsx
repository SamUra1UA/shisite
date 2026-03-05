import Image from 'next/image';
import Link from 'next/link';

const events = [
    {
        day: '15',
        month: 'Oct',
        category: 'Student',
        time: '10:00 AM - 6:00 PM',
        location: 'Tech Hub, Campus A',
        title: 'AI Hackathon: Future Solutions',
        desc: 'Join us for a 48-hour challenge to build innovative AI applications. Open to all students. Form your teams and compete for amazing prizes while solving real-world problems.',
        img: 'https://via.placeholder.com/800x600',
        btnText: 'Register Now',
        btnStyle: 'gradient-bg text-white shadow-[0_0_20px_rgba(108,99,255,0.3)] border-none'
    },
    {
        day: '22',
        month: 'Nov',
        category: 'Scientific',
        time: '09:00 AM - 5:00 PM',
        location: 'Main Auditorium',
        title: 'International Conference on Machine Learning',
        desc: 'Annual gathering of researchers presenting the latest advancements in ML and deep learning. Features keynote speakers from top tech companies and academic institutions.',
        img: 'https://via.placeholder.com/800x600',
        btnText: 'View Details',
        btnStyle: 'border border-white/20 text-white hover:bg-white/5'
    },
    {
        day: '05',
        month: 'Dec',
        category: 'Student',
        time: '2:00 PM - 5:00 PM (Online)',
        location: 'Online / Zoom',
        title: 'Workshop: Intro to Neural Networks',
        desc: 'A hands-on workshop covering the basics of neural networks using PyTorch. Bring your laptops! We will build a simple image classifier from scratch.',
        img: 'https://via.placeholder.com/800x600',
        btnText: 'Register Now',
        btnStyle: 'gradient-bg text-white shadow-[0_0_20px_rgba(108,99,255,0.3)] border-none'
    }
];

export default function UpcomingEvents() {
    return (
        <section className="py-16 bg-[#0A0A15]">
            <div className="container mx-auto px-8">

                {/* Хедер секції та фільтри */}
                <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Events</h2>
                        <p className="text-gray-400 font-light">Discover opportunities to learn, network, and advance your AI journey with our curated events.</p>
                    </div>

                    <div className="flex gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 w-full sm:w-auto overflow-x-auto hide-scrollbar">
                        <button className="flex-1 sm:flex-none px-8 py-2.5 rounded-xl gradient-bg text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all whitespace-nowrap">All Events</button>
                        <button className="flex-1 sm:flex-none px-8 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all whitespace-nowrap">Scientific</button>
                        <button className="flex-1 sm:flex-none px-8 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all whitespace-nowrap">Student</button>
                    </div>
                </div>

                {/* Список подій */}
                <div className="space-y-8">
                    {events.map((event, i) => (
                        <div key={i} className="glass-card rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-500 flex flex-col md:flex-row border-white/5">

                            <div className="w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto relative overflow-hidden flex-shrink-0 bg-[#0F0F1A]">
                                <Image
                                    src={event.img}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <div className="absolute top-6 left-6 bg-[#0F0F1A]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-center min-w-[64px]">
                                    <span className="block text-primary font-bold text-2xl leading-tight">{event.day}</span>
                                    <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest">{event.month}</span>
                                </div>
                            </div>

                            <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${event.category === 'Student' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-white/10 text-white border border-white/20'}`}>
                      {event.category}
                    </span>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                                        {event.desc}
                                    </p>
                                </div>

                                <div className="flex justify-start">
                                    <Link href="#" className={`inline-flex items-center px-8 py-3.5 text-xs tracking-widest uppercase font-bold rounded-xl transition-all group/btn ${event.btnStyle}`}>
                                        {event.btnText}
                                        <span className="material-symbols-outlined ml-2 text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-4 border border-white/10 rounded-2xl text-xs uppercase tracking-widest font-bold text-white hover:bg-white/5 transition-all">
                        Load More Events
                    </button>
                </div>

            </div>
        </section>
    );
}