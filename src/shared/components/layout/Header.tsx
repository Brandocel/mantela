"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import type { NavItem } from "@/features/home/types/home.types";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function Header({ navItems }: { navItems: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { scrollYProgress }     = useScroll();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-200 ${
          scrolled ? "shadow-[0_1px_0_0_#E2E8F0,0_4px_20px_rgba(15,23,42,0.06)]" : "border-b border-[#E2E8F0]"
        }`}
      >
        {/* Barra de progreso scroll — Emil: sólo transform+opacity */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] origin-left bg-[#00B2A9]"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-16">

          {/* Logo */}
          <a href="#inicio" aria-label="La Mantela – inicio"
            className="relative h-[36px] w-[68px] shrink-0 transition-opacity duration-150 hover:opacity-80 active:opacity-60">
            <Image src="/images/logomantela.png" alt="La Mantela" fill priority sizes="68px" className="object-contain" />
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex" aria-label="Navegación principal">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}
                    className="group relative py-1 text-[13px] font-[600] tracking-[0.01em] text-[#475569] transition-colors duration-150 hover:text-[#0F172A]">
                    {item.label}
                    {/* Underline animada — Emil: transform, no width */}
                    <span className="absolute -bottom-[1px] left-0 h-[1.5px] w-full origin-left scale-x-0 rounded-full bg-[#00B2A9] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex">
            <a href="#contacto"
              className="inline-flex h-[38px] items-center rounded-none rounded-tl-[12px] rounded-br-[12px] bg-[#0F172A] px-5 text-[12px] font-[700] tracking-[0.04em] text-white transition-all duration-150 ease-out hover:bg-[#00B2A9] active:scale-[0.97]">
              Cotización gratuita
            </a>
          </div>

          {/* Hamburger mobile — Emil: transform only */}
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="flex h-[44px] w-[44px] flex-col items-center justify-center gap-[5px] lg:hidden">
            <span className={`block h-[1.5px] w-[20px] rounded-full bg-[#0F172A] transition-transform duration-200 ease-out origin-center ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-[14px] rounded-full bg-[#0F172A] transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-[20px] rounded-full bg-[#0F172A] transition-transform duration-200 ease-out origin-center ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer — Emil: ease-out en entrada, más rápido en salida */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            aria-label="Menú móvil"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] as [number,number,number,number] }}
            className="fixed inset-x-0 top-[64px] z-40 border-b border-[#E2E8F0] bg-white/98 px-5 pb-5 pt-2 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:hidden"
          >
            <ul>
              {navItems.map((item, i) => (
                <motion.li key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.045, duration: 0.2, ease: [0.23, 1, 0.32, 1] as [number,number,number,number] }}
                >
                  <a href={item.href} onClick={() => setOpen(false)}
                    className="flex border-b border-[#F1F5F9] py-[14px] text-[15px] font-[600] text-[#0F172A] transition-colors duration-150 hover:text-[#00B2A9] last:border-none active:opacity-70">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href="#contacto" onClick={() => setOpen(false)}
              className="mt-4 flex h-[50px] w-full items-center justify-center rounded-none rounded-tl-[18px] rounded-br-[18px] bg-[#00B2A9] text-[14px] font-[700] text-white transition-all duration-150 active:scale-[0.98]">
              Solicitar cotización
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
