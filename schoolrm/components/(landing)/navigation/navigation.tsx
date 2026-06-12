import Image from "next/image";
import Link from "next/link";
import { blueNavLinks, creamNavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

function NavigationLogo() {
  return (
    <Link
      href="/"
      className="relative h-15 w-30 shrink-0 drop-shadow-md lg:h-[60px] lg:w-[100px]"
    >
      <Image
        src="/images/landing/logo.png"
        alt="The British School"
        fill
        className="object-contain object-left"
        priority
      />
    </Link>
  );
}

function LoginRegisterButton() {
  return (
    <Link
      href="#login"
      className="cta-gradient cta-button flex shrink-0 items-center rounded-3xl px-4 py-1.5 text-sm font-medium text-cream"
    >
      <span>Login/Register</span>
    </Link>
  );
}

export function LandingNavigation() {
  return (
    <header className="sticky top-0 z-30">
      {/* Mobile: single bar */}
      <div
        className={`flex items-center justify-between bg-cream px-6 lg:hidden`}
      >
        <NavigationLogo />
        <MobileMenu />
      </div>

      {/* Desktop: split bar with equal height */}
      <div className={`hidden lg:grid lg:grid-cols-2`}>
        <div className="flex items-center justify-between gap-4 bg-cream px-8">
          <NavigationLogo />
          <nav className="flex items-center gap-8 text-sm font-medium text-navy-muted xl:gap-10">
            {creamNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex bg-linear-to-br from-[#6cb1db] via-[#78b9e1] to-[#7fbdE4] px-8 py-4">
          <nav className="mr-auto flex items-center gap-8 text-sm font-medium text-cream xl:gap-10">
            {blueNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LoginRegisterButton />
        </div>
      </div>
    </header>
  );
}
