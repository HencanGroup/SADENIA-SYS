"use client";

import Link from "next/link";
import { Facebook, Globe, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { company } from "@/lib/i18n";
import { useLocale, useT } from "@/lib/use-i18n";

export function Footer() {
  const locale = useLocale();
  const t = useT();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex rounded-md bg-background p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Sadenia Systems SARL" className="h-9 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {t.footer.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
              { icon: Facebook, href: company.social.facebook, label: "Facebook" },
              { icon: Twitter, href: company.social.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
                <Link href={`/${locale}/solutions`} className="transition-colors hover:text-sky">
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
              <Link href={`/${locale}/about`} className="hover:text-sky">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/solutions`} className="hover:text-sky">
                {t.nav.solutions}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/technology`} className="hover:text-sky">
                {t.nav.technology}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/hardware`} className="hover:text-sky">
                {t.nav.hardware}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/projects`} className="hover:text-sky">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-sky">
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
