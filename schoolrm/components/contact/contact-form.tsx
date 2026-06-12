"use client";

import { useState } from "react";
import { contactSubjects } from "./contact-data";

const inputClassName =
  "w-full rounded-xl border border-navy/10 bg-cream/40 px-4 py-3 text-sm text-navy transition-colors placeholder:text-navy-soft/50 focus:border-hero-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-hero-blue/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-hero-blue/20 bg-hero-blue/5 px-8 py-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-hero-blue/15 text-hero-blue">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-navy">
          Message received
        </h3>
        <p className="mt-2 text-navy-muted">
          Thank you for reaching out. A member of our admissions team will
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-navy">
            First name
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Your first name"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-navy">
            Last name
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Your last name"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
          Phone <span className="text-navy-soft">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+977 ..."
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-navy">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {contactSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className={`${inputClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="cta-gradient cta-button w-full rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wide text-navy sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
