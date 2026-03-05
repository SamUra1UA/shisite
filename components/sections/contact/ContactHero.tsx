export default function ContactHero() {
    return (
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Наше фірмове фонове світіння по центру */}
            <div className="glow-sphere -top-20 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10 text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    <span className="gradient-text">Контакти</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    We are always open to communication. Reach out to us for collaboration, inquiries, or just to say hello.
                </p>
            </div>
        </section>
    );
}