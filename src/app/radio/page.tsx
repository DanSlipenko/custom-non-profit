import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { radioItems } from "./data";

export const metadata: Metadata = {
  title: "Радио",
  description: "Радиопередачи и аудиозаписи эфиров.",
};

const sorted = [...radioItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featured = sorted[0];
const rest = sorted.slice(1);

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
            <p className="text-lg leading-8 text-zinc-200">Радиопередачи, музыкальные программы и аудиозаписи эфиров.</p>
          </div>
        </Container>
      </section>

      {/* ───── Now Playing / Featured ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-14 sm:py-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последняя передача</h2>
            <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm dark:border-zinc-800 dark:from-emerald-950/20 dark:to-zinc-950 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* Radio icon */}
                <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
                  <svg
                    className="h-14 w-14 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.33 48.33 0 0 0 12 6.75Z"
                    />
                  </svg>
                  {/* Pulse animation */}
                  <span className="absolute -right-1 -top-1 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Радио
                  </span>
                  <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">{featured.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{featured.description}</p>
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    {featured.author && <span className="font-medium">{featured.author}</span>}
                    <span>{formatDate(featured.date)}</span>
                  </div>
                </div>

                {/* Play */}
                <Link
                  href={featured.href || "#"}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-110">
                  <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ───── Program Schedule / List ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Программы и эфиры</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((item) => (
              <Link
                key={item.id}
                href={item.href || "#"}
                className="group flex items-center gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
                {/* Radio wave icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                  <svg
                    className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-zinc-950 dark:text-white truncate">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400 truncate">{item.description}</p>
                </div>

                {/* Date + play */}
                <div className="hidden shrink-0 text-right text-xs text-zinc-500 sm:block">
                  {item.author && <div className="font-medium">{item.author}</div>}
                  <div>{formatDate(item.date)}</div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-zinc-800">
                  <svg className="ml-0.5 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Banner
        title="Вместе мы сильнее"
        description="Присоединяйтесь к растущему сообществу единомышленников."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Вступить в Альянс", href: "/join-alliance" }}
      />
      <SubscribeToNewsletter imageSrc="/hero.jpg" />
    </div>
  );
}
