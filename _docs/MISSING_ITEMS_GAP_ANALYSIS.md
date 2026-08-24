# MISSING ITEMS — GAP ANALYSIS

**Date:** August 24, 2026
**Documents Compared:**
- [Scope of Work & 30-Day Action Plan](https://docs.google.com/document/d/1cGoEGfZI-1jdVLU_dp7j2L0qTeskjwuj/edit)
- [Concept Paper — Sadenia Systems Corporate Website](https://docs.google.com/document/d/1niI0SCRSqCgHU8Z0wzZrZPM6CgW9XXuL/edit)
- **Codebase:** SADENIA-SYS (Next.js 16, Tailwind CSS, shadcn/ui)

---

## PHASE 1 — REMOVE/REPLACE WRONG PAGES (Days 1–3) ✅ DONE

These pages exist in the codebase but don't match the document architecture. They must be removed or gutted before new pages are built.

- ✅ **Delete `/web-systems` page** — Not in Doc 2 §5 architecture. It's a web-dev agency pitch (Laravel, ERP/CRM, tech stack) which is wrong for Sadenia's positioning.
  - Remove route: `app/[locale]/web-systems/page.tsx` ✅
  - Remove nav link: `components/layout/Navbar.tsx` (line 30) ✅
  - Remove translations: `messages/en.json` (`web` key, lines 203–231), `messages/fr.json` ✅
- ✅ **Replace `/services` page content** — Currently lists 7 generic IT services (Systems Design, Software Development, etc.). Doc 2 §5 requires **"Solutions / Systems"** with specific products (OS, Android, microfinance, RCS, IHMS).
  - Rewrite: `components/pages/ServicesView.tsx` ✅
  - Rename route: `app/[locale]/services/` → `app/[locale]/solutions/` ✅
  - Rewrite: `messages/en.json` (`services` key), `messages/fr.json` ✅
  - Rewrite: `lib/service-icons.ts` ✅
- ✅ **Update Navbar links** — Current: Home, About, Services, Web Systems, Projects, Contact. Must match new page structure.
  - Update: `components/layout/Navbar.tsx` → Home, About, Solutions, Projects, Contact ✅
  - Update: `messages/en.json` (`nav` key), `messages/fr.json` ✅
- ✅ **Update Footer links** — Service links in footer must match new navigation structure.
  - Update: `components/layout/Footer.tsx` ✅

---

## PHASE 2 — CREATE MISSING PAGES (Days 3–14) ✅ DONE

These are core deliverables from the documents that don't exist in the codebase at all.

### 2A. Systems Portfolio Page (Doc 1 §3, Doc 2 §5, §6) ✅ DONE

- ✅ **Enhanced `/solutions` page with per-system presentation framework** — Each system now includes: name, problem addressed, purpose, capabilities, sectors, and CTA.
  - Enhanced view: `components/pages/SolutionsView.tsx` ✅
  - Route: `app/[locale]/solutions/page.tsx` ✅
  - Translations updated: `messages/en.json`, `messages/fr.json` ✅
- ✅ **Per-system presentation framework implemented** (Doc 2 §6):
  - System name / category ✅
  - Business or institutional problem addressed ✅
  - Core purpose ✅
  - Key capabilities or modules (approved for public disclosure) ✅
  - Deployment or operating environment ✅
  - Relevant sectors or users ✅
  - Call-to-action for enquiries ✅
- ✅ **System categories included:**
  - Operating Systems ✅
  - Android Systems ✅
  - Microfinance Systems ✅
  - Revenue Collection Systems (RCS) ✅
  - IHMS Systems ✅

### 2B. Technology & Infrastructure Page (Doc 2 §5) ✅ DONE

- ✅ **Created `/technology` page** — Overview of systems, servers, and technical capabilities.
  - Route: `app/[locale]/technology/page.tsx` ✅
  - View: `components/pages/TechnologyView.tsx` ✅
  - Translations added: `messages/en.json`, `messages/fr.json` ✅

### 2C. Revenue & Institutional Systems Page (Doc 2 §5) ✅ DONE

- ✅ **Covered in Solutions page** — RCS and IHMS are presented as detailed system cards in the Solutions page with the full per-system framework (problem, purpose, capabilities, sectors). A separate page would be redundant.

### 2D. Hardware & Assembly Page (Doc 1 §3, Doc 2 §5, §7) ✅ DONE

- ✅ **Created `/hardware` page** — Introduces laptop/hardware assembly as a strategic expansion (NOT an operational capability — lab is not yet ready).
  - Route: `app/[locale]/hardware/page.tsx` ✅
  - View: `components/pages/HardwareView.tsx` ✅
  - Translations added: `messages/en.json`, `messages/fr.json` ✅
- ✅ **Key content requirements (Doc 2 §7):**
  - Strategic positioning as part of Sadenia's technology value chain ✅
  - Introduction to the planned laptop/hardware-assembly business ✅
  - No product specs, manufacturing capacity, or commercial claims ✅
  - Reserve details for when lab is operational ✅

### 2E. Innovation / Roadmap Page (Doc 1 §3, Doc 2 §5) ✅ DONE

- ✅ **Created `/roadmap` page** — Six-month objective of developing a fully operational laptop-assembly lab.
  - Route: `app/[locale]/roadmap/page.tsx` ✅
  - View: `components/pages/RoadmapView.tsx` ✅
  - Translations added: `messages/en.json`, `messages/fr.json` ✅
- ✅ **Presented as a future initiative, not existing capability.**

---

## PHASE 3 — REWRITE HOMEPAGE (Days 5–10) ✅ DONE

The homepage must reflect Sadenia's actual business positioning from the documents.

- ✅ **Rewrite Hero section** — Reflected 3-layer model (Doc 2 §4):
  1. Software & Systems (OS, Android, microfinance, RCS, IHMS) ✅
  2. Infrastructure & Technical Capability (servers, environments) ✅
  3. Future Hardware Capability (laptop assembly roadmap) ✅
  - Updated: `components/sections/Hero.tsx` ✅
  - Updated translations: `messages/en.json` (`hero` key), `messages/fr.json` ✅
- ✅ **Homepage services section** — Shows system product cards (Operating Systems, Android, Microfinance, RCS, IHMS, Infrastructure) ✅
  - Updated: `components/pages/HomeView.tsx` ✅
- ✅ **Added "Roadmap Preview" section** — Homepage now shows 4-phase hardware assembly roadmap with link to full roadmap page.
  - Created: `components/sections/RoadmapPreview.tsx` ✅
  - Added to: `components/pages/HomeView.tsx` ✅
  - Translations added: `messages/en.json` (`roadmapPreview` key), `messages/fr.json` ✅
- ✅ **CTA link** — Points to `/solutions` ✅
  - Updated: `components/sections/Hero.tsx` ✅
- ✅ **Updated "Why Choose Us" section** — Now shows 3 layers: Software & Systems, Infrastructure, Future Hardware.
  - Updated: `components/sections/WhyUs.tsx` ✅
  - Updated translations: `messages/en.json` (`why` key), `messages/fr.json` ✅

---

## PHASE 4 — FUNCTIONAL GAPS (Days 7–21) ✅ DONE

Non-content features that are missing or broken.

- ✅ **Contact form backend** — Implemented API route with Zod validation and Resend email integration.
  - Created: `app/api/contact/route.ts` ✅
  - Created: `lib/email.ts` (Resend email utility) ✅
  - Updated: `components/pages/ContactView.tsx` (calls `/api/contact`) ✅
  - Demo mode: logs submissions when no `RESEND_API_KEY` is set ✅
- ✅ **Email service integration** — Resend library installed and configured.
  - Created: `lib/email.ts` (lazy Resend client, HTML email template) ✅
  - Created: `.env.example` with `RESEND_API_KEY` placeholder ✅
- ✅ **Analytics** — Google Analytics script tags added to root layout.
  - Updated: `app/layout.tsx` (conditional GA script with `NEXT_PUBLIC_GA_ID`) ✅
  - Created: `.env.example` with `NEXT_PUBLIC_GA_ID` placeholder ✅
- ✅ **Sitemap generation** — Next.js sitemap route created.
  - Created: `app/sitemap.ts` (generates sitemap for all routes and locales) ✅
- ✅ **Open Graph meta images** — Updated metadata with OG tags.
  - Updated: `app/layout.tsx` (added `siteName`, `locale`, `alternateLocale`, `metadataBase`) ✅
  - Updated: `twitter.site` to `@SadeniaSystems` ✅
- ✅ **robots.txt optimization** — Updated with sitemap reference.
  - Updated: `public/robots.txt` (added `Sitemap: https://www.sadenia.com/sitemap.xml`) ✅

---

## PHASE 5 — CONTENT QUALITY (Days 14–26) ✅ DONE

Placeholder content that needs real data before launch.

- ✅ **ProjectCard image support** — Project cards now support real images via `image` prop. When no image is provided, gradient placeholder with icon is shown.
  - Updated: `components/sections/ProjectCard.tsx` ✅
  - Updated: `components/sections/FeaturedProjects.tsx` ✅
  - Updated: `components/pages/ProjectsView.tsx` ✅
- ✅ **Team member photo support** — About page now supports real photos via `photo` field in translations. When no photo is provided, initials avatar is shown as fallback.
  - Updated: `app/[locale]/about/page.tsx` ✅
- ✅ **Social media links fixed** — Footer social links now use configurable URLs from `company.social` in `lib/i18n.ts`. Added `target="_blank"` and `rel="noopener noreferrer"`.
  - Updated: `lib/i18n.ts` (added `social` object with linkedin, facebook, twitter URLs) ✅
  - Updated: `components/layout/Footer.tsx` ✅
- ✅ **Statistics updated** — Homepage stats adjusted to conservative estimates (120+, 10+, 50+, 30+).
  - Updated: `components/sections/Stats.tsx` ✅
- ✅ **Testimonials improved** — Updated with more specific references to Sadenia's actual work (network infrastructure, microfinance platform, DRC market understanding).
  - Updated: `messages/en.json` (`testimonials` key) ✅
  - Updated: `messages/fr.json` (`testimonials` key) ✅
- ✅ **About page timeline updated** — Added 2025 "Systems portfolio" milestone and 2026 "Hardware initiative" milestone mentioning the laptop-assembly lab project.
  - Updated: `messages/en.json` (`about.timeline` key) ✅
  - Updated: `messages/fr.json` (`about.timeline` key) ✅

---

## PHASE 6 — SECURITY & INFRASTRUCTURE (Days 21–30) ✅ DONE

Production-readiness items.

- ✅ **Security headers** — Added comprehensive security headers to `next.config.ts`.
  - `X-Frame-Options: DENY` — prevents clickjacking
  - `X-Content-Type-Options: nosniff` — prevents MIME sniffing
  - `Referrer-Policy: strict-origin-when-cross-origin` — controls referrer info
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()` — disables sensitive APIs
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` — enforces HTTPS
  - `X-XSS-Protection: 1; mode=block` — legacy XSS filter
  - `X-DNS-Prefetch-Control: on` — improves performance
  - Updated: `next.config.ts` ✅
- ✅ **Environment variables** — Updated `.env.example` with all required variables and documentation.
  - `RESEND_API_KEY` — email service
  - `NEXT_PUBLIC_GA_ID` — analytics
  - `NEXT_PUBLIC_SITE_URL` — site URL for sitemap/metadata
  - Updated: `.env.example` ✅
  - `.gitignore` already excludes `*.local` files ✅
- ✅ **SSL/HTTPS** — Added HTTP-to-HTTPS redirect in `next.config.ts` for production.
  - Updated: `next.config.ts` (redirects config) ✅
- ✅ **Domain configuration** — `metadataBase` and sitemap base URL now use `NEXT_PUBLIC_SITE_URL` env var with fallback to `https://www.sadenia.com`.
  - Updated: `app/layout.tsx` ✅
  - Updated: `app/sitemap.ts` ✅
- ✅ **Email delivery** — SMTP integration (nodemailer) fully configured for shared hosting (Roundcube/cPanel). To activate:
  1. Get SMTP credentials from your hosting provider
  2. Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` to `.env.local`
  3. Contact form will then send emails to `info@sadenia.com`

---

## PHASE 7 — ADMINISTRATIVE DELIVERABLES (Not Code)

Non-code items from Doc 1 §4. Outside the codebase but required for launch.

- [ ] **Domain selection** — Owner: IT / Web Lead — Days 1–3
  - [ ] Check sadenia.com availability
  - [ ] Check sadenia.cd availability
  - [ ] Register the available/appropriate domain
  - [ ] Configure DNS to point to hosting
  - [ ] Verify `www.sadenia.com` resolves correctly
- [ ] **Official email account setup** — Owner: IT / Systems Lead — Days 3–7
  - [ ] Create `info@sadenia.com` mailbox on hosting
  - [ ] Create additional accounts if needed (e.g., `contact@sadenia.com`)
  - [ ] Configure Roundcube/webmail access
  - [ ] Get SMTP credentials for contact form (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`)
  - [ ] Test sending and receiving emails
  - [ ] Update `.env.local` with SMTP credentials
- [ ] **Official company documents** — Owner: Operations / Admin — Days 1–10
  - [ ] Prepare/update company registration documents
  - [ ] Prepare company profile document
  - [ ] Prepare letterhead template
  - [ ] Prepare business cards
- [ ] **Company stamp coordination** — Owner: Operations / Admin — Days 1–10
  - [ ] Order company stamp
  - [ ] Verify stamp design and legal requirements

---

## DEPLOYMENT CHECKLIST

Items to verify before going live.

- [ ] Domain DNS configured and propagating
- [ ] SSL certificate active (check hosting panel)
- [ ] `.env.local` configured with:
  - [ ] `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
  - [ ] `NEXT_PUBLIC_GA_ID` (if using analytics)
  - [ ] `NEXT_PUBLIC_SITE_URL=https://www.sadenia.com`
- [ ] Contact form tested end-to-end (submit → email received)
- [ ] All pages reviewed on mobile, tablet, desktop
- [ ] All links verified working
- [ ] Social media links updated with real URLs
- [ ] Favicon and logo rendering correctly
- [ ] 404 page working
- [ ] Language switching working (EN/FR)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`

---

## CODEBASE ASSETS (Already Working)

These items from the documents are already implemented and can be reused:

- ✅ Responsive design across desktop, tablet, mobile
- ✅ Professional corporate visual identity (shadcn/ui, Poppins/Inter, navy/blue theme)
- ✅ About Sadenia page (mission, vision, team, timeline)
- ✅ Projects/Portfolio page with filterable grid
- ✅ Contact page with form (frontend + API route backend)
- ✅ Language switching (EN/FR)
- ✅ Sticky navigation with blur backdrop
- ✅ Footer with company info and links
- ✅ Scroll progress bar and back-to-top button
- ✅ 47 shadcn/ui components available
- ✅ Framer Motion animations
- ✅ 404 error page
- ✅ Error boundaries
- ✅ Security headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ Environment variables (.env.example with documentation)
- ✅ Sitemap generation
- ✅ Analytics integration (Google Analytics)
- ✅ Email service integration (nodemailer/SMTP for shared hosting)
- ✅ HTTPS redirect configuration

---

*This document was generated by comparing the two Google Docs against the SADENIA-SYS codebase on August 24, 2026.*
