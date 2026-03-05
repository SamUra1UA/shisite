import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsHero from "@/components/sections/news/NewsHero";
import UpcomingEvents from "@/components/sections/news/UpcomingEvents";
import NewsArchive from "@/components/sections/news/NewsArchive";

export const metadata = {
    title: "Події та Новини | Системи штучного інтелекту",
};

export default function NewsPage() {
    return (
        <main>
            <Navbar />
            <NewsHero />
            <UpcomingEvents />
            <NewsArchive />
            <Footer />
        </main>
    );
}