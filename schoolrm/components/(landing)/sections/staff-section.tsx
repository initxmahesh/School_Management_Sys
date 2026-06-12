import { staffMembers } from "../data/landing-content";
import { SectionShell } from "./section-shell";
import { SurfaceCard } from "./ui";

const avatarGradients = [
  "from-hero-blue/80 to-navy",
  "from-[#f6ad2b]/80 to-accent-orange",
  "from-[#9bb8b6] to-hero-blue",
  "from-navy to-hero-blue",
];

export function StaffSection() {
  return (
    <SectionShell
      id="staff"
      eyebrow="Our people"
      title="Meet Our Leadership"
      description="Experienced educators committed to every student's growth — academically, socially, and personally."
      className="bg-white"
      align="center"
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {staffMembers.map((member, index) => (
          <SurfaceCard
            key={member.name}
            className="!p-0 overflow-hidden text-center"
          >
            <div
              className={`flex h-32 items-center justify-center bg-linear-to-br ${avatarGradients[index % avatarGradients.length]}`}
            >
              <span className="text-3xl font-bold text-cream">
                {member.initials}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-navy">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-hero-blue">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                {member.bio}
              </p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
