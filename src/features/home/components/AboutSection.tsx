"use client";

import Image from "next/image";
import { useState } from "react";
import type { AboutContent } from "@/features/home/types/home.types";
import { useInView } from "@/shared/hooks/useInView";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab  = content.tabs[activeTabIndex];
  const sectionRef = useInView(0.1);

  return (
    <section
      id="nosotros"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative bg-white pb-[90px] pt-[60px]"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[500px_1fr] lg:gap-[64px] lg:px-[80px]">

        {/* Imagen izquierda */}
        <div className="reveal-left relative mx-auto h-[540px] w-full max-w-[480px] lg:mx-0">
          {/* Fondo morado */}
          <div className="absolute left-[36px] top-[-24px] h-[548px] w-[400px] rounded-tl-[100px] rounded-tr-[80px] rounded-br-[12px] rounded-bl-[6px] bg-[#C9B0F4]" />
          {/* Figura rosa */}
          <div className="absolute right-[-8px] top-[140px] h-[290px] w-[170px] rounded-l-full rounded-r-[20px] bg-[#DF78BE]" />
          {/* Imagen */}
          <div className="absolute left-0 top-0 h-[524px] w-[390px] overflow-hidden rounded-[4px] bg-slate-100 shadow-[0_22px_55px_rgba(15,23,42,0.14)] sm:w-[405px] lg:w-[405px]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 405px"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
          {/* Cuadro morado inferior */}
          <span className="absolute bottom-[-28px] right-[24px] h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6]" />
        </div>

        {/* Contenido derecho */}
        <div className="reveal-right relative">
          <span className="absolute right-[18px] top-[10px] hidden h-[18px] w-[18px] rounded-full bg-[#69C348] lg:block" />

          <h2 className="max-w-[580px] text-[40px] font-[500] leading-[1.1] tracking-[-0.04em] text-[#282828] sm:text-[50px] sm:leading-[1.08]">
            <span className="block">Pasión por la</span>
            <span className="block">Lavandería Industrial</span>
          </h2>

          {/* Tabs */}
          <div className="mt-[34px] flex flex-wrap items-center gap-x-[34px] gap-y-4">
            {content.tabs.map((tab, index) => {
              const isActive = index === activeTabIndex;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTabIndex(index)}
                  className={`relative pb-[10px] text-left text-[17px] font-[600] leading-6 transition-colors duration-300 ${
                    isActive ? "text-[#EF4B91]" : "text-[#282828] hover:text-[#EF4B91]"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#EF4B91] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Descripción */}
          <p className="mt-[40px] max-w-[580px] text-[15px] font-normal leading-[26px] text-[#545454]">
            {activeTab.description}
          </p>

          {/* Lista */}
          <ul className="mt-[36px] space-y-[24px]">
            {activeTab.points.map((point) => (
              <li key={point} className="flex items-center gap-[16px]">
                <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#EF4B91]/10">
                  <svg viewBox="0 0 16 16" fill="none" className="h-[14px] w-[14px]" aria-hidden>
                    <path d="M3 8.5L6.5 12L13 5" stroke="#EF4B91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[17px] font-[600] leading-[24px] text-[#282828]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
