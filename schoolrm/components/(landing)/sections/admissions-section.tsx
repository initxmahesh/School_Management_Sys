import Link from "next/link";
import { admissionDates, admissionSteps } from "../data/landing-content";
import { SectionShell } from "./section-shell";
import { SurfaceCard } from "./ui";

export function AdmissionsSection() {
  return (
    <SectionShell
      id="admissions"
      eyebrow="Join us"
      title="Admissions"
      description="A straightforward, transparent process — we're here to support your family every step of the way."
    >
      <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="space-y-6 lg:col-span-2">
          {admissionSteps.map((step, index) => (
            <div key={step.step} className="relative flex gap-6">
              {index < admissionSteps.length - 1 && (
                <span
                  className="absolute left-6 top-14 h-[calc(100%-1rem)] w-px bg-hero-blue/25"
                  aria-hidden
                />
              )}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-cream">
                {step.step}
              </div>
              <SurfaceCard className="flex-1 !p-6">
                <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {step.description}
                </p>
              </SurfaceCard>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <SurfaceCard className="bg-navy !p-6 text-cream sm:!p-8">
            <h3 className="text-lg font-bold">Key dates</h3>
            <ul className="mt-6 space-y-4">
              {admissionDates.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-cream/10 pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-xs uppercase tracking-wider text-hero-blue">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-cream">{item.date}</p>
                </li>
              ))}
            </ul>
          </SurfaceCard>

          <SurfaceCard className="!p-6 sm:!p-8">
            <h3 className="text-lg font-bold text-navy">Ready to apply?</h3>
            <p className="mt-2 text-sm text-navy-muted">
              Start your application or book a campus tour with our admissions
              team.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="#contact"
                className="cta-gradient cta-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-navy"
              >
                Apply now
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-navy/15 px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
              >
                Schedule a visit
              </Link>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </SectionShell>
  );
}
