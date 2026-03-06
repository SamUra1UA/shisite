import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from '@/components/sections/project-details/ProjectHero';
import ProjectDetails from '@/components/sections/project-details/ProjectDetails';
import ProjectFeatures from '@/components/sections/project-details/ProjectFeatures';
import ProjectTeam from '@/components/sections/project-details/ProjectTeam';

export default async function UniversalProjectPage({
                                                       params
                                                   }: {
    params: Promise<{ slug: string }>
}) {
    // 1. Розпаковуємо параметри (Next.js 15 Style)
    const { slug } = await params;

    // 2. Шукаємо проєкт у базі даних
    const project = projectsData[slug as keyof typeof projectsData];

    // 3. Якщо проєкту не існує — відправляємо на 404
    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />

            {/* Додаємо min-h-screen, щоб футер не стрибав на коротких сторінках */}
            <main className="bg-[#0A0A15] min-h-screen">
                <ProjectHero data={project.hero} />

                {/* Секції з даними */}
                <ProjectDetails data={project.details} />

                {/* Передаємо масиви, компоненти самі перевірять їх на пустку */}
                <ProjectFeatures items={project.features} />
                <ProjectTeam members={project.team} />
            </main>

            <Footer />
        </>
    );
}