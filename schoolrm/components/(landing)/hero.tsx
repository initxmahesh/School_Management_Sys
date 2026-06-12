import Image from "next/image";
import Link from "next/link";

const headlineLines = ["BETTER", "FUTURE FOR", "YOUR KIDS"];

const heroStats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "1200+", label: "Students" },
  { value: "98%", label: "College Placement" },
  { value: "15:1", label: "Student-Teacher Ratio" },
];

function HeroStatsBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-6 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col divide-y divide-navy/10 rounded-2xl bg-white px-4 py-4 shadow-[0_8px_32px_rgba(35,50,85,0.12)] sm:flex-row sm:divide-x sm:divide-y-0 sm:px-2 sm:py-6">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-3 text-center sm:py-0"
          >
            <span className="text-3xl font-semibold text-hero-blue lg:text-4xl">
              {stat.value}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-navy-soft sm:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-[72px] pb-20 lg:scroll-mt-[88px] lg:pb-24"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col bg-cream lg:min-h-full">
          <HeroLeftContent />
        </div>

        <div className="relative bg-linear-to-br from-[#69aed9] via-[#7ab9e4] to-[#7ebbe4]">
          <HeroRightVisual />
        </div>
      </div>

      <HeroStatsBar />
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

        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="#admissions"
            className="cta-gradient inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-medium uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:px-8"
          >
            <Image
              src="/images/landing/user-icon.svg"
              alt=""
              width={31}
              height={20}
              aria-hidden
            />
            Join Us Today
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-2.5 text-left text-navy-soft transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/landing/play-icon.svg"
              alt=""
              width={52}
              height={52}
              aria-hidden
            />
            <span className="text-base">Watch our welcome video</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <div className="relative h-7 w-28">
            <Image
              src="/images/landing/ielts-logo.png"
              alt="British Council IELTS"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="relative h-7 w-28">
            <Image
              src="/images/landing/toefl-logo.png"
              alt="ETS TOEFL"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroRightVisual() {
  return (
    <div className="relative">
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
        className="relative z-10 block w-full h-auto object-contain object-top"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
