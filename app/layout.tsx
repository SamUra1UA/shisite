import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Змінюємо імпорт
import "./globals.css";

// Підключаємо новий шрифт
const manrope = Manrope({
    subsets: ["latin", "cyrillic"], // Manrope підтримує кирилицю!
    variable: '--font-display', // Змінимо назву змінної для універсальності
    weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
    title: "Кафедра систем штучного інтелекту | Львівська політехніка",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
        </head>
        {/* Використовуємо нову змінну */}
        <body className={`${manrope.variable} bg-dark`}>{children}</body>
        </html>
    );
}