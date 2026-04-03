import { useEffect } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { HomeAchievements } from "@/pages/home/HomeAchievements";
import { HomeContact } from "@/pages/home/HomeContact";
import { HomeDocuments } from "@/pages/home/HomeDocuments";
import { HomeExperience } from "@/pages/home/HomeExperience";
import { HomeHero } from "@/pages/home/HomeHero";
import { HomeQualifications } from "@/pages/home/HomeQualifications";
import { HomeRecognitions } from "@/pages/home/HomeRecognitions";
import { HomeTraining } from "@/pages/home/HomeTraining";
import { HomeVision } from "@/pages/home/HomeVision";

export function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <>
      <SiteNav />
      <main className="pt-24">
        <HomeHero />
        <HomeVision />
        <HomeAchievements />
        <HomeQualifications />
        <HomeTraining />
        <HomeRecognitions />
        <HomeExperience />
        <HomeDocuments />
        <HomeContact />
      </main>
      <SiteFooter />
    </>
  );
}
