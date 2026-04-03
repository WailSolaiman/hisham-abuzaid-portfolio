import { Verified } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";
import { VISION_IMG_SRC } from "./assets";

export function HomeVision() {
  const { messages } = useLocale();
  const v = messages.vision;

  return (
    <section id="vision" className="bg-white py-24 md:py-32 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-12">
        <Reveal className="relative">
          <img
            src={VISION_IMG_SRC}
            alt=""
            className="aspect-[4/5] w-full rounded-md object-cover shadow-2xl"
          />
          <div className="absolute -bottom-8 hidden bg-gold-panel p-10 shadow-xl lg:block ltr:-end-8 rtl:-start-8 dark:bg-tertiary-fixed">
            <span className="font-headline text-5xl font-extrabold text-heading dark:text-on-tertiary-fixed">
              {v.statValue}
            </span>
            <p className="mt-2 font-label text-[0.65rem] font-black uppercase tracking-[0.25em] text-heading dark:text-on-tertiary-fixed">
              {v.statLabel}
            </p>
          </div>
        </Reveal>
        <Reveal className="space-y-10" delay={0.06}>
          <span className="font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
            {v.kicker}
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-6xl">
            {v.title}
          </h2>
          <p className="font-body text-lg leading-relaxed text-muted dark:text-slate-300">
            {v.p1}
          </p>
          <ul className="space-y-5 pt-4">
            {v.bullets.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <Verified
                  className="size-6 shrink-0 text-tertiary-fixed-dim dark:text-amber-400"
                  aria-hidden
                />
                <span className="font-body text-base font-medium leading-snug text-heading dark:text-slate-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
