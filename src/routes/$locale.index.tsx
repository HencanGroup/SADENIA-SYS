import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { serviceIcons } from "@/lib/service-icons";
import { getMessages, isLocale, defaultLocale } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const t = getMessages(isLocale(params.locale) ? params.locale : defaultLocale);
    const title = "Sadenia Systems SARL — IT Systems, Networks & Software in Kinshasa";
    return {
      meta: [
        { title },
        { name: "description", content: t.hero.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: t.hero.subtitle },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  const { locale } = Route.useParams();
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);

  return (
    <>
      <Hero />
      <Stats />
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t.services.kicker}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.slice(0, 6).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.06}>
                <ServiceCard
                  icon={serviceIcons[i]!}
                  title={s.title}
                  desc={s.desc}
                  href={i === 5 ? "web-systems" : "services"}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <WhyUs />
      <FeaturedProjects />
      <Testimonials />
      <CtaBanner />
    </>
  );
}