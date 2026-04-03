import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

export function HomeAchievements() {
  const { messages } = useLocale();
  const a = messages.achievements;

  return (
    <section
      id="achievements"
      className="bg-band py-24 md:py-32 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="mb-16 md:mb-20">
          <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
            {a.kicker}
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-6xl">
            {a.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px bg-black/5 px-0.5 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {a.items.map((item, i) => (
            <Reveal
              key={item.n}
              delay={i * 0.05}
              className="h-full min-h-0"
            >
              <div className="group flex h-full min-h-0 flex-col bg-white p-10 transition-colors duration-300 hover:bg-surface-bright dark:bg-slate-900 dark:hover:bg-slate-800 md:p-12">
                <span className="font-headline text-6xl font-extrabold text-tertiary-fixed-dim opacity-40 transition-all duration-300 group-hover:opacity-100 dark:text-amber-400 dark:opacity-35 dark:group-hover:opacity-100">
                  {item.n}
                </span>
                <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-heading dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-muted dark:text-slate-300">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
