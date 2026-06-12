"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blueNavLinks, creamNavLinks } from "./nav-links";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-navy"
    >
      {open ? (
        <path
          d="M6 6L18 18M6 18L18 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 17H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-navy/5"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <nav
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-navy/10 px-6 py-5">
          <span className="text-sm font-semibold uppercase tracking-wide text-navy">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-navy/5"
            aria-label="Close menu"
          >
            <MenuIcon open />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {creamNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-navy-muted transition-colors hover:bg-navy/5"
            >
              {link.label}
            </Link>
          ))}

          <div className="my-3 border-t border-navy/10" />

          {blueNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-navy-muted transition-colors hover:bg-navy/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-navy/10 p-6">
          <Link
            href="#login"
            onClick={() => setOpen(false)}
            className="cta-gradient cta-button flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 text-base font-medium text-cream"
          >
            <Image
              src="/images/landing/login-icon.svg"
              alt=""
              width={25}
              height={16}
              aria-hidden
            />
            Login/Register
          </Link>
        </div>
      </nav>
    </>
  );
}
