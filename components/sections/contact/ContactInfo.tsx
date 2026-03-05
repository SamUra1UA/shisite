import Link from 'next/link';

export default function ContactInfo() {
    return (
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Get in Touch</h2>

            <div className="space-y-10">
                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-3xl">location_on</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-1 text-white">Address</h4>
                        <p className="text-gray-400 font-light leading-relaxed">
                            str. Knyazya Romana 5, № 20<br />
                            Lviv, Ukraine, 79000
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-3xl">email</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-1 text-white">Email</h4>
                        <a href="mailto:ai.dept@lpnu.ua" className="text-gray-400 font-light hover:text-primary transition-colors text-lg">
                            ai.dept@lpnu.ua
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-3xl">phone</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-1 text-white">Phone</h4>
                        <a href="tel:+380322582000" className="text-gray-400 font-light hover:text-primary transition-colors text-lg">
                            +38 (032) 258-20-00
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h4 className="text-lg font-bold mb-6 text-white">Follow Us</h4>
                <div className="flex gap-4">
                    {['Fb', 'Ig', 'Yt', 'Tg'].map((social, i) => (
                        <Link
                            key={i}
                            href="#"
                            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all transform hover:-translate-y-1"
                        >
                            <span className="text-sm font-bold">{social}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}