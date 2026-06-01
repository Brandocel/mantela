import { AboutSection } from "@/features/home/components/AboutSection";
import { CTASection } from "@/features/home/components/CTASection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ProcessSection } from "@/features/home/components/ProcessSection";
import { ServicesSection } from "@/features/home/components/ServicesSection";
import { homeContent } from "@/features/home/data/home.data";
import { Footer } from "@/shared/components/layout/Footer";
import { Header } from "@/shared/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header navItems={homeContent.navItems} />

      <main>
        <HeroSection content={homeContent.hero} />
        <ServicesSection content={homeContent.services} />
        <ProcessSection content={homeContent.process} />
        <AboutSection content={homeContent.about} />
        <CTASection content={homeContent.cta} />
      </main>

      <Footer navItems={homeContent.footerNavItems} />
    </>
  );
}