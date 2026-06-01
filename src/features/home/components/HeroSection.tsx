"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { HeroContent } from "@/features/home/types/home.types";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleMouseEnter = async () => {
    setIsVideoVisible(true);
    if (!videoRef.current) return;
    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch {
      setIsVideoVisible(false);
    }
  };

  const handleMouseLeave = () => {
    setIsVideoVisible(false);
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 lg:min-h-[620px] lg:grid-cols-[clamp(460px,42vw,720px)_minmax(0,1fr)]">

        {/* ── Imagen / Video ── */}
        <div
          className="group relative h-[480px] w-full overflow-hidden bg-slate-100 sm:h-[580px] lg:h-full lg:min-h-[620px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Overlay de gradiente que aparece al hover */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          {/* Imagen — entra desde ligera escala */}
          <Image
            src={content.image}
            alt="Lavadora industrial La Mantela"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className={`anim-scale-reveal object-cover object-center transition-all duration-[1000ms] ease-out [animation-duration:1.2s] ${
              isVideoVisible ? "scale-[1.05] opacity-0" : "scale-100 opacity-100"
            }`}
            style={{ animationDelay: "0s" }}
          />

          <video
            ref={videoRef}
            src={content.video}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[1000ms] ease-out ${
              isVideoVisible ? "scale-[1.05] opacity-100" : "scale-100 opacity-0"
            }`}
          />
        </div>

        {/* ── Contenido derecho ── */}
        <div className="relative flex min-h-[520px] flex-col justify-center px-8 pb-20 pt-16 sm:px-12 lg:min-h-[620px] lg:px-0 lg:pb-0 lg:pt-0">

          {/* Decoraciones flotantes */}
          <span
            className="anim-float absolute left-[72px] top-[64px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block"
            style={{ animationDelay: "0.3s" }}
          />
          <span
            className="anim-float-x absolute right-[14%] top-[130px] hidden h-[16px] w-[16px] rounded-full bg-[#69C348] lg:block"
            style={{ animationDelay: "0.8s" }}
          />
          <span
            className="anim-float-slow absolute bottom-[80px] left-[108px] hidden h-[17px] w-[30px] rounded-b-full rounded-t-[5px] bg-[#EF4B91] lg:block"
            style={{ animationDelay: "1.2s" }}
          />
          <span
            className="anim-float absolute bottom-[52px] left-[16px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block"
            style={{ animationDelay: "0.6s" }}
          />

          {/* Texto con stagger */}
          <div className="relative z-10 max-w-[640px] lg:ml-[52px]">

            {/* H1 — 3 líneas stagger */}
            <h1 className="text-[36px] font-[700] leading-[1.3] tracking-[-0.035em] text-[#282828] sm:text-[46px] sm:leading-[1.35] lg:text-[48px] lg:leading-[1.38]">
              <span
                className="anim-fade-up block"
                style={{ animationDelay: "0.15s" }}
              >
                Procesos industriales
              </span>
              <span
                className="anim-fade-up block"
                style={{ animationDelay: "0.3s" }}
              >
                para el cuidado
              </span>
              <span
                className="anim-fade-up block"
                style={{ animationDelay: "0.45s" }}
              >
                profesional de textiles
              </span>
            </h1>

            {/* Línea decorativa animada bajo el título */}
            <div
              className="anim-fade mt-[18px] h-[3px] w-[64px] origin-left rounded-full bg-[#75CF45]"
              style={{
                animationDelay: "0.6s",
                animation:
                  "lineExpand 0.6s cubic-bezier(0.22,1,0.36,1) 0.6s both",
              }}
            />

            {/* Descripción */}
            <p
              className="anim-fade-up mt-[20px] max-w-[560px] text-[14px] font-normal leading-[24px] text-[#545454]"
              style={{ animationDelay: "0.65s" }}
            >
              {content.description}
            </p>

            {/* Botón con glow pulsante */}
            <div
              className="anim-fade-up mt-[28px]"
              style={{ animationDelay: "0.85s" }}
            >
              <a
                href={content.buttonHref}
                target="_blank"
                rel="noreferrer"
                className="anim-pulse-glow inline-flex h-[54px] w-full max-w-[380px] items-center justify-center rounded-none rounded-tl-[20px] rounded-br-[20px] bg-[#75CF45] px-8 text-center text-[15px] font-[600] leading-6 text-white transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#64BF3B]"
              >
                {content.buttonLabel}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
