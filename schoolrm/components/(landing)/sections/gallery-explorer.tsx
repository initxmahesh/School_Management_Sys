"use client";

import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  galleryCategories,
  galleryItems,
  galleryYears,
} from "../data/landing-content";
import { Gallery31Card } from "@/components/gallery31";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type YearFilter = (typeof galleryYears)[number];
type CategoryFilter = (typeof galleryCategories)[number];

/** 4 columns × 2 rows per page */
const PAGE_SIZE = 8;

function YearFilterDropdown({
  value,
  onChange,
}: {
  value: YearFilter;
  onChange: (year: YearFilter) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const label = value === "All" ? "All years" : String(value);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2.5 text-sm font-medium text-navy shadow-sm transition-colors hover:bg-navy/5"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
          Year
        </span>
        <span>{label}</span>
        <ChevronDown
          className={cn("size-4 text-navy-soft transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-30 mt-2 min-w-full overflow-hidden rounded-xl border border-navy/10 bg-white py-1 shadow-[0_8px_32px_rgba(35,50,85,0.12)]"
        >
          {galleryYears.map((y) => (
            <li key={String(y)} role="option" aria-selected={value === y}>
              <button
                type="button"
                onClick={() => {
                  onChange(y);
                  setOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-navy/5",
                  value === y
                    ? "bg-hero-blue/10 font-medium text-navy"
                    : "text-navy-muted",
                )}
              >
                {y === "All" ? "All years" : y}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function GalleryExplorer({
  initialCategory = "All",
  onBack,
}: {
  initialCategory?: CategoryFilter;
  onBack?: () => void;
}) {
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [year, setYear] = useState<YearFilter>("All");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    return galleryItems.filter((item) => {
      const categoryMatch =
        category === "All" || item.category === category;
      const yearMatch = year === "All" || item.year === year;
      return categoryMatch && yearMatch;
    });
  }, [category, year]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);

  const pageItems = useMemo(() => {
    const start = safePage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  useEffect(() => {
    setCategory(initialCategory);
    setYear("All");
    setPage(0);
  }, [initialCategory]);

  useEffect(() => {
    setPage(0);
  }, [category, year]);

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(Math.max(0, totalPages - 1));
    }
  }, [page, totalPages]);

  return (
    <div className="mt-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-muted transition-colors hover:text-navy"
        >
          <ChevronLeft className="size-4" />
          Back to gallery highlights
        </button>
      )}

      {/* Categories + year dropdown */}
      <div className="flex flex-col gap-4 border-b border-navy/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                category === cat
                  ? "bg-navy text-cream shadow-md"
                  : "bg-navy/5 text-navy-muted hover:bg-navy/10 hover:text-navy",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <YearFilterDropdown value={year} onChange={setYear} />
      </div>

      {/* Paginated grid */}
      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-navy/15 bg-cream/50 p-8 text-center">
            <p className="font-medium text-navy">No photos found</p>
            <p className="mt-1 text-sm text-navy-muted">
              Try a different category or year.
            </p>
          </div>
        ) : (
          <>
            <div
              key={`${category}-${year}-${safePage}`}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            >
              {pageItems.map((item, index) => (
                <Gallery31Card
                  key={item.id}
                  item={item}
                  priority={safePage === 0 && index < 4}
                  className="aspect-[4/3] w-full"
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={safePage === 0}
                  className="gap-2 rounded-full border-navy/15"
                >
                  <ArrowLeft className="size-4" />
                  Previous
                </Button>

                <span className="text-sm text-navy-muted">
                  Page {safePage + 1} of {totalPages}
                </span>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setPage((p) => Math.min(totalPages - 1, p + 1))
                  }
                  disabled={safePage >= totalPages - 1}
                  className="gap-2 rounded-full border-navy/15"
                >
                  Next
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
