"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        <Carousel opts={{ align: "start" }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CarouselContent>
            {t.projects.items.map((p) => (
              <CarouselItem key={p.title} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1.5">
                  <ProjectCard
                    title={p.title}
                    desc={p.desc}
                    category={
                      t.projects.categories[p.category as keyof typeof t.projects.categories]
                    }
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </AnimatedSection>
    </section>
  );
}
