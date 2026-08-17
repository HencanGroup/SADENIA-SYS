"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales, persistLocale, type Locale } from "@/lib/i18n";
import { useLocale } from "@/lib/use-i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    persistLocale(next);
    const rest = pathname.replace(/^\/(fr|en)/, "");
    router.push(`/${next}${rest}`);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-semibold",
        invert ? "border-primary-foreground/25" : "border-border",
      )}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            l === locale
              ? "bg-primary text-primary-foreground"
              : invert
                ? "text-primary-foreground/70 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-primary",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
