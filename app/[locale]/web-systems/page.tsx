import type { Metadata } from "next";
import { Check } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PageHero } from "@/components/layout/PageHero";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

const stack = [
  "Laravel",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Tailwind CSS",
  "Linux",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const title = `${t.web.title} — Sadenia Systems SARL`;
  return {
    title,
    description: t.web.subtitle,
    openGraph: { title, description: t.web.subtitle },
  };
}

export default async function WebSystemsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);
  const w = t.web;
  const cases = t.projects.items.filter((p) => p.category === "web");

  return (
    <>
      <PageHero kicker={w.kicker} title={w.title} subtitle={w.subtitle} />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {w.subServices.map((s, i) => (
            <AnimatedSection
              key={s.title}
              delay={i * 0.06}
              className="card-lift rounded-md border border-border border-t-2 border-t-steel bg-card p-6"
            >
              <h3 className="text-lg text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={w.stackTitle} />
          <AnimatedSection className="mt-10 flex flex-wrap justify-center gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary"
              >
                {s}
              </span>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={w.processTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {w.process.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05} className="rounded-md bg-surface p-6">
                <span className="font-display text-sm font-bold text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 flex items-center gap-2 text-lg text-primary">
                  <Check className="size-4 text-sky" />
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={w.caseTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.06}>
                <ProjectCard title={c.title} desc={c.desc} category={t.projects.categories.web} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
