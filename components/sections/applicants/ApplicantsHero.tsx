export default function ApplicantsHero() {
    return (
        <section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32 overflow-hidden flex items-center min-h-[50vh]">
            {/* Сфери з нашого globals.css */}
            <div className="glow-sphere -top-40 -left-40 opacity-70"></div>
            <div className="glow-sphere bottom-0 -right-40 opacity-50"></div>

            {/* Декоративна сітка */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#6C63FF 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-8 relative z-10 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Освітні<br/>
                    <span className="gradient-text">програми</span>
                </h1>
                <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
                    Explore our comprehensive curriculum designed to prepare the next generation of artificial intelligence leaders. We offer degrees at every level of higher education.
                </p>
            </div>
        </section>
    );
}