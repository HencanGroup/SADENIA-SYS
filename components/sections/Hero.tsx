"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

import { useLocale, useT } from "@/lib/use-i18n";

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      video.currentTime = 0;
    } else {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    >
      <source src="/animated-video.mp4" type="video/mp4" />
    </video>
  );
}

export function Hero() {
  const t = useT();
  const locale = useLocale();

  return (
    <section className="gradient-hero relative overflow-hidden">
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/35 to-transparent" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-24 sm:px-6 lg:px-8 lg:pt-44 lg:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground/85 uppercase"
        >
          <MapPin className="size-3.5 text-sky" />
          {t.hero.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            href={`/${locale}/solutions`}
            className="group inline-flex items-center gap-2 rounded-md bg-sky px-6 py-3.5 text-sm font-semibold text-sky-foreground transition-colors hover:bg-primary-foreground"
          >
            {t.hero.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center rounded-md border border-primary-foreground/35 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {t.hero.cta2}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
