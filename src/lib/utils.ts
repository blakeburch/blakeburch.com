import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

// Descriptions may contain inline markdown links: [text](https://example.com).
const MARKDOWN_LINK = /\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g;

// Plain text, for places that can't hold links (cards are already an <a>,
// plus meta tags and RSS).
export function stripMarkdownLinks(text: string) {
  return text.replace(MARKDOWN_LINK, "$1");
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// HTML with markdown links turned into anchors; everything else is escaped.
export function renderMarkdownLinks(text: string) {
  return escapeHtml(text).replace(MARKDOWN_LINK, (_, label, href) => {
    const external = href.startsWith("http");
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${href}"${attrs} class="underline underline-offset-[3px] decoration-black/30 dark:decoration-white/30 hover:decoration-black/50 dark:hover:decoration-white/50 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">${label}</a>`;
  });
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200 + 1);
  return {
    text: `${readingTimeMinutes} min read`,
    minutes: readingTimeMinutes
  };
}

export function sortPerformanceDates(dates: Date[]) {
  return [...dates].sort((a, b) => a.valueOf() - b.valueOf());
}

export function getPerformanceOpeningDate(dates: Date[]) {
  return sortPerformanceDates(dates)[0];
}

export function getPerformanceClosingDate(dates: Date[]) {
  const sorted = sortPerformanceDates(dates);
  return sorted[sorted.length - 1];
}

// Performances are in Austin, so "today" is the local calendar date there.
// Frontmatter dates parse as UTC midnight, so express today the same way.
const PERFORMANCE_TIME_ZONE = "America/Chicago";

function getTodayInPerformanceTimeZone() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PERFORMANCE_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const part = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value);
  return Date.UTC(part("year"), part("month") - 1, part("day"));
}

export function isUpcomingPerformance(dates: Date[]) {
  return (
    getPerformanceClosingDate(dates).valueOf() >=
    getTodayInPerformanceTimeZone()
  );
}

// The soonest date that hasn't passed yet (falls back to the closing date for
// past performances). Upcoming lists sort on this so a long run whose remaining
// shows are far off doesn't jump ahead of shows happening sooner.
export function getPerformanceNextDate(dates: Date[]) {
  const today = getTodayInPerformanceTimeZone();
  return (
    sortPerformanceDates(dates).find((date) => date.valueOf() >= today) ??
    getPerformanceClosingDate(dates)
  );
}

export function formatPerformanceDateSummary(dates: Date[]) {
  const sorted = sortPerformanceDates(dates);

  if (sorted.length === 1) {
    return sorted[0].toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    });
  }

  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const countLabel = `${sorted.length} performances`;
  const sameYear = first.getUTCFullYear() === last.getUTCFullYear();
  const sameMonth = sameYear && first.getUTCMonth() === last.getUTCMonth();

  if (sameMonth) {
    return `${first.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" })} · ${countLabel}`;
  }

  if (sameYear) {
    const start = first.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
    const end = last.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
    return `${start}–${end} · ${countLabel}`;
  }

  const start = first.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
  const end = last.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
  return `${start}–${end} · ${countLabel}`;
}

export function formatPerformanceDateRange(dates: Date[]) {
  const sorted = sortPerformanceDates(dates);
  const format = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    });

  if (sorted.length === 1) {
    return format(sorted[0]);
  }

  return `${format(sorted[0])} – ${format(sorted[sorted.length - 1])}`;
}
