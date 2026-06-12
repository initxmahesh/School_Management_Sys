import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { schoolContact } from "@/components/contact/contact-data";
import { SectionShell } from "./section-shell";

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-hero-blue/10 text-hero-blue">
      {children}
    </div>
  );
}

function ContactDetail({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <ContactIcon>{icon}</ContactIcon>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-navy">
          {title}
        </h3>
        <div className="mt-0.5 text-sm leading-relaxed text-navy-muted">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Get in touch"
      title="Contact"
      description="Have a question or planning a campus visit? Send us a message — our team responds within one business day."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_8px_40px_rgba(35,50,85,0.06)] sm:p-8">
          <h3 className="text-xl font-bold text-navy">Send a message</h3>
          <p className="mt-2 text-sm text-navy-muted">
            Share your enquiry and we&apos;ll be in touch shortly.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-[0_8px_40px_rgba(35,50,85,0.08)]">
            <iframe
              title="The British School campus location"
              src={schoolContact.mapEmbedUrl}
              className="h-[240px] w-full sm:h-[280px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_8px_40px_rgba(35,50,85,0.06)] sm:p-8">
            <h3 className="text-xl font-bold text-navy">Visit our campus</h3>
            <div className="mt-6 space-y-5">
              <ContactDetail
                title="Address"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                }
              >
                <p>{schoolContact.address}</p>
                <Link
                  href={schoolContact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-hero-blue transition-opacity hover:opacity-80"
                >
                  Open in Google Maps →
                </Link>
              </ContactDetail>

              <ContactDetail
                title="Phone"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
              >
                <a
                  href={`tel:${schoolContact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-navy"
                >
                  {schoolContact.phone}
                </a>
              </ContactDetail>

              <ContactDetail
                title="Email"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                }
              >
                <a
                  href={`mailto:${schoolContact.email}`}
                  className="transition-colors hover:text-navy"
                >
                  {schoolContact.email}
                </a>
              </ContactDetail>

              <ContactDetail
                title="Office hours"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                }
              >
                <p>{schoolContact.hours}</p>
              </ContactDetail>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
