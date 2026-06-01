import Image from "next/image";
import type {
  ServiceItem,
  ServicesContent,
} from "@/features/home/types/home.types";

type ServicesSectionProps = {
  content: ServicesContent;
};

function ServiceCard({
  service,
  featured = false,
}: {
  service: ServiceItem;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex gap-5 transition-all duration-300 ${
        featured
          ? "rounded-[14px] bg-white px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
          : "px-2 py-4"
      }`}
    >
      <div className="relative mt-1 h-[38px] w-[38px] shrink-0">
        <Image
          src={service.icon}
          alt={service.iconAlt}
          fill
          sizes="38px"
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div>
        <h3 className="text-[19px] font-[600] leading-[24px] tracking-[-0.02em] text-[#282828]">
          {service.title}
        </h3>

        <p className="mt-[8px] max-w-[340px] text-[15px] font-normal leading-[24px] text-[#545454]">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export function ServicesSection({ content }: ServicesSectionProps) {
  const [firstService, secondService, thirdService] = content.items;

  return (
    <section id="servicios" className="relative bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-[72px] pt-[38px] sm:px-10 lg:px-[48px]">
        {/* Título */}
        <div className="relative">
          <h2 className="text-[52px] font-[500] leading-none tracking-[-0.04em] text-[#282828] sm:text-[62px]">
            {content.title}
          </h2>

          <span className="absolute left-[390px] top-[12px] hidden h-[22px] w-[22px] rounded-[6px] bg-[#8B4CE6] lg:block" />
        </div>

        {/* Contenido superior */}
        <div className="relative mt-[72px] grid grid-cols-1 gap-10 lg:grid-cols-[464px_1fr] lg:gap-[44px]">
          {/* Imagen izquierda */}
          <div className="relative h-[310px] overflow-hidden rounded-[12px] bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] lg:h-[298px]">
            <Image
              src={content.image}
              alt="Servicio profesional de lavandería industrial"
              fill
              sizes="(max-width: 1024px) 100vw, 464px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Servicios derecha */}
          <div className="relative lg:-mt-[110px]">
            <div className="relative max-w-[520px] space-y-[18px] lg:ml-[4px]">
              {firstService && <ServiceCard service={firstService} featured />}
              {secondService && <ServiceCard service={secondService} />}
              {thirdService && <ServiceCard service={thirdService} />}
            </div>

            {/* Decoraciones */}
            <span className="absolute right-[58px] top-[110px] hidden h-[17px] w-[30px] rounded-b-full rounded-t-[5px] bg-[#EF4B91] lg:block" />
            <span className="absolute bottom-[18px] left-[-6px] hidden h-[14px] w-[14px] rounded-full bg-[#69C348] lg:block" />
          </div>
        </div>

        {/* Imagen grande inferior */}
        <div className="relative mt-[40px] h-[300px] overflow-hidden rounded-[8px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:h-[380px] lg:h-[340px]">
          <Image
            src={content.bannerImage}
            alt="Área industrial de lavandería La Mantela"
            fill
            sizes="(max-width: 1024px) 100vw, 1184px"
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}
