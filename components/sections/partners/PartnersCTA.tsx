export default function PartnersCTA() {
    return (
        <section className="w-full rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/20 relative overflow-hidden bg-[#0A0A15]">
            {/* Декоративні сфери */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#80E9D4]/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Ready to shape the future of IT?</h3>
                    <p className="text-gray-400 font-light max-w-xl leading-relaxed">
                        Join our network of industry leaders. Let's create impactful educational programs and innovative research together.
                    </p>
                </div>

                <button className="flex-shrink-0 gradient-bg text-white font-bold py-5 px-10 rounded-2xl hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 uppercase tracking-widest text-xs">
                    Become a Partner
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}