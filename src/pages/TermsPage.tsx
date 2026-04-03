import { Link } from "react-router-dom";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { useLocale } from "@/context/LocaleProvider";

export function TermsPage() {
  const { messages } = useLocale();
  const p = messages.policy;

  return (
    <>
      <SiteNav />
      <main className="min-h-[60vh] bg-white px-6 pb-24 pt-28 dark:bg-slate-950 md:px-12">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="font-label text-xs font-semibold uppercase tracking-widest text-muted hover:text-heading dark:hover:text-slate-200"
          >
            ← {p.backHome}
          </Link>
          <h1 className="mt-10 font-headline text-4xl font-extrabold tracking-tight text-heading dark:text-slate-50 md:text-5xl">
            {p.termsTitle}
          </h1>
          <p className="mt-8 font-body text-lg leading-relaxed text-muted dark:text-slate-400">
            {p.termsLead}
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
