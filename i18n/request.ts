import { getRequestConfig } from 'next-intl/server';

export const locales = ['uk', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
    // Отримуємо мову з поточного запиту
    let locale = await requestLocale;

    // Якщо мова невідома або відсутня (наприклад, при завантаженні іконок),
    // ми більше НЕ викидаємо 404, а просто ставимо 'uk' за замовчуванням
    if (!locale || !locales.includes(locale)) {
        locale = 'uk';
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});