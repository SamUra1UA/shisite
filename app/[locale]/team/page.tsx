import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamDirectory from "@/components/sections/team/TeamDirectory";

export const metadata = {
    title: "Команда кафедри | Системи штучного інтелекту",
};

export default function TeamPage() {
    return (
        <main>
            <Navbar />
            <TeamHero />
            <TeamDirectory />
            <Footer />
        </main>
    );
}