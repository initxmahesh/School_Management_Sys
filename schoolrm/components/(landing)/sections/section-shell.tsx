import { ReactNode } from "react";
import { SectionEyebrow } from "./ui";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = "bg-cream",
  align = "left",
  children,
}: SectionShellProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={`scroll-mt-[72px] py-20 lg:scroll-mt-[88px] lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h2
            className={`${eyebrow ? "mt-3" : ""} text-3xl font-bold text-navy lg:text-4xl`}
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-navy-muted">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
