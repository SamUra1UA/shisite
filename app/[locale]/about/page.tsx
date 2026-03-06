import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MissionVision from "@/components/sections/about/MissionVision";
import ResearchDirections from "@/components/sections/about/ResearchDirections";
import Faculty from "@/components/sections/about/Faculty";

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <MissionVision />
            <ResearchDirections />
            <Faculty />
            <Footer />
        </main>
    );
}