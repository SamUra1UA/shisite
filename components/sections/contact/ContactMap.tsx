import Image from 'next/image';

export default function ContactMap() {
    return (
        <section className="w-full h-[450px] relative overflow-hidden border-y border-white/5">
            {/* Фонова карта (можна замінити на інтерактивний iframe Google Maps пізніше) */}
            <div className="absolute inset-0 bg-[#0F0F1A]">
                <Image
                    src="https://via.placeholder.com/1920x800"
                    alt="Map Background"
                    fill
                    className="object-cover opacity-20 grayscale"
                />
            </div>

            {/* Оверлей з інформацією */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400 bg-[#0F0F1A]/40 backdrop-blur-[2px] z-10 p-4 text-center">
                <div className="w-16 h-16 rounded-full glass-card border-white/10 flex items-center justify-center mb-4 text-primary">
                    <span className="material-symbols-outlined text-3xl">map</span>
                </div>
                <p className="text-xl font-bold text-white">Interactive Location Map</p>
                <p className="text-sm mt-2 opacity-80 font-light">str. Knyazya Romana 5, Lviv, Ukraine</p>

                <a
                    href="https://maps.google.com/?q=Knyazya+Romana+5,+Lviv,+Ukraine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold text-white"
                >
                    Open in Google Maps
                </a>
            </div>
        </section>
    );
}