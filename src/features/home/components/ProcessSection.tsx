"use client";

import { motion } from "framer-motion";
import type { ProcessContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

/* Íconos lineales consistentes (stroke 1.8, sin relleno) */
function PickupIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-[22px] w-[22px]" aria-hidden>
      <path d="M4 8h20l-1.5 12H5.5L4 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M4 8h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9.5 13h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function ProcessIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-[22px] w-[22px]" aria-hidden>
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M14 6V4M14 24v-2M6 14H4M24 14h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function DeliveryIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-[22px] w-[22px]" aria-hidden>
      <path d="M2 8h16v13H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M18 11h5l3 5v5h-8V11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="7.5"  cy="23" r="2" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="21.5" cy="23" r="2" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}

const ICONS = [PickupIcon, ProcessIcon, DeliveryIcon];

function StepCard({ number, title, description, index, delay }: {
  number: string; title: string; description: string; index: number; delay: number;
}) {
  const Icon = ICONS[index] ?? PickupIcon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VP}
      transition={{ duration: 0.7, ease: EASE, delay }}
      /* Emil: whileHover sólo transform, active:scale */
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-shadow duration-250 hover:shadow-[0_12px_40px_rgba(15,23,42,0.09)] hover:border-[#CBD5E1]"
    >
      {/* Número watermark en fondo — sutil, no distrae */}
      <span className="pointer-events-none absolute right-4 top-2 select-none text-[72px] font-[900] leading-none text-[#F1F5F9]" aria-hidden>
        {number}
      </span>

      {/* Barra top — Emil: clip-path reveal on hover */}
      <span className="absolute left-0 top-0 h-[3px] w-0 rounded-b-none bg-[#16A34A] transition-[width] duration-300 ease-out group-hover:w-full" />

      {/* Ícono */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="mb-6 inline-flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#F8FAFC] text-[#475569] transition-colors duration-200 group-hover:bg-[#DCFCE7] group-hover:text-[#16A34A]"
      >
        <Icon />
      </motion.div>

      {/* Badge paso */}
      <span className="mb-4 inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-[3px] text-[10px] font-[800] tracking-[0.1em] text-[#64748B]">
        PASO {number}
      </span>

      <h3 className="text-[16px] font-[700] leading-[22px] tracking-[-0.025em] text-[#0F172A]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[21px] text-[#64748B]">{description}</p>
    </motion.article>
  );
}

export function ProcessSection({ content }: { content: ProcessContent }) {
  const [s1, s2, s3] = content.items;

  return (
    <section id="proceso" className="relative bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        {/* Header centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-[10px] text-[10px] font-[800] uppercase tracking-[0.22em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Flujo de trabajo
            <span className="h-px w-[20px] bg-[#16A34A]" />
          </p>
          <h2 className="mx-auto max-w-[500px] text-[36px] font-[800] leading-[1.1] tracking-[-0.045em] text-[#0F172A] sm:text-[48px]">
            Cómo Funciona<br />Nuestro Servicio
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[14px] leading-[25px] text-[#475569]">
            {content.description}
          </p>
        </motion.div>

        {/* Grid 3 columnas — igual altura, misma estética */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s1 && <StepCard number={s1.number} title={s1.title} description={s1.description} index={0} delay={0}    />}
          {s2 && <StepCard number={s2.number} title={s2.title} description={s2.description} index={1} delay={0.08} />}
          {s3 && <StepCard number={s3.number} title={s3.title} description={s3.description} index={2} delay={0.16} />}
        </div>
      </div>
    </section>
  );
}
