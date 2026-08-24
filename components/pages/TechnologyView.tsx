"use client";

import { Check, Server, Network, Cloud, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { useT } from "@/lib/use-i18n";

const capabilityIcons = [Server, Network, Cloud, ShieldCheck];

function CapabilityCard({
  icon: Icon,
  title,
  desc,
  items,
  index,
}: {
  icon: import("lucide-react").LucideIcon;
  title: string;
  desc: string;
  items: string[];
  index: number;
}) {
  return (
    <AnimatedSection
      delay={index * 0.06}
      className="rounded-md border border-border border-t-2 border-t-steel bg-card p-6"
    >
      <div className="inline-flex rounded-md bg-secondary p-3 text-steel">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-lg text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <ul className="mt-4 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-3.5 shrink-0 text-sky" />
            {item}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}

export function TechnologyView() {
  const t = useT();

  return (
    <>
      <PageHero
        kicker={t.technology.kicker}
        title={t.technology.title}
        subtitle={t.technology.subtitle}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.technology.overviewDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.technology.capabilitiesTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.technology.capabilities.map((cap, i) => (
              <CapabilityCard
                key={cap.title}
                icon={capabilityIcons[i]!}
                title={cap.title}
                desc={cap.desc}
                items={cap.items}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.technology.environmentsTitle} />
          <AnimatedSection className="mt-10 flex flex-wrap justify-center gap-3">
            {t.technology.environments.map((env) => (
              <span
                key={env}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary"
              >
                {env}
              </span>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
