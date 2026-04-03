import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

const SHOW_AFTER_PX = 480;

export function BackToTop() {
  const { messages } = useLocale();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          key="back-to-top"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          aria-label={messages.nav.backToTop}
          onClick={scrollToTop}
          className="fixed bottom-6 z-40 flex size-12 items-center justify-center rounded-md bg-cta-navy text-white shadow-lg transition-[box-shadow,transform,color] duration-300 hover:text-tertiary-fixed-dim hover:shadow-xl hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-panel end-6 md:bottom-8 md:end-8 dark:bg-slate-800 dark:hover:text-amber-400 dark:hover:brightness-125"
        >
          <ChevronUp className="size-6" strokeWidth={2} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
