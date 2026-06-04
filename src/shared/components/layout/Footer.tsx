"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { NavItem } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP   = { once: true, margin: "-40px" } as const;

/* SVG inline para evitar dependencias de iconos de marca */
function TwitterX() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden>
      <path d="M15.751 2h2.923l-6.384 7.3L19.5 18h-5.879l-4.607-6.023L3.7 18H.776l6.826-7.8L.5 2h6.027l4.162 5.446L15.751 2Zm-1.025 14.372h1.62L5.34 3.658H3.604l11.122 12.714Z"/>
    </svg>
  );
}
function Instagram() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-[15px] w-[15px]" aria-hidden>
      <rect x="3" y="3" width="14" height="14" rx="4.5" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="14.2" cy="5.8" r="1" fill="currentColor"/>
    </svg>
  );
}
function Facebook() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden>
      <path d="M11.5 7.5V6.2c0-.8.4-1.2 1.3-1.2H14V2.8C13.5 2.7 12.8 2.6 12 2.6c-2 0-3.2 1.2-3.2 3.2v1.7H6.5v2.5H8.8V18h2.7v-8h2.1l.3-2.5H11.5Z"/>
    </svg>
  );
}
function Youtube() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-[15px] w-[15px]" aria-hidden>
      <path d="M17.5 6.8s-.2-1.3-.7-1.8c-.7-.7-1.5-.7-1.8-.8C12.6 4 10 4 10 4s-2.6 0-5 .2c-.3.1-1.1.1-1.8.8-.5.5-.7 1.8-.7 1.8S2.3 8.2 2.3 9.7v1.3c0 1.5.2 2.9.2 2.9s.2 1.3.7 1.8c.7.7 1.7.7 2.1.8 1.5.1 5 .2 5 .2s2.6 0 5-.3c.3 0 1.1-.1 1.8-.8.5-.5.7-1.8.7-1.8s.2-1.4.2-2.9V9.7c0-1.5-.2-2.9-.2-2.9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8.5 7.8v4.4l3.8-2.2-3.8-2.2Z" fill="currentColor"/>
    </svg>
  );
}

const SOCIALS = [
  { label: "X (Twitter)", Icon: TwitterX  },
  { label: "Instagram",   Icon: Instagram },
  { label: "Facebook",    Icon: Facebook  },
  { label: "YouTube",     Icon: Youtube   },
];

export function Footer({ navItems }: { navItems: NavItem[] }) {
  return (
    <footer className="w-full bg-[#0F172A]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 pb-0 pt-16 sm:px-8">

        {/* Logo */}
        <motion.a href="#inicio" aria-label="La Mantela – inicio"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="relative h-[90px] w-[170px]"
        >
          <Image src="/images/logofooter.png" alt="La Mantela" fill sizes="170px"
            className="object-contain brightness-0 invert opacity-85" />
        </motion.a>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-center text-[12px] text-white/30"
        >
          Lavandería industrial profesional · Cancún, México
        </motion.p>

        {/* Separador */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VP}
          transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
          className="mt-10 h-px w-full max-w-[320px] origin-center bg-white/[0.08]"
        />

        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ delay: 0.18, duration: 0.55, ease: EASE }}
          aria-label="Footer"
          className="mt-8"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}
                  className="group relative text-[12px] font-[600] tracking-[0.03em] text-white/40 transition-colors duration-150 hover:text-white active:opacity-50">
                  {item.label}
                  {/* Emil: underline con scaleX */}
                  <span className="absolute -bottom-[2px] left-0 h-px w-full origin-left scale-x-0 bg-[#00B2A9] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ delay: 0.24, duration: 0.55, ease: EASE }}
          className="mt-8 flex items-center gap-3"
        >
          {SOCIALS.map(({ label, Icon }) => (
            <motion.a key={label} href="#" aria-label={label}
              /* Emil: whileHover sólo transform */
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-colors duration-150 hover:border-[#00B2A9]/40 hover:bg-[#00B2A9]/10 hover:text-[#4ADE80]"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="mt-10 flex h-[52px] w-full items-center justify-center border-t border-white/[0.05]">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} La Mantela. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
