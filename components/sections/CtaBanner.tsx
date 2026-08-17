"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLocale, useT } from "@/lib/use-i18n";

export function CtaBanner() {
  const t = useT();
  const locale = useLocale();
  return (
    <section className="gradient-primary relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <AnimatedSection className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">{t.ctaBanner.title}</h2>
          <p className="mt-3 text-primary-foreground/75">{t.ctaBanner.subtitle}</p>
        </div>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-sky px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
        >
          {t.ctaBanner.button}
          <ArrowRight className="size-4" />
        </Link>
      </AnimatedSection>
    </section>
  );
}
