"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceItem, ServicesContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-80px" } as const;

/* Emil: stagger 50ms, desde scale(0.96) no scale(0) */
const list = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.65, ease: EASE } },
};

function ServiceCard({ service, featured = false }: { service: ServiceItem; featured?: boolean }) {
  return (
    <motion.article
      variants={item}
      /* Emil: hover sólo transform+opacity, active:scale */
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`group relative flex gap-5 rounded-2xl outline-none transition-shadow duration-200 ${
        featured
          ? "bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_0_0_1px_#E2E8F0] hover:shadow-[0_12px_40px_rgba(15,23,42,0.10),0_0_0_1px_#CBD5E1]"
          : "p-5 hover:bg-[#F8FAFC]"
      }`}
    >
      {/* Barra acento izquierda en featured */}
      {featured && (
        <span className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-[#16A34A]" />
      )}

      {/* Ícono con bg — Emil: scale con transform, rotate sutil */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={`relative mt-[2px] h-[42px] w-[42px] shrink-0 overflow-hidden rounded-xl ${
          featured ? "bg-[#DCFCE7]" : "bg-[#F1F5F9]"
        }`}
      >
        <Image src={service.icon} alt={service.iconAlt} fill sizes="42px" className="object-contain p-2" />
      </motion.div>

      <div>
        <h3 className="text-[15px] font-[700] leading-[21px] tracking-[-0.02em] text-[#0F172A]">
          {service.title}
        </h3>
        <p className="mt-[6px] max-w-[320px] text-[13px] leading-[21px] text-[#64748B]">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}

export function ServicesSection({ content }: { content: ServicesContent }) {
  const [first, second, third] = content.items;

  return (
    <section id="servicios" className="relative bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={VP} variants={list}
          className="mb-14"
        >
          <motion.p variants={item} className="mb-3 flex items-center gap-[10px] text-[10px] font-[800] uppercase tracking-[0.22em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Soluciones industriales
          </motion.p>
          <motion.h2 variants={item} className="max-w-[480px] text-[40px] font-[800] leading-[1.1] tracking-[-0.045em] text-[#0F172A] sm:text-[52px]">
            {content.title}
          </motion.h2>
        </motion.div>

        {/* Grid imagen + cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[440px_1fr] lg:gap-14">

          {/* Imagen izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
            className="group relative h-[300px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.08)] lg:h-[320px]"
          >
            <Image src={content.image} alt="Servicio de lavandería La Mantela" fill
              sizes="(max-width:1024px) 100vw, 440px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/18 via-transparent to-transparent" />
          </motion.div>

          {/* Cards de servicios */}
          <motion.div
            initial="hidden" whileInView="show" viewport={VP} variants={list}
            className="flex flex-col justify-center gap-[10px] lg:-mt-[88px]"
          >
            {first  && <ServiceCard service={first}  featured />}
            {second && <ServiceCard service={second} />}
            {third  && <ServiceCard service={third}  />}
          </motion.div>
        </div>

        {/* Banner inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.75, ease: EASE }}
          className="group relative mt-10 h-[240px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.08)] sm:h-[300px] lg:h-[280px]"
        >
          <Image src={content.bannerImage} alt="Instalaciones industriales La Mantela" fill
            sizes="(max-width:1024px) 100vw, 1184px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F172A]/22 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
