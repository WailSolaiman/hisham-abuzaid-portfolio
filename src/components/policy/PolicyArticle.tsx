import { Link } from "react-router-dom";
import type { PolicySection } from "@/i18n/types";

type PolicyArticleProps = {
  backLabel: string;
  title: string;
  intro: string;
  sections: PolicySection[];
};

export function PolicyArticle({
  backLabel,
  title,
  intro,
  sections,
}: PolicyArticleProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/"
        className="font-label text-xs font-semibold uppercase tracking-widest text-muted hover:text-heading dark:hover:text-slate-200"
      >
        ← {backLabel}
      </Link>
      <h1 className="mt-10 font-headline text-4xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-5xl">
        {title}
      </h1>
      <p className="mt-8 font-body text-lg leading-relaxed text-muted dark:text-slate-400">
        {intro}
      </p>
      <div className="mt-14 space-y-12 border-t border-black/10 pt-12 dark:border-white/10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-headline text-xl font-bold tracking-tight text-heading dark:text-slate-100">
              {s.heading}
            </h2>
            <p className="mt-4 whitespace-pre-line font-body text-base leading-relaxed text-muted dark:text-slate-400">
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
