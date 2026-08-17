import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { serviceIcons } from "@/lib/service-icons";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/services")({
  head: ({ params }) => {
    const t = getMessages(isLocale(params.locale) ? params.locale : defaultLocale);
    const title = `${t.services.title} — Sadenia Systems SARL`;
    return {
      meta: [
        { title },
        { name: "description", content: t.services.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: t.services.subtitle },
      ],
    };
  },
  component: ServicesPage,
});

function ServicesPage() {
  const { locale } = Route.useParams();
  const t = getMessages(isLocale(locale) ? locale : defaultLocale);

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
                href={s.title.toLowerCase().includes("web") ? "web-systems" : "services"}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}