import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/sections/project-details/ProjectHero";
import ProjectDetails from "@/components/sections/project-details/ProjectDetails";
import ProjectFeatures from "@/components/sections/project-details/ProjectFeatures";
import ProjectTeam from "@/components/sections/project-details/ProjectTeam";

export const metadata = {
    title: "Horizon Europe: AI-Trust | Проєкти | Системи штучного інтелекту",
};

export default function ProjectDetailsPage() {
    return (
        <main>
            <Navbar />
            <ProjectHero />
            <ProjectDetails />
            <ProjectFeatures />
            <ProjectTeam />
            <Footer />
        </main>
    );
}