"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HeroContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const stats = [
  { value: "500+", label: "Empresas atendidas"      },
  { value: "15+",  label: "Años de experiencia"     },
  { value: "99%",  label: "Entregas a tiempo"       },
];

export function HeroSection({ content }: { content: HeroContent }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideo, setIsVideo] = useState(false);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 48]);

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
      <div className="grid w-full grid-cols-1 lg:min-h-[680px] lg:grid-cols-[clamp(420px,46vw,700px)_minmax(0,1fr)]">

        {/* Imagen / Video */}
        <div
          className="relative h-[460px] w-full overflow-hidden bg-[#0F172A] sm:h-[560px] lg:h-full lg:min-h-[680px]"
          onMouseEnter={startVideo}
          onMouseLeave={stopVideo}
        >
          <motion.div className="absolute inset-0 scale-[1.08]" style={{ y: imgY }}>
            <Image
              src={content.image}
              alt="Lavandería industrial La Mantela"
              fill priority
              sizes="(max-width:1024px) 100vw, 46vw"
              className={`object-cover object-center transition-opacity duration-1000 ${isVideo ? "opacity-0" : "opacity-100"}`}
            />
          </motion.div>
          <video
            ref={videoRef} src={content.video}
            muted loop playsInline preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${isVideo ? "opacity-100" : "opacity-0"}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />

          {/* Badge — sobrio, sin ping animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#16A34A]" />
            <span className="text-[11px] font-[600] tracking-[0.04em] text-[#0F172A]">
              Servicio activo · Cancún
            </span>
          </motion.div>
        </div>

        {/* Texto */}
        <div className="relative flex min-h-[500px] flex-col justify-center px-8 py-16 sm:px-12 lg:min-h-[680px] lg:px-0 lg:py-0">
          <div className="lg:ml-[56px] lg:max-w-[500px]">

            {/* Eyebrow — línea + texto, sin ícono */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-[24px] bg-[#16A34A]" />
              <span className="text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
                Lavandería Industrial B2B
              </span>
            </motion.div>

            {/* H1 — fade simple, sin clip-reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              className="text-[38px] font-[800] leading-[1.12] tracking-[-0.045em] text-[#0F172A] sm:text-[48px] lg:text-[50px]"
            >
              Procesos industriales<br />
              para el cuidado<br />
              <span className="text-[#16A34A]">profesional</span> de textiles
            </motion.h1>

            {/* Separador */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="mt-6 h-px w-full origin-left bg-[#E2E8F0]"
            />

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 max-w-[420px] text-[14px] leading-[26px] text-[#475569]"
            >
              {content.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <a
                href={content.buttonHref}
                target="_blank" rel="noreferrer"
                className="inline-flex h-[50px] items-center gap-2.5 rounded-none rounded-tl-[18px] rounded-br-[18px] bg-[#16A34A] px-7 text-[13px] font-[700] tracking-[0.02em] text-white shadow-[0_6px_20px_rgba(22,163,74,0.22)] transition-all duration-200 hover:bg-[#15803D] hover:shadow-[0_10px_28px_rgba(22,163,74,0.32)] active:scale-[0.97]"
              >
                {content.buttonLabel}
              </a>
              <a
                href="#servicios"
                className="text-[13px] font-[600] text-[#94A3B8] underline-offset-4 transition-colors duration-150 hover:text-[#0F172A] hover:underline"
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Stats — estáticos, sin contador animado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10"
            >
              <div className="mb-6 h-px bg-[#E2E8F0]" />
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[26px] font-[800] leading-none tracking-[-0.04em] text-[#0F172A]">
                      {s.value}
                    </p>
                    <p className="mt-[5px] text-[11px] font-[500] leading-[14px] text-[#94A3B8]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
