import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

export function HomeRecognitions() {
  const { messages } = useLocale();
  const r = messages.recognitions;

  return (
    <section
      id="recognitions"
      className="bg-white py-24 md:py-32 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-1">
            {r.kicker.trim() ? (
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
                {r.kicker}
              </span>
            ) : null}
            <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50">
              {r.title}
            </h2>
          </Reveal>
          <div className="md:col-span-2 lg:col-span-2">
            <Reveal delay={0.06}>
              <h4 className="mb-6 font-label text-[0.65rem] font-black uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
                {r.label}
              </h4>
              <ul className="space-y-6">
                {r.entries.map((entry, i) => (
                  <li
                    key={`${entry.text}-${i}`}
                    className={
                      i < r.entries.length - 1
                        ? "border-b border-black/10 pb-6 dark:border-slate-700"
                        : ""
                    }
                  >
                    <p className="font-body text-base font-medium leading-snug text-heading dark:text-slate-100">
                      {entry.text}
                    </p>
                    {entry.details && entry.details.length > 0 ? (
                      <ul className="mt-3 list-disc space-y-1.5 ps-5 font-body text-sm leading-relaxed text-muted marker:text-tertiary-fixed-dim dark:text-slate-300 dark:marker:text-amber-400">
                        {entry.details.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
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
