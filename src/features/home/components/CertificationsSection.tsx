"use client";

import { motion } from "framer-motion";
import type { Certification, CertificationsContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

function CertIcon({ icon }: { icon: Certification["icon"] }) {
  const cls = "h-[22px] w-[22px]";
  if (icon === "iso")
    return <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8"/><path d="M11 16h10M16 11v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
  if (icon === "quality")
    return <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden><path d="M16 5l2.6 8H28l-7 5 2.7 8-7.3-5.3L9 26l2.7-8-7-5h9.4L16 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
  if (icon === "eco")
    return <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden><path d="M16 27C10 23 6 18 6 13a10 10 0 0 1 20 0c0 5-4 10-10 14Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M16 18v-8M12 14c2-2 4-2 4-2s2 0 4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
  if (icon === "safety")
    return <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden><path d="M16 4l10 4v8c0 6-4 11-10 13C10 27 6 22 6 16V8l10-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 16.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8"/><path d="M11 16.5l3.5 3.5 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function CertBadge({ cert, delay }: { cert: Certification; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="group flex flex-col items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-7 text-center transition-all duration-200 hover:border-[#BBF7D0] hover:shadow-[0_8px_28px_rgba(22,163,74,0.07)]"
    >
      {/* Ícono — sin badge, sin pill */}
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#E2E8F0] text-[#475569] transition-all duration-200 group-hover:border-[#86EFAC] group-hover:bg-[#F0FDF4] group-hover:text-[#16A34A]">
        <CertIcon icon={cert.icon} />
      </div>

      <div>
        <p className="text-[13px] font-[800] leading-none tracking-[-0.01em] text-[#0F172A]">
          {cert.name}
        </p>
        <p className="mt-[5px] text-[11px] font-[500] text-[#94A3B8]">
          {cert.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export function CertificationsSection({ content }: { content: CertificationsContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Estándares de calidad
            <span className="h-px w-[20px] bg-[#16A34A]" />
          </p>
          <h2 className="mx-auto max-w-[380px] text-[32px] font-[800] leading-[1.15] tracking-[-0.04em] text-[#0F172A] sm:text-[42px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[380px] text-[14px] leading-[25px] text-[#475569]">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {content.items.map((cert, i) => (
            <CertBadge key={cert.name} cert={cert} delay={i * 0.06} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-[11px] text-[#CBD5E1]"
        >
          Logos y certificaciones reales próximamente
        </motion.p>
      </div>
    </section>
  );
}
