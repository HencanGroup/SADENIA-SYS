import type { Metadata } from "next";

import { HardwareView } from "@/components/pages/HardwareView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.hardware.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.hardware.subtitle,
    openGraph: { title, description: t.hardware.subtitle },
  };
}

export default function HardwarePage() {
  return <HardwareView />;
}
