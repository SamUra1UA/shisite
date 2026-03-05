const forms = [
    { icon: 'record_voice_over', title: 'Guest Lectures', desc: 'Share industry insights, latest trends, and real-world case studies directly with our students to bridge the gap between theory and practice.' },
    { icon: 'menu_book', title: 'Dual Education', desc: 'Combine academic studies with practical work experience at your company. Help tailor our curriculum to meet your specific technical needs.' },
    { icon: 'hub', title: 'R&D Hub Sponsorship', desc: 'Invest in our laboratories and research hubs. Collaborate with faculty and top students on cutting-edge technological challenges.' },
];

export default function PartnershipForms() {
    return (
        <section className="w-full flex flex-col gap-12 py-8">
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Forms of Partnership</h3>
                <p className="text-gray-400 font-light leading-relaxed">Discover how we can collaborate to shape the future of technology and education.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {forms.map((form, i) => (
                    <div key={i} className="p-8 rounded-3xl glass-card border-white/5 flex flex-col items-start gap-4 hover:border-primary/40 transition-colors hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 border border-primary/20">
                            <span className="material-symbols-outlined text-3xl">{form.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white">{form.title}</h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                            {form.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}