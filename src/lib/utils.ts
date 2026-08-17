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

export function isUpcomingPerformance(dates: Date[]) {
  const now = new Date();
  const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return getPerformanceClosingDate(dates).valueOf() >= todayUTC;
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
