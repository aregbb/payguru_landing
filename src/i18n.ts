import { createI18n } from "vue-i18n";

import { localeOptions, messages, type AppLocale } from "@/locales";

const STORAGE_KEY = "payguru_locale";
const DEFAULT_LOCALE: AppLocale = "en";

const localeSet = new Set<AppLocale>(localeOptions.map((option) => option.value));

export function isAppLocale(value: string | null | undefined): value is AppLocale {
  return Boolean(value && localeSet.has(value as AppLocale));
}

export function getInitialLocale(): AppLocale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  return isAppLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
});

export function setLocale(locale: AppLocale) {
  i18n.global.locale.value = locale;

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }
}

export { DEFAULT_LOCALE, STORAGE_KEY, localeOptions, type AppLocale };
