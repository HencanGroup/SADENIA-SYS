import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Globe } from "lucide-react";
import logoAsset from "@/assets/logo.jpg.asset.json";
import { company, useLocale, useT } from "@/lib/i18n";

export function Footer() {
  const locale = useLocale();
  const t = useT();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex rounded-md bg-background p-2">
            <img src={logoAsset.url} alt="Sadenia Systems SARL" className="h-9 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {t.footer.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="rounded-md border border-primary-foreground/20 p-2 transition-colors hover:bg-steel"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">{t.footer.services}</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {t.services.items.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link
                  to="/$locale/services"
                  params={{ locale }}
                  className="transition-colors hover:text-sky"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">{t.footer.company}</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>
              <Link to="/$locale/about" params={{ locale }} className="hover:text-sky">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link to="/$locale/web-systems" params={{ locale }} className="hover:text-sky">
                {t.nav.web}
              </Link>
            </li>
            <li>
              <Link to="/$locale/projects" params={{ locale }} className="hover:text-sky">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link to="/$locale/contact" params={{ locale }} className="hover:text-sky">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>
                {company.address[0]}
                <br />
                {company.address[1]}
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href={`mailto:${company.email}`} className="hover:text-sky">
                {company.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-sky" />
              <span className="flex flex-col">
                {company.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="hover:text-sky">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2">
              <Globe className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>{company.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {company.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}