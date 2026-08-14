import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { useLocale, useT } from "@/lib/i18n";

function IsoNetwork() {
  const nodes = [
    [90, 40],
    [200, 90],
    [40, 140],
    [160, 200],
    [270, 170],
    [120, 280],
    [250, 285],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [1, 3],
  ];
  return (
    <svg viewBox="0 0 320 330" className="h-full w-full" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a]![0]}
          y1={nodes[a]![1]}
          x2={nodes[b]![0]}
          y2={nodes[b]![1]}
          stroke="currentColor"
          strokeWidth="1"
          className="text-sky/50"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 + i * 0.08 }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.09 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        >
          <rect
            x={x! - 14}
            y={y! - 14}
            width="28"
            height="28"
            rx="4"
            transform={`rotate(45 ${x} ${y})`}
            className="fill-sky/15 stroke-sky/70"
            strokeWidth="1.2"
          />
          <circle cx={x} cy={y} r="3.5" className="fill-sky" />
        </motion.g>
      ))}
    </svg>
  );
}

export function Hero() {
  const t = useT();
  const locale = useLocale();

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-sky/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-36 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-44 lg:pb-32">
        <div>
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
              to="/$locale/services"
              params={{ locale }}
              className="group inline-flex items-center gap-2 rounded-md bg-sky px-6 py-3.5 text-sm font-semibold text-sky-foreground transition-colors hover:bg-primary-foreground"
            >
              {t.hero.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/$locale/contact"
              params={{ locale }}
              className="inline-flex items-center rounded-md border border-primary-foreground/35 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t.hero.cta2}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <IsoNetwork />
        </motion.div>
      </div>
    </section>
  );
}