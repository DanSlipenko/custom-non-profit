import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getDailyReading, torahPortions, torahVersion } from "@/lib/torah-data";
import { BookOpen, Scroll, ChevronLeft, ChevronRight, Calendar, BookMarked, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Read Torah — Daily Portion",
  description: "Read the daily Torah portion (Chumash) with beautifully typeset verses.",
};

export default function ReadTorahPage() {
  const { portion, chapter, readingIndex, totalReadings } = getDailyReading();

  // Format today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Read Torah" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10 flex h-full flex-col justify-center">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Torah</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Torah — Chumash</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Daily chapter from the weekly Torah portion. Read, reflect, and study.</p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/20 backdrop-blur-sm">
                <Scroll className="h-4 w-4" />
                {torahVersion}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/20 backdrop-blur-sm">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Torah Reader ───── */}
      <section className="py-14 sm:py-20 bg-white dark:bg-zinc-950 flex-1">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Reading header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">{portion.name}</h2>
                  <span className="text-2xl font-medium text-zinc-300 dark:text-zinc-600" dir="rtl">
                    {portion.hebrewName}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {portion.book} &middot; {portion.summary}
                </p>
              </div>

              {/* Day navigation */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-l-xl text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                    aria-label="Previous day">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex items-center gap-2 border-x border-zinc-200 px-4 dark:border-zinc-800">
                    <BookMarked className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Day {readingIndex + 1} of {totalReadings}
                    </span>
                  </div>
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-r-xl text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                    aria-label="Next day">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Reading pane */}
            <div className="rounded-3xl border border-zinc-200 bg-white shadow-secondary dark:border-zinc-800 dark:bg-zinc-950">
              {/* Chapter heading */}
              <div className="flex items-center justify-between border-b border-zinc-200 px-8 py-5 dark:border-zinc-800 sm:px-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 dark:bg-white">
                    <BookOpen className="h-5 w-5 text-white dark:text-zinc-900" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Chapter {chapter.chapter}</h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">{chapter.verses.length} verses</p>
                  </div>
                </div>
                <div className="hidden items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-2 text-xs font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 sm:flex">
                  <Scroll className="h-3 w-3" strokeWidth={1.5} />
                  {torahVersion}
                </div>
              </div>

              {/* Verses */}
              <div className="px-8 py-8 sm:px-10 sm:py-10">
                <div className="space-y-0">
                  {chapter.verses.map((v, i) => (
                    <p
                      key={v.verse}
                      className={`
                        text-[17px] leading-[2] text-zinc-700 dark:text-zinc-300
                        ${i === 0 ? "" : ""}
                      `}>
                      <span className="mr-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-zinc-100 text-[11px] font-bold tabular-nums text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 align-text-top">
                        {v.verse}
                      </span>
                      {v.text}{" "}
                    </p>
                  ))}
                </div>
              </div>

              {/* Bottom bar with navigation */}
              <div className="flex items-center justify-between border-t border-zinc-200 px-8 py-4 dark:border-zinc-800 sm:px-10">
                <button className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-200">
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {portion.book} · Chapter {chapter.chapter}
                </span>
                <button className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-200">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── All Portions ───── */}
      <section className="py-14 sm:py-20 bg-zinc-50 dark:bg-black">
        <Container>
          <div className="mb-10 space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">All Torah Portions</h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">Browse all available weekly Torah portions in our reading cycle.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {torahPortions.map((p, i) => {
              const totalVerses = p.chapters.reduce((sum, ch) => sum + ch.verses.length, 0);
              const isActive = p.name === portion.name;

              return (
                <div
                  key={p.name}
                  className={`
                    group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-8
                    ${
                      isActive ?
                        "border-blue-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-primary shadow-zinc-500/25 ring-1 ring-blue-200 dark:border-blue-700 dark:from-blue-950/30 dark:via-zinc-950 dark:to-blue-950/20 dark:ring-blue-800"
                      : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-secondary dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                    }
                  `}>
                  {/* Active badge */}
                  {isActive && (
                    <div className="absolute right-4 top-4">
                      <div className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-1 ring-1 ring-blue-500/20 dark:ring-blue-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">Today</span>
                      </div>
                    </div>
                  )}

                  {/* Portion info */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                      flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold
                      ${
                        isActive ?
                          "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-primary shadow-zinc-500/25"
                        : "bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400"
                      }
                    `}>
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-zinc-950 dark:text-white">{p.name}</h3>
                        <span className="text-base text-zinc-300 dark:text-zinc-600" dir="rtl">
                          {p.hebrewName}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">{p.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                          {p.book}
                        </span>
                        <span className="inline-flex items-center rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                          {p.chapters.length} {p.chapters.length === 1 ? "chapter" : "chapters"}
                        </span>
                        <span className="inline-flex items-center rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                          {totalVerses} verses
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───── About ───── */}
      <section className="py-14 sm:py-20 bg-white dark:bg-zinc-950">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:gap-8 sm:p-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-primary shadow-zinc-500/25 dark:shadow-sky-500/15">
                <Info className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">About This Reading</h2>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Each day, a new chapter from the weekly Torah portion is selected for study. The readings cycle through the five books of
                  Moses — Genesis, Exodus, Leviticus, Numbers, and Deuteronomy — following the traditional division into weekly portions
                  (Parshas).
                </p>
                <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
                  <Scroll className="h-3.5 w-3.5" />
                  Translation: {torahVersion}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
