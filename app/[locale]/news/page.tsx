import { getTranslations } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsHero from "@/components/sections/news/NewsHero";
import UpcomingEvents from "@/components/sections/news/UpcomingEvents";
import NewsArchive from "@/components/sections/news/NewsArchive";

export const metadata = {
    title: "Події та Новини | Системи штучного інтелекту",
};

// --- ЗАГОТОВКА ПІД БЕКЕНД ---
// В майбутньому тут буде реальний запит: fetch('https://api.your-site.com/news')
async function getNewsData() {
    return [
        { id: 1, date: '28 Вер, 2024', title: 'Кафедра виграла грант', desc: 'Деталі про грант на дослідження LLM...', img: '/students/welcome4.jpg' },
        { id: 2, date: '15 Вер, 2024', title: 'Нове партнерство', desc: 'Меморандум про співпрацю з ІТ-кластером...', img: '/students/welcome5.jpg' },
        { id: 3, date: '02 Вер, 2024', title: 'Початок навчального року', desc: 'Вітаємо нових студентів СШІ!', img: '/students/welcome6.jpg' },
        { id: 4, date: '20 Сер, 2024', title: 'Успіхи випускників', desc: 'Стартап наших випускників залучив інвестиції...', img: '/students/welcome7.jpg' },
        { id: 5, date: '10 Сер, 2024', title: 'Конференція AI Journey', desc: 'Результати виступів наших викладачів...', img: '/students/welcome8.jpg' },
    ];
}

async function getEventsData() {
    return [
        {
            id: 1, day: '15', month: 'Жов', category: 'Student',
            time: '10:00 - 18:00', location: 'Tech Hub, корпус 20',
            title: 'AI Хакатон: Рішення майбутнього',
            desc: '48-годинний челендж для студентів Lviv Polytechnic.',
            img: '/students/welcome1.jpg'
        },
        {
            id: 2, day: '22', month: 'Лис', category: 'Scientific',
            time: '09:00 - 17:00', location: 'Головний корпус',
            title: 'Конференція з Машинного Навчання',
            desc: 'Презентація наукових робіт кафедри СШІ.',
            img: '/students/welcome2.jpg'
        },
        {
            id: 3, day: '05', month: 'Гру', category: 'Student',
            time: '14:00 - 17:00', location: 'Online / Zoom',
            title: 'Воркшоп: Вступ до Neural Networks',
            desc: 'Практичне заняття з використання PyTorch.',
            img: '/students/welcome3.jpg'
        }
    ];
}

export default async function NewsPage() {
    // Стягуємо дані на сервері
    // Використовуємо || [], щоб уникнути TypeError, якщо бекенд поверне null
    const news = await getNewsData() || [];
    const events = await getEventsData() || [];

    return (
        <main className="bg-[#0A0A15] min-h-screen">
            <Navbar />
            <NewsHero />

            {/* Передаємо дані як пропси */}
            <UpcomingEvents initialEvents={events} />
            <NewsArchive initialNews={news} />

            <Footer />
        </main>
    );
}