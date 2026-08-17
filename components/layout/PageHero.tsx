import { AnimatedSection } from "@/components/AnimatedSection";

export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="gradient-primary relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <AnimatedSection className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20 lg:px-8">
        <span className="text-xs font-semibold tracking-[0.2em] text-sky uppercase">{kicker}</span>
        <h1 className="mt-4 max-w-3xl text-4xl text-primary-foreground sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {subtitle}
          </p>
        )}
      </AnimatedSection>
    </section>
  );
}
