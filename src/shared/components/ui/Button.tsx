type ButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "light";
  };
  
  const variants = {
    primary:
      "bg-lime-500 text-white hover:bg-lime-600 shadow-lg shadow-lime-500/25",
    dark: "bg-slate-950 text-white hover:bg-slate-800",
    light: "bg-white text-slate-950 hover:bg-slate-100",
  };
  
  export function Button({
    href,
    children,
    className = "",
    variant = "primary",
  }: ButtonProps) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }