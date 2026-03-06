import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicantsHero from "@/components/sections/applicants/ApplicantsHero";
import Programs from "@/components/sections/applicants/Programs";
import International from "@/components/sections/applicants/International";
import Testimonial from "@/components/sections/applicants/Testimonial";

export const metadata = {
    title: "Вступникам | Освітні програми | Системи штучного інтелекту",
};

export default function ApplicantsPage() {
    return (
        <main>
            <Navbar />
            <ApplicantsHero />
            <Programs />
            <International />
            <Testimonial />
            <Footer />
        </main>
    );
}