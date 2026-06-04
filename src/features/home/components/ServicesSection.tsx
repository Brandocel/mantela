"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceItem, ServicesContent } from "@/features/home/types/home.types";

const EASE   = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP     = { once: true, margin: "-80px" } as const;
const SPRING = { type: "spring", stiffness: 340, damping: 30 } as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden:  { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};


function ServiceCard({ service, featured = false, floatDelay = 0 }: { service: ServiceItem; featured?: boolean; floatDelay?: number }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={
        featured
          ? { y: -5, boxShadow: "0 16px 40px rgba(15,23,42,0.12), 0 0 0 1px #BBF7D0" }
          : { y: -3, backgroundColor: "#F0FDF4", boxShadow: "0 4px 20px rgba(22,163,74,0.08)" }
      }
      transition={SPRING}
      className={`group flex gap-5 rounded-xl ${
        featured
          ? "relative bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.06),0_0_0_1px_#E2E8F0]"
          : "p-5"
      }`}
    >
      {/* Línea verde con pulso en featured */}
      {featured && (
        <>
          <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#16A34A]" />
          <motion.span
            className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[#16A34A]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </>
      )}

      {/* Ícono con flotación continua */}
      <motion.div
        className={`relative mt-[2px] h-[40px] w-[40px] shrink-0 overflow-hidden rounded-lg ${
          featured ? "bg-[#F0FDF4]" : "bg-[#F8FAFC]"
        }`}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 2.8, ease: "easeInOut" as const, repeat: Infinity, delay: floatDelay }}
        whileHover={{ scale: 1.18, rotate: 6 }}
      >
        <Image src={service.icon} alt={service.iconAlt} fill sizes="40px" className="object-contain p-2" />
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
    <section id="servicios" className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <p className="mb-3 flex items-center gap-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Soluciones industriales
          </p>
          <h2 className="max-w-[400px] text-[38px] font-[800] leading-[1.1] tracking-[-0.04em] text-[#0F172A] sm:text-[50px]">
            {content.title}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[440px_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative h-[300px] overflow-hidden rounded-2xl bg-slate-100 lg:h-[320px]"
          >
            <Image
              src={content.image}
              alt="Servicio de lavandería La Mantela"
              fill sizes="(max-width:1024px) 100vw, 440px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent" />
            {/* Badge de confianza — anclado abajo izquierda */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-[6px] w-[6px] rounded-full bg-[#16A34A]" />
              <span className="text-[10px] font-[700] tracking-[0.04em] text-[#0F172A]">
                Capacidad industrial · 24/7
              </span>
            </div>
          </motion.div>

          {/* Emil: stagger en la lista de servicios */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="flex flex-col justify-center gap-[10px] lg:-mt-[80px]"
          >
            {first  && <ServiceCard service={first}  featured floatDelay={0}   />}
            {second && <ServiceCard service={second}         floatDelay={0.6} />}
            {third  && <ServiceCard service={third}          floatDelay={1.2} />}
          </motion.div>
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.65, ease: EASE }}
          className="group relative mt-10 h-[240px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[290px] lg:h-[270px]"
        >
          <Image
            src={content.bannerImage}
            alt="Instalaciones La Mantela"
            fill sizes="(max-width:1024px) 100vw, 1184px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F172A]/50 via-[#0F172A]/10 to-transparent" />
          {/* Copy sobre el banner */}
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <p className="text-[10px] font-[700] uppercase tracking-[0.18em] text-white/60">
              Instalaciones
            </p>
            <p className="mt-1 text-[17px] font-[800] leading-[1.25] tracking-[-0.025em] text-white sm:text-[20px]">
              Maquinaria de alta capacidad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
