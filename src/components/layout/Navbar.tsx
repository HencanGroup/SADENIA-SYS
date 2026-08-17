import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logoAsset from "@/assets/logo.jpg.asset.json";
import { useLocale, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const locale = useLocale();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/$locale", label: t.nav.home, exact: true },
    { to: "/$locale/about", label: t.nav.about, exact: false },
    { to: "/$locale/services", label: t.nav.services, exact: false },
    { to: "/$locale/web-systems", label: t.nav.web, exact: false },
    { to: "/$locale/projects", label: t.nav.projects, exact: false },
    { to: "/$locale/contact", label: t.nav.contact, exact: false },
  ] as const;

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
          to="/$locale"
          params={{ locale }}
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img src={logoAsset.url} alt="Sadenia Systems SARL" className="h-10 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                params={{ locale }}
                activeOptions={{ exact: l.exact }}
                activeProps={{ "data-active": "true" }}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary data-[active=true]:after:absolute data-[active=true]:after:inset-x-3 data-[active=true]:after:-bottom-0.5 data-[active=true]:after:h-0.5 data-[active=true]:after:rounded-full data-[active=true]:after:bg-steel"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/$locale/contact"
            params={{ locale }}
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-steel"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  params={{ locale }}
                  activeOptions={{ exact: l.exact }}
                  activeProps={{ "data-active": "true" }}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground data-[active=true]:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-4 sm:px-6">
            <LanguageSwitcher />
            <Link
              to="/$locale/contact"
              params={{ locale }}
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