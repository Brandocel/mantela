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
  
  export type HomeContent = {
    navItems: NavItem[];
    footerNavItems: NavItem[];
    hero: HeroContent;
    services: ServicesContent;
    process: ProcessContent;
    about: AboutContent;
    cta: CTAContent;
  };