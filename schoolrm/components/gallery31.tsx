"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/components/(landing)/data/landing-content";
import { cn } from "@/lib/utils";

const gridSpans = [
  "col-span-2 row-span-2 min-h-[220px] sm:min-h-[320px]",
  "col-span-1 min-h-[120px] sm:min-h-[150px]",
  "col-span-1 min-h-[120px] sm:min-h-[150px]",
  "col-span-1 min-h-[120px] sm:min-h-[150px]",
  "col-span-1 min-h-[120px] sm:min-h-[150px]",
];

function Gallery31Card({
  item,
  className,
  onClick,
  priority = false,
}: {
  item: GalleryItem;
  className?: string;
  onClick?: (item: GalleryItem) => void;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  function updateOrigin(event: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }

  function handleClick() {
    onClick?.(item);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!onClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(item);
    }
  }

  return (
    <div
      ref={ref}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-navy/8 bg-navy shadow-[0_8px_32px_rgba(35,50,85,0.1)]",
        onClick && "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-blue",
        className,
      )}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      onMouseEnter={(event) => {
        updateOrigin(event);
        setActive(true);
      }}
      onMouseLeave={() => setActive(false)}
      onMouseMove={updateOrigin}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Direction-aware reveal */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-navy/75 transition-all duration-500 ease-out",
          active ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
        style={{ transformOrigin: origin }}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-500 sm:p-5",
          active
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0",
        )}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-hero-blue sm:text-xs">
          {item.category}
        </p>
        <h3 className="mt-1 text-sm font-bold text-cream sm:text-base">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs text-cream/60">{item.year}</p>
      </div>

      {/* Default label when not hovered */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-4 left-4 z-10 transition-opacity duration-300 sm:bottom-5 sm:left-5",
          active ? "opacity-0" : "opacity-100",
        )}
      >
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy backdrop-blur-sm">
          {item.category}
        </span>
      </div>
    </div>
  );
}

interface Gallery31Props {
  items: GalleryItem[];
  className?: string;
  onItemClick?: (item: GalleryItem) => void;
}

function Gallery31({ items, className, onItemClick }: Gallery31Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2",
        className,
      )}
    >
      {items.map((item, index) => (
        <Gallery31Card
          key={item.id}
          item={item}
          onClick={onItemClick}
          className={gridSpans[index] ?? "col-span-1 min-h-[140px]"}
        />
      ))}
    </div>
  );
}

export { Gallery31, Gallery31Card };
