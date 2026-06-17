"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blueNavLinks, creamNavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

const SCROLL_THRESHOLD = 16;

function NavigationLogo() {
  return (
    <Link
      href="/"
      className="relative h-15 w-30 shrink-0 drop-shadow-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] lg:h-[60px] lg:w-[100px]"
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

function NavLink({
  href,
  label,
  className,
  delay,
}: {
  href: string;
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <Link
      href={href}
      className={`nav-link ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {label}
    </Link>
  );
}

export function LandingNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileBarClass = scrolled
    ? "nav-panel--scrolled border-b border-navy/8 bg-cream/85 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75"
    : "bg-transparent";

  const creamSideClass = scrolled
    ? "nav-panel--scrolled border-b border-navy/8 bg-cream/85 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75"
    : "bg-transparent";

  const blueSideClass = scrolled
    ? "nav-panel--scrolled border-b border-white/10 bg-[#78b9e1]/85 backdrop-blur-md supports-[backdrop-filter]:bg-[#78b9e1]/75"
    : "bg-transparent";

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-30 w-full">
      <div
        className={`nav-panel flex items-center justify-between px-6 py-3 lg:hidden ${mobileBarClass}`}
      >
        <NavigationLogo />
        <MobileMenu />
      </div>

      <div className="hidden lg:grid lg:grid-cols-2">
        <div
          className={`nav-panel flex items-center justify-between gap-4 px-8 py-3 ${creamSideClass}`}
        >
          <NavigationLogo />
          <nav className="flex items-center gap-8 text-sm font-medium xl:gap-10">
            {creamNavLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className="text-navy-muted hover:opacity-70"
                delay={index * 40}
              />
            ))}
          </nav>
        </div>

        <div className={`nav-panel flex px-8 py-4 ${blueSideClass}`}>
          <nav className="mr-auto flex items-center gap-8 text-sm font-medium xl:gap-10">
            {blueNavLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className="text-cream hover:opacity-100"
                delay={index * 40 + 60}
              />
            ))}
          </nav>
          <LoginRegisterButton />
        </div>
      </div>
    </header>
  );
}
