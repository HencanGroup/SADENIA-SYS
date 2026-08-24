import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export type Messages = typeof en;

const dictionaries: Record<Locale, Messages> = { fr: fr as Messages, en };

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export function persistLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `locale=${locale};path=/;max-age=31536000;samesite=lax`;
}

export const company = {
  name: "Sadenia Systems SARL",
  address: ["76, Avenue Colonel Ebeya", "C/Gombe, V/Kinshasa"],
  email: "info@sadenia.com",
  phones: ["+243856234045", "+243896855570", "+243824535804"],
  website: "www.sadenia.com",
  social: {
    linkedin: "https://linkedin.com/company/sadenia-systems",
    facebook: "https://facebook.com/sadeniasystems",
    twitter: "https://twitter.com/SadeniaSystems",
  },
};
