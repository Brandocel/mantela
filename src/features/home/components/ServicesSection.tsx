"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceItem, ServicesContent } from "@/features/home/types/home.types";

const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];

const vp = { once: true, margin: "-80px" } as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: cb } },
};

function ServiceCard({ service, featured = false }: { service: ServiceItem; featured?: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex gap-5 overflow-hidden rounded-2xl transition-shadow duration-300 ${
        featured
          ? "bg-white p-7 shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.11)]"
          : "p-5 hover:bg-[#fafafa]"
      }`}
    >
      {/* Barra de acento izquierda en featured */}
      {featured && (
        <span className="absolute left-0 top-7 bottom-7 w-[3px] rounded-r-full bg-[#75CF45]" />
      )}

      {/* Ícono con fondo */}
      <motion.div
        whileHover={{ scale: 1.12, rotate: 4 }}
        transition={{ duration: 0.25 }}
        className={`relative mt-[2px] h-[44px] w-[44px] shrink-0 overflow-hidden rounded-xl ${
          featured ? "bg-[#75CF45]/10" : "bg-[#f5f5f5]"
        }`}
      >
        <Image
          src={service.icon}
          alt={service.iconAlt}
          fill
          sizes="44px"
          className="object-contain p-2"
        />
      </motion.div>

      <div>
        <h3 className="text-[17px] font-[700] leading-[23px] tracking-[-0.02em] text-[#1a1a1a]">
          {service.title}
        </h3>
        <p className="mt-[7px] max-w-[340px] text-[13px] leading-[21px] text-[#666]">
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
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-[96px] pt-[96px] sm:px-10 lg:px-[64px]">

        {/* Header de sección */}
        <motion.div
          initial="hidden" whileInView="show" viewport={vp} variants={stagger}
          className="mb-[56px]"
        >
          <motion.p variants={fadeUp} className="mb-3 flex items-center gap-[10px] text-[11px] font-[800] uppercase tracking-[0.18em] text-[#75CF45]">
            <span className="h-[2px] w-[22px] rounded-full bg-[#75CF45]" />
            Lo que ofrecemos
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[46px] font-[800] leading-[1.1] tracking-[-0.04em] text-[#1a1a1a] sm:text-[58px]">
            {content.title}
          </motion.h2>
        </motion.div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[448px_1fr] lg:gap-[52px]">

          {/* Imagen izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.85, ease: cb }}
            className="relative h-[320px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.10)] lg:h-[330px]"
          >
            <Image
              src={content.image}
              alt="Servicio profesional de lavandería"
              fill
              sizes="(max-width:1024px) 100vw, 448px"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
            />
            {/* Overlay sutil */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Cards de servicios */}
          <motion.div
            initial="hidden" whileInView="show" viewport={vp} variants={stagger}
            className="flex flex-col justify-center gap-3 lg:-mt-[100px]"
          >
            {first  && <ServiceCard service={first}  featured />}
            {second && <ServiceCard service={second} />}
            {third  && <ServiceCard service={third}  />}
          </motion.div>
        </div>

        {/* Banner inferior */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: cb }}
          className="group relative mt-[44px] h-[260px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:h-[340px] lg:h-[310px]"
        >
          <Image
            src={content.bannerImage}
            alt="Área industrial de lavandería La Mantela"
            fill
            sizes="(max-width:1024px) 100vw, 1184px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
