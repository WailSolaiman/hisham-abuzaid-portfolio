import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

export function HomeDocuments() {
  const { messages } = useLocale();
  const d = messages.documents;

  return (
    <section id="documents" className="bg-white py-24 md:py-32 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="mb-16 md:mb-20">
          <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
            {d.kicker}
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-6xl">
            {d.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {d.items.map((doc, i) => (
            <Reveal key={doc.title} delay={(i % 4) * 0.04}>
              <a
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center justify-between rounded-md border border-black/10 p-4 transition-colors duration-300 hover:border-tertiary-fixed-dim dark:border-slate-600"
              >
                <span className="font-body text-sm font-semibold text-heading transition-colors duration-300 group-hover:text-cta-navy dark:text-slate-200 dark:group-hover:text-amber-400">
                  {doc.title}
                </span>
                <ExternalLink className="size-[1.2rem] shrink-0 text-muted transition-colors duration-300 group-hover:text-tertiary-fixed-dim dark:text-slate-500 dark:group-hover:text-amber-400" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
