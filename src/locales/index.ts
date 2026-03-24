import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { it } from "./it";
import { pt } from "./pt";
import { ru } from "./ru";

export const localeOptions = [
  { value: "en", label: "English", flag: "us" },
  { value: "es", label: "Espa\u00f1ol", flag: "es" },
  { value: "pt", label: "Portugu\u00eas", flag: "pt" },
  { value: "fr", label: "Fran\u00e7ais", flag: "fr" },
  { value: "hi", label: "\u0939\u093f\u0928\u094d\u0926\u0940", flag: "in" },
  { value: "ru", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", flag: "ru" },
  { value: "de", label: "Deutsch", flag: "de" },
  { value: "it", label: "Italiano", flag: "it" },
] as const;

export type AppLocale = (typeof localeOptions)[number]["value"];

export const messages = {
  en,
  es,
  pt,
  fr,
  hi,
  ru,
  de,
  it,
};
