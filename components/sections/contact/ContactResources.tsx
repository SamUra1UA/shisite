import Link from 'next/link';

export default function ContactResources() {
    return (
        <section className="py-24 bg-[#0F0F1A]">
            <div className="max-w-4xl mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Useful Resources</h2>

                <div className="space-y-6">
                    {/* YouTube */}
                    <Link href="#" className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl glass-card hover:border-primary/40 group transition-all border-white/5 gap-4">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                                <span className="material-symbols-outlined text-3xl">play_circle</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">YouTube Channel</h4>
                                <p className="text-sm text-gray-400 font-light">Lectures, webinars, and student projects</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors transform group-hover:translate-x-1 hidden sm:block">arrow_forward</span>
                    </Link>

                    {/* Hugging Face */}
                    <Link href="#" className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl glass-card hover:border-primary/40 group transition-all border-white/5 gap-4">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                                🤗
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">Hugging Face Profile</h4>
                                <p className="text-sm text-gray-400 font-light">Models and datasets created by our researchers</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors transform group-hover:translate-x-1 hidden sm:block">arrow_forward</span>
                    </Link>

                    {/* AI Digital Library */}
                    <Link href="#" className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl glass-card hover:border-primary/40 group transition-all border-white/5 gap-4">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                                <span className="material-symbols-outlined text-3xl">library_books</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">AI Digital Library</h4>
                                <p className="text-sm text-gray-400 font-light">Access to academic papers and department publications</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors transform group-hover:translate-x-1 hidden sm:block">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}