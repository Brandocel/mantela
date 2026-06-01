"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  motion, useScroll, useTransform,
  useMotionValue, useInView, animate,
} from "framer-motion";
import type { HeroContent } from "@/features/home/types/home.types";

/* Emil: strong ease-out, no built-in curves */
const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

/* ── Clip-reveal por línea — Emil pattern ─────────────── */
function LineReveal({
  children, delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ── Contador — useMotionValue + animate ────────────────── */
function StatCounter({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const val    = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return ctrl.stop;
  }, [inView, to, val]);

  return (
    <div ref={ref}>
      <p className="text-[26px] font-[800] leading-none tracking-[-0.045em] text-[#0F172A] sm:text-[30px]">
        {display}{suffix}
      </p>
      <p className="mt-[5px] text-[11px] font-[500] leading-[14px] text-[#94A3B8]">{label}</p>
    </div>
  );
}

/* ── HeroSection ─────────────────────────────────────────── */
export function HeroSection({ content }: { content: HeroContent }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [isVideo, setIsVideo] = useState(false);

  const { scrollY } = useScroll();
  /* Emil: parallax con transform, nunca top/left */
  const imgY = useTransform(scrollY, [0, 700], [0, 60]);

  const startVideo = async () => {
    setIsVideo(true);
    if (!videoRef.current) return;
    try { videoRef.current.currentTime = 0; await videoRef.current.play(); }
    catch { setIsVideo(false); }
  };
  const stopVideo = () => {
    setIsVideo(false);
    if (!videoRef.current) return;
    videoRef.current.pause(); videoRef.current.currentTime = 0;
  };

  return (
    <section id="inicio" ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 lg:min-h-[700px] lg:grid-cols-[clamp(420px,46vw,700px)_minmax(0,1fr)]">

        {/* ── Visual ──────────────────────────────────────── */}
        <div
          className="group relative h-[480px] w-full overflow-hidden bg-[#0F172A] sm:h-[580px] lg:h-full lg:min-h-[700px]"
          onMouseEnter={startVideo}
          onMouseLeave={stopVideo}
        >
          {/* Imagen con parallax — Emil: scale para evitar bordes blancos */}
          <motion.div className="absolute inset-0 scale-[1.12]" style={{ y: imgY }}>
            <Image
              src={content.image}
              alt="Lavandería industrial La Mantela"
              fill priority
              sizes="(max-width:1024px) 100vw, 46vw"
              className={`object-cover object-center transition-opacity duration-[900ms] ${
                isVideo ? "opacity-0" : "opacity-100"
              }`}
            />
          </motion.div>

          {/* Video on hover */}
          <video ref={videoRef} src={content.video} muted loop playsInline preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ${
              isVideo ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Gradiente natural — base → transparente */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-[#0F172A]/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/8" />

          {/* Badge live — Emil: opacity+transform, no scale(0) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
            className="absolute bottom-5 left-5 flex items-center gap-[9px] rounded-full bg-white/92 px-4 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.16)] backdrop-blur-md"
          >
            <span className="relative flex h-[8px] w-[8px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#16A34A]" />
            </span>
            <span className="text-[11px] font-[700] tracking-[0.06em] text-[#0F172A]">Servicio activo · Cancún</span>
          </motion.div>

          {/* Indicador hover en desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute right-4 top-4 hidden items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-sm lg:flex"
          >
            <svg viewBox="0 0 14 14" fill="none" className="h-[11px] w-[11px] text-white/70" aria-hidden>
              <path d="M7 2v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="text-[10px] font-[600] text-white/70">Pasa el cursor</span>
          </motion.div>
        </div>

        {/* ── Texto ────────────────────────────────────────── */}
        <div className="relative flex min-h-[540px] flex-col justify-center px-8 py-16 sm:px-12 lg:min-h-[700px] lg:px-0 lg:py-0">

          <div className="relative z-10 lg:ml-[56px] lg:max-w-[520px]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-[24px] bg-[#16A34A]" />
              <span className="text-[10px] font-[800] uppercase tracking-[0.22em] text-[#16A34A]">
                Lavandería Industrial B2B
              </span>
            </motion.div>

            {/* H1 — clip reveal línea por línea, Emil pattern */}
            <h1 className="text-[38px] font-[800] leading-[1.12] tracking-[-0.045em] text-[#0F172A] sm:text-[50px] lg:text-[52px]">
              <LineReveal delay={0.15}>Procesos industriales</LineReveal>
              <LineReveal delay={0.25}>para el cuidado</LineReveal>
              <LineReveal delay={0.35}>
                <span className="text-[#16A34A]">profesional</span>
                {" "}de textiles
              </LineReveal>
            </h1>

            {/* Separador animado — Emil: scaleX, no width */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
              className="mt-6 h-px w-full origin-left bg-[#E2E8F0]"
            />

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65, ease: EASE }}
              className="mt-5 max-w-[440px] text-[14px] leading-[27px] text-[#475569]"
            >
              {content.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              {/* CTA principal — Emil: active:scale(0.97), shimmer con clip-path */}
              <a href={content.buttonHref} target="_blank" rel="noreferrer"
                className="group relative inline-flex h-[52px] items-center gap-[10px] overflow-hidden rounded-none rounded-tl-[20px] rounded-br-[20px] bg-[#16A34A] px-7 text-[13px] font-[700] tracking-[0.025em] text-white shadow-[0_8px_24px_rgba(22,163,74,0.28)] transition-all duration-200 ease-out hover:bg-[#15803D] hover:shadow-[0_14px_36px_rgba(22,163,74,0.40)] active:scale-[0.97] active:shadow-none"
              >
                {/* Shimmer clip-path — Emil technique */}
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-[100%]" />
                {/* WhatsApp */}
                <svg viewBox="0 0 24 24" className="relative h-[16px] w-[16px] shrink-0" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.121 1.532 5.856L.057 23.882a.5.5 0 0 0 .613.613l6.026-1.475A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 0 1-5.004-1.366l-.36-.214-3.722.911.927-3.64-.236-.375A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.431 0 9.818 4.388 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z"/>
                </svg>
                <span className="relative">{content.buttonLabel}</span>
              </a>

              {/* Secundario */}
              <a href="#servicios"
                className="group flex items-center gap-2 text-[13px] font-[600] text-[#94A3B8] transition-colors duration-150 hover:text-[#0F172A] active:opacity-60">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#E2E8F0] bg-white shadow-sm transition-all duration-200 group-hover:border-[#16A34A] group-hover:shadow-[0_2px_8px_rgba(22,163,74,0.15)]">
                  <svg viewBox="0 0 14 14" fill="none" className="h-[12px] w-[12px]" aria-hidden>
                    <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Ver servicios
              </a>
            </motion.div>

            {/* Stats — contadores animados */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-9"
            >
              <div className="mb-7 h-px bg-[#E2E8F0]" />
              <div className="grid grid-cols-3 gap-5">
                <StatCounter to={500} suffix="+" label="Empresas atendidas" />
                <StatCounter to={10}  suffix="+" label="Años de experiencia" />
                <StatCounter to={99}  suffix="%" label="Entregas puntuales" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
