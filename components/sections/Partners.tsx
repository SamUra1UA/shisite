import Image from 'next/image';

export default function Partners() {
    return (
        <section className="py-24 bg-[#0F0F1A]">
            <div className="container mx-auto px-8">
                <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-gray-600 mb-16">Наші стратегічні партнери</p>
                <div className="flex flex-wrap items-center justify-between gap-12 grayscale opacity-30 hover:opacity-100 transition-all duration-700">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="h-10 w-32 relative invert">
                            <Image src={`https://via.placeholder.com/150x50?text=Partner+${item}`} alt={`Partner ${item}`} fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}