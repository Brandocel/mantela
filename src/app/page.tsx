import { AboutSection }          from "@/features/home/components/AboutSection";
import { CertificationsSection }  from "@/features/home/components/CertificationsSection";
import { CTASection }             from "@/features/home/components/CTASection";
import { ExperienceSection }      from "@/features/home/components/ExperienceSection";
import { HeroSection }            from "@/features/home/components/HeroSection";
import { ProcessSection }         from "@/features/home/components/ProcessSection";
import { ServicesSection }        from "@/features/home/components/ServicesSection";
import { homeContent }            from "@/features/home/data/home.data";
import { Footer }                 from "@/shared/components/layout/Footer";
import { Header }                 from "@/shared/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header navItems={homeContent.navItems} />

      <main>
        {/* 1. Hero */}
        <HeroSection content={homeContent.hero} />

        {/* 2. Servicios */}
        <ServicesSection content={homeContent.services} />

        {/* 3. Experiencia 15+ años + logos marquee */}
        <ExperienceSection content={homeContent.experience} />

        {/* 4. Cómo funciona */}
        <ProcessSection content={homeContent.process} />

        {/* 5. Sobre nosotros */}
        <AboutSection content={homeContent.about} />

        {/* 6. Certificaciones */}
        <CertificationsSection content={homeContent.certifications} />

        {/* 7. CTA WhatsApp */}
        <CTASection content={homeContent.cta} />
      </main>

      <Footer navItems={homeContent.footerNavItems} />
    </>
  );
}
