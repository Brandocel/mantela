"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import type { HeroContent } from "@/features/home/types/home.types";

const EASE   = [0.23, 1, 0.32, 1] as [number, number, number, number];
const SPRING = { type: "spring", stiffness: 360, damping: 32 } as const;

const stats = [
  { end: 500, suffix: "+", label: "Empresas atendidas" },
  { end: 15,  suffix: "+", label: "Años de experiencia" },
  { end: 99,  suffix: "%", label: "Entregas a tiempo"  },
];

function Counter({ end, suffix, delay = 0 }: { end: number; suffix: string; delay?: number }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const steps     = 60;
      const increment = end / steps;
      let current     = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, 1400 / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, end, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function HeroSection({ content }: { content: HeroContent }) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 700], [0, 80]);

  /* Play / pause según visibilidad */
  useEffect(() => {
    const v = videoRef.current;
    const s = sectionRef.current;
    if (!v || !s) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().then(() => setVideoReady(true)).catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(s);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#0F172A]"
    >
      {/* ── Fondo: imagen fallback + video ── */}
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <Image
          src={content.image}
          alt="La Mantela lavandería industrial"
          fill priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${videoReady ? "opacity-0" : "opacity-100"}`}
        />
        <video
          ref={videoRef}
          src={content.video}
          muted loop playsInline preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
        />
      </motion.div>

      {/* ── Overlays ── */}
      {/* Oscurece todo el video de forma uniforme */}
      <div className="pointer-events-none absolute inset-0 bg-[#0F172A]/55" />
      {/* Gradiente abajo para que los stats sean legibles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />

      {/* ── Contenido centrado ── */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-10 text-center">

        {/* Logo grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="w-[220px] sm:w-[300px] lg:w-[380px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logomantela.png"
            alt="La Mantela"
            className="h-auto w-full object-contain drop-shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* Línea teal */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.0 }}
          className="mt-6 h-[2px] w-[56px] origin-center bg-[#00B2A9]"
        />

        {/* Tagline fija */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.15 }}
          className="mt-4 text-[11px] font-[700] uppercase tracking-[0.28em] text-[#00B2A9] sm:text-[12px]"
        >
          15 años de experiencia en lavandería industrial
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
          className="mt-6 max-w-[640px] text-[32px] font-[800] leading-[1.15] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[52px]"
        >
          Textiles impecables,<br />
          <span className="text-[#00B2A9]">resultados consistentes.</span>
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href={content.buttonHref}
            target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,178,169,0.40)" }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING}
            className="inline-flex h-[50px] items-center rounded-none rounded-tl-[16px] rounded-br-[16px] bg-[#00B2A9] px-8 text-[13px] font-[700] tracking-[0.04em] text-white shadow-[0_6px_20px_rgba(0,178,169,0.28)]"
          >
            {content.buttonLabel}
          </motion.a>
          <a
            href="#servicios"
            className="text-[13px] font-[600] text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Ver servicios
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mt-14 w-full max-w-[480px]"
        >
          <div className="h-px w-full bg-white/10" />
          <div className="mt-7 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING, delay: 1.8 + i * 0.09 }}
                className="text-center"
              >
                <p className="text-[28px] font-[800] leading-none tracking-[-0.04em] text-white">
                  <Counter end={s.end} suffix={s.suffix} delay={(1.8 + i * 0.09) * 1000} />
                </p>
                <p className="mt-[6px] text-[10px] font-[500] leading-[14px] text-white/45">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Esquinas decorativas ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute left-5 top-5 h-7 w-7 border-l-2 border-t-2 border-[#00B2A9]/60" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute right-5 top-5 h-7 w-7 border-r-2 border-t-2 border-[#00B2A9]/60" />

      {/* ── Badge activo ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5, ease: EASE }}
        className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10"
      >
        <span className="relative flex h-[8px] w-[8px]">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-[#00B2A9]"
            animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
            transition={{ duration: 1.4, ease: "easeOut" as const, repeat: Infinity }}
          />
          <span className="relative h-[8px] w-[8px] rounded-full bg-[#00B2A9]" />
        </span>
        <span className="text-[11px] font-[600] tracking-[0.04em] text-white/80">
          Servicio activo · Cancún
        </span>
      </motion.div>
    </section>
  );
}
