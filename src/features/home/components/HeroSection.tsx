"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { HeroContent } from "@/features/home/types/home.types";

const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const up = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.72, ease: cb } },
};
const fade = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stats = [
  { value: "500+", label: "Empresas atendidas"    },
  { value: "10+",  label: "Años de experiencia"   },
  { value: "99%",  label: "Satisfacción garantizada" },
];

export function HeroSection({ content }: { content: HeroContent }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const startVideo = async () => {
    setIsVideo(true);
    if (!videoRef.current) return;
    try { videoRef.current.currentTime = 0; await videoRef.current.play(); }
    catch { setIsVideo(false); }
  };
  const stopVideo = () => {
    setIsVideo(false);
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 lg:min-h-[680px] lg:grid-cols-[clamp(440px,46vw,740px)_minmax(0,1fr)]">

        {/* ── Lado visual ─────────────────────────────────── */}
        <div
          className="group relative h-[480px] w-full overflow-hidden bg-slate-900 sm:h-[580px] lg:h-full lg:min-h-[680px]"
          onMouseEnter={startVideo}
          onMouseLeave={stopVideo}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1,    opacity: 1 }}
            transition={{ duration: 1.4, ease: cb }}
          >
            <Image
              src={content.image}
              alt="Lavadora industrial La Mantela"
              fill priority
              sizes="(max-width:1024px) 100vw, 46vw"
              className={`object-cover object-center transition-all duration-[1100ms] ease-out ${
                isVideo ? "scale-[1.05] opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </motion.div>

          <video
            ref={videoRef}
            src={content.video}
            muted loop playsInline preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-out ${
              isVideo ? "scale-[1.04] opacity-100" : "scale-100 opacity-0"
            }`}
          />

          {/* Gradiente de profundidad */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-white/6" />

          {/* Badge de estado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: cb }}
            className="absolute bottom-6 left-6 flex items-center gap-[10px] rounded-full bg-white/92 px-5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md"
          >
            <span className="relative flex h-[9px] w-[9px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75CF45] opacity-75" />
              <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#75CF45]" />
            </span>
            <span className="text-[12px] font-[700] tracking-[0.04em] text-[#1a1a1a]">
              Servicio activo · Cancún
            </span>
          </motion.div>

          {/* Texto de acción sobre imagen en mobile */}
          <motion.p
            className="absolute bottom-[64px] left-6 text-[11px] font-[500] tracking-[0.1em] text-white/60 uppercase lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          >
            Desliza para ver más ↓
          </motion.p>
        </div>

        {/* ── Lado texto ──────────────────────────────────── */}
        <motion.div
          className="relative flex min-h-[540px] flex-col justify-center px-8 py-16 sm:px-14 lg:min-h-[680px] lg:px-0 lg:py-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Decoraciones flotantes */}
          {[
            { cls: "left-[62px] top-[60px] h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6]", delay: 1.4, dy: -10 },
            { cls: "right-[14%] top-[118px] h-[13px] w-[13px] rounded-full bg-[#69C348]",  delay: 1.7, dy: -6  },
            { cls: "bottom-[92px] left-[102px] h-[17px] w-[30px] rounded-b-full rounded-t-[5px] bg-[#EF4B91]", delay: 1.9, dy: -7 },
            { cls: "bottom-[60px] left-[18px] h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6]", delay: 1.2, dy: -9 },
          ].map(({ cls, delay, dy }, i) => (
            <motion.span
              key={i}
              className={`absolute hidden lg:block ${cls}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1, scale: 1,
                y: [0, dy, 0],
              }}
              transition={{
                opacity: { delay, duration: 0.4 },
                scale:   { delay, duration: 0.4 },
                y:       { delay: delay + 0.5, duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}

          <div className="relative z-10 w-full lg:ml-[52px] lg:max-w-[560px]">

            {/* Eyebrow */}
            <motion.div variants={fade} className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#75CF45]" />
              <span className="text-[11px] font-[800] uppercase tracking-[0.18em] text-[#75CF45]">
                Lavandería Industrial Profesional
              </span>
            </motion.div>

            {/* H1 línea por línea */}
            <h1 className="text-[38px] font-[800] leading-[1.15] tracking-[-0.04em] text-[#1a1a1a] sm:text-[50px] lg:text-[52px]">
              <motion.span className="block" variants={up}>Procesos industriales</motion.span>
              <motion.span className="block" variants={up}>para el cuidado</motion.span>
              <motion.span className="relative block" variants={up}>
                <span className="text-[#75CF45]">profesional</span>
                {" "}de textiles
                <motion.span
                  className="absolute -bottom-[5px] left-0 h-[3px] w-[200px] origin-left rounded-full bg-[#75CF45]/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: cb }}
                />
              </motion.span>
            </h1>

            {/* Descripción */}
            <motion.p variants={up} className="mt-6 max-w-[480px] text-[14px] leading-[26px] text-[#666]">
              {content.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={up} className="mt-8 flex flex-wrap items-center gap-4">
              {/* Botón principal */}
              <a
                href={content.buttonHref}
                target="_blank"
                rel="noreferrer"
                className="group/btn relative inline-flex h-[54px] items-center gap-2 overflow-hidden rounded-none rounded-tl-[22px] rounded-br-[22px] bg-[#75CF45] px-7 text-[14px] font-[700] text-white shadow-[0_12px_32px_rgba(117,207,69,0.35)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#64BF3B] hover:shadow-[0_20px_44px_rgba(117,207,69,0.50)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-600 group-hover/btn:translate-x-full" />
                <svg viewBox="0 0 24 24" className="relative h-[17px] w-[17px] shrink-0" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.121 1.532 5.856L.057 23.882a.5.5 0 0 0 .613.613l6.026-1.475A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 0 1-5.004-1.366l-.36-.214-3.722.911.927-3.64-.236-.375A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.431 0 9.818 4.388 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z" />
                </svg>
                <span className="relative">{content.buttonLabel}</span>
              </a>

              {/* Link secundario */}
              <a
                href="#proceso"
                className="group/link flex items-center gap-2 text-[13px] font-[600] text-[#888] transition-colors duration-200 hover:text-[#1a1a1a]"
              >
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#e8e8e8] bg-white shadow-sm transition-all duration-200 group-hover/link:border-[#75CF45] group-hover/link:shadow-[0_4px_12px_rgba(117,207,69,0.20)]">
                  <svg viewBox="0 0 16 16" fill="none" className="h-[13px] w-[13px]" aria-hidden>
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Ver el proceso
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fade} className="mt-10">
              <div className="mb-6 h-px w-full bg-[#f0f0f0]" />
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[26px] font-[800] leading-none tracking-[-0.04em] text-[#1a1a1a] sm:text-[30px]">
                      {s.value}
                    </p>
                    <p className="mt-[6px] text-[11px] font-[500] leading-[15px] text-[#999]">
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
