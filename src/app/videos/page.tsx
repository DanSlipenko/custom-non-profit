import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { videos, primaryVideoId, highlightedIds } from "./data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Видео",
  description: "Видеоматериалы, записи служений и обучающие ролики.",
};

const sorted = [...videos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Primary: pinned video or fallback to most recent
const featured = primaryVideoId ? sorted.find((v) => v.id === primaryVideoId) || sorted[0] : sorted[0];

// Highlighted: pinned starred videos (excluding the primary)
const highlighted = highlightedIds.map((id) => sorted.find((v) => v.id === id)).filter((v) => v && v.id !== featured?.id);

// Everything else
const usedIds = new Set([featured?.id, ...highlightedIds]);
const rest = sorted.filter((v) => !usedIds.has(v.id));

export default function VideosPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Видео" className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">Видео</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Видео</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Видеоматериалы, записи служений и обучающие ролики нашей общины.</p>
          </div>
        </Container>
      </section>

      {/* ───── Featured Video ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-14 sm:py-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последнее видео</h2>
            <div className="flex flex-col gap-6">
              <Link
                href={featured.href || "#"}
                className="group relative w-full aspect-video lg:aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 block">
                {featured.imageSrc && (
                  <img
                    src={featured.imageSrc}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-950/80">
                    <svg className="ml-1 h-10 w-10 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="flex flex-col space-y-4 lg:w-3/4">
                <Link href={featured.href || "#"} className="group/text block">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white group-hover/text:text-blue-600 dark:group-hover/text:text-blue-400 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">{featured.description}</p>
                </Link>
                <div className="flex items-center gap-4 text-sm mt-2 text-zinc-500">
                  {featured.author &&
                    (featured.authorHref ?
                      <Link
                        href={featured.authorHref}
                        className="group/link flex items-center gap-1.5 font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors">
                        {featured.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    : <span className="font-medium flex items-center gap-2">
                        {featured.author} <ArrowRight className="w-4 h-4" />
                      </span>)}
                  <span>{formatDate(featured.date)}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ───── Highlighted Videos ───── */}
      {highlighted.length > 0 && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="pb-14 sm:pb-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Рекомендуемое</h2>
            <div className="flex flex-col gap-12">
              {highlighted.map(
                (video) =>
                  video && (
                    <div key={video.id} className="group grid gap-6 sm:gap-8 lg:grid-cols-5 items-center">
                      <Link
                        href={video.href || "#"}
                        className="relative lg:col-span-3 aspect-video w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 block">
                        {video.imageSrc ?
                          <img
                            src={video.imageSrc}
                            alt={video.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        : <div className="flex h-full w-full items-center justify-center">
                            <svg
                              className="h-12 w-12 text-zinc-300 dark:text-zinc-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                              />
                            </svg>
                          </div>
                        }
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-950/80">
                            <svg className="ml-1 h-8 w-8 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="lg:col-span-2 flex flex-col justify-center space-y-4 py-2 sm:py-4">
                        <Link href={video.href || "#"} className="block group/text">
                          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white group-hover/text:text-blue-600 dark:group-hover/text:text-blue-400 transition-colors">
                            {video.title}
                          </h3>
                          <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                            {video.description}
                          </p>
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-zinc-500 pt-2">
                          {video.author && video.authorHref ?
                            <Link
                              href={video.authorHref}
                              className="group/link flex items-center gap-1.5 font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors">
                              {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          : <div className="flex items-center gap-1.5 font-medium">
                              {video.author} <ArrowRight className="w-4 h-4" />
                            </div>
                          }
                          <span>{formatDate(video.date)}</span>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ───── Video Grid ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все видео</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((video) => (
              <div
                key={video.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-secondary hover:shadow-primary transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
                {/* Thumbnail with play */}
                <Link href={video.href || "#"} className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 block">
                  {video.imageSrc ?
                    <img
                      src={video.imageSrc}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  : <div className="flex h-full w-full items-center justify-center">
                      <svg
                        className="h-12 w-12 text-zinc-300 dark:text-zinc-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                  }
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm dark:bg-zinc-950/80">
                      <svg className="ml-0.5 h-6 w-6 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <Link href={video.href || "#"} className="p-5 block">
                    <h3 className="text-xl font-semibold leading-snug text-zinc-950 dark:text-white line-clamp-2">{video.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">{video.description}</p>
                  </Link>
                  {video.author && video.authorHref ?
                    <Link
                      href={video.authorHref}
                      className="group/link flex items-center justify-between text-xs border-t border-zinc-200 dark:border-zinc-800 py-6 px-5 text-zinc-500 hover:bg-blue-50 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-white transition-colors">
                      <span className="font-medium flex items-center gap-2">
                        {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                      <span>{formatDate(video.date)}</span>
                    </Link>
                  : <div className="flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 py-6 px-5 ">
                      {video.author && (
                        <span className="font-medium flex items-center gap-2">
                          {video.author} <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                      <span>{formatDate(video.date)}</span>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ───── Banner CTA ───── */}
      <Banner
        title="Вместе мы сильнее"
        description="Присоединяйтесь к растущему сообществу единомышленников и делайте мир лучше вместе."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Вступить в Альянс", href: "/join-alliance" }}
      />

      {/* ───── Newsletter ───── */}
      <SubscribeToNewsletter imageSrc="/hero.jpg" />
    </div>
  );
}
