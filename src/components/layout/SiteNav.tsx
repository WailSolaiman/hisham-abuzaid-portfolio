import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleProvider";
import { useTheme } from "@/context/ThemeProvider";

/** Max 5 links: story → impact → credentials → career → CTA */
const sections = [
  { id: "vision", msgKey: "vision" as const },
  { id: "achievements", msgKey: "achievements" as const },
  { id: "qualifications", msgKey: "qualifications" as const },
  { id: "experience", msgKey: "experience" as const },
  { id: "contact", msgKey: "contact" as const },
];

export function SiteNav() {
  const { messages, locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const n = messages.nav;

  const linkClass =
    "text-muted transition-colors hover:text-tertiary-fixed-dim dark:text-slate-400 dark:hover:text-amber-400";

  const desktopNavItemClass =
    locale === "ar"
      ? "text-sm font-bold tracking-wide normal-case"
      : "text-xs font-semibold uppercase tracking-widest";

  const mobileNavItemClass =
    locale === "ar"
      ? "text-base font-bold tracking-wide normal-case"
      : "text-sm font-semibold uppercase tracking-widest";

  return (
    <nav className="fixed top-0 z-50 w-full">
      <AnimatePresence>
        {open && (
          <motion.button
            key="nav-backdrop"
            type="button"
            aria-label={n.menuClose}
            className="fixed inset-0 z-10 bg-black/40 md:hidden dark:bg-black/55"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative z-20 border-b border-black/5 bg-white/85 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-slate-950/85 dark:shadow-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8 md:py-6">
        <Link
          to="/"
          className="font-headline text-2xl font-extrabold tracking-tighter text-heading transition-colors hover:text-tertiary-fixed-dim dark:text-white dark:hover:text-amber-400"
        >
          {n.brand}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {sections.map(({ id, msgKey }) => (
            <a
              key={id}
              className={`${linkClass} font-label ${desktopNavItemClass}`}
              href={`/#${id}`}
            >
              {n[msgKey]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:ms-4 md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
              className="flex size-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-black/5 hover:[&_svg]:text-tertiary-fixed-dim dark:hover:bg-slate-800 dark:hover:[&_svg]:text-amber-400"
            >
              {theme === "dark" ? (
                <Sun className="size-5 text-amber-200" aria-hidden />
              ) : (
                <Moon className="size-5 text-heading" aria-hidden />
              )}
            </button>
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex min-h-11 items-center rounded-md px-2 font-label text-[0.65rem] font-black uppercase tracking-[0.2em] text-heading transition-colors duration-300 hover:text-tertiary-fixed-dim dark:text-white dark:hover:text-amber-400"
            >
              {locale === "en" ? "EN / AR" : "AR / EN"}
            </button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md md:hidden"
            aria-expanded={open}
            aria-label={open ? n.menuClose : n.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="size-6 text-heading dark:text-white" />
            ) : (
              <Menu className="size-6 text-heading dark:text-white" />
            )}
          </button>
        </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="relative z-20 border-t border-black/10 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-4">
              <div className="flex flex-col gap-1">
                {sections.map(({ id, msgKey }) => (
                  <a
                    key={id}
                    href={`/#${id}`}
                    className={`flex min-h-11 items-center font-label text-heading transition-colors duration-300 hover:text-tertiary-fixed-dim dark:text-slate-200 dark:hover:text-amber-400 ${mobileNavItemClass}`}
                    onClick={() => setOpen(false)}
                  >
                    {n[msgKey]}
                  </a>
                ))}
              </div>
              <div
                className="mt-2 border-t border-black/10 pt-4 dark:border-white/10"
                role="group"
                aria-label={`${n.preferenceTheme}, ${n.preferenceLanguage}`}
              >
                <div className="flex justify-between gap-6">
                  <span className="font-label text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted dark:text-slate-500">
                    {n.preferenceTheme}
                  </span>
                  <span className="font-label text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted dark:text-slate-500">
                    {n.preferenceLanguage}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-6">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
                    className="flex min-h-11 w-fit items-center gap-2 rounded-md border border-black/10 px-3 transition-colors duration-300 hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/5"
                  >
                    {theme === "dark" ? (
                      <Sun className="size-5 text-amber-200" aria-hidden />
                    ) : (
                      <Moon className="size-5 text-heading dark:text-slate-200" aria-hidden />
                    )}
                    <span className="font-label text-xs font-semibold text-heading dark:text-slate-200">
                      {theme === "dark" ? n.themeUseLight : n.themeUseDark}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleLocale}
                    className="inline-flex min-h-11 items-center justify-center rounded-md px-2 font-label text-xs font-black uppercase tracking-[0.2em] text-heading transition-colors duration-300 hover:text-tertiary-fixed-dim dark:text-slate-200 dark:hover:text-amber-400"
                  >
                    {locale === "en" ? "EN / AR" : "AR / EN"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
