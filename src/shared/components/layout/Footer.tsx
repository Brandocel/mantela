import Image from "next/image";
import type { NavItem } from "@/features/home/types/home.types";

type FooterProps = {
  navItems: NavItem[];
};

type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-[24px] w-[24px] items-center justify-center text-white/90 transition-all duration-300 hover:-translate-y-1 hover:text-[#00A9B7]"
    >
      {children}
    </a>
  );
}

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1A4 4 0 0 0 12 8.1c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.9 4.8a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 3.4 18c-.3 0-.7 0-1-.1A11.3 11.3 0 0 0 8.5 20c7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px]"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 8.5V7.2c0-.9.4-1.4 1.5-1.4H17V3.2C16.5 3.1 15.6 3 14.7 3 12.4 3 11 4.4 11 7v1.5H8.5v3H11V21h3v-9.5h2.6l.4-3H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[22px] w-[22px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 8.3s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.2 5 12 5 12 5s-3.2 0-6.1.3c-.4.1-1.3.1-2.1.9C3.2 6.8 3 8.3 3 8.3S2.8 10 2.8 11.7v1.6C2.8 15 3 16.7 3 16.7s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 5.8.3 5.8.3s3.2 0 6.1-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" />
    </svg>
  );
}

export function Footer({ navItems }: FooterProps) {
  return (
    <footer className="w-full bg-[#252525] text-white">
      {/* Parte principal */}
      <div className="mx-auto flex min-h-[365px] w-full max-w-[1280px] flex-col items-center justify-center px-6 py-14">
        {/* Logo */}
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="relative h-[130px] w-[245px]"
        >
          <Image
            src="/images/logomantela.png"
            alt="La Mantela Lavandería Industrial"
            fill
            sizes="245px"
            className="object-contain brightness-0 invert"
          />
        </a>

        {/* Navegación */}
        <nav className="mt-[20px]">
          <ul className="flex flex-wrap items-center justify-center gap-x-[54px] gap-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-[500] leading-6 text-white transition-colors duration-300 hover:text-[#00A9B7]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociales */}
        <div className="mt-[38px] flex items-center justify-center gap-[26px]">
          <SocialLink href="#" label="Twitter">
            <TwitterIcon />
          </SocialLink>

          <SocialLink href="#" label="Instagram">
            <InstagramIcon />
          </SocialLink>

          <SocialLink href="#" label="Facebook">
            <FacebookIcon />
          </SocialLink>

          <SocialLink href="#" label="YouTube">
            <YoutubeIcon />
          </SocialLink>
        </div>
      </div>

      {/* Línea y copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex h-[62px] w-full max-w-[1280px] items-center justify-center px-6">
          <p className="text-center text-[15px] font-[400] leading-6 text-white">
            © {new Date().getFullYear()} La Mantela. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}