"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AboutContent } from "@/features/home/types/home.types";

const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-80px" } as const;

export function AboutSection({ content }: { content: AboutContent }) {
  const [active, setActive] = useState(0);
  const tab = content.tabs[active];

  return (
    <section id="nosotros" className="relative bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 pb-[96px] pt-[96px] sm:px-10 lg:grid-cols-[500px_1fr] lg:gap-[72px] lg:px-[80px]">

        {/* ── Imagen izquierda ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.9, ease: cb }}
          className="relative mx-auto h-[540px] w-full max-w-[480px] lg:mx-0"
        >
          {/* Fondo morado */}
          <div className="absolute left-[34px] top-[-22px] h-[548px] w-[406px] rounded-tl-[96px] rounded-tr-[72px] rounded-br-[12px] rounded-bl-[6px] bg-[#C9B0F4]" />

          {/* Figura rosa */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-6px] top-[140px] h-[288px] w-[168px] rounded-l-full rounded-r-[20px] bg-[#DF78BE]"
          />

          {/* Imagen principal */}
          <div className="absolute left-0 top-0 h-[524px] w-[390px] overflow-hidden rounded-[6px] bg-slate-100 shadow-[0_24px_64px_rgba(0,0,0,0.15)] sm:w-[405px] lg:w-[405px]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width:1024px) 90vw, 405px"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>

          {/* Cuadro decorativo */}
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-26px] right-[22px] h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6]"
          />
        </motion.div>

        {/* ── Contenido derecho ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.85, ease: cb, delay: 0.1 }}
          className="relative"
        >
          {/* Eyebrow */}
          <p className="mb-5 flex items-center gap-[10px] text-[11px] font-[800] uppercase tracking-[0.18em] text-[#EF4B91]">
            <span className="h-[2px] w-[22px] rounded-full bg-[#EF4B91]" />
            Nuestra identidad
          </p>

          <h2 className="max-w-[540px] text-[38px] font-[800] leading-[1.12] tracking-[-0.04em] text-[#1a1a1a] sm:text-[48px]">
            <span className="block">Pasión por la</span>
            <span className="block">
              Lavandería{" "}
              <span className="relative inline-block text-[#EF4B91]">
                Industrial
                <span className="absolute -bottom-[4px] left-0 h-[3px] w-full rounded-full bg-[#EF4B91]/30" />
              </span>
            </span>
          </h2>

          {/* Tabs como pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {content.tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-[9px] text-[13px] font-[700] transition-all duration-250 ${
                  i === active
                    ? "bg-[#EF4B91] text-white shadow-[0_6px_18px_rgba(239,75,145,0.32)]"
                    : "bg-[#f5f5f5] text-[#555] hover:bg-[#ffe8f3] hover:text-[#EF4B91]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Contenido del tab — AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <p className="mt-8 max-w-[540px] text-[14px] leading-[26px] text-[#666]">
                {tab.description}
              </p>

              <ul className="mt-7 space-y-[18px]">
                {tab.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: cb, delay: i * 0.07 }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#EF4B91]/12">
                      <svg viewBox="0 0 16 16" fill="none" className="h-[13px] w-[13px]" aria-hidden>
                        <path d="M3 8.5L6.5 12L13 5" stroke="#EF4B91" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[15px] font-[600] text-[#1a1a1a]">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
