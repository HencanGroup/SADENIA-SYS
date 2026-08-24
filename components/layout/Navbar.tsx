"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale, useT } from "@/lib/use-i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const locale = useLocale();
  const t = useT();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: t.nav.home, exact: true },
    { href: `/${locale}/about`, label: t.nav.about, exact: false },
    { href: `/${locale}/solutions`, label: t.nav.solutions, exact: false },
    { href: `/${locale}/technology`, label: t.nav.technology, exact: false },
    { href: `/${locale}/hardware`, label: t.nav.hardware, exact: false },
    { href: `/${locale}/projects`, label: t.nav.projects, exact: false },
    { href: `/${locale}/contact`, label: t.nav.contact, exact: false },
  ] as const;

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const linkClass = (href: string, exact: boolean) =>
    cn(
      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
      scrolled
        ? "text-muted-foreground hover:text-primary"
        : "text-primary-foreground/80 hover:text-primary-foreground",
      isActive(href, exact) &&
        cn(
          "font-semibold after:absolute after:inset-x-3 after:-bottom-0.5 after:h-1 after:rounded-full",
          scrolled ? "text-steel after:bg-steel" : "text-primary-foreground after:bg-sky",
        ),
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Sadenia Systems SARL" className="h-10 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass(l.href, l.exact)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href={`/${locale}/contact`}
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-steel"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-md p-2 lg:hidden",
            scrolled ? "text-primary" : "text-primary-foreground",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground",
                    isActive(l.href, l.exact) && "text-primary",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-4 sm:px-6">
            <LanguageSwitcher invert={!scrolled} />
            <Link
              href={`/${locale}/contact`}
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
