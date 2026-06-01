"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AboutContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-80px" } as const;

export function AboutSection({ content }: { content: AboutContent }) {
  const [active, setActive] = useState(0);
  const tab = content.tabs[active];

  return (
    <section id="nosotros" className="relative bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 px-5 pb-24 pt-24 sm:px-8 lg:grid-cols-[470px_1fr] lg:gap-20 lg:px-16">

        {/* ── Imagen ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -32, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative mx-auto h-[500px] w-full max-w-[440px] lg:mx-0"
        >
          {/* Forma neutra detrás — reemplaza el morado */}
          <div className="absolute left-[28px] top-[-18px] h-[520px] w-[375px] rounded-tl-[72px] rounded-tr-[56px] rounded-br-[12px] rounded-bl-[6px] bg-[#EFF6FF]" />

          {/* Línea vertical acento — scaleY reveal, Emil */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VP}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="absolute right-[-2px] top-[90px] h-[260px] w-[3px] origin-top rounded-full bg-[#16A34A]"
          />

          {/* Imagen */}
          <div className="absolute left-0 top-0 h-[495px] w-[370px] overflow-hidden rounded-[8px] bg-slate-100 shadow-[0_24px_56px_rgba(15,23,42,0.12)] sm:w-[385px] lg:w-[385px]">
            <Image src={content.image} alt={content.imageAlt} fill
              sizes="(max-width:1024px) 90vw, 385px"
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]" />
          </div>

          {/* Detalle decorativo mínimo */}
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
            className="absolute bottom-[-18px] right-[18px] h-[16px] w-[16px] rounded-[4px] bg-[#0F172A]"
          />
        </motion.div>

        {/* ── Contenido ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          className="relative"
        >
          {/* Eyebrow */}
          <p className="mb-5 flex items-center gap-[10px] text-[10px] font-[800] uppercase tracking-[0.22em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Nuestra identidad
          </p>

          <h2 className="max-w-[480px] text-[34px] font-[800] leading-[1.12] tracking-[-0.045em] text-[#0F172A] sm:text-[44px]">
            Pasión por la<br />
            <span className="relative">
              Lavandería Industrial
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VP}
                transition={{ delay: 0.6, duration: 0.65, ease: EASE }}
                className="absolute -bottom-[3px] left-0 h-[2.5px] w-full origin-left rounded-full bg-[#16A34A]/30"
              />
            </span>
          </h2>

          {/* Tabs — layoutId para slide suave, Emil pattern */}
          <div className="mt-8 flex gap-0 border-b border-[#E2E8F0]">
            {content.tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={`relative mr-5 pb-3 text-[13px] font-[700] transition-colors duration-150 last:mr-0 ${
                  i === active ? "text-[#0F172A]" : "text-[#94A3B8] hover:text-[#475569]"
                }`}
              >
                {t.label}
                {i === active && (
                  <motion.span
                    layoutId="tab-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#16A34A]"
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Contenido del tab — AnimatePresence mode=wait */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              /* Emil: exit más rápido que enter */
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <p className="mt-7 max-w-[480px] text-[14px] leading-[27px] text-[#475569]">
                {tab.description}
              </p>

              {/* Lista con checks — stagger 50ms, Emil */}
              <ul className="mt-6 space-y-[14px]">
                {tab.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, ease: EASE, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#DCFCE7]">
                      <svg viewBox="0 0 12 12" fill="none" className="h-[10px] w-[10px]" aria-hidden>
                        <path d="M2 6.5l2.5 2.5 5.5-5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[14px] font-[600] text-[#0F172A]">{point}</span>
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
