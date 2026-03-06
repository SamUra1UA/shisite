import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactResources from "@/components/sections/contact/ContactResources";

export const metadata = {
    title: "Контакти | Системи штучного інтелекту",
};

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <ContactHero />

            <section className="py-16 lg:py-24 relative bg-[#0A0A15]">
                <div className="container mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            <ContactMap />
            <ContactResources />

            <Footer />
        </main>
    );
}