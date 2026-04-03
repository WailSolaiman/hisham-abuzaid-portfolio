import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleProvider";
import { BRAND_MARK_SRC } from "@/pages/home/assets";

const CONTACT_EMAIL = "hisham.abuzaid.1@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/hisham-abuzaid-4a1a5563/";

const iconLinkClass =
  "inline-flex size-11 items-center justify-center rounded-md text-tertiary-fixed-dim transition-colors duration-300 hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-fixed-dim dark:text-amber-400 dark:hover:text-amber-200 dark:focus-visible:outline-amber-400";

export function SiteFooter() {
  const { messages } = useLocale();
  const f = messages.footer;

  return (
    <footer className="w-full bg-white py-20 dark:bg-slate-900 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:px-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex max-w-lg flex-col items-center gap-4 text-center lg:max-w-none lg:flex-row lg:items-center lg:gap-5 lg:text-start">
          <img
            src={BRAND_MARK_SRC}
            alt=""
            width={72}
            height={72}
            className="size-[4.5rem] shrink-0 rounded-xl object-cover shadow-md ring-1 ring-black/10 dark:ring-white/15"
          />
          <div>
            <span className="font-headline text-2xl font-black uppercase tracking-tighter text-heading dark:text-white">
              {f.legalName}
            </span>
            <p className="mt-2 font-label text-[0.6rem] font-bold uppercase tracking-[0.3em] text-muted dark:text-slate-500 lg:mt-3">
              {f.rights}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-[0.65rem] font-black uppercase tracking-[0.2em] lg:gap-12">
          <Link
            to="/privacy"
            className="text-muted transition-colors duration-300 hover:text-tertiary-fixed-dim dark:text-slate-500 dark:hover:text-amber-400"
          >
            {f.privacy}
          </Link>
          <Link
            to="/terms"
            className="text-muted transition-colors duration-300 hover:text-tertiary-fixed-dim dark:text-slate-500 dark:hover:text-amber-400"
          >
            {f.terms}
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClass}
            aria-label={f.linkedInAria}
          >
            <Linkedin className="size-6" strokeWidth={2} aria-hidden />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={iconLinkClass}
            aria-label={f.emailAria}
          >
            <Mail className="size-6" strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
