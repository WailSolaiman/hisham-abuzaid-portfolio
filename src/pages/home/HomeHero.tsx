import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleProvider";
import { BRAND_MARK_SRC, PORTRAIT_SRC } from "./assets";

export function HomeHero() {
  const { locale, messages } = useLocale();
  const reduce = useReducedMotion();
  const m = messages.hero;
  const kickerClass =
    locale === "ar"
      ? "text-base font-semibold leading-snug tracking-wide sm:text-lg"
      : "text-xs font-bold uppercase tracking-[0.4em]";

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-16 md:px-12 lg:grid-cols-2 lg:pb-0">
        <motion.div
          className="order-2 space-y-10 lg:order-1"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={BRAND_MARK_SRC}
              alt=""
              width={48}
              height={48}
              className="size-10 shrink-0 rounded-lg object-cover shadow-sm ring-1 ring-black/10 dark:ring-white/10 sm:size-12"
            />
            <span
              className={`min-w-0 border-s-4 border-gold-panel ps-3 font-label text-tertiary-fixed-dim dark:text-amber-400 sm:ps-4 ${kickerClass}`}
            >
              {m.kicker}
            </span>
          </div>
          <h1 className="text-5xl font-black leading-[0.95] tracking-tighter text-heading dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5rem]">
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
          className="relative order-1 mx-auto aspect-[3/4] w-full max-w-sm sm:max-w-md md:max-w-lg lg:order-2 lg:mx-0 lg:aspect-auto lg:h-[716px] lg:max-w-none"
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.76, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-md bg-band dark:bg-slate-800">
            <img
              src={PORTRAIT_SRC}
              alt=""
              className="size-full object-cover"
            />
            <div className="hero-vignette absolute inset-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
