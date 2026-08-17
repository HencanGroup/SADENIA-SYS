# Sadenia Connect

# Sadenia Systems SARL — Next.js Website Prompt

Build a beautiful, modern, multilingual (French/English) informational website for **Sadenia Systems SARL** — a systems design, development, and deployment company based in Kinshasa, DRC.

---

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **next-intl** (i18n — EN/FR)
- **Lucide React** (icons)
- **React Hook Form + Zod** (contact form validation)
- **next/image** and **next/font**

---

## Brand & Colors

Extract these from the Sadenia logo (geometric blue cube + bold navy wordmark):

```
Primary Navy:    #1B3A6B
Steel Blue:      #2A7DC9
Sky Blue:        #5BB8E8
Light BG:        #F4F8FC
Dark:            #1A1A2E
White:           #FFFFFF
```

**Typography:** Poppins (headings, bold) + Inter (body, regular)

**Design feel:** Corporate-tech — clean, geometric, confident. Sharp cards, subtle blue gradients, smooth scroll animations. Professional and elegant.

---

## Multilingual (i18n)

- Use `next-intl` with locale-prefixed routes: `/en/...` and `/fr/...`
- Default locale: `fr` (company is DRC/Kinshasa-based)
- Language switcher in navbar (EN | FR toggle)
- All text, nav links, CTAs, and section copy fully translated in both languages
- Translation files at `/messages/en.json` and `/messages/fr.json`

---

## Pages

### `/` — Home

- **Hero:** Full-width, animated navy-to-steel-blue gradient background. Large headline: _"Innovative Systems. Reliable Infrastructure. Digital Future."_ / FR: _"Systèmes Innovants. Infrastructure Fiable. Avenir Numérique."_ A CTA button: "Discover Our Services" / "Découvrez Nos Services". Subtle animated geometric SVG illustration (isometric tech/network motif).
- **Stats Bar:** Animated counters — Projects Completed, Years of Experience, Clients Served, Networks Deployed.
- **Services Overview:** 6 icon cards with hover lift effects linking to `/services`.
- **Why Choose Us:** 3-column grid — Expertise / Reliability / Innovation, with icons and short copy.
- **Featured Projects:** Horizontal scroll card strip with category tags.
- **Testimonials:** Clean quote carousel.
- **CTA Banner:** "Ready to transform your infrastructure?" with a contact button.
- **Footer**

---

### `/about` — About

- Company story and mission paragraph.
- Vision & values (icon list).
- Team section (placeholder cards: name, role, avatar).
- Company address block:
  ```
  76, Avenue Colonel Ebeya
  C/Gombe, V/Kinshasa
  ```
- Milestone timeline (horizontal or vertical).

---

### `/services` — Services

Full service cards with icon, title, description, and "Learn More" link:

1. 🖥️ **Systems Design & Architecture** — Custom IT planning and architecture for businesses of all sizes
2. ⚙️ **Software Development** — Bespoke enterprise and web software solutions
3. 🚀 **Systems Deployment** — End-to-end hardware and software environment deployment
4. 🌐 **Network Infrastructure (LAN/WAN)** — Structured cabling, LAN/WAN design, installation, and maintenance
5. 💻 **Hardware Installation & Support** — Servers, workstations, peripherals, on-site technical support
6. 🌍 **Web Systems Development** — Web apps, portals, dashboards, and corporate sites (Laravel, Next.js, etc.)
7. 🔒 **IT Security & Maintenance** — Network security audits, firewall setup, ongoing system maintenance

---

### `/web-systems` — Web Systems (dedicated page)

- Sub-services: Corporate Websites, Web Applications, ERP/CRM Systems, Client Portals, Admin Dashboards
- Tech stack logo grid: Next.js, Laravel, React, PostgreSQL, Docker, etc.
- Process stepper: Discovery → Design → Development → Testing → Deployment → Support
- Case study preview cards

---

### `/projects` — Projects

- Filterable grid (by category: Networks | Software | Web | Hardware)
- Each card: project name, category tag, short description, image placeholder

---

### `/contact` — Contact

**Form fields:** Name, Email, Phone, Subject (dropdown: Services Inquiry / Partnership / Support / Other), Message — with client-side validation via React Hook Form + Zod.

**Contact info sidebar:**

```
📍 76, Avenue Colonel Ebeya, C/Gombe, V/Kinshasa
📧 info@sadenia.com
📞 +243856234045 | +243896855570 | +243824535804
🌐 www.sadenia.com
```

- Embedded Google Map (Gombe, Kinshasa)
- Social media icon links

---

## Shared Components

| Component          | Description                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `Navbar`           | Logo left, nav links center, lang switcher + CTA right. Sticky with blur backdrop on scroll. Mobile hamburger |
| `Footer`           | 4 columns: Logo+tagline / Services / Company / Contact info. Copyright bar                                    |
| `AnimatedSection`  | Framer Motion `whileInView` fade-up wrapper on every section                                                  |
| `ServiceCard`      | Icon, title, description, hover lift + blue left-border accent                                                |
| `Button`           | Primary (navy fill), Secondary (outlined), Ghost variants                                                     |
| `LanguageSwitcher` | EN/FR toggle with flag icons, persisted in cookie                                                             |
| `StatCounter`      | Animated number counter triggered on scroll into view                                                         |

---

## Folder Structure

```
/app
  /[locale]
    /page.tsx              ← Home
    /about/page.tsx
    /services/page.tsx
    /web-systems/page.tsx
    /projects/page.tsx
    /contact/page.tsx
  /layout.tsx
/components
  /ui/                     ← Button, Card, Badge, Input
  /layout/                 ← Navbar, Footer
  /sections/               ← Hero, Stats, Services, WhyUs, Testimonials, CTA
/messages
  /en.json
  /fr.json
/public
  /logo.png
  /images/
/lib
  /i18n.ts
  /utils.ts
```

---

## Extra Details

- Smooth page transitions with Framer Motion `AnimatePresence`
- Active nav link highlighting per route
- SEO: `generateMetadata()` per page, Open Graph tags, sitemap
- Mobile-first, fully responsive (320px → 1440px+)
- Subtle CSS grid/dot pattern background on hero section
- Loading skeleton states on project cards
- Scroll progress bar at top of page
- Back-to-top floating button
- `prefers-reduced-motion` respected for all animations
- Form success/error toast notifications

---

## Key Copy (use as seed content)

**EN Tagline:** "Innovative Systems. Reliable Infrastructure. Digital Future."
**FR Tagline:** "Systèmes Innovants. Infrastructure Fiable. Avenir Numérique."

**EN About:** "Sadenia Systems SARL is a leading technology company based in Kinshasa, specializing in the design, development, and deployment of complete IT systems — from enterprise software to LAN/WAN network infrastructure."

**FR About:** "Sadenia Systems SARL est une entreprise technologique de premier plan basée à Kinshasa, spécialisée dans la conception, le développement et le déploiement de systèmes informatiques complets — des logiciels d'entreprise aux infrastructures réseau LAN/WAN."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c749b7b5-c078-495a-a8ac-b9755aa48bd9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
