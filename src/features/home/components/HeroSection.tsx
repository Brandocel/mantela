"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { HeroContent } from "@/features/home/types/home.types";

type HeroSectionProps = {
  content: HeroContent;
};

/* ── Easing helper (tuple required by FM v12 strict types) ─ */
const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Animation variants ─────────────────────────────────── */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.25,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: cb },
  },
};

const itemFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const imageVariant = {
  hidden: { scale: 1.08, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: cb },
  },
};

const lineVariant = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.55, ease: cb, delay: 0.1 },
  },
};

const dotVariant = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { duration: 0.45, ease: cb },
  },
};

/* ── Stats ──────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Empresas atendidas" },
  { value: "10+",  label: "Años de experiencia" },
  { value: "99%",  label: "Satisfacción de clientes" },
];

/* ── Component ──────────────────────────────────────────── */

export function HeroSection({ content }: HeroSectionProps) {
  const videoRef       = useRef<HTMLVideoElement | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const handleMouseEnter = async () => {
    setIsVideo(true);
    if (!videoRef.current) return;
    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch {
      setIsVideo(false);
    }
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 lg:min-h-[680px] lg:grid-cols-[clamp(440px,46vw,740px)_minmax(0,1fr)]">

        {/* ══ LADO IZQUIERDO — imagen / video ══════════════ */}
        <div
          className="group relative h-[480px] w-full overflow-hidden bg-slate-900 sm:h-[580px] lg:h-full lg:min-h-[680px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Imagen de fondo con Ken Burns al montar */}
          <motion.div
            className="absolute inset-0"
            variants={imageVariant}
            initial="hidden"
            animate="show"
          >
            <Image
              src={content.image}
              alt="Lavadora industrial La Mantela"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className={`object-cover object-center transition-all duration-[1100ms] ease-out ${
                isVideo ? "scale-[1.06] opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </motion.div>

          {/* Video (hover) */}
          <video
            ref={videoRef}
            src={content.video}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-out ${
              isVideo ? "scale-[1.04] opacity-100" : "scale-100 opacity-0"
            }`}
          />

          {/* Gradiente inferior para legibilidad */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Badge flotante — esquina inferior izquierda de la imagen */}
          <motion.div
            className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative flex h-[8px] w-[8px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#75CF45] opacity-75" />
              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#75CF45]" />
            </span>
            <span className="text-[12px] font-[600] tracking-wide text-[#282828]">
              Servicio activo en Cancún
            </span>
          </motion.div>
        </div>

        {/* ══ LADO DERECHO — contenido ══════════════════════ */}
        <motion.div
          className="relative flex min-h-[540px] flex-col justify-center px-8 py-16 sm:px-14 lg:min-h-[680px] lg:px-0 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Decoraciones flotantes */}
          <motion.span
            className="absolute left-[62px] top-[58px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block"
            variants={dotVariant}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.span
            className="absolute right-[14%] top-[120px] hidden h-[14px] w-[14px] rounded-full bg-[#69C348] lg:block"
            variants={dotVariant}
            animate={{ x: [0, 7, 0] }}
            transition={{ x: { delay: 1.8, duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.span
            className="absolute bottom-[90px] left-[100px] hidden h-[17px] w-[30px] rounded-b-full rounded-t-[5px] bg-[#EF4B91] lg:block"
            variants={dotVariant}
            animate={{ y: [0, -6, 0] }}
            transition={{ y: { delay: 2.0, duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.span
            className="absolute bottom-[58px] left-[18px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block"
            variants={dotVariant}
            animate={{ y: [0, -8, 0] }}
            transition={{ y: { delay: 1.2, duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
          />

          {/* Inner wrapper con margen izquierdo en desktop */}
          <div className="relative z-10 w-full lg:ml-[52px] lg:max-w-[560px]">

            {/* Eyebrow — badge de categoría */}
            <motion.div variants={itemFade} className="mb-[22px] flex items-center gap-3">
              <span className="h-[2px] w-[32px] rounded-full bg-[#75CF45]" />
              <span className="text-[12px] font-[700] uppercase tracking-[0.16em] text-[#75CF45]">
                Lavandería Industrial Profesional
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="text-[38px] font-[800] leading-[1.18] tracking-[-0.04em] text-[#1a1a1a] sm:text-[48px] lg:text-[52px] lg:leading-[1.15]">
              <motion.span className="block" variants={itemUp}>
                Procesos
              </motion.span>
              <motion.span className="block" variants={itemUp}>
                industriales para
              </motion.span>
              <motion.span className="block" variants={itemUp}>
                el cuidado{" "}
                <span className="relative inline-block text-[#75CF45]">
                  profesional
                  {/* Línea subrayado animada */}
                  <motion.span
                    className="absolute -bottom-[4px] left-0 h-[3px] w-full origin-left rounded-full bg-[#75CF45]/40"
                    variants={lineVariant}
                  />
                </span>
              </motion.span>
            </h1>

            {/* Descripción */}
            <motion.p
              variants={itemUp}
              className="mt-[24px] max-w-[480px] text-[15px] font-normal leading-[26px] text-[#555]"
            >
              {content.description}
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemUp} className="mt-[32px] flex flex-wrap items-center gap-4">
              <a
                href={content.buttonHref}
                target="_blank"
                rel="noreferrer"
                className="group/btn relative inline-flex h-[56px] items-center justify-center overflow-hidden rounded-none rounded-tl-[22px] rounded-br-[22px] bg-[#75CF45] px-8 text-[15px] font-[700] text-white shadow-[0_14px_32px_rgba(117,207,69,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#64BF3B] hover:shadow-[0_20px_40px_rgba(117,207,69,0.50)]"
              >
                {/* Shimmer al hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                <span className="relative">{content.buttonLabel}</span>
                {/* Flecha */}
                <svg
                  className="relative ml-2 h-[16px] w-[16px] transition-transform duration-300 group-hover/btn:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Link secundario */}
              <a
                href="#proceso"
                className="flex items-center gap-2 text-[14px] font-[600] text-[#555] transition-colors duration-200 hover:text-[#282828]"
              >
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#e0e0e0] bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <svg viewBox="0 0 16 16" fill="none" className="h-[14px] w-[14px]" aria-hidden>
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Ver el proceso
              </a>
            </motion.div>

            {/* Stats ── separador + 3 cifras */}
            <motion.div variants={itemFade} className="mt-[44px]">
              <div className="mb-[24px] h-[1px] w-full bg-[#f0f0f0]" />
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[26px] font-[800] leading-none tracking-[-0.04em] text-[#1a1a1a] sm:text-[30px]">
                      {s.value}
                    </p>
                    <p className="mt-[6px] text-[11px] font-[500] leading-[15px] text-[#888]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
