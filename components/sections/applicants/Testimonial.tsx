import Image from 'next/image';

export default function Testimonial() {
    return (
        <section className="bg-[#0A0A15] py-32 relative overflow-hidden">
            {/* Фоновий глоу суто для цієї секції */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Student Experience</h2>
                </div>

                <div className="relative glass-card rounded-[3rem] p-10 md:p-16 border border-white/10 max-w-5xl mx-auto shadow-2xl">
                    <div className="absolute top-12 left-12 text-primary/30">
                        <span className="material-symbols-outlined text-8xl">format_quote</span>
                    </div>

                    <div className="relative z-10">
                        <p className="text-2xl md:text-3xl text-gray-200 font-medium italic mb-12 leading-relaxed">
                            "The curriculum perfectly balances theoretical foundations with practical project work. The mentorship program was a game-changer for my career, allowing me to transition smoothly into a middle engineering role right after graduation."
                        </p>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-[#0F0F1A] overflow-hidden ring-4 ring-primary/20 relative">
                                    <Image
                                        src="https://via.placeholder.com/150x150"
                                        alt="Anna Shevchenko"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Anna Shevchenko</h4>
                                    <p className="text-primary text-sm font-semibold">Master's Student, Data Scientist</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-all">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <button className="w-14 h-14 rounded-full gradient-bg text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-all">
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}