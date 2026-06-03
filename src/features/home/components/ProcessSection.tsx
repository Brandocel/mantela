"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProcessContent } from "@/features/home/types/home.types";

const EASE   = [0.23, 1, 0.32, 1] as [number, number, number, number];
const VP     = { once: true, margin: "-60px" } as const;
const SPRING = { type: "spring", stiffness: 360, damping: 32 } as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/* ── Ilustración 01: Recolección ──────────────────────── */
function IllustrationPickup() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
      {/* Fondo con degradado */}
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F172A"/>
          <stop offset="100%" stopColor="#1E3A2F"/>
        </linearGradient>
        <linearGradient id="truck-body" x1="60" y1="140" x2="260" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16A34A"/>
          <stop offset="100%" stopColor="#15803D"/>
        </linearGradient>
        <linearGradient id="textile-shine" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bg1)"/>

      {/* Grid de puntos decorativo */}
      {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5,6,7,8,9].map(col => (
        <circle key={`${row}-${col}`} cx={30 + col * 38} cy={20 + row * 38} r="1.2" fill="#ffffff" fillOpacity="0.06"/>
      )))}

      {/* Carretera */}
      <rect x="0" y="185" width="400" height="55" fill="#0F172A" fillOpacity="0.6"/>
      <rect x="0" y="185" width="400" height="2" fill="#1E293B"/>
      {/* Líneas de carretera */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={20 + i * 80} y="210" width="44" height="5" rx="2.5" fill="#334155" fillOpacity="0.7"/>
      ))}

      {/* Camión — cuerpo */}
      <rect x="55" y="148" width="190" height="42" rx="4" fill="url(#truck-body)"/>
      {/* Camión — cabina */}
      <path d="M245 148 L245 190 L310 190 L310 162 L285 148 Z" fill="#15803D"/>
      {/* Ventana cabina */}
      <path d="M252 155 L252 176 L302 176 L302 165 L282 155 Z" fill="#BFDBFE" fillOpacity="0.7" rx="2"/>
      {/* Reflejo ventana */}
      <path d="M252 155 L265 155 L265 176 L252 176 Z" fill="#ffffff" fillOpacity="0.12"/>
      {/* Puerta camión */}
      <rect x="200" y="152" width="42" height="34" rx="2" fill="#15803D" stroke="#166534" strokeWidth="1"/>
      <circle cx="237" cy="169" r="3" fill="#BBF7D0"/>
      {/* Línea de carga */}
      <line x1="58" y1="171" x2="243" y2="171" stroke="#166534" strokeWidth="1.5" strokeDasharray="6 4"/>

      {/* Ruedas */}
      <circle cx="105" cy="192" r="18" fill="#1E293B"/>
      <circle cx="105" cy="192" r="11" fill="#334155"/>
      <circle cx="105" cy="192" r="5"  fill="#94A3B8"/>
      <circle cx="220" cy="192" r="18" fill="#1E293B"/>
      <circle cx="220" cy="192" r="11" fill="#334155"/>
      <circle cx="220" cy="192" r="5"  fill="#94A3B8"/>
      <circle cx="290" cy="192" r="18" fill="#1E293B"/>
      <circle cx="290" cy="192" r="11" fill="#334155"/>
      <circle cx="290" cy="192" r="5"  fill="#94A3B8"/>

      {/* Paquetes de textiles encima del camión */}
      <rect x="70"  y="110" width="50" height="38" rx="4" fill="#F8FAFC" fillOpacity="0.92"/>
      <rect x="70"  y="110" width="50" height="38" rx="4" fill="url(#textile-shine)"/>
      <line x1="95"  y1="110" x2="95"  y2="148" stroke="#E2E8F0" strokeWidth="1.5"/>
      <line x1="70"  y1="129" x2="120" y2="129" stroke="#E2E8F0" strokeWidth="1.5"/>

      <rect x="128" y="104" width="56" height="44" rx="4" fill="#F1F5F9" fillOpacity="0.9"/>
      <rect x="128" y="104" width="56" height="44" rx="4" fill="url(#textile-shine)"/>
      <line x1="156" y1="104" x2="156" y2="148" stroke="#E2E8F0" strokeWidth="1.5"/>
      <line x1="128" y1="126" x2="184" y2="126" stroke="#E2E8F0" strokeWidth="1.5"/>

      <rect x="192" y="112" width="48" height="36" rx="4" fill="#F8FAFC" fillOpacity="0.88"/>
      <line x1="216" y1="112" x2="216" y2="148" stroke="#E2E8F0" strokeWidth="1.5"/>

      {/* Etiqueta verde en paquete */}
      <rect x="76" y="116" width="22" height="8" rx="2" fill="#16A34A"/>
      <rect x="134" y="109" width="26" height="8" rx="2" fill="#16A34A"/>

      {/* Flechas de movimiento */}
      <path d="M340 150 L360 150 M354 143 L362 150 L354 157" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.6"/>
      <path d="M340 165 L355 165 M350 160 L357 165 L350 170" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.4"/>

      {/* Destello en el camión */}
      <ellipse cx="180" cy="148" rx="80" ry="6" fill="#16A34A" fillOpacity="0.12"/>
    </svg>
  );
}

