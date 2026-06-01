"use client";

import { motion } from "framer-motion";
import type { CTAContent } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-60px" } as const;

export function CTASection({ content }: { content: CTAContent }) {
  return (
    <section id="contacto" className="w-full overflow-hidden">
      <div className="relative w-full bg-[#0F172A]">

        {/* Grid pattern — sutil, industrial */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
          aria-hidden
        />

        {/* Círculo decorativo — rotate lento, muy sutil */}
        <motion.div
          className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-white/[0.04]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-16 lg:py-[52px]">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.75, ease: EASE }}
            className="max-w-[500px]"
          >
            <p className="mb-3 text-[10px] font-[800] uppercase tracking-[0.22em] text-white/40">
              ¿Listo para empezar?
            </p>
            <h2 className="text-[24px] font-[800] leading-[1.3] tracking-[-0.03em] text-white sm:text-[30px]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-[380px] text-[13px] leading-[23px] text-white/50">
              {content.description}
            </p>
          </motion.div>

          {/* Botón — mismo tratamiento que hero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
            className="shrink-0"
          >
            <a
              href={content.buttonHref}
              className="group relative inline-flex h-[54px] items-center gap-[10px] overflow-hidden rounded-none rounded-tl-[20px] rounded-br-[20px] bg-[#16A34A] px-7 text-[13px] font-[700] tracking-[0.025em] text-white shadow-[0_8px_24px_rgba(22,163,74,0.25)] transition-all duration-200 ease-out hover:bg-[#15803D] hover:shadow-[0_14px_36px_rgba(22,163,74,0.38)] active:scale-[0.97] active:shadow-none"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-[100%]" />
              {/* WhatsApp */}
              <svg viewBox="0 0 24 24" className="relative h-[16px] w-[16px] shrink-0" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.121 1.532 5.856L.057 23.882a.5.5 0 0 0 .613.613l6.026-1.475A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 0 1-5.004-1.366l-.36-.214-3.722.911.927-3.64-.236-.375A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.431 0 9.818 4.388 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z"/>
              </svg>
              <span className="relative">{content.buttonLabel}</span>
              <svg viewBox="0 0 14 14" fill="none" className="relative h-[12px] w-[12px] transition-transform duration-200 ease-out group-hover:translate-x-[3px]" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
