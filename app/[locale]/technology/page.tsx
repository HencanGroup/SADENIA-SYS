import type { Metadata } from "next";

import { TechnologyView } from "@/components/pages/TechnologyView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.technology.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.technology.subtitle,
    openGraph: { title, description: t.technology.subtitle },
  };
}

export default function TechnologyPage() {
  return <TechnologyView />;
}
