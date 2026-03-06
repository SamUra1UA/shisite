import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import RnD from "@/components/sections/RnD";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <RnD />
            <Projects />
            <Partners />
            <Footer />
        </main>
    );
}