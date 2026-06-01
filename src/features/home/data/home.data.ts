import type { HomeContent } from "@/features/home/types/home.types";

const whatsappUrl =
  "https://wa.me/529981234567?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20lavander%C3%ADa%20industrial.";

export const homeContent: HomeContent = {
  navItems: [
    { label: "Home", href: "#inicio" },
    { label: "About Us", href: "#nosotros" },
    { label: "Service", href: "#servicios" },
    { label: "Contact", href: "#contacto" },
  ],

  footerNavItems: [
    { label: "Home", href: "#inicio" },
    { label: "About", href: "#nosotros" },
    { label: "Service", href: "#servicios" },
    { label: "Laundry", href: "#proceso" },
    { label: "Contact", href: "#contacto" },
  ],

  hero: {
    eyebrow: "La Mantela",
    title: "Procesos industriales para el cuidado profesional de textiles",
    description: "La Mantela no es una lavandería tradicional. Somos un proveedor técnico especializado en lavandería industrial con procesos controlados y tratamientos especializados que prolongan la vida útil de tus textiles y aseguran resultados consistentes.",
    buttonLabel: "Solicitar cotización vía WhatsApp",
    buttonHref: whatsappUrl,
    image: "/images/hero/DSC500-1050.jpg",
    video: "/images/hero/456301_Laundry_Wash_1920x1080.mp4",
  },

  services: {
    title: "Servicios",
    image: "/images/service/planchado.jpg",
    bannerImage: "/images/service/lavadoras.jpg",
    items: [
      {
        title: "Lavado Industrial",
        description: "Procesos controlados con maquinaria de alta capacidad para grandes volúmenes de textiles, eliminando suciedad profunda sin dañar las fibras.",
        icon: "/images/service/planca.png",
        iconAlt: "Icono de lavado industrial",
      },
      {
        title: "Tratamiento Especializado",
        description: "Uso de químicos profesionales y dosificación precisa según tipo de textil.",
        icon: "/images/service/quimico.png",
        iconAlt: "Icono de tratamiento especializado",
      },
      {
        title: "Acabado Industrial",
        description: "Secado y planchado con equipo profesional para resultados consistentes y listos para usar.",
        icon: "/images/service/aspersor.png",
        iconAlt: "Icono de acabado industrial",
      },
    ],
  },

  process: {
    title: "Cómo Funciona Nuestro Servicio",
    description: "Un proceso industrial claro, eficiente y confiable diseñado para entregar resultados consistentes en cada ciclo.",
    items: [
      {
        number: "01",
        title: "Recolección Programada",
        description: "Recogemos tus textiles sucios de forma programada y realizamos una clasificación rigurosa por tipo de tejido y grado de suciedad.",
      },
      {
        number: "02",
        title: "Proceso Industrial",
        description: "Lavado con maquinaria industrial, tratamiento químico profesional, secado controlado y acabado en planchado industrial.",
      },
      {
        number: "03",
        title: "Entrega Puntual",
        description: "Inspección de calidad y entrega de tus textiles impecables, listos para usar.",
      },
    ],
  },

  about: {
    title: "Pasión por la Lavandería Industrial",
    image: "/images/seccion/DSC500-1053.jpg",
    imageAlt: "Equipo profesional de La Mantela trabajando textiles",
    tabs: [
      {
        label: "Nuestra Visión",
        description:
          "Ser el proveedor de lavandería industrial de referencia en la región, reconocido por entregar calidad consistente, procesos técnicos impecables y resultados que superan las expectativas de nuestros clientes.",
        points: [
          "Experiencia comprobada",
          "Procesos técnicos rigurosos",
          "Equipo calificado",
        ],
      },
      {
        label: "Nuestro Objetivo",
        description:
          "Ofrecer soluciones profesionales de lavandería industrial para empresas que necesitan textiles limpios, cuidados y listos para operar con puntualidad.",
        points: [
          "Atención confiable para empresas",
          "Resultados consistentes en cada entrega",
          "Cuidado profesional de textiles",
        ],
      },
      {
        label: "Nuestros Compromisos",
        description:
          "Trabajamos con procesos controlados, personal capacitado y seguimiento de calidad para asegurar un servicio eficiente, técnico y responsable.",
        points: [
          "Calidad en cada proceso",
          "Puntualidad en el servicio",
          "Tratamiento adecuado por tipo de textil",
        ],
      },
    ],
  },
  cta: {
    title: "Contactar por WhatsApp",
    description:
      "Recibe información actualizada sobre lavandería industrial, consejos para el cuidado de textiles y ofertas especiales para empresas.",
    buttonLabel: "Conocer Nuestro Proceso",
    buttonHref: "#proceso",
  },
};