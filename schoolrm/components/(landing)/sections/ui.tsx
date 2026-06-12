import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-widest text-hero-blue">
      {children}
    </p>
  );
}

export function SurfaceCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_8px_40px_rgba(35,50,85,0.06)] transition-shadow hover:shadow-[0_12px_48px_rgba(35,50,85,0.1)] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  className = "bg-hero-blue/10 text-hero-blue",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-hero-blue/10 px-3 py-1 text-xs font-medium text-navy">
      {children}
    </span>
  );
}
