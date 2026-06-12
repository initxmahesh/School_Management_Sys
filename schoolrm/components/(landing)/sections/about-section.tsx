import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { aboutValues } from "../data/landing-content";
import { SectionShell } from "./section-shell";
import { IconBadge, SurfaceCard } from "./ui";

const valueIcons: Record<string, ReactNode> = {
  academic: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  ),
  holistic: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  community: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Who we are"
      title="About Us"
      description="For over five decades, The British School has shaped confident learners through world-class education, strong values, and a caring community."
      className="bg-cream pt-28 lg:pt-32"
    >
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(35,50,85,0.12)]">
          <Image
            src="/images/landing/hero-student.jpg"
            alt="Students at The British School"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 px-5 py-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-navy">Est. 1974</p>
            <p className="mt-1 text-xs text-navy-muted">
              Trusted by families across Kathmandu and beyond
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-navy-muted lg:text-lg">
            We blend British educational tradition with a forward-thinking
            approach — preparing students not just for exams, but for
            university, careers, and life as global citizens.
          </p>

          <div className="space-y-4">
            {aboutValues.map((value) => (
              <SurfaceCard key={value.title} className="!p-5 sm:!p-6">
                <div className="flex gap-4">
                  <IconBadge>{valueIcons[value.icon]}</IconBadge>
                  <div>
                    <h3 className="font-semibold text-navy">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>

          <Link
            href="#programs"
            className="cta-gradient cta-button inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-navy"
          >
            Explore our programmes
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
