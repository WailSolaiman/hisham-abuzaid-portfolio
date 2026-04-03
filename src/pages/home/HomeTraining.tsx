import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

export function HomeTraining() {
  const { messages } = useLocale();
  const t = messages.training;

  return (
    <section
      id="training"
      className="bg-band py-24 md:py-32 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-1">
            {t.kicker.trim() ? (
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
                {t.kicker}
              </span>
            ) : null}
            <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50">
              {t.title}
            </h2>
          </Reveal>
          <div className="md:col-span-2 lg:col-span-2">
            <Reveal delay={0.06}>
              <h4 className="mb-6 font-label text-[0.65rem] font-black uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
                {t.label}
              </h4>
              <ul className="space-y-6">
                {t.courses.map((course, i) => (
                  <li
                    key={`${course.title}-${i}`}
                    className="border-b border-black/10 pb-6 last:border-b-0 last:pb-0 dark:border-white/10"
                  >
                    <p className="font-body text-base font-semibold leading-snug text-heading dark:text-slate-100">
                      {course.title}
                    </p>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-muted dark:text-slate-300">
                      {course.meta}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
