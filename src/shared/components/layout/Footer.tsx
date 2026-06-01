"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { NavItem } from "@/features/home/types/home.types";

const cb = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-40px" } as const;

type FooterProps = { navItems: NavItem[] };

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1A4 4 0 0 0 12 8.1c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.9 4.8a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 3.4 18c-.3 0-.7 0-1-.1A11.3 11.3 0 0 0 8.5 20c7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1Z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      <path d="M14 8.5V7.2c0-.9.4-1.4 1.5-1.4H17V3.2C16.5 3.1 15.6 3 14.7 3 12.4 3 11 4.4 11 7v1.5H8.5v3H11V21h3v-9.5h2.6l.4-3H14Z"/>
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" aria-hidden>
      <path d="M21 8.3s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.2 5 12 5 12 5s-3.2 0-6.1.3c-.4.1-1.3.1-2.1.9C3.2 6.8 3 8.3 3 8.3S2.8 10 2.8 11.7v1.6C2.8 15 3 16.7 3 16.7s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 5.8.3 5.8.3s3.2 0 6.1-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor"/>
    </svg>
  );
}

const socials = [
  { label: "Twitter",   Icon: TwitterIcon   },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook",  Icon: FacebookIcon  },
  { label: "YouTube",   Icon: YoutubeIcon   },
];

export function Footer({ navItems }: FooterProps) {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 pb-0 pt-16 sm:px-10">

        {/* Logo */}
        <motion.a
          href="#inicio"
          aria-label="Ir al inicio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease: cb }}
          className="relative h-[110px] w-[210px]"
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/images/logomantela.png"
            alt="La Mantela Lavandería Industrial"
            fill
            sizes="210px"
            className="object-contain brightness-0 invert"
          />
        </motion.a>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-center text-[13px] text-white/40"
        >
          Lavandería industrial profesional · Cancún, México
        </motion.p>

        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.15, ease: cb }}
          className="mt-10"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-[40px] gap-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-[13px] font-[600] text-white/60 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-[3px] left-0 h-[1px] w-0 rounded-full bg-[#75CF45] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.22, ease: cb }}
          className="mt-9 flex items-center gap-3"
        >
          {socials.map(({ label, Icon }) => (
            <motion.a
              key={label}
              href="#"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors duration-200 hover:border-[#75CF45]/50 hover:bg-[#75CF45]/10 hover:text-[#75CF45]"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Divisor */}
        <div className="mt-12 h-px w-full bg-white/8" />

        {/* Copyright */}
        <div className="flex h-[58px] w-full items-center justify-center">
          <p className="text-center text-[12px] text-white/30">
            © {new Date().getFullYear()} La Mantela. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
