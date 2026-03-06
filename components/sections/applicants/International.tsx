import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function International() {
    const t = useTranslations('International');

    return (
        <section className="bg-[#0F0F1A] border-y border-white/5 py-24">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">{t('title')}</h3>
                    <p className="text-gray-400 text-lg font-light">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 relative h-16 w-full">
                            <Image
                                src={`https://placehold.co/200x80/0F0F1A/6C63FF?text=Partner+${item}`}
                                alt={`Partner ${item}`}
                                fill
                                unoptimized // Додайте цей рядок
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}