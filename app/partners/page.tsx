import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/sections/partners/PartnersHero";
import PartnersGrid from "@/components/sections/partners/PartnersGrid";
import PartnershipForms from "@/components/sections/partners/PartnershipForms";
import PartnersCTA from "@/components/sections/partners/PartnersCTA";

export const metadata = {
    title: "Партнери | Системи штучного інтелекту",
};

export default function PartnersPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-24 pb-12 flex flex-col gap-16 container mx-auto px-8">
                <PartnersHero />
                <PartnersGrid />
                <PartnershipForms />
                <PartnersCTA />
            </div>
            <Footer />
        </main>
    );
}