import { createI18n } from "vue-i18n";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";

export type AppLocale = "ru" | "en";

const STORAGE_KEY = "app_locale";

function getInitialLocale(): AppLocale {
    const saved = localStorage.getItem(STORAGE_KEY) as AppLocale | null;
    if (saved === "ru" || saved === "en") return saved;

    const browser = (navigator.language || "en").toLowerCase();
    return browser.startsWith("ru") ? "ru" : "en";
}

export const i18n = createI18n({
    legacy: false, // важно для Composition API
    locale: getInitialLocale(),
    fallbackLocale: "en",
    messages: { ru, en },
});

export function setLocale(locale: AppLocale) {
    i18n.global.locale.value = locale;
    localStorage.setItem(STORAGE_KEY, locale);
}
