import type { Metadata } from "next";

import { RoadmapView } from "@/components/pages/RoadmapView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.roadmap.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.roadmap.subtitle,
    openGraph: { title, description: t.roadmap.subtitle },
  };
}

export default function RoadmapPage() {
  return <RoadmapView />;
}
