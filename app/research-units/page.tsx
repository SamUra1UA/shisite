import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitsHero from "@/components/sections/research-units/UnitsHero";
import UnitsGrid from "@/components/sections/research-units/UnitsGrid";

export const metadata = {
    title: "Research Units | Системи штучного інтелекту",
};

export default function ResearchUnitsPage() {
    return (
        <main>
            <Navbar />
            <UnitsHero />
            <UnitsGrid />
            <Footer />
        </main>
    );
}