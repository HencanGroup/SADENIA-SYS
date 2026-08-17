"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/use-i18n";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const raf = requestAnimationFrame(() => setN(value));
      return () => cancelAnimationFrame(raf);
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  const t = useT();
  const items = [
    { value: 128, suffix: "+", label: t.stats.projects },
    { value: 11, suffix: "", label: t.stats.years },
    { value: 64, suffix: "+", label: t.stats.clients },
    { value: 45, suffix: "", label: t.stats.networks },
  ];

  return (
    <section className="bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-l-2 border-sky/60 pl-4"
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
