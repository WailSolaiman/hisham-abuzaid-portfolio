import { PolicyArticle } from "@/components/policy/PolicyArticle";
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
        <PolicyArticle
          backLabel={p.backHome}
          title={p.termsTitle}
          intro={p.termsIntro}
          sections={p.termsSections}
        />
      </main>
      <SiteFooter />
    </>
  );
}
