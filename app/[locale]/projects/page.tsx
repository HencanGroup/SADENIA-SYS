import type { Metadata } from "next";

import { ProjectsView } from "@/components/pages/ProjectsView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.projects.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.projects.subtitle,
    openGraph: { title, description: t.projects.subtitle },
  };
}

export default function ProjectsPage() {
  return <ProjectsView />;
}
