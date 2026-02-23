import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { podcasts } from "./data";
import { Play } from "lucide-react";
import { PodcastEpisodeList } from "@/components/podcast-episode-list";

export const metadata: Metadata = {
  title: "Подкасты",
  description: "Аудиобеседы, интервью и размышления о вере.",
};

const sorted = [...podcasts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featured = sorted[0];
const rest = sorted.slice(1);

export default function PodcastsPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/church1.jpg" alt="Подкасты" className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">Подкасты</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Подкасты</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Аудиобеседы, интервью и размышления о вере и духовной жизни.</p>
          </div>
        </Container>
      </section>

      {/* ───── Latest Episode (Featured) ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-14 sm:py-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последний выпуск</h2>
            {/* Podcast */}
            <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-gradient-to-br from-purple-50 to-white shadow-secondary hover:shadow-primary dark:border-zinc-800 dark:from-purple-950/20 dark:to-zinc-950">
              <div className="flex flex-col sm:flex-row sm:items-stretch">
                {/* Content: artwork + info */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center flex-1 p-8 sm:p-6">
                  {/* Podcast artwork */}
                  <div className="flex h-34 w-34 shrink-0 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <svg className="h-15 w-15 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                      />
                    </svg>
                  </div>
                  {/* Info */}
                  <div className="flex-1 space-y-3">
                    <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                      Новый выпуск
                    </span>
                    <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">{featured.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{featured.description}</p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      {featured.author && <span className="font-medium">{featured.author}</span>}
                      <span>{formatDate(featured.date)}</span>
                    </div>
                  </div>
                </div>
                {/* Play button — no padding so border touches card edges */}
                <div className="flex items-center border-l border-zinc-200 duration-200">
                  <Link
                    href={featured.href || "#"}
                    className="flex h-full group/link w-full shrink-0 py-4 px-18 hover:bg-blue-100 items-center justify-center text-gray-800">
                    <Play className="h-8 w-8 transition-transform group-hover/link:scale-110" fill="currentColor" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ───── Episode List ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все выпуски</h2>
          <PodcastEpisodeList episodes={rest} />
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
