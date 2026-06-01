"use client";

import { motion } from "framer-motion";
import type { ProcessContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

function PickupIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-[20px] w-[20px]" aria-hidden>
      <path d="M4 8h20l-1.5 12H5.5L4 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M9.5 13h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function CycleIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-[20px] w-[20px]" aria-hidden>
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M14 6V4M14 24v-2M6 14H4M24 14h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function DeliveryIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-[20px] w-[20px]" aria-hidden>
      <path d="M2 8h16v13H2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M18 11h5l3 5v5h-8V11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="7.5"  cy="23" r="2" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="21.5" cy="23" r="2" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

const ICONS = [PickupIcon, CycleIcon, DeliveryIcon];

function StepCard({ number, title, description, index, delay }: {
  number: string; title: string; description: string; index: number; delay: number;
}) {
  const Icon = ICONS[index] ?? PickupIcon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-[0_8px_32px_rgba(15,23,42,0.07)]"
    >
      {/* Número como texto ligero — no watermark, no pill */}
      <p className="mb-5 text-[11px] font-[700] tracking-[0.12em] text-[#94A3B8]">
        {number}
      </p>

      {/* Ícono — transición de color, sin rotación */}
      <div className="mb-5 inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#F8FAFC] text-[#64748B] transition-colors duration-200 group-hover:bg-[#F0FDF4] group-hover:text-[#16A34A]">
        <Icon />
      </div>

      <h3 className="text-[16px] font-[700] leading-[22px] tracking-[-0.02em] text-[#0F172A]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[21px] text-[#64748B]">
        {description}
      </p>
    </motion.article>
  );
}

export function ProcessSection({ content }: { content: ProcessContent }) {
  const [s1, s2, s3] = content.items;

  return (
    <section id="proceso" className="bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Flujo de trabajo
            <span className="h-px w-[20px] bg-[#16A34A]" />
          </p>
          <h2 className="mx-auto max-w-[460px] text-[34px] font-[800] leading-[1.12] tracking-[-0.04em] text-[#0F172A] sm:text-[46px]">
            Cómo Funciona<br />Nuestro Servicio
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-[24px] text-[#475569]">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s1 && <StepCard number={s1.number} title={s1.title} description={s1.description} index={0} delay={0}    />}
          {s2 && <StepCard number={s2.number} title={s2.title} description={s2.description} index={1} delay={0.07} />}
          {s3 && <StepCard number={s3.number} title={s3.title} description={s3.description} index={2} delay={0.14} />}
        </div>
      </div>
    </section>
  );
}
