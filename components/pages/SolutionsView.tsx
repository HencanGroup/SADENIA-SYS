"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale, useT } from "@/lib/use-i18n";
import { serviceIcons } from "@/lib/service-icons";

function SystemCard({
  icon: Icon,
  title,
  desc,
  problem,
  purpose,
  capabilities,
  sectors,
  index,
}: {
  icon: import("lucide-react").LucideIcon;
  title: string;
  desc: string;
  problem: string;
  purpose: string;
  capabilities: string[];
  sectors: string[];
  index: number;
}) {
  const t = useT();
  const locale = useLocale();

  return (
    <AnimatedSection delay={index * 0.06} className="rounded-md border border-border bg-card">
      <div className="border-b border-border p-6">
        <div className="inline-flex rounded-md bg-secondary p-3 text-steel">
          <Icon className="size-5" />
        </div>
        <h3 className="mt-4 text-xl text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h4 className="text-xs font-semibold tracking-wide uppercase text-steel">
            The challenge
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{problem}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-wide uppercase text-steel">Our purpose</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{purpose}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-wide uppercase text-steel">
            Key capabilities
          </h4>
          <ul className="mt-2 space-y-1.5">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-3.5 shrink-0 text-sky" />
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-wide uppercase text-steel">Sectors</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border p-6">
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-primary"
        >
          {t.services.learn}
          <ArrowRight className="size-3.5 transition-transform hover:translate-x-1" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

export function SolutionsView() {
  const t = useT();

  return (
    <>
      <PageHero
        kicker={t.services.kicker}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t.services.kicker}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => (
              <SystemCard
                key={s.title}
                icon={serviceIcons[i % serviceIcons.length]!}
                title={s.title}
                desc={s.desc}
                problem={s.problem ?? ""}
                purpose={s.purpose ?? ""}
                capabilities={s.capabilities ?? []}
                sectors={s.sectors ?? []}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
