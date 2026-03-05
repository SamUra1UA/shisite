import Image from 'next/image';

export default function PartnersHero() {
    return (
        <section className="w-full relative overflow-hidden rounded-3xl min-h-[480px] flex items-center justify-center p-8 border border-white/5 mt-8">
            {/* Фонове зображення */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://via.placeholder.com/1920x800"
                    alt="Technology grid background"
                    fill
                    className="object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F1A]/95 to-primary/20"></div>
            </div>

            {/* Декоративне світіння */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.2),transparent_50%)] z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-widest uppercase font-bold mb-2 shadow-[0_0_20px_rgba(108,99,255,0.15)]">
                    <span className="material-symbols-outlined text-[16px]">handshake</span>
                    Industry Synergy
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                    Партнери та <br />співпраця
                </h1>

                <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                    Empowering the next generation of tech leaders through strategic industrial synergy and unparalleled career opportunities at Lviv Polytechnic.
                </p>
            </div>
        </section>
    );
}