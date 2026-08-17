"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { useLocale, useT } from "@/lib/use-i18n";

export function FeaturedProjects() {
  const t = useT();
  const locale = useLocale();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            center={false}
            kicker={t.projects.kicker}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-primary"
          >
            {t.projects.all} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      <AnimatedSection className="mt-12">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-8">
          {t.projects.items.map((p) => (
            <div key={p.title} className="w-[300px] shrink-0 snap-start sm:w-[360px]">
              <ProjectCard
                title={p.title}
                desc={p.desc}
                category={t.projects.categories[p.category as keyof typeof t.projects.categories]}
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
