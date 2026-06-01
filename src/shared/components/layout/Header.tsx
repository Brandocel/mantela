"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/features/home/types/home.types";

type HeaderProps = { navItems: NavItem[] };

export function Header({ navItems }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_4px_28px_rgba(0,0,0,0.09)]"
            : "border-b border-[#f0f0f0]"
        }`}
      >
        <div className="mx-auto flex h-[66px] w-full max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-[64px]">
          {/* Logo */}
          <a href="#inicio" aria-label="Inicio" className="relative h-[40px] w-[76px] shrink-0">
            <Image
              src="/images/logomantela.png"
              alt="La Mantela"
              fill
              priority
              sizes="76px"
              className="object-contain"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-[36px]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative text-[13px] font-[600] text-[#444] transition-colors duration-200 hover:text-[#1a1a1a]"
                  >
                    {item.label}
                    <span className="absolute -bottom-[3px] left-0 h-[2px] w-0 rounded-full bg-[#75CF45] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contacto"
              className="group relative inline-flex h-[38px] items-center justify-center overflow-hidden rounded-none rounded-tl-[14px] rounded-br-[14px] bg-[#75CF45] px-5 text-[13px] font-[700] text-white shadow-[0_6px_18px_rgba(117,207,69,0.30)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_26px_rgba(117,207,69,0.45)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-600 group-hover:translate-x-full" />
              <span className="relative">Cotización</span>
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-[40px] w-[40px] flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-[2px] w-[22px] rounded-full bg-[#1a1a1a] transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-[22px] rounded-full bg-[#1a1a1a] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-[22px] rounded-full bg-[#1a1a1a] transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-[66px] z-40 border-b border-[#f0f0f0] bg-white px-6 pb-6 pt-4 shadow-[0_16px_40px_rgba(0,0,0,0.10)] md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[15px] font-[600] text-[#1a1a1a] transition-colors duration-150 hover:bg-[#f5f5f5]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex h-[48px] w-full items-center justify-center rounded-none rounded-tl-[18px] rounded-br-[18px] bg-[#75CF45] text-[15px] font-[700] text-white shadow-[0_8px_20px_rgba(117,207,69,0.30)]"
            >
              Solicitar cotización
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
