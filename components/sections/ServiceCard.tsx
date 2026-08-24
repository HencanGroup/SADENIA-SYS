"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { useLocale, useT } from "@/lib/use-i18n";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  href = "solutions",
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  href?: string;
}) {
  const locale = useLocale();
  const t = useT();
  return (
    <div className="card-lift group relative overflow-hidden rounded-md border border-border border-l-2 border-l-steel bg-card p-6">
      <div className="inline-flex rounded-md bg-secondary p-3 text-steel transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-lg text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <Link
        href={`/${locale}/${href}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-steel"
      >
        {t.services.learn}
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
