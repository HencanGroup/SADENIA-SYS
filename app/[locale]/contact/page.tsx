import type { Metadata } from "next";

import { ContactView } from "@/components/pages/ContactView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.contact.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.contact.subtitle,
    openGraph: { title, description: t.contact.subtitle },
  };
}

export default function ContactPage() {
  return <ContactView />;
}
