import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Радио",
  description: "Слушайте наше радио онлайн — музыка, проповеди и вдохновение.",
};

export default function RadioPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/church1.jpg" alt="Радио" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <Link href="/media" className="hover:text-white transition-colors">
                Медия
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Радио</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Радио</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Слушайте наше радио онлайн — музыка, проповеди и вдохновение 24/7.</p>
          </div>
        </Container>
      </section>

      {/* ───── Radio Player ───── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-16 sm:py-24">
          <div>
            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-secondary dark:border-zinc-800 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-teal-950/20">
              {/* Decorative background circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-800/20" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-800/20" />

              <div className="relative flex flex-col items-center px-8 py-12 sm:px-12 sm:py-16">
                {/* Live badge */}
                <div className="mb-8 flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 ring-1 ring-emerald-500/20 dark:ring-emerald-500/30">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">В ЭФИРЕ</span>
                </div>

                {/* Radio icon */}
                <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/15">
                  <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.33 48.33 0 0 0 12 6.75Z"
                    />
                  </svg>
                </div>

                {/* Title & description */}
                <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  Радио «Голос Надежды»
                </h2>
                <p className="mb-10 max-w-md text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Музыка, проповеди, размышления и вдохновляющие истории — круглосуточно для вашей души и сердца.
                </p>

                {/* Equalizer bars animation */}
                <div className="mb-10 flex h-10 items-end gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                      style={{
                        height: `${12 + Math.sin(i * 1.2) * 16 + 16}px`,
                        animation: `equalizer ${0.8 + i * 0.15}s ease-in-out infinite alternate`,
                      }}
                    />
                  ))}
                </div>

                {/* Play button */}
                <Button variant="primary" size="lg">
                  <svg className="h-6 w-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Слушать онлайн
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Weekly Schedule ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-16 sm:py-20">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Расписание эфира</h2>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">Еженедельная программа нашего радио</p>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-secondary dark:border-zinc-800 dark:bg-zinc-950 sm:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="w-[100px] bg-zinc-50 px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:bg-zinc-900/50 dark:text-zinc-400">
                    Время
                  </th>
                  {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                    <th
                      key={day}
                      className="bg-zinc-50 px-2 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:bg-zinc-900/50 dark:text-zinc-400">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    time: "06:00",
                    title: "Утреннее слово",
                    days: [true, true, true, true, true, true, true],
                    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
                  },
                  {
                    time: "09:00",
                    title: "Музыкальная программа",
                    days: [true, true, true, true, true, false, false],
                    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
                  },
                  {
                    time: "10:00",
                    title: "Воскресная школа",
                    days: [false, false, false, false, false, false, true],
                    color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
                  },
                  {
                    time: "12:00",
                    title: "Полуденная проповедь",
                    days: [true, false, true, false, true, false, true],
                    color: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
                  },
                  {
                    time: "15:00",
                    title: "Детская передача",
                    days: [false, false, true, false, false, true, true],
                    color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
                  },
                  {
                    time: "18:00",
                    title: "Вечерний эфир",
                    days: [true, true, true, true, true, false, false],
                    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
                  },
                  {
                    time: "19:00",
                    title: "Молодёжная программа",
                    days: [false, false, false, false, true, true, false],
                    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
                  },
                  {
                    time: "21:00",
                    title: "Вечерние псалмы",
                    days: [true, true, true, true, true, true, true],
                    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.time}
                    className={`border-b border-zinc-100 last:border-b-0 dark:border-zinc-800/60 ${idx % 2 === 0 ? "" : "bg-zinc-50/50 dark:bg-zinc-900/20"}`}>
                    <td className="px-4 py-3 font-mono text-xs font-bold tabular-nums text-zinc-500 dark:text-zinc-400">{row.time}</td>
                    {row.days.map((active, i) => (
                      <td key={i} className="px-1.5 py-2.5 text-center">
                        {active ?
                          <span
                            className={`inline-block w-full rounded-lg px-1.5 py-4 text-[11px] font-semibold leading-tight ${row.color}`}>
                            {row.title}
                          </span>
                        : <span className="text-zinc-300 dark:text-zinc-700">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile list */}
          <div className="space-y-2 sm:hidden">
            {[
              { time: "06:00", title: "Утреннее слово", days: "Ежедневно", color: "bg-amber-500" },
              { time: "09:00", title: "Музыкальная программа", days: "Пн — Пт", color: "bg-emerald-500" },
              { time: "10:00", title: "Воскресная школа", days: "Вс", color: "bg-violet-500" },
              { time: "12:00", title: "Полуденная проповедь", days: "Пн, Ср, Пт, Вс", color: "bg-sky-500" },
              { time: "15:00", title: "Детская передача", days: "Ср, Сб, Вс", color: "bg-pink-500" },
              { time: "18:00", title: "Вечерний эфир", days: "Пн — Пт", color: "bg-orange-500" },
              { time: "19:00", title: "Молодёжная программа", days: "Пт, Сб", color: "bg-cyan-500" },
              { time: "21:00", title: "Вечерние псалмы", days: "Ежедневно", color: "bg-indigo-500" },
            ].map((item) => (
              <div
                key={item.time}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3.5 dark:border-zinc-800 dark:bg-zinc-950">
                <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
                <span className="shrink-0 font-mono text-sm font-bold tabular-nums text-zinc-500 dark:text-zinc-400">{item.time}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                </div>
                <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{item.days}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SubscribeToNewsletter imageSrc="/hero.jpg" />

      {/* Equalizer animation keyframes */}
      <style>{`
        @keyframes equalizer {
          0% { height: 8px; }
          100% { height: 32px; }
        }
      `}</style>
    </div>
  );
}
