import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

// Підключаємо новий шрифт
const manrope = Manrope({
    subsets: ["latin", "cyrillic"], // Manrope підтримує кирилицю!
    variable: '--font-display', // Змінимо назву змінної для універсальності
    weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
    title: "Кафедра систем штучного інтелекту | Львівська політехніка",
};

export default async function RootLayout({
                                             children,
                                             params, // Прибрали деструктуризацію { locale } звідси
                                         }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>; // Вказуємо, що params — це Promise
}>) {
    // Розпаковуємо params за допомогою await (нове правило Next.js 15)
    const { locale } = await params;

    // Отримуємо словник для поточної мови
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className={`${manrope.variable} bg-dark`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}