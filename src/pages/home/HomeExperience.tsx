import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

export function HomeExperience() {
  const { messages } = useLocale();
  const e = messages.experience;

  return (
    <section
      id="experience"
      className="bg-band py-24 md:py-32 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="mb-16 md:mb-20">
          <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
            {e.kicker}
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-6xl">
            {e.title}
          </h2>
        </Reveal>
        <div className="relative space-y-20 border-s-2 border-black/12 ps-10 md:space-y-24 md:ps-12 dark:border-slate-700/90">
          {e.items.map((item) => (
            <Reveal key={item.period} className="relative">
              <div className="absolute top-1.5 size-4 -start-[3.375rem] rounded-full bg-tertiary-fixed-dim ring-8 ring-band dark:ring-slate-950" />
              <span className="font-label text-xs font-black uppercase tracking-[0.2em] text-muted dark:text-slate-500">
                {item.period}
              </span>
              <h4 className="mt-3 text-3xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-4xl">
                {item.title}
              </h4>
              <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-muted dark:text-slate-300 md:text-xl">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
