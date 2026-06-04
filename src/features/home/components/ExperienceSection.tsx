"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ExperienceContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

const CIRCLE_VARIANTS = [
  { bg: "bg-[#F0FDF4]", text: "text-[#166534]", border: "border-[#BBF7D0]" },
  { bg: "bg-[#F1F5F9]", text: "text-[#334155]", border: "border-[#CBD5E1]" },
  { bg: "bg-[#ECFDF5]", text: "text-[#065F46]", border: "border-[#6EE7B7]" },
  { bg: "bg-[#F8FAFC]", text: "text-[#475569]", border: "border-[#E2E8F0]" },
];

function LogoCircle({
  name,
  image,
  darkBg,
  colorIndex,
}: {
  name: string;
  category: string;
  image?: string;
  darkBg?: boolean;
  colorIndex: number;
}) {
  const words = name.split(" ").filter((w) => w.length > 1);
  const initials = words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();

  const v = CIRCLE_VARIANTS[colorIndex % CIRCLE_VARIANTS.length];

  return (
    <div className="flex shrink-0 flex-col items-center gap-[10px]">
      <div
        className={`flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-full border select-none transition-transform duration-200 hover:scale-[1.06] ${darkBg ? "bg-[#1a1a1a] border-[#333]" : `${v.bg} ${v.border}`}`}
        title={name}
        aria-label={name}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            width={88}
            height={88}
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <span className={`text-[17px] font-[800] tracking-[0.01em] ${v.text}`}>
            {initials}
          </span>
        )}
      </div>
      <p className="w-[100px] text-center text-[10px] font-[600] leading-[14px] text-[#334155]">
        {name}
      </p>
    </div>
  );
}

function MarqueeRow({
  logos,
  reverse = false,
}: {
  logos: ExperienceContent["logos"];
  reverse?: boolean;
}) {
  /* Duplicar para que el loop sea continuo sin corte visible */
  const doubled = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      {/* Fade masks — ocultan el punto de loop */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      {/*
        width: max-content es CRÍTICO — hace que translateX(-50%) se calcule
        sobre el ancho real del contenido duplicado, no del viewport.
        Sin esto, el -50% no coincide y se ve el corte.
      */}
      <div
        className={`flex items-start gap-8 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((logo, i) => (
          <LogoCircle
            key={`${logo.name}-${i}`}
            name={logo.name}
            category={logo.category}
            image={logo.image}
            darkBg={logo.darkBg}
            colorIndex={i % 4}
          />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection({ content }: { content: ExperienceContent }) {
  return (
    <section className="overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-20 sm:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <p className="mb-3 flex items-center gap-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Trayectoria comprobada
            <span className="h-px w-[20px] bg-[#16A34A]" />
          </p>
          <h2 className="max-w-[460px] text-[32px] font-[800] leading-[1.15] tracking-[-0.04em] text-[#0F172A] sm:text-[42px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-[25px] text-[#475569]">
            {content.description}
          </p>
        </motion.div>

        {/* Stats en línea — sobrio, sin cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-8 border-y border-[#E2E8F0] py-7 sm:gap-16"
        >
          {[
            { value: "500+", label: "Empresas atendidas"  },
            { value: "12",   label: "Industrias servidas" },
            { value: "100%", label: "Servicio puntual"    },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-[26px] font-[800] leading-none tracking-[-0.04em] text-[#0F172A]">
                {value}
              </p>
              <p className="mt-[6px] text-[11px] font-[500] text-[#94A3B8]">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dos filas de marquee — fuera del container para ser full-width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        className="flex flex-col gap-6 pb-16"
      >
        {/* Fila 1 — avanza hacia la izquierda */}
        <MarqueeRow logos={content.logos} reverse={false} />

        {/* Fila 2 — avanza hacia la derecha */}
        <MarqueeRow logos={content.logos} reverse={true} />
      </motion.div>
    </section>
  );
}
