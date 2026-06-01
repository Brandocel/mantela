import Image from "next/image";
import type { NavItem } from "@/features/home/types/home.types";

type HeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="relative mx-auto h-[66px] w-full max-w-[1280px]">
        {/* Logo */}
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="absolute left-[28px] top-[10px] h-[44px] w-[81px] md:left-[67px]"
        >
          <Image
            src="/images/logomantela.png"
            alt="La Mantela Lavandería Industrial"
            fill
            priority
            sizes="81px"
            className="object-contain"
          />
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden h-full items-center justify-center md:flex">
          <ul className="flex items-center gap-[42px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[14px] font-medium leading-6 text-[#252525] hover:text-[#00A9B7]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navegación Mobile sencilla */}
        <nav className="flex h-full items-center justify-end pr-5 md:hidden">
          <a
            href="#contacto"
            className="rounded-full bg-[#75CF45] px-4 py-2 text-xs font-semibold text-white"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}