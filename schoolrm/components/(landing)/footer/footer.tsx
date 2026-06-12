import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { blueNavLinks, Contacts, creamNavLinks, QuickLinks } from "../navigation/nav-links";

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream/10 bg-cream/5 text-cream/70 transition-colors hover:border-hero-blue/40 hover:bg-hero-blue/10 hover:text-cream"
    >
      {children}
    </a>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContactGroup({
  title,
  contacts,
}: {
  title: string;
  contacts: { label: string; value: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {contacts.map((contact) => (
          <li key={contact.label} className="text-sm text-cream/75">
            {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      <div
        className="absolute bg-linear-to-r from-transparent via-hero-blue/60 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-hero-blue/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-accent-orange/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-full px-6 py-4 lg:px-10 lg:py-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-100">
          <div>
            <Link
              href="#home"
              className="relative inline-block h-12 w-36"
            >
              <Image
                src="/images/landing/logo.png"
                alt="The British School"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-2 max-w-sm text-sm text-justify leading-relaxed text-cream/65">
              Empowering students with world-class education, modern facilities,
              and a community built for lifelong success.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon label="Facebook" href="https://facebook.com">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="https://instagram.com">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube" href="https://youtube.com">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="https://linkedin.com">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="grid sm:grid-cols-4">
            <FooterLinkGroup title="Explore" links={creamNavLinks} />
            <FooterLinkGroup title="Campus" links={blueNavLinks} />
            <FooterLinkGroup title="Quick Links" links={QuickLinks} />
            <FooterContactGroup title="Contact" contacts={Contacts} />
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-5 sm:flex-row">
          <p className="text-sm text-cream/45">
            © {new Date().getFullYear()} The British School. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-cream/45 transition-colors hover:text-cream/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
