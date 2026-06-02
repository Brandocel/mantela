"use client";

import { motion } from "framer-motion";
import type { CTAContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

export function CTASection({ content }: { content: CTAContent }) {
  return (
    <section id="contacto" className="w-full">
      {/* Fondo oscuro limpio — sin grid ni ícono rotante */}
      <div className="relative w-full bg-[#0F172A]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-16 lg:py-[52px]">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-[480px]"
          >
            <p className="mb-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-white/40">
              ¿Listo para empezar?
            </p>
            <h2 className="text-[22px] font-[800] leading-[1.3] tracking-[-0.025em] text-white sm:text-[28px]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-[360px] text-[13px] leading-[22px] text-white/50">
              {content.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="shrink-0"
          >
            <a
              href={content.buttonHref}
              className="inline-flex h-[52px] items-center gap-2.5 rounded-none rounded-tl-[18px] rounded-br-[18px] bg-[#16A34A] px-7 text-[13px] font-[700] tracking-[0.02em] text-white shadow-[0_6px_20px_rgba(22,163,74,0.22)] transition-all duration-200 hover:bg-[#15803D] hover:shadow-[0_10px_28px_rgba(22,163,74,0.32)] active:scale-[0.97]"
            >
              {content.buttonLabel}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