/* ── Ilustración 02: Proceso Industrial ──────────────── */
function IllustrationProcess() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="bg2" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F172A"/>
          <stop offset="100%" stopColor="#1A2942"/>
        </linearGradient>
        <radialGradient id="drum-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#16A34A" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#16A34A" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="machine-front" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#1E293B"/>
          <stop offset="100%" stopColor="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bg2)"/>

      {/* Grid diagonal decorativo */}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={`d${i}`} x1={i*70-40} y1="0" x2={i*70+60} y2="240" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1"/>
      ))}

      {/* Suelo */}
      <rect x="0" y="192" width="400" height="48" fill="#0F172A" fillOpacity="0.5"/>
      <rect x="0" y="192" width="400" height="1.5" fill="#1E293B"/>

      {/* Lavadora grande izquierda */}
      <rect x="28" y="68" width="130" height="128" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5"/>
      {/* Panel superior */}
      <rect x="28" y="68" width="130" height="28" rx="8" fill="#0F172A"/>
      <rect x="28" y="82" width="130" height="14" fill="#0F172A"/>
      {/* Botones panel */}
      <circle cx="50"  cy="79" r="5" fill="#16A34A"/>
      <circle cx="50"  cy="79" r="2.5" fill="#22C55E"/>
      <circle cx="68"  cy="79" r="5" fill="#334155"/>
      <circle cx="86"  cy="79" r="5" fill="#334155"/>
      <rect x="100" y="74" width="40" height="10" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1"/>
      <rect x="102" y="76" width="20" height="6" rx="1" fill="#16A34A" fillOpacity="0.7"/>
      {/* Tambor circular */}
      <circle cx="93" cy="148" r="46" fill="#0F172A" stroke="#334155" strokeWidth="2"/>
      <circle cx="93" cy="148" r="38" fill="url(#drum-glow)" stroke="#1E293B" strokeWidth="1.5"/>
      <circle cx="93" cy="148" r="38" fill="#0F172A" fillOpacity="0.4"/>
      {/* Ventana del tambor */}
      <circle cx="93" cy="148" r="30" fill="#0B1628" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.6"/>
      {/* Ropa dentro */}
      <path d="M72 138 Q93 128 114 138 Q107 158 93 162 Q79 158 72 138Z" fill="#F1F5F9" fillOpacity="0.15"/>
      <path d="M75 152 Q93 145 111 152" stroke="#F1F5F9" strokeWidth="2" strokeOpacity="0.2" fill="none"/>
      {/* Burbujas dentro del tambor */}
      <circle cx="82"  cy="142" r="4"   fill="#BAE6FD" fillOpacity="0.35"/>
      <circle cx="100" cy="135" r="5.5" fill="#BAE6FD" fillOpacity="0.25"/>
      <circle cx="106" cy="155" r="3"   fill="#BAE6FD" fillOpacity="0.3"/>
      <circle cx="78"  cy="158" r="3.5" fill="#BAE6FD" fillOpacity="0.2"/>
      {/* Tornillos tambor */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = 93 + 34 * Math.cos(rad);
        const y = 148 + 34 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#334155"/>;
      })}
      {/* Pie de máquina */}
      <rect x="45"  y="192" width="16" height="10" rx="3" fill="#334155"/>
      <rect x="125" y="192" width="16" height="10" rx="3" fill="#334155"/>

      {/* Máquina secadora derecha */}
      <rect x="200" y="88" width="110" height="108" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5"/>
      <rect x="200" y="88" width="110" height="22" rx="8" fill="#0F172A"/>
      <rect x="200" y="100" width="110" height="10" fill="#0F172A"/>
      <circle cx="220" cy="97"  r="4" fill="#334155"/>
      <circle cx="234" cy="97"  r="4" fill="#F59E0B" fillOpacity="0.7"/>
      <circle cx="248" cy="97"  r="4" fill="#334155"/>
      <circle cx="255" cy="142" r="34" fill="#0F172A" stroke="#334155" strokeWidth="2"/>
      <circle cx="255" cy="142" r="26" fill="#0B1628" stroke="#16A34A" strokeWidth="1.2" strokeOpacity="0.5"/>
      {/* Espiral dentro secadora */}
      <path d="M255 120 Q275 120 278 142 Q278 162 255 164 Q232 164 232 142 Q232 128 248 122" stroke="#334155" strokeWidth="2" fill="none"/>
      <circle cx="255" cy="142" r="5" fill="#334155"/>
      <rect x="224" y="188" width="14" height="8" rx="3" fill="#334155"/>
      <rect x="272" y="188" width="14" height="8" rx="3" fill="#334155"/>

      {/* Tuberías / conexiones */}
      <path d="M158 108 Q180 108 180 130 L180 158 Q180 170 200 170" stroke="#334155" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M158 108 Q180 108 180 130 L180 158 Q180 170 200 170" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.4" fill="none" strokeLinecap="round" strokeDasharray="6 5"/>

      {/* Burbujas flotando */}
      <circle cx="170" cy="55"  r="8"   fill="#BAE6FD" fillOpacity="0.12" stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.25"/>
      <circle cx="185" cy="35"  r="5"   fill="#BAE6FD" fillOpacity="0.1"  stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.2"/>
      <circle cx="155" cy="30"  r="11"  fill="#BAE6FD" fillOpacity="0.08" stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.18"/>
      <circle cx="340" cy="48"  r="7"   fill="#16A34A" fillOpacity="0.1"  stroke="#16A34A" strokeWidth="0.8" strokeOpacity="0.2"/>
      <circle cx="358" cy="68"  r="4.5" fill="#16A34A" fillOpacity="0.08"/>
      <circle cx="330" cy="72"  r="3"   fill="#16A34A" fillOpacity="0.1"/>

      {/* Vapor */}
      <path d="M320 92 Q324 82 320 72" stroke="#94A3B8" strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeLinecap="round"/>
      <path d="M330 88 Q334 76 330 65" stroke="#94A3B8" strokeWidth="1.5" strokeOpacity="0.25" fill="none" strokeLinecap="round"/>
      <path d="M340 94 Q344 84 340 74" stroke="#94A3B8" strokeWidth="1.2" strokeOpacity="0.2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Ilustración 03: Entrega ──────────────────────────── */
