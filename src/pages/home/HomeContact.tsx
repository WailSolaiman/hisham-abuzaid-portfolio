import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

export function HomeContact() {
  const { messages } = useLocale();
  const reduce = useReducedMotion();
  const c = messages.contact;

  return (
    <section
      id="contact"
      className="bg-cta-navy py-24 text-white md:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Reveal className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <h2 className="mb-10 text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl">
          {c.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl font-body text-xl font-light leading-relaxed text-white/80 dark:text-slate-300">
          {c.body}
        </p>
        <div className="flex justify-center">
          <motion.button
            type="button"
            whileHover={reduce ? undefined : { scale: 1.015 }}
            whileTap={reduce ? undefined : { scale: 0.985 }}
            className="min-h-11 rounded-md bg-gold-panel px-10 py-5 font-label text-xs font-black uppercase tracking-[0.3em] text-heading shadow-lg transition-[filter,transform] duration-300 hover:brightness-95 md:px-12 dark:bg-tertiary-fixed dark:text-on-tertiary-fixed dark:hover:bg-tertiary-fixed-dim dark:hover:brightness-100"
          >
            {c.portfolio}
          </motion.button>
        </div>
      </Reveal>
    </section>
  );
}
