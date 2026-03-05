import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0A0A15] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-4 mb-10">
                            {/* Лого у футері */}
                            <div className="w-14 h-14 border border-primary/40 rounded-full flex items-center justify-center bg-[#0F0F1A] overflow-hidden relative">
                                <Image
                                    src="/ai-logo.svg"
                                    alt="AIS Logo"
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-2xl font-bold tracking-tight uppercase leading-none block">Artificial intelligence</span>
                                <span className="text-gray-500 text-lg">system</span>
                            </div>
                        </div>
                        <div className="mb-10">
                            <Link href="/applicants" className="btn-admission inline-flex items-center px-10 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                                About admission
                            </Link>
                        </div>
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">social_leaderboard</span></Link>
                            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">camera_alt</span></Link>
                            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">send</span></Link>
                            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">movie</span></Link>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">Information</h5>
                        {/* Синхронізовані посилання з Navbar */}
                        <ul className="space-y-6 text-sm font-light text-gray-500">
                            <li><Link href="/" className="hover:text-white transition-colors">Main</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
                            <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
                            <li><Link href="/applicants" className="hover:text-white transition-colors">For applicant</Link></li>
                            <li><Link href="/rnd" className="hover:text-white transition-colors">R&D Hub</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4">
                        <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">Contact</h5>
                        <ul className="space-y-8">
                            <li className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="material-symbols-outlined text-primary/60 text-lg">mail</span>
                                <a href="mailto:ai.dept@lpnu.ua" className="hover:text-white">ai.dept@lpnu.ua</a>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="material-symbols-outlined text-primary/60 text-lg">location_on</span>
                                <span>str. Knyazya Romana 5, № 20</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
                    <p>© 2024 AIS DEPT. NATIONAL UNIVERSITY LVIV POLYTECHNIC</p>
                    <div className="flex gap-12">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}