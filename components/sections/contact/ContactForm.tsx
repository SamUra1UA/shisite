import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('ContactForm');

    return (
        <div className="glass-card p-8 lg:p-10 rounded-3xl relative border-white/5 overflow-hidden bg-[#0F0F1A]/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
            {/* Фонове декоративне світіння */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white relative z-10 tracking-tight">
                {t('title')}
            </h3>

            <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 ml-1">
                            {t('labels.name')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t('placeholders.name')}
                            className="block w-full rounded-xl bg-[#0A0A15]/80 border border-white/10 text-white placeholder-gray-600 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all p-4 outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 ml-1">
                            {t('labels.email')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t('placeholders.email')}
                            className="block w-full rounded-xl bg-[#0A0A15]/80 border border-white/10 text-white placeholder-gray-600 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all p-4 outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 ml-1">
                        {t('labels.subject')}
                    </label>
                    <div className="relative">
                        <select
                            id="subject"
                            className="block w-full rounded-xl bg-[#0A0A15]/80 border border-white/10 text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all p-4 appearance-none outline-none cursor-pointer"
                        >
                            <option className="bg-[#0F0F1A]">{t('subjects.admission')}</option>
                            <option className="bg-[#0F0F1A]">{t('subjects.partnership')}</option>
                            <option className="bg-[#0F0F1A]">{t('subjects.general')}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 ml-1">
                        {t('labels.message')}
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder={t('placeholders.message')}
                        className="block w-full rounded-xl bg-[#0A0A15]/80 border border-white/10 text-white placeholder-gray-600 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all p-4 outline-none resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-6 rounded-xl text-white font-bold gradient-bg hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
                >
                    {t('submit')}
                </button>
            </form>
        </div>
    );
}