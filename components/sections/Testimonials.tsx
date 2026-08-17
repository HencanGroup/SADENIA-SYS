"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useT } from "@/lib/use-i18n";

export function Testimonials() {
  const t = useT();
  const [i, setI] = useState(0);
  const items = t.testimonials.items;
  const current = items[i]!;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t.testimonials.kicker} title={t.testimonials.title} />
        <div className="relative mt-12 rounded-md border border-border bg-card p-8 sm:p-12">
          <Quote className="size-8 text-sky" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-5"
            >
              <p className="font-display text-xl leading-relaxed text-primary sm:text-2xl">
                “{current.quote}”
              </p>
              <footer className="mt-6 text-sm">
                <span className="font-semibold text-primary">{current.name}</span>
                <span className="text-muted-foreground"> — {current.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
              className="rounded-md border border-border p-2 text-primary transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % items.length)}
              className="rounded-md border border-border p-2 text-primary transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="ml-3 flex gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={
                    idx === i
                      ? "h-1.5 w-6 rounded-full bg-steel"
                      : "h-1.5 w-1.5 rounded-full bg-border"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
