import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  center = true,
  invert = false,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <AnimatedSection className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {kicker && (
        <span
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase",
            invert ? "text-sky" : "text-steel",
          )}
        >
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl sm:text-4xl",
          invert ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
