import { createI18n } from "vue-i18n";

export type AppLocale = "ru" | "en";

const STORAGE_KEY = "app_locale";

export const i18n = createI18n({
    legacy: false,
    locale: "ru",
    fallbackLocale: "en",
    messages: {} // пусто!
});

async function loadLocaleMessages(locale: AppLocale) {
    const messages = await import(`./locales/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
}

export async function setLocale(locale: AppLocale) {
    if (!i18n.global.availableLocales.includes(locale)) {
        await loadLocaleMessages(locale);
    }

    i18n.global.locale.value = locale;
    localStorage.setItem(STORAGE_KEY, locale);
}
