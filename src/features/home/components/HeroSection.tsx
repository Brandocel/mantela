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
        {/* Imagen / Video — cubre desde el borde izquierdo */}
        <div
          className="group relative h-[480px] w-full overflow-hidden bg-slate-100 sm:h-[580px] lg:h-full lg:min-h-[620px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={content.image}
            alt="Lavadora industrial La Mantela"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className={`object-cover object-center transition-all duration-[900ms] ease-out ${
              isVideoVisible
                ? "scale-[1.04] opacity-0"
                : "scale-100 opacity-100"
            }`}
          />

          <video
            ref={videoRef}
            src={content.video}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[900ms] ease-out ${
              isVideoVisible
                ? "scale-[1.04] opacity-100"
                : "scale-100 opacity-0"
            }`}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-white/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        {/* Contenido derecho */}
        <div className="relative flex min-h-[520px] flex-col justify-center px-8 pb-20 pt-16 sm:px-12 lg:min-h-[620px] lg:px-0 lg:pb-0 lg:pt-0">
          {/* Decoraciones — posicionadas respecto al contenedor derecho */}
          <span className="absolute left-[72px] top-[64px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block" />
          <span className="absolute right-[14%] top-[130px] hidden h-[16px] w-[16px] rounded-full bg-[#69C348] lg:block" />
          <span className="absolute bottom-[80px] left-[108px] hidden h-[17px] w-[30px] rounded-b-full rounded-t-[5px] bg-[#EF4B91] lg:block" />
          <span className="absolute bottom-[52px] left-[16px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block" />

          <div className="relative z-10 max-w-[640px] lg:ml-[52px]">
            <h1 className="text-[36px] font-[700] leading-[1.3] tracking-[-0.035em] text-[#282828] sm:text-[46px] sm:leading-[1.35] lg:text-[48px] lg:leading-[1.38]">
              <span className="block">Procesos industriales</span>
              <span className="block">para el cuidado</span>
              <span className="block">profesional de textiles</span>
            </h1>

            <p className="mt-[22px] max-w-[560px] text-[14px] font-normal leading-[24px] text-[#545454] sm:mt-[24px]">
              {content.description}
            </p>

            <a
              href={content.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="mt-[28px] inline-flex h-[54px] w-full max-w-[380px] items-center justify-center rounded-none rounded-tl-[20px] rounded-br-[20px] bg-[#75CF45] px-8 text-center text-[15px] font-[600] leading-6 text-white shadow-[0_14px_28px_rgba(117,207,69,0.30)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#64BF3B] hover:shadow-[0_20px_36px_rgba(117,207,69,0.40)]"
            >
              {content.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
