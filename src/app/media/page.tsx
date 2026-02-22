import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { ButtonLink } from "@/components/ui/button";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { categories, getRecentByCategory, formatDate, type MediaItem } from "@/lib/media-data";
import { videos as allVideos, primaryVideoId, highlightedIds } from "@/app/videos/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Медия",
  description: "Все медиаматериалы: видео, подкасты, статьи, книги и радио.",
};

export default function MediaPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Медия" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Медия</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Медия</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Видео, подкасты, статьи, книги и радиопередачи — всё в одном месте. Оставайтесь на связи с общиной.
            </p>
          </div>
        </Container>
      </section>

      {/* ───── Category Sections ───── */}
      {categories.map((cat, idx) => {
        const items = getRecentByCategory(cat.slug, 6);
        const isAlt = idx % 2 === 1;

        return (
          <section key={cat.slug} className={isAlt ? "bg-zinc-50 dark:bg-black" : "bg-white dark:bg-zinc-950"}>
            <Container className="py-14 sm:py-20">
              {/* Section header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">{cat.label}</h2>
                  <p className="max-w-xl text-zinc-600 dark:text-zinc-400">{cat.description}</p>
                </div>
                <ButtonLink href={`/${cat.slug}`} variant="secondary" size="md">
                  Все {cat.label.toLowerCase()} →
                </ButtonLink>
              </div>

              {cat.slug === "videos" ?
                <VideoLayoutPreview />
              : /* Cards grid */
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              }
            </Container>
          </section>
        );
      })}

      {/* ───── Newsletter ───── */}
      <SubscribeToNewsletter imageSrc="/cc-banner.jpg" />
    </div>
  );
}

function VideoLayoutPreview() {
  const sorted = [...allVideos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Primary: pinned video or fallback to most recent
  const featured = primaryVideoId ? sorted.find((v) => v.id === primaryVideoId) || sorted[0] : sorted[0];

  // Highlighted: pinned starred videos (excluding the primary)
  const highlighted = highlightedIds
    .map((id) => sorted.find((v) => v.id === id))
    .filter((v): v is MediaItem => Boolean(v && v.id !== featured?.id));

  // Everything else
  const usedIds = new Set([featured?.id, ...highlightedIds]);
  const rest = sorted.filter((v) => !usedIds.has(v.id));

  // Cap at 6 total
  const remainingAllowed = Math.max(0, 6 - (featured ? 1 : 0) - highlighted.length);
  const restSlice = rest.slice(0, remainingAllowed);

  // Combine them all in the requested order: Primary -> Recommended -> Rest
  const allDisplayVideos = [...(featured ? [featured] : []), ...highlighted, ...restSlice];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-10">
      {allDisplayVideos.map((video) => (
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
            : <div className="flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 py-6 px-5">
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
  );
}
