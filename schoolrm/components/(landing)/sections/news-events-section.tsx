import Link from "next/link";
import { newsItems } from "../data/landing-content";
import { SectionShell } from "./section-shell";
import { SurfaceCard, Tag } from "./ui";

export function NewsEventsSection() {
  return (
    <SectionShell
      id="news-events"
      eyebrow="Stay informed"
      title="News & Events"
      description="The latest from our school community — achievements, activities, and upcoming events."
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {newsItems.map((item) => (
          <SurfaceCard key={item.title} className="flex flex-col">
            <div className="flex items-center justify-between gap-3">
              <Tag>{item.category}</Tag>
              <time className="text-xs text-navy-soft">{item.date}</time>
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-muted">
              {item.excerpt}
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex items-center text-sm font-medium text-hero-blue transition-opacity hover:opacity-80"
            >
              Read more →
            </Link>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
