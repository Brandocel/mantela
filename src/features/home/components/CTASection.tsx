"use client";

import type { CTAContent } from "@/features/home/types/home.types";
import { useInView } from "@/shared/hooks/useInView";

type CTASectionProps = {
  content: CTAContent;
};

export function CTASection({ content }: CTASectionProps) {
  const sectionRef = useInView(0.2);

  return (
    <section
      id="contacto"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full"
    >
      <div className="w-full bg-[#884BE6]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-center gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-[100px] lg:py-[38px]">

          <div className="reveal max-w-[460px]">
            <h2 className="text-[22px] font-[700] leading-[30px] tracking-[-0.02em] text-white">
              {content.title}
            </h2>
            <p className="mt-[14px] max-w-[400px] text-[14px] font-normal leading-[22px] text-white/85">
              {content.description}
            </p>
          </div>

          <div className="reveal">
            <a
              href={content.buttonHref}
              className="anim-pulse-glow inline-flex h-[54px] w-full shrink-0 max-w-[300px] items-center justify-center rounded-none rounded-tl-[20px] rounded-br-[20px] bg-[#75CF45] px-8 text-center text-[15px] font-[600] leading-6 text-white transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#64BF3B]"
            >
              {content.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
