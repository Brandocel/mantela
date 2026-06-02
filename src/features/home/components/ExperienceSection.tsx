"use client";

import { motion } from "framer-motion";
import type { ExperienceContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

function CategoryIcon({ category }: { category: string }) {
  const cls = "h-[13px] w-[13px]";
  if (category === "Hotelería")
    return <svg viewBox="0 0 16 16" fill="none" className={cls} aria-hidden><path d="M2 14V6l6-4 6 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><rect x="6" y="9" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5"/></svg>;
  if (category === "Gastronomía" || category === "Restaurantes")
    return <svg viewBox="0 0 16 16" fill="none" className={cls} aria-hidden><path d="M5 2v4a3 3 0 0 0 6 0V2M8 6v8M11 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
  if (category === "Salud")
    return <svg viewBox="0 0 16 16" fill="none" className={cls} aria-hidden><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/></svg>;
  if (category === "Bienestar")
    return <svg viewBox="0 0 16 16" fill="none" className={cls} aria-hidden><path d="M8 13.5C8 13.5 2 10 2 5.5a3.5 3.5 0 0 1 6-2.45A3.5 3.5 0 0 1 14 5.5C14 10 8 13.5 8 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
  return <svg viewBox="0 0 16 16" fill="none" className={cls} aria-hidden><rect x="2" y="6" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function LogoCard({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 transition-colors duration-150 hover:border-[#CBD5E1]">
      <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#F8FAFC] text-[#64748B]">
        <CategoryIcon category={category} />
      </span>
      <div>
        <p className="text-[12px] font-[700] leading-none text-[#0F172A]">{name}</p>
        <p className="mt-[3px] text-[10px] font-[500] text-[#94A3B8]">{category}</p>
      </div>
    </div>
  );
}

export function ExperienceSection({ content }: { content: ExperienceContent }) {
  const doubled = [...content.logos, ...content.logos];

  return (
    <section className="overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 lg:px-16">

        {/* Header — sin watermark de número gigante */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex flex-col items-center text-center"
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

        {/* Stats — horizontales, sin card boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-8 border-y border-[#E2E8F0] py-8 sm:gap-16"
        >
          {[
            { value: "500+", label: "Empresas atendidas"  },
            { value: "12",   label: "Industrias servidas" },
            { value: "100%", label: "Servicio puntual"    },
          ].map(({ value, label }, i) => (
            <div key={label} className="text-center">
              <p className="text-[28px] font-[800] leading-none tracking-[-0.04em] text-[#0F172A]">{value}</p>
              <p className="mt-2 text-[11px] font-[500] text-[#94A3B8]">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee — fuera del container, full-width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
        className="relative"
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[72px] bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[72px] bg-gradient-to-l from-[#F8FAFC] to-transparent" />
        <div className="flex pb-10 pl-4">
          <div className="marquee-track flex gap-3">
            {doubled.map((logo, i) => (
              <LogoCard key={`${logo.name}-${i}`} name={logo.name} category={logo.category} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
