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
  { end: 99,  suffix: "%", label: "Entregas a tiempo" },
];

function Counter({ end, suffix, delay = 0 }: { end: number; suffix: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1400;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, duration / steps);
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
  const imgY      = useTransform(scrollY, [0, 600], [0, 48]);
  const overlayOp = useTransform(scrollY, [0, 400], [0.45, 0.72]);

  /* Play/pause según visibilidad del hero */
  useEffect(() => {
    const v = videoRef.current;
    const s = sectionRef.current;
    if (!v || !s) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().then(() => setVideoReady(true)).catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(s);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="inicio" className="relative overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 lg:min-h-[680px] lg:grid-cols-[clamp(420px,46vw,700px)_minmax(0,1fr)]">

        {/* ── Panel de video ── */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative h-[460px] w-full overflow-hidden bg-[#0F172A] sm:h-[560px] lg:h-full lg:min-h-[680px]"
        >
          {/* Imagen fallback con parallax */}
          <motion.div className="absolute inset-0 scale-[1.08]" style={{ y: imgY }}>
            <Image
              src={content.image}
              alt="Lavandería industrial La Mantela"
              fill priority
              sizes="(max-width:1024px) 100vw, 46vw"
              className={`object-cover object-center transition-opacity duration-1000 ${videoReady ? "opacity-0" : "opacity-100"}`}
            />
          </motion.div>

          {/* Video principal — autoplay */}
          <video
            ref={videoRef}
            src={content.video}
            muted loop playsInline preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
          />

          {/* Gradiente dinámico con scroll */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent"
            style={{ opacity: overlayOp }}
          />

          {/* Línea verde lateral — acento de marca */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
            className="absolute right-0 top-[10%] h-[60%] w-[3px] origin-top bg-[#16A34A]"
          />

          {/* Esquina decorativa top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
            className="absolute left-4 top-4 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-white/30"
          />

          {/* Badge activo con pulso */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
            className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm"
          >
            <span className="relative flex h-[8px] w-[8px]">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-[#16A34A]"
                animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                transition={{ duration: 1.4, ease: "easeOut", repeat: Infinity }}
              />
              <span className="relative h-[8px] w-[8px] rounded-full bg-[#16A34A]" />
            </span>
            <span className="text-[11px] font-[600] tracking-[0.04em] text-[#0F172A]">
              Servicio activo · Cancún
            </span>
          </motion.div>

        </motion.div>

        {/* ── Panel de texto ── */}
        <div className="relative flex min-h-[500px] flex-col justify-center px-8 py-16 sm:px-12 lg:min-h-[680px] lg:px-0 lg:py-0">
          <div className="lg:ml-[56px] lg:max-w-[500px]">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-[24px] bg-[#16A34A]" />
              <span className="text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
                Lavandería Industrial B2B
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="text-[38px] font-[800] leading-[1.12] tracking-[-0.045em] text-[#0F172A] sm:text-[48px] lg:text-[50px]"
            >
              Procesos industriales<br />
              para el cuidado<br />
              <span className="text-[#16A34A]">profesional</span> de textiles
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
              className="mt-6 h-px w-full origin-left bg-[#E2E8F0]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-5 max-w-[420px] text-[14px] leading-[26px] text-[#475569]"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href={content.buttonHref}
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 10px 28px rgba(22,163,74,0.34)" }}
                whileTap={{ scale: 0.96 }}
                transition={SPRING}
                className="inline-flex h-[50px] items-center gap-2.5 rounded-none rounded-tl-[18px] rounded-br-[18px] bg-[#16A34A] px-7 text-[13px] font-[700] tracking-[0.02em] text-white shadow-[0_6px_20px_rgba(22,163,74,0.22)]"
              >
                {content.buttonLabel}
              </motion.a>
              <a
                href="#servicios"
                className="text-[13px] font-[600] text-[#94A3B8] underline-offset-4 transition-colors duration-150 hover:text-[#0F172A] hover:underline"
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-10"
            >
              <div className="mb-6 h-px bg-[#E2E8F0]" />
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...SPRING, delay: 1.3 + i * 0.08 }}
                  >
                    <p className="text-[26px] font-[800] leading-none tracking-[-0.04em] text-[#0F172A]">
                      <Counter end={s.end} suffix={s.suffix} delay={(1.3 + i * 0.08) * 1000} />
                    </p>
                    <p className="mt-[5px] text-[11px] font-[500] leading-[14px] text-[#94A3B8]">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
