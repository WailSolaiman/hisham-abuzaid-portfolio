import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleProvider";

function CredentialBody({ body }: { body: string }) {
  const trimmed = body.trim();
  const paragraphs = trimmed.split(/\n\n+/).filter(Boolean);

  const titleClass =
    "font-headline text-xl font-bold tracking-tight text-heading md:text-2xl dark:text-slate-100";
  const detailClass =
    "mt-2 font-body text-lg leading-relaxed text-muted whitespace-pre-line dark:text-slate-300";

  if (paragraphs.length > 1) {
    return (
      <div className="space-y-8">
        {paragraphs.map((block, i) => {
          const lines = block.split("\n");
          const head = lines[0]?.trim() ?? "";
          const rest = lines
            .slice(1)
            .join("\n")
            .trim();
          return (
            <div key={`${head}-${i}`}>
              {head ? <p className={titleClass}>{head}</p> : null}
              {rest ? <p className={detailClass}>{rest}</p> : null}
            </div>
          );
        })}
      </div>
    );
  }

  const lines = paragraphs[0]?.split("\n").map((l) => l.trim()).filter(Boolean) ?? [];
  if (lines.length > 1) {
    return (
      <ul className="list-none space-y-3 p-0">
        {lines.map((line, i) => (
          <li key={`${line}-${i}`} className={titleClass}>
            {line}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className={`font-body text-lg leading-relaxed text-muted dark:text-slate-300 whitespace-pre-line`}>
      {trimmed}
    </p>
  );
}

export function HomeQualifications() {
  const { messages } = useLocale();
  const q = messages.qualifications;

  return (
    <section
      id="qualifications"
      className="bg-white py-24 md:py-32 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <Reveal>
            {q.kicker.trim() ? (
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
                {q.kicker}
              </span>
            ) : null}
            <h2 className="text-5xl font-extrabold tracking-tight text-heading dark:text-slate-50">
              {q.title}
            </h2>
          </Reveal>
          <div className="space-y-12 md:col-span-2">
            {q.items.map((item, i) => (
              <Reveal key={`${item.label}-${i}`} delay={i * 0.06}>
                <div
                  className={
                    i < q.items.length - 1
                      ? "border-b border-black/10 pb-10 dark:border-slate-700"
                      : "pb-10"
                  }
                >
                  <h4 className="mb-3 font-label text-[0.65rem] font-black uppercase tracking-[0.3em] text-tertiary-fixed-dim dark:text-amber-400">
                    {item.label}
                  </h4>
                  {item.title.trim() ? (
                    <h3 className="text-3xl font-extrabold tracking-tight text-heading dark:text-slate-100">
                      {item.title}
                    </h3>
                  ) : null}
                  <div
                    className={item.title.trim() ? "mt-4" : "mt-0"}
                  >
                    <CredentialBody body={item.body} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
