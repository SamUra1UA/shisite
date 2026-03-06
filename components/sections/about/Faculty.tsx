import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server'; // Зверніть увагу: імпорт із /server

// ТИМЧАСОВИЙ МАКЕТ ДАНИХ (Mock Data)
// У майбутньому ви видалите це і будете стягувати дані через fetch
const fetchFacultyFromBackend = async (locale: string) => {
    // Імітація затримки мережі
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // Тут буде ваш реальний запит, щось на кшталт:
    // const res = await fetch(`https://api.yoursite.com/faculty?lang=${locale}`);
    // return res.json();

    return [
        { id: 1, img: 'https://via.placeholder.com/400x500', name: locale === 'uk' ? 'Д-р Іван Петренко' : 'Dr. Ivan Petrenko', role: locale === 'uk' ? 'Завідувач кафедри' : 'Head of Department' },
        { id: 2, img: 'https://via.placeholder.com/400x500', name: locale === 'uk' ? 'Д-р Олена Коваль' : 'Dr. Olena Koval', role: locale === 'uk' ? 'Доцент' : 'Associate Professor' },
        { id: 3, img: 'https://via.placeholder.com/400x500', name: locale === 'uk' ? 'Максим Шевченко' : 'Maksym Shevchenko', role: locale === 'uk' ? 'Старший викладач' : 'Senior Lecturer' },
        { id: 4, img: 'https://via.placeholder.com/400x500', name: locale === 'uk' ? 'Анна Бойко' : 'Anna Boyko', role: locale === 'uk' ? 'Дослідниця' : 'Researcher' },
    ];
};

export default async function Faculty() {
    // Отримуємо переклади та поточну мову на сервері
    const t = await getTranslations('Faculty');
    const locale = await getLocale();

    // Стягуємо дані з нашого "бекенду", передаючи йому мову
    const facultyMembers = await fetchFacultyFromBackend(locale);

    return (
        <section className="section-spacing border-t border-white/5 bg-[#0A0A15]">
            <div className="container mx-auto px-8">

                {/* Шапка секції з кнопкою "Переглянути всіх" */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            {t('subtitle')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            {t('title')}
                        </h2>
                    </div>

                    {/* Кнопка-посилання на сторінку /team */}
                    <Link
                        href={`/${locale}/team`}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-bold tracking-widest uppercase"
                    >
                        {t('viewAll')}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>

                {/* У МАЙБУТНЬОМУ:
                    Замість цього Grid ви вставите сюди свій клієнтський компонент слайдера,
                    передавши йому стягнуті дані як пропси.
                    Наприклад: <FacultySlider members={facultyMembers} />
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facultyMembers.map((member) => (
                        <div key={member.id} className="flex flex-col group">
                            <div className="aspect-[4/5] rounded-[2rem] bg-[#0F0F1A] mb-6 overflow-hidden border border-white/5 relative">
                                <Image
                                    src={member.img}
                                    alt={`Portrait of ${member.name}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                            <h4 className="font-bold text-xl text-white mb-1">{member.name}</h4>
                            <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}