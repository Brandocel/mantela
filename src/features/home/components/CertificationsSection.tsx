"use client";

import { motion } from "framer-motion";
import type { Certification, CertificationsContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

/* Íconos SVG únicos por tipo de certificación */
function CertIcon({ icon }: { icon: Certification["icon"] }) {
  const cls = "h-[28px] w-[28px]";

  if (icon === "iso")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 16h10M16 11v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.2"/>
      </svg>
    );

  if (icon === "quality")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
        <path d="M16 4l2.9 8.9H28l-7.5 5.5 2.9 8.9L16 22 8.6 27.3l2.9-8.9L4 12.9h9.1L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    );

  if (icon === "eco")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
        <path d="M16 28c0 0-10-6-10-14a10 10 0 0 1 20 0c0 8-10 14-10 14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 13c2-2 5-3 5-3s3 1 5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );

  if (icon === "safety")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
        <path d="M16 4l10 4v8c0 6-4.5 11.3-10 13C10.5 27.3 6 22 6 16V8l10-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M11.5 16.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );

  /* trust */
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
      <path d="M28 16A12 12 0 1 1 4 16a12 12 0 0 1 24 0Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 16.5l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* Badge de certificación */
function CertBadge({ cert, delay }: { cert: Certification; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VP}
      transition={{ duration: 0.65, ease: EASE, delay }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="group flex flex-col items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:border-[#BBF7D0] hover:shadow-[0_12px_36px_rgba(22,163,74,0.08)]"
    >
      {/* Ícono con anillo */}
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-[#E2E8F0] text-[#475569] transition-all duration-200 group-hover:border-[#16A34A]/30 group-hover:bg-[#DCFCE7] group-hover:text-[#16A34A]">
        <CertIcon icon={cert.icon} />
      </div>

      {/* Nombre */}
      <div>
        <p className="text-[14px] font-[800] leading-none tracking-[-0.02em] text-[#0F172A]">
          {cert.name}
        </p>
        <p className="mt-[6px] text-[11px] font-[500] text-[#94A3B8]">
          {cert.subtitle}
        </p>
      </div>

      {/* Pill placeholder */}
      <span className="rounded-full bg-[#F0FDF4] px-3 py-[4px] text-[10px] font-[700] tracking-[0.06em] text-[#16A34A]">
        Verificado
      </span>
    </motion.div>
  );
}

export function CertificationsSection({ content }: { content: CertificationsContent }) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-[10px] text-[10px] font-[800] uppercase tracking-[0.22em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Estándares de calidad
            <span className="h-px w-[20px] bg-[#16A34A]" />
          </p>
          <h2 className="mx-auto max-w-[420px] text-[32px] font-[800] leading-[1.15] tracking-[-0.04em] text-[#0F172A] sm:text-[42px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[14px] leading-[25px] text-[#475569]">
            {content.description}
          </p>
        </motion.div>

        {/* Grid de badges */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {content.items.map((cert, i) => (
            <CertBadge key={cert.name} cert={cert} delay={i * 0.07} />
          ))}
        </div>

        {/* Nota de placeholder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center text-[11px] text-[#CBD5E1]"
        >
          * Logos y certificaciones reales próximamente
        </motion.p>
      </div>
    </section>
  );
}
