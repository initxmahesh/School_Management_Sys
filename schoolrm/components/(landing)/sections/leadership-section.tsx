import Image from "next/image";
import { leadershipMessage } from "../data/landing-content";
import { SectionShell } from "./section-shell";

export function LeadershipSection() {
  const { name, title, initials, image, message } = leadershipMessage;

  return (
    <SectionShell
      id="leadership"
      eyebrow="A word from our leadership"
      title="Message from the Principal"
      className="bg-white"
    >
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Portrait */}
        <div className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-navy/8 shadow-[0_16px_48px_rgba(35,50,85,0.12)]">
            <div className="relative aspect-[4/3] w-full">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 400px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-navy via-[#3d5a80] to-hero-blue">
                  <span className="text-6xl font-bold text-cream/90 sm:text-7xl">
                    {initials}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-navy/90 px-6 py-5 backdrop-blur-sm">
              <p className="text-lg font-bold text-cream">{name}</p>
              <p className="mt-1 text-sm text-hero-blue">{title}</p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative lg:col-span-3">
          <span
            className="pointer-events-none absolute -top-4 left-0 font-serif text-8xl leading-none text-hero-blue/20 select-none sm:-top-6 sm:text-9xl"
            aria-hidden
          >
            &ldquo;
          </span>

          <div className="relative space-y-6 pt-8 sm:pt-10">
            {message.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-navy-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="border-t border-navy/10 pt-6">
              <p className="font-semibold text-navy">{name}</p>
              <p className="mt-1 text-sm text-navy-soft">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
