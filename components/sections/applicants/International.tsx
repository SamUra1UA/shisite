import Image from 'next/image';

export default function International() {
    return (
        <section className="bg-[#0F0F1A] border-y border-white/5 py-24">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">International Opportunities</h3>
                    <p className="text-gray-400 text-lg font-light">Erasmus+ Partners & Double Diploma Programs</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-80 transition-opacity duration-500">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 relative h-16 w-full">
                            {/* Замініть на реальні логотипи */}
                            <Image
                                src={`https://via.placeholder.com/200x80?text=Partner+${item}`}
                                alt={`Partner ${item}`}
                                fill
                                className="object-contain invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}