function IllustrationDelivery() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="bg3" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F172A"/>
          <stop offset="100%" stopColor="#0F2A1A"/>
        </linearGradient>
        <linearGradient id="box-top" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F8FAFC"/>
          <stop offset="100%" stopColor="#E2E8F0"/>
        </linearGradient>
        <linearGradient id="badge-glow" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#16A34A"/>
          <stop offset="100%" stopColor="#15803D"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bg3)"/>

      {/* Cuadrícula sutil */}
      {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5,6,7,8].map(col => (
        <rect key={`g${row}-${col}`} x={col*50} y={row*44} width="1" height="1" fill="#ffffff" fillOpacity="0.04"/>
      )))}

      {/* Plataforma / mesa */}
      <rect x="40" y="175" width="320" height="14" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="1"/>
      <rect x="70"  y="189" width="12" height="28" rx="3" fill="#1E293B"/>
      <rect x="318" y="189" width="12" height="28" rx="3" fill="#1E293B"/>

      {/* Pila de textiles doblados — izquierda */}
      {/* Capa 3 */}
      <rect x="60" y="128" width="88" height="16" rx="3" fill="#CBD5E1" fillOpacity="0.6"/>
      {/* Capa 2 */}
      <rect x="62" y="140" width="84" height="18" rx="3" fill="#E2E8F0" fillOpacity="0.75"/>
      {/* Capa 1 (arriba) */}
      <rect x="64" y="156" width="80" height="20" rx="3" fill="#F8FAFC" fillOpacity="0.92"/>
      {/* Líneas de pliegue */}
      <line x1="64" y1="165" x2="144" y2="165" stroke="#CBD5E1" strokeWidth="1" strokeOpacity="0.7"/>
      <line x1="64" y1="169" x2="144" y2="169" stroke="#CBD5E1" strokeWidth="0.8" strokeOpacity="0.4"/>
      {/* Cinta de embalaje */}
      <rect x="96" y="128" width="16" height="48" rx="2" fill="#16A34A" fillOpacity="0.35"/>
      <rect x="64" y="160" width="80" height="6"  rx="1" fill="#16A34A" fillOpacity="0.35"/>

      {/* Caja de textiles — centro */}
      {/* Tapa */}
      <path d="M155 105 L245 105 L260 122 L140 122 Z" fill="url(#box-top)" fillOpacity="0.9"/>
      {/* Cuerpo */}
      <rect x="140" y="122" width="120" height="56" rx="2" fill="#F1F5F9" fillOpacity="0.88"/>
      {/* Lateral izquierdo */}
      <path d="M140 122 L155 105 L155 161 L140 178 Z" fill="#E2E8F0" fillOpacity="0.7"/>
      {/* Cinta caja */}
      <rect x="190" y="105" width="20" height="73" fill="#16A34A" fillOpacity="0.25"/>
      <rect x="140" y="148" width="120" height="8" fill="#16A34A" fillOpacity="0.25"/>
      {/* Logo en caja */}
      <rect x="162" y="132" width="56" height="24" rx="3" fill="#0F172A" fillOpacity="0.1"/>
      <text x="190" y="148" textAnchor="middle" fill="#16A34A" fontSize="9" fontWeight="800" fontFamily="system-ui" fillOpacity="0.8">La Mantela</text>

      {/* Toallas dobladas — derecha */}
      <rect x="262" y="130" width="78" height="20" rx="3" fill="#F8FAFC" fillOpacity="0.9"/>
      <line x1="262" y1="138" x2="340" y2="138" stroke="#CBD5E1" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="262" y1="143" x2="340" y2="143" stroke="#CBD5E1" strokeWidth="0.8" strokeOpacity="0.4"/>
      <rect x="264" y="148" width="74" height="16" rx="3" fill="#F1F5F9" fillOpacity="0.85"/>
      <rect x="266" y="162" width="70" height="13" rx="3" fill="#E2E8F0" fillOpacity="0.75"/>
      {/* Cinta verde lateral */}
      <rect x="293" y="130" width="14" height="45" rx="2" fill="#16A34A" fillOpacity="0.3"/>

      {/* Badge de verificación grande — flotando */}
      <circle cx="200" cy="68" r="32" fill="url(#badge-glow)" fillOpacity="0.15"/>
      <circle cx="200" cy="68" r="26" fill="url(#badge-glow)"/>
      <circle cx="200" cy="68" r="26" fill="#166534" fillOpacity="0.3"/>
      {/* Check mark */}
      <path d="M186 68 L196 78 L216 56" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Anillo exterior */}
      <circle cx="200" cy="68" r="31" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 3"/>

      {/* Estrella / destellos alrededor del badge */}
      <path d="M234 44 L236 40 L238 44 L242 46 L238 48 L236 52 L234 48 L230 46 Z" fill="#16A34A" fillOpacity="0.5"/>
      <path d="M162 52 L163.5 48.5 L165 52 L168.5 53.5 L165 55 L163.5 58.5 L162 55 L158.5 53.5 Z" fill="#16A34A" fillOpacity="0.35"/>
      <circle cx="245" cy="72" r="2.5" fill="#22C55E" fillOpacity="0.6"/>
      <circle cx="158" cy="65" r="2"   fill="#22C55E" fillOpacity="0.4"/>

      {/* Etiquetas de calidad flotantes */}
      <rect x="18" y="80" width="72" height="22" rx="11" fill="#1E293B" stroke="#334155" strokeWidth="1"/>
      <circle cx="32" cy="91" r="5" fill="#16A34A" fillOpacity="0.8"/>
      <rect x="42" y="86" width="40" height="5" rx="2" fill="#475569"/>
      <rect x="42" y="94" width="28" height="4" rx="2" fill="#334155"/>

      <rect x="310" y="72" width="80" height="22" rx="11" fill="#1E293B" stroke="#334155" strokeWidth="1"/>
      <circle cx="324" cy="83" r="5" fill="#F59E0B" fillOpacity="0.8"/>
      <rect x="334" y="78" width="48" height="5" rx="2" fill="#475569"/>
      <rect x="334" y="86" width="34" height="4" rx="2" fill="#334155"/>
    </svg>
  );
}

