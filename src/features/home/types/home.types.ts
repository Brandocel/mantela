export type NavItem = {
    label: string;
    href: string;
  };
  
  export type HeroContent = {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    image: string;
    video: string;
  };
  
  export type ServiceItem = {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
  };
  
  export type ServicesContent = {
    title: string;
    image: string;
    bannerImage: string;
    items: ServiceItem[];
  };
  
  export type ProcessItem = {
    number: string;
    title: string;
    description: string;
  };
  
  export type ProcessContent = {
    title: string;
    description: string;
    items: ProcessItem[];
  };
  
  export type AboutTab = {
    label: string;
    description: string;
    points: string[];
  };
  
  export type AboutContent = {
    title: string;
    image: string;
    imageAlt: string;
    tabs: AboutTab[];
  };
  
  export type CTAContent = {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };

  export type IndustryLogo = {
    name: string;
    category: string;
  };

  export type ExperienceContent = {
    years: number;
    title: string;
    description: string;
    logos: IndustryLogo[];
  };

  export type Certification = {
    name: string;
    subtitle: string;
    icon: "iso" | "quality" | "eco" | "safety" | "trust";
  };

  export type CertificationsContent = {
    title: string;
    description: string;
    items: Certification[];
  };

  export type HomeContent = {
    navItems: NavItem[];
    footerNavItems: NavItem[];
    hero: HeroContent;
    services: ServicesContent;
    experience: ExperienceContent;
    process: ProcessContent;
    about: AboutContent;
    certifications: CertificationsContent;
    cta: CTAContent;
  };