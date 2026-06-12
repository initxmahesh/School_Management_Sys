import { programs } from "../data/landing-content";
import { SectionShell } from "./section-shell";
import { SurfaceCard, Tag } from "./ui";

export function ProgramsSection() {
  return (
    <SectionShell
      id="programs"
      eyebrow="What we offer"
      title="Academic Programmes"
      description="From early years through sixth form — structured pathways designed for every stage of your child's journey."
      className="bg-white"
      align="center"
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <SurfaceCard key={program.title} className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-navy">{program.title}</h3>
              <Tag>{program.highlight}</Tag>
            </div>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-hero-blue">
              {program.ages}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-muted">
              {program.description}
            </p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
