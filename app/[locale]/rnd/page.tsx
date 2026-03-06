import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RndHero from "@/components/sections/rnd/RndHero";
import ResearchUnits from "@/components/sections/rnd/ResearchUnits";
import OngoingProjects from "@/components/sections/rnd/OngoingProjects";

export const metadata = {
    title: "R&D HUB | Системи штучного інтелекту",
};

export default function RndPage() {
    return (
        <main>
            <Navbar />
            <RndHero />
            <OngoingProjects />
            <Footer />
        </main>
    );
}