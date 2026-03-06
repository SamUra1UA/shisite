import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitHero from "@/components/sections/unit-details/UnitHero";
import UnitAbout from "@/components/sections/unit-details/UnitAbout";
import UnitAreas from "@/components/sections/unit-details/UnitAreas";
import UnitInfrastructure from "@/components/sections/unit-details/UnitInfrastructure";
import UnitProjects from "@/components/sections/unit-details/UnitProjects";
import UnitTeam from "@/components/sections/unit-details/UnitTeam";

export const metadata = {
    title: "Robotics Lab | R&D HUB | Системи штучного інтелекту",
};

export default function RoboticsLabPage() {
    return (
        <main>
            <Navbar />
            <UnitHero />
            <UnitAbout />
            <UnitAreas />
            <UnitInfrastructure />
            <UnitProjects />
            <UnitTeam />
            <Footer />
        </main>
    );
}