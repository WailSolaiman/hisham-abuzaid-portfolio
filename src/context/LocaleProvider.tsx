/* eslint-disable react-refresh/only-export-components -- context + hook pattern */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { LocaleMessages } from "@/i18n/types";
import ar from "@/i18n/ar.json";
import en from "@/i18n/en.json";

export type Locale = "en" | "ar";

type LocaleContextValue = {
  locale: Locale;
  messages: LocaleMessages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "ha-locale";

const catalog: Record<Locale, LocaleMessages> = {
  en: en as LocaleMessages,
  ar: ar as LocaleMessages,
};

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "ar" ? "ar" : "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("locale-ar", locale === "ar");
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((l) => (l === "en" ? "ar" : "en"));
  }, []);

  const messages = catalog[locale];

  const value = useMemo(
    () => ({
      locale,
      messages,
      setLocale,
      toggleLocale,
    }),
    [locale, messages, setLocale, toggleLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
