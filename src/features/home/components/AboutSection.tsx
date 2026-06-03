"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AboutContent } from "@/features/home/types/home.types";

const EASE   = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP     = { once: true, margin: "-80px" } as const;
const SPRING = { type: "spring", stiffness: 320, damping: 28 } as const;

export function AboutSection({ content }: { content: AboutContent }) {
  const [active, setActive] = useState(0);
  const tab = content.tabs[active];

  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 px-5 pb-24 pt-24 sm:px-8 lg:grid-cols-[460px_1fr] lg:gap-20 lg:px-16">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.75, ease: EASE }}
          className="relative mx-auto h-[480px] w-full max-w-[430px] lg:mx-0"
        >
          {/* Forma detrás — neutro, no distrae */}
          <div className="absolute left-[28px] top-[-16px] h-[500px] w-[365px] rounded-tl-[64px] rounded-tr-[48px] rounded-br-[12px] rounded-bl-[6px] bg-[#F1F5F9]" />

          {/* Línea verde lateral */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="absolute right-0 top-[80px] h-[240px] w-[3px] origin-top rounded-full bg-[#16A34A]"
          />

          {/* Foto */}
          <div className="absolute left-0 top-0 h-[475px] w-[355px] overflow-hidden rounded-lg bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.11)] sm:w-[370px] lg:w-[370px]">
            <Image
              src={content.image} alt={content.imageAlt} fill
              sizes="(max-width:1024px) 90vw, 370px"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Nuestra identidad
          </p>

          <h2 className="max-w-[440px] text-[32px] font-[800] leading-[1.14] tracking-[-0.04em] text-[#0F172A] sm:text-[42px]">
            Pasión por la<br />Lavandería Industrial
          </h2>

          {/* Tabs — underline limpio sin colores extra */}
          <div className="mt-8 flex border-b border-[#E2E8F0]">
            {content.tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={`relative mr-5 pb-3 text-[13px] font-[600] transition-colors duration-150 last:mr-0 ${
                  i === active ? "text-[#0F172A]" : "text-[#94A3B8] hover:text-[#475569]"
                }`}
              >
                {t.label}
                {i === active && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#16A34A]"
                    transition={SPRING}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <p className="mt-7 max-w-[460px] text-[14px] leading-[27px] text-[#475569]">
                {tab.description}
              </p>

              <ul className="mt-6 space-y-[12px]">
                {tab.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...SPRING, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#F0FDF4]">
                      <svg viewBox="0 0 12 12" fill="none" className="h-[9px] w-[9px]" aria-hidden>
                        <path d="M2 6l2.5 2.5 5.5-5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
