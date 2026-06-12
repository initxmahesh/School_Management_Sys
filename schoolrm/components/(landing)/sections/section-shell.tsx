import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionShell({
  id,
  title,
  description,
  className = "bg-cream",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-[72px] py-20 lg:scroll-mt-[88px] ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-navy lg:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-muted">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