const ILLUSTRATIONS = [IllustrationPickup, IllustrationProcess, IllustrationDelivery];
const ACCENT_COLORS = ["#16A34A", "#0EA5E9", "#F59E0B"];
const BG_COLORS     = ["from-[#0F172A] to-[#1E3A2F]", "from-[#0F172A] to-[#1A2942]", "from-[#0F172A] to-[#0F2A1A]"];

function StepCard({ item, index }: {
  item: ProcessContent["items"][number];
  index: number;
}) {
  const Illustration = ILLUSTRATIONS[index] ?? IllustrationPickup;
  const accent = ACCENT_COLORS[index] ?? "#16A34A";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={SPRING}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
    >
      {/* Zona visual — proporción cuadrada */}
      <div className={`relative aspect-square w-full overflow-hidden bg-gradient-to-br ${BG_COLORS[index]}`}>

        {/* Ilustración de fondo — fallback siempre visible */}
        <Illustration />

        {/* Foto real — Emil: fade-in con spring una vez cargada */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
          />
        </motion.div>

        {/* Overlay gradiente inferior */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/55 via-transparent to-transparent" />

        {/* Número watermark */}
        <div className="absolute bottom-3 left-5 select-none">
          <span className="text-[72px] font-[900] leading-none tracking-[-0.06em] text-white/10">
            {item.number}
          </span>
        </div>

        {/* Badge paso — Emil: spring whileHover */}
        <motion.div
          className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING}
        >
          <span className="h-[7px] w-[7px] rounded-full" style={{ background: accent }} />
          <span className="text-[10px] font-[700] tracking-[0.05em] text-[#0F172A]">
            Paso {item.number}
          </span>
        </motion.div>
      </div>

      {/* Contenido texto */}
      <div className="flex flex-1 flex-col p-6">
        {/* Línea acento — crece al hover con spring */}
        <motion.div
          className="mb-4 h-[3px] w-[28px] rounded-full origin-left"
          style={{ background: accent }}
          whileHover={{ scaleX: 2.5 }}
          transition={SPRING}
        />

        <h3 className="text-[17px] font-[800] leading-[23px] tracking-[-0.03em] text-[#0F172A]">
          {item.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[13px] leading-[22px] text-[#64748B]">
          {item.description}
        </p>

        {/* Footer con número de paso estilizado */}
        <div className="mt-5 flex items-center justify-between border-t border-[#F1F5F9] pt-4">
          <span className="text-[11px] font-[600] tracking-[0.08em] text-[#94A3B8] uppercase">
            {index === 0 ? "Inicio del proceso" : index === 1 ? "Núcleo industrial" : "Resultado final"}
          </span>
          <span
            className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[11px] font-[800] text-white"
            style={{ background: accent }}
          >
            {item.number}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function ProcessSection({ content }: { content: ProcessContent }) {
  const [s1, s2, s3] = content.items;

  return (
    <section id="proceso" className="bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-24 sm:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-3 text-[10px] font-[700] uppercase tracking-[0.2em] text-[#16A34A]">
            <span className="h-px w-[20px] bg-[#16A34A]" />
            Flujo de trabajo
            <span className="h-px w-[20px] bg-[#16A34A]" />
          </p>
          <h2 className="mx-auto max-w-[460px] text-[34px] font-[800] leading-[1.12] tracking-[-0.04em] text-[#0F172A] sm:text-[46px]">
            Cómo Funciona<br />Nuestro Servicio
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-[24px] text-[#475569]">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {s1 && <StepCard item={s1} index={0} />}
          {s2 && <StepCard item={s2} index={1} />}
          {s3 && <StepCard item={s3} index={2} />}
        </motion.div>
      </div>
    </section>
  );
}
