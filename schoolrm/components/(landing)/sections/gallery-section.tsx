"use client";

import { useEffect, useState } from "react";
import { Gallery31 } from "@/components/gallery31";
import {
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "../data/landing-content";
import { GalleryExplorer } from "./gallery-explorer";
import { SectionShell } from "./section-shell";

const previewItems = galleryItems.slice(0, 5);

type ExplorerCategory = GalleryCategory | "All";

export function GallerySection() {
  const [expanded, setExpanded] = useState(false);
  const [initialCategory, setInitialCategory] =
    useState<ExplorerCategory>("All");

  function handleCardClick(item: GalleryItem) {
    setInitialCategory(item.category);
    setExpanded(true);
  }

  function handleBack() {
    setExpanded(false);
    setInitialCategory("All");
  }

  useEffect(() => {
    if (!expanded) return;
    document
      .getElementById("gallery")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [expanded]);

  return (
    <SectionShell
      id="gallery"
      eyebrow="Campus life"
      title="Gallery"
      description={
        expanded
          ? "Browse photos by category and year."
          : "Moments from classrooms, events, sports, and celebrations across our school community."
      }
      className="bg-white"
      align="center"
    >
      {expanded ? (
        <GalleryExplorer
          initialCategory={initialCategory}
          onBack={handleBack}
        />
      ) : (
        <>
          <div className="mt-14">
            <Gallery31 items={previewItems} onItemClick={handleCardClick} />
          </div>

          <blockquote className="mx-auto mt-12 max-w-2xl border-l-4 border-hero-blue pl-6 text-left sm:pl-8">
            <p className="text-lg leading-relaxed text-navy-muted italic sm:text-xl">
              &ldquo;Every photograph captures a moment of growth, friendship,
              and discovery — the heart of life at our school.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-medium text-navy">
              — The British School community
            </footer>
          </blockquote>
        </>
      )}
    </SectionShell>
  );
}
