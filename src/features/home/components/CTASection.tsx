"use client";

import { motion } from "framer-motion";
import type { CTAContent } from "@/features/home/types/home.types";

const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-60px" } as const;

export function CTASection({ content }: { content: CTAContent }) {
  return (
    <section id="contacto" className="w-full overflow-hidden">
      <div className="relative w-full bg-[#7B3FD8]">

        {/* Patrón de fondo sutil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        {/* Gradiente de profundidad */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#9B5CE6]/40 via-transparent to-[#5B2DB0]/40" aria-hidden />

        {/* Decoraciones flotantes */}
        <motion.span
          className="absolute left-[5%] top-[20%] h-[60px] w-[60px] rounded-full border border-white/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[8%] bottom-[15%] h-[40px] w-[40px] rounded-full border border-white/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:px-[100px] lg:py-[52px]">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75, ease: cb }}
            className="max-w-[520px]"
          >
            <p className="mb-3 text-[11px] font-[800] uppercase tracking-[0.18em] text-white/60">
              ¿Listo para empezar?
            </p>
            <h2 className="text-[26px] font-[800] leading-[1.25] tracking-[-0.025em] text-white sm:text-[30px]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-[420px] text-[14px] leading-[23px] text-white/70">
              {content.description}
            </p>
          </motion.div>

          {/* Botón */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75, ease: cb, delay: 0.1 }}
            className="shrink-0"
          >
            <a
              href={content.buttonHref}
              className="group/btn relative inline-flex h-[56px] items-center gap-3 overflow-hidden rounded-none rounded-tl-[22px] rounded-br-[22px] bg-[#75CF45] px-8 text-[14px] font-[700] text-white shadow-[0_12px_36px_rgba(117,207,69,0.35)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#64BF3B] hover:shadow-[0_20px_48px_rgba(117,207,69,0.50)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-600 group-hover/btn:translate-x-full" />
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="relative h-[18px] w-[18px] shrink-0" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.121 1.532 5.856L.057 23.882a.5.5 0 0 0 .613.613l6.026-1.475A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 0 1-5.004-1.366l-.36-.214-3.722.911.927-3.64-.236-.375A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.431 0 9.818 4.388 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z"/>
              </svg>
              <span className="relative">{content.buttonLabel}</span>
              <svg viewBox="0 0 16 16" fill="none" className="relative h-[14px] w-[14px] transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
