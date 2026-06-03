"use client";

import { motion } from "framer-motion";
import type { CTAContent } from "@/features/home/types/home.types";

const EASE   = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP     = { once: true, margin: "-60px" } as const;
const SPRING = { type: "spring", stiffness: 380, damping: 34 } as const;

export function CTASection({ content }: { content: CTAContent }) {
  return (
    <section id="contacto" className="w-full">
      <div className="relative w-full overflow-hidden bg-[#0F172A]">
        {/* Acento verde superior */}
        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-transparent" />
        {/* Mancha de luz verde — decorativa, sutil */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-[#16A34A]/[0.06] blur-[80px]" />

        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:px-16 lg:py-[60px]">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-[520px]"
          >
            <p className="mb-4 flex items-center gap-2.5 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
              <span className="h-px w-[20px] bg-[#16A34A]" />
              ¿Listo para empezar?
            </p>
            <h2 className="text-[26px] font-[800] leading-[1.22] tracking-[-0.03em] text-white sm:text-[34px]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-[380px] text-[13px] leading-[23px] text-white/50">
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
            {/* Emil: motion.a con whileHover spring + whileTap press */}
            <motion.a
              href={content.buttonHref}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(22,163,74,0.38)" }}
              whileTap={{ scale: 0.96 }}
              transition={SPRING}
              className="inline-flex h-[52px] items-center gap-2.5 rounded-none rounded-tl-[18px] rounded-br-[18px] bg-[#16A34A] px-8 text-[13px] font-[700] tracking-[0.02em] text-white shadow-[0_6px_24px_rgba(22,163,74,0.28)]"
            >
              {content.buttonLabel}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
