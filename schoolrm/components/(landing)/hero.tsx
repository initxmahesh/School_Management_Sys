import Image from "next/image";
import Link from "next/link";

const headlineLines = ["BETTER", "FUTURE FOR", "YOUR KIDS"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-[72px] grid min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-88px)] lg:grid-cols-2 lg:scroll-mt-[88px]"
    >
      <div className="relative flex flex-col bg-cream">
        <HeroLeftContent />
      </div>

      <div className="relative flex min-h-[420px] flex-col bg-linear-to-br from-[#69aed9] via-[#7ab9e4] to-[#7ebbe4] lg:min-h-full">
        <HeroRightVisual />
      </div>
    </section>
  );
}

export function HeroLeftContent() {
  return (
    <div className="relative flex flex-1 flex-col justify-center px-6 pb-16 lg:px-12 xl:px-[50px]">
      <div className="relative z-10 flex max-w-xl flex-col gap-10 lg:max-w-2xl lg:gap-12">
        <div className="flex flex-col gap-5">
          <h1 className="flex flex-col text-4xl font-bold uppercase leading-none tracking-[0.12em] sm:text-5xl lg:text-[56px] xl:text-[70px] xl:tracking-[9.8px]">
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
    <div className="relative flex-1 overflow-hidden">
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

      <div className="absolute inset-0 z-50 flex items-end justify-center overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/landing/hero-student.jpg"
            alt="Smiling student with books and backpack"
            fill
            priority
            className="object-contain object-top opacity-100"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
