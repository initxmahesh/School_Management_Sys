import Image from "next/image";
import { SectionShell } from "./section-shell";

export function ProgramsSection() {
  return (
    <SectionShell
      id="programs"
      eyebrow="What we offer"
      title="Academic Programmes"
      description="From early years through sixth form — structured pathways designed for every stage of your child's journey."
      className="bg-cream"
      align="center"
    >
      {/* Infographic image — top header cropped; text lives in SectionShell above */}
      <div className="mt-12 w-full overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-[0_8px_40px_rgba(35,50,85,0.06)] sm:mt-14">
        <div className="relative aspect-[16/11] w-full sm:aspect-[16/10] lg:aspect-[2/1]">
          <Image
            src="/images/landing/programs-journey.png"
            alt="Academic programmes journey from early years through sixth form"
            fill
            className="object-cover object-[50%_34%]"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </div>
    </SectionShell>
  );
}
