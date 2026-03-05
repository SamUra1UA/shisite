import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section className="section-spacing relative">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 block">Про кафедру</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">Наша Місія та Візія</h2>
                        <div className="space-y-8 text-gray-400 leading-relaxed text-lg font-light">
                            <p>Кафедра систем штучного інтелекту (СШІ) Інституту комп’ютерних наук та інформаційних технологій Національного університету «Львівська політехніка» здійснює підготовку висококваліфікованих фахівців у галузі штучного інтелекту.</p>
                            <p>Ми прагнемо створити екосистему, де академічні знання поєднуються з практичними дослідженнями та інноваціями, готуючи лідерів, здатних вирішувати найскладніші виклики сучасності за допомогою інтелектуальних систем.</p>
                        </div>
                        <div className="mt-14">
                            <Link href="#" className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-primary pb-2 hover:gap-5 transition-all uppercase text-xs tracking-[0.2em]">
                                Про нас <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square glass-card p-4 rounded-2xl relative w-full h-full min-h-[400px]">
                            <Image src="https://via.placeholder.com/600" alt="AIS Laboratory" fill className="object-cover rounded-xl grayscale opacity-80" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 glass-card p-12 rounded-xl border-primary/30 z-10">
                            <div className="text-5xl font-bold text-white">20+</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-3 font-bold">Років досвіду</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}