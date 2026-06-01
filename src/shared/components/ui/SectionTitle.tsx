type SectionTitleProps = {
    title: string;
    description?: string;
    align?: "left" | "center";
  };
  
  export function SectionTitle({
    title,
    description,
    align = "center",
  }: SectionTitleProps) {
    const isCenter = align === "center";
  
    return (
      <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <span className="mb-4 inline-block h-2 w-10 rounded-full bg-violet-500" />
  
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h2>
  
        {description && (
          <p className="mt-5 text-base leading-8 text-slate-600">
            {description}
          </p>
        )}
      </div>
    );
  }