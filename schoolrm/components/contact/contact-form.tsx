"use client";

import { useState } from "react";

const inputClassName =
  "w-full rounded-md bg-white px-3 py-2.5 text-sm text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-blue-200 bg-blue-50 px-8 py-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700">
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
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Message received
        </h3>
        <p className="mt-2 text-slate-600">
          Thank you for reaching out. A member of our admissions team will
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 inline-block text-sm font-medium text-slate-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="John doe"
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 inline-block text-sm font-medium text-slate-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@readymadeui.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 inline-block text-sm font-medium text-slate-900">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+11800-259-854"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 inline-block text-sm font-medium text-slate-900">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="XYZ pvt. ltd."
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 inline-block text-sm font-medium text-slate-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Write message"
          className={`${inputClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-md border border-blue-600 bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Send message
      </button>
    </form>
  );
}
