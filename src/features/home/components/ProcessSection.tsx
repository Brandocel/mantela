"use client";

import { motion } from "framer-motion";
import type { ProcessContent } from "@/features/home/types/home.types";

const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-60px" } as const;

type Variant = "green" | "pink" | "purple";

const palette: Record<Variant, { border: string; text: string; bg: string; glow: string; watermark: string }> = {
  green:  { border: "border-[#75CF45]", text: "text-[#75CF45]",  bg: "bg-[#75CF45]/10",  glow: "hover:shadow-[0_24px_60px_rgba(117,207,69,0.14)]",  watermark: "#75CF45" },
  pink:   { border: "border-[#EF4B91]", text: "text-[#EF4B91]",  bg: "bg-[#EF4B91]/10",  glow: "hover:shadow-[0_24px_60px_rgba(239,75,145,0.14)]",  watermark: "#EF4B91" },
  purple: { border: "border-[#8B4CE6]", text: "text-[#8B4CE6]",  bg: "bg-[#8B4CE6]/10",  glow: "hover:shadow-[0_24px_60px_rgba(139,76,230,0.14)]",  watermark: "#8B4CE6" },
};

function BasketIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-[28px] w-[28px]" aria-hidden>
      <path d="M15 21H33L31.5 38H16.5L15 21Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M18 21V16C18 12.7 20.7 10 24 10C27.3 10 30 12.7 30 16V21" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M12 21H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M18 27H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
function IronIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-[28px] w-[28px]" aria-hidden>
      <path d="M11 33H38C39.6 33 40.6 31.3 39.8 29.9L35.7 22.7C34.6 20.7 32.5 19.5 30.2 19.5H20" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M11 33C12 28 15.5 24 20 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M18 15H30M21 15V20M18 39H39" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="29" cy="26.5" r="1.8" fill="currentColor"/>
    </svg>
  );
}
function ShirtIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-[28px] w-[28px]" aria-hidden>
      <path d="M17 10L11 15L7 23L14 26L17 20V39H31V20L34 26L41 23L37 15L31 10" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M17 10C18.8 13 21 14.5 24 14.5C27 14.5 29.2 13 31 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M21 10H27" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

function ProcessCard({
  number, title, description, variant, delay = 0,
}: { number: string; title: string; description: string; variant: Variant; delay?: number }) {
  const p = palette[variant];
  const Icon = variant === "green" ? BasketIcon : variant === "pink" ? IronIcon : ShirtIcon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.7, ease: cb, delay }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 ${p.border} ${p.glow}`}
    >
      {/* Watermark numérico de fondo */}
      <span
        className="pointer-events-none absolute -right-3 -top-5 select-none text-[90px] font-[900] leading-none opacity-[0.055]"
        style={{ color: p.watermark }}
        aria-hidden
      >
        {number}
      </span>

      {/* Ícono */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 6 }}
        transition={{ duration: 0.25 }}
        className={`mb-6 inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl ${p.bg} ${p.text}`}
      >
        <Icon />
      </motion.div>

      {/* Badge número */}
      <span className={`mb-4 inline-flex items-center rounded-full border px-3 py-[3px] text-[11px] font-[700] tracking-[0.08em] ${p.border} ${p.text}`}>
        Paso {number}
      </span>

      <h3 className="text-[18px] font-[700] leading-[24px] tracking-[-0.025em] text-[#1a1a1a]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[21px] text-[#666]">
        {description}
      </p>
    </motion.article>
  );
}

export function ProcessSection({ content }: { content: ProcessContent }) {
  const [s1, s2, s3] = content.items;

  return (
    <section id="proceso" className="relative bg-[#fafafa]">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-[96px] pt-[96px] sm:px-10 lg:px-[64px]">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease: cb }}
          className="mb-[64px] text-center"
        >
          <p className="mb-3 inline-flex items-center gap-[10px] text-[11px] font-[800] uppercase tracking-[0.18em] text-[#8B4CE6]">
            <span className="h-[2px] w-[22px] rounded-full bg-[#8B4CE6]" />
            Nuestro flujo de trabajo
            <span className="h-[2px] w-[22px] rounded-full bg-[#8B4CE6]" />
          </p>
          <h2 className="mx-auto max-w-[560px] text-[40px] font-[800] leading-[1.1] tracking-[-0.04em] text-[#1a1a1a] sm:text-[52px]">
            <span className="block">Cómo Funciona</span>
            <span className="block">Nuestro Servicio</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] text-[14px] leading-[24px] text-[#666]">
            {content.description}
          </p>
        </motion.div>

        {/* Desktop — 3 columnas stagger */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {s1 && <ProcessCard number={s1.number} title={s1.title} description={s1.description} variant="green"  delay={0}    />}
          {s2 && <ProcessCard number={s2.number} title={s2.title} description={s2.description} variant="pink"   delay={0.12} />}
          {s3 && <ProcessCard number={s3.number} title={s3.title} description={s3.description} variant="purple" delay={0.24} />}
        </div>

        {/* Conectores desktop — solo decorativos */}
        <div className="relative mt-[-1px] hidden lg:block">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
            <svg viewBox="0 0 900 60" fill="none" className="w-full max-w-[900px]" preserveAspectRatio="none">
              <path d="M150 30 Q300 -10 450 30 Q600 70 750 30" stroke="#d0d0d0" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Mobile — columna */}
        <div className="flex flex-col gap-5 lg:hidden">
          {s1 && <ProcessCard number={s1.number} title={s1.title} description={s1.description} variant="green"  delay={0}    />}
          {s2 && <ProcessCard number={s2.number} title={s2.title} description={s2.description} variant="pink"   delay={0.1}  />}
          {s3 && <ProcessCard number={s3.number} title={s3.title} description={s3.description} variant="purple" delay={0.2}  />}
        </div>
      </div>
    </section>
  );
}
