"use client";

import { useParams } from "next/navigation";

import { defaultLocale, getMessages, isLocale, type Locale, type Messages } from "./i18n";

export function useLocale(): Locale {
  const params = useParams<{ locale?: string }>();
  return isLocale(params.locale) ? params.locale : defaultLocale;
}

export function useT(): Messages {
  return getMessages(useLocale());
}
