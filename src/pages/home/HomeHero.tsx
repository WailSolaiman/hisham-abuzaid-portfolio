import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleProvider";
import { PORTRAIT_SRC } from "./assets";

export function HomeHero() {
  const { messages } = useLocale();
  const reduce = useReducedMotion();
  const m = messages.hero;

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-16 md:grid-cols-2 md:px-12 md:pb-0">
        <motion.div
          className="order-2 space-y-10 md:order-1"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block border-s-4 border-gold-panel ps-4 font-label text-xs font-bold uppercase tracking-[0.4em] text-tertiary-fixed-dim dark:text-amber-400">
            {m.kicker}
          </span>
          <h1 className="text-4xl font-black leading-[0.95] tracking-tighter text-heading dark:text-slate-50 sm:text-5xl md:text-6xl lg:text-[3.5rem]">
            {m.headline}
          </h1>
          <p className="max-w-lg font-body text-xl font-light leading-relaxed text-muted dark:text-slate-300">
            {m.lead}
          </p>
          <div className="flex items-center gap-8 pt-4">
            <div className="h-px w-24 bg-gold-panel dark:bg-tertiary-fixed-dim" />
            <span className="font-serif text-lg italic text-muted opacity-90 dark:text-slate-300">
              {m.quote}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 h-[420px] md:order-2 md:h-[716px]"
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.76, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-md bg-band dark:bg-slate-800">
            <img
              src={PORTRAIT_SRC}
              alt=""
              className="size-full object-cover grayscale brightness-90 contrast-110"
            />
            <div className="hero-vignette absolute inset-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
