import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-steel"
    />
  );
}

export function BackToTop() {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      aria-label={t.footer.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-colors hover:bg-steel"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}