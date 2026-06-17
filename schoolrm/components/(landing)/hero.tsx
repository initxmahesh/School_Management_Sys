import Image from "next/image";

const headlineLines = ["BETTER", "FUTURE FOR", "YOUR KIDS"];

const heroStats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "1200+", label: "Students" },
  { value: "98%", label: "College Placement" },
  { value: "15:1", label: "Student-Teacher Ratio" },
  { value: "Jun 12 - Aug 12", label: "Admissions Open" },
];

function HeroStatsMarquee() {
  const items = [...heroStats, ...heroStats];

  return (
    <div className="relative z-20 w-full shrink-0">
      <div className="hero-broadcast-bar flex w-full items-stretch border-y border-navy/15 bg-transparent">
        <div className="hero-marquee-mask relative min-w-0 flex-1 overflow-hidden py-2.5 sm:py-3">
          <div
            className="hero-marquee-track flex w-max items-center gap-8 pl-4 sm:gap-12 sm:pl-6"
            aria-label="School highlights"
          >
            {items.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="flex shrink-0 items-center gap-2 sm:gap-10"
              >
                <span className="hero-broadcast-value text-sm font-bold uppercase sm:text-base">
                  {stat.value}
                </span>
                <span className="hero-broadcast-text text-xs font-medium uppercase tracking-wider sm:text-sm">
                  {stat.label}
                </span>
                <span className="hero-broadcast-divider px-1 font-light sm:px-2" aria-hidden>
                  |
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col scroll-mt-[72px] lg:scroll-mt-[85px]"
    >
      <div className="grid min-h-0 flex-1 lg:grid-cols-2">
        <div className="relative flex flex-col bg-cream pt-[72px] lg:min-h-full lg:pt-[85px]">
          <HeroLeftContent />
        </div>

        <div className="relative min-h-[280px] bg-linear-to-br from-[#69aed9] via-[#7ab9e4] to-[#7ebbe4] lg:min-h-0">
          <HeroRightVisual />
        </div>
      </div>

      <HeroStatsMarquee />
    </section>
  );
}

export function HeroLeftContent() {
  return (
    <div className="relative flex flex-1 flex-col justify-center px-6 lg:px-12 xl:px-[90px]">
      <div className="relative z-10 flex max-w-xl flex-col gap-10 lg:max-w-2xl lg:gap-12">
        <div className="flex flex-col gap-5">
          <h1 className="flex flex-col text-2xl font-bold uppercase leading-none tracking-[0.12em] sm:text-5xl lg:text-[56px] xl:text-[50px] xl:tracking-[9.8px]">
            {headlineLines.map((line) => (
              <span key={line} className="hero-gradient-text drop-shadow-sm">
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-navy-muted sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            augue cras massa facilisis dolor volutpat quam risus venenatis.
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroRightVisual() {
  return (
    <div className="relative h-full min-h-[320px] lg:min-h-full">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/landing/hero-bg.svg"
          alt=""
          fill
          aria-hidden
          className="object-cover object-center opacity-90"
        />
        <Image
          src="/images/landing/bubbles.svg"
          alt=""
          fill
          aria-hidden
          className="object-cover object-right opacity-80"
        />
      </div>

      <Image
        src="/images/landing/hero-student.jpg"
        alt="Smiling student with books and backpack"
        width={2000}
        height={1333}
        priority
        className="relative z-10 block h-full min-h-[320px] w-full object-cover object-top lg:min-h-full"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
