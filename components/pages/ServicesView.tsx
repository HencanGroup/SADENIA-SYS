"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PageHero } from "@/components/layout/PageHero";
import { useT } from "@/lib/use-i18n";
import { serviceIcons } from "@/lib/service-icons";

export function ServicesView() {
  const t = useT();

  return (
    <>
      <PageHero
        kicker={t.services.kicker}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {t.services.items.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <ServiceCard
                icon={serviceIcons[i % serviceIcons.length]!}
                title={s.title}
                desc={s.desc}
                href="solutions"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
