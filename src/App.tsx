import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLocale } from "@/context/LocaleProvider";
import { HomePage } from "@/pages/HomePage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";

export default function App() {
  const { messages } = useLocale();

  useEffect(() => {
    document.title = messages.meta.title;
  }, [messages.meta.title]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <BackToTop />
    </>
  );
}
