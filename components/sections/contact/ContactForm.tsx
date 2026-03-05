export default function ContactForm() {
    return (
        <div className="glass-card p-8 lg:p-10 rounded-3xl relative border-white/5 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white relative z-10">Send a Message</h3>

            <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="block w-full rounded-xl bg-[#0F0F1A]/50 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all p-4 outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            className="block w-full rounded-xl bg-[#0F0F1A]/50 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all p-4 outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <div className="relative">
                        <select
                            id="subject"
                            className="block w-full rounded-xl bg-[#0F0F1A]/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all p-4 appearance-none outline-none"
                        >
                            <option className="bg-[#0F0F1A]">Admission Inquiry</option>
                            <option className="bg-[#0F0F1A]">Partnership</option>
                            <option className="bg-[#0F0F1A]">General Question</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="How can we help you?"
                        className="block w-full rounded-xl bg-[#0F0F1A]/50 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all p-4 outline-none resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-6 rounded-xl text-white font-bold gradient-bg hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all transform hover:-translate-y-0.5"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}