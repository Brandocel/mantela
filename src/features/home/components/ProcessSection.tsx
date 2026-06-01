"use client";

import type { ProcessContent } from "@/features/home/types/home.types";
import { useInView } from "@/shared/hooks/useInView";

type ProcessSectionProps = {
  content: ProcessContent;
};

type ProcessVariant = "green" | "pink" | "purple";

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
  variant: ProcessVariant;
  mobile?: boolean;
  className?: string;
};

const stylesByVariant: Record<ProcessVariant, { border: string; text: string; shadow: string }> = {
  green:  { border: "border-[#75CF45]", text: "text-[#75CF45]", shadow: "shadow-[0_24px_50px_rgba(117,207,69,0.12)]" },
  pink:   { border: "border-[#EF4B91]", text: "text-[#EF4B91]", shadow: "shadow-[0_24px_50px_rgba(239,75,145,0.12)]" },
  purple: { border: "border-[#8B4CE6]", text: "text-[#8B4CE6]", shadow: "shadow-[0_24px_50px_rgba(139,76,230,0.12)]" },
};

function BasketIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M15 21H33L31.5 38H16.5L15 21Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 21V16C18 12.7 20.7 10 24 10C27.3 10 30 12.7 30 16V21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 21H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 27H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function IronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M11 33H38C39.6 33 40.6 31.3 39.8 29.9L35.7 22.7C34.6 20.7 32.5 19.5 30.2 19.5H20" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M11 33C12 28 15.5 24 20 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 15H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M21 15V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 39H39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="29" cy="26.5" r="1.8" fill="currentColor" />
    </svg>
  );
}

function ShirtIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M17 10L11 15L7 23L14 26L17 20V39H31V20L34 26L41 23L37 15L31 10" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M17 10C18.8 13 21 14.5 24 14.5C27 14.5 29.2 13 31 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M21 10H27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ProcessIcon({ variant }: { variant: ProcessVariant }) {
  const cls = "h-[42px] w-[42px]";
  if (variant === "green")  return <BasketIcon className={cls} />;
  if (variant === "pink")   return <IronIcon className={cls} />;
  return <ShirtIcon className={cls} />;
}

function ProcessCard({ number, title, description, variant, mobile = false, className = "" }: ProcessCardProps) {
  const style = stylesByVariant[variant];
  return (
    <article
      className={`relative z-20 flex shrink-0 flex-col items-center justify-center rounded-[10px] border bg-white px-6 text-center transition-transform duration-300 hover:-translate-y-1 ${
        mobile ? "w-full min-h-[188px] py-8" : "h-[188px] w-[292px]"
      } ${style.border} ${style.shadow} ${className}`}
    >
      <span className={`absolute -top-[15px] right-[24px] flex h-[30px] min-w-[30px] items-center justify-center rounded-full border bg-white px-2 text-[12px] font-medium leading-none ${style.border} ${style.text}`}>
        {number}
      </span>
      <div className={`mb-[18px] ${style.text}`}>
        <ProcessIcon variant={variant} />
      </div>
      <h3 className="text-[21px] font-[600] leading-[24px] tracking-[-0.02em] text-[#282828]">
        {title}
      </h3>
      <p className="mt-[12px] max-w-[245px] text-[14px] font-normal leading-[22px] text-[#545454]">
        {description}
      </p>
    </article>
  );
}

export function ProcessSection({ content }: ProcessSectionProps) {
  const firstStep  = content.items[0];
  const secondStep = content.items[1];
  const thirdStep  = content.items[2];
  const sectionRef = useInView(0.1);

  return (
    <section
      id="proceso"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-[90px] pt-[8px] sm:px-10 lg:px-[58px]">

        {/* Encabezado */}
        <div className="reveal relative mx-auto max-w-[760px] text-center">
          <span className="absolute left-[118px] top-[18px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block" />
          <span className="absolute right-[68px]  top-[48px] hidden h-[16px] w-[16px] rounded-full bg-[#69C348] lg:block" />
          <h2 className="text-[46px] font-[500] leading-[1.04] tracking-[-0.045em] text-[#282828] sm:text-[56px]">
            <span className="block">Cómo Funciona</span>
            <span className="block">Nuestro Servicio</span>
          </h2>
          <p className="mx-auto mt-[26px] max-w-[520px] text-[14px] font-normal leading-[22px] text-[#545454]">
            {content.description}
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mx-auto mt-[56px] hidden max-w-[1060px] pb-[40px] lg:block">
          <svg
            viewBox="0 0 1060 380"
            fill="none"
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-[380px] w-[1060px] -translate-x-1/2"
            aria-hidden="true"
          >
            <path d="M292 96C360 24 480 8 548 72C585 105 598 150 586 195" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8" />
            <path d="M680 265C760 330 900 308 950 205"                    stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8" />
          </svg>

          <div className="relative z-10 flex min-h-[380px] items-start justify-between">
            <div className="reveal pt-[56px]">
              {firstStep && <ProcessCard number={firstStep.number} title={firstStep.title} description={firstStep.description} variant="green" />}
              <span className="ml-[70px] mt-[48px] block h-[17px] w-[30px] rounded-b-full rounded-t-[5px] bg-[#EF4B91]" />
            </div>
            <div className="reveal pt-[140px]">
              {secondStep && <ProcessCard number={secondStep.number} title={secondStep.title} description={secondStep.description} variant="pink" />}
            </div>
            <div className="reveal pt-[56px]">
              {thirdStep && <ProcessCard number={thirdStep.number} title={thirdStep.title} description={thirdStep.description} variant="purple" />}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-[48px] flex flex-col items-center gap-8 lg:hidden">
          {firstStep  && <ProcessCard number={firstStep.number}  title={firstStep.title}  description={firstStep.description}  variant="green"  mobile />}
          {secondStep && <ProcessCard number={secondStep.number} title={secondStep.title} description={secondStep.description} variant="pink"   mobile />}
          {thirdStep  && <ProcessCard number={thirdStep.number}  title={thirdStep.title}  description={thirdStep.description}  variant="purple" mobile />}
        </div>
      </div>
    </section>
  );
}
