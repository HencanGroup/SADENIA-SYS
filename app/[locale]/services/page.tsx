import type { Metadata } from "next";

import { ServicesView } from "@/components/pages/ServicesView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.services.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.services.subtitle,
    openGraph: { title, description: t.services.subtitle },
  };
}

export default function ServicesPage() {
  return <ServicesView />;
}
