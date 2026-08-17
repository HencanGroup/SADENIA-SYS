import type { Metadata } from "next";

import { HomeView } from "@/components/pages/HomeView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = "Sadenia Systems SARL — IT Systems, Networks & Software in Kinshasa";
  return {
    title,
    description: t.hero.subtitle,
    openGraph: { title, description: t.hero.subtitle },
  };
}

export default function HomePage() {
  return <HomeView />;
}
