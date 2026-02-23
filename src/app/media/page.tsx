import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { Button, ButtonLink } from "@/components/ui/button";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { categories, getRecentByCategory, formatDate, type MediaItem } from "@/lib/media-data";
import { videos as allVideos, primaryVideoId, highlightedIds } from "@/app/videos/data";
import { books as allBooks, featuredBookId, recommendedIds as recommendedBookIds } from "@/app/books/data";
import { PodcastEpisodeList } from "@/components/podcast-episode-list";
import { ArticleCard } from "@/components/article-card";
import { BookCard } from "@/components/book-card";
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
              : cat.slug === "podcasts" ?
                <div className="mt-10">
                  <PodcastEpisodeList episodes={items} />
                </div>
              : cat.slug === "articles" ?
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <ArticleCard key={item.id} article={item} />
                  ))}
                </div>
              : cat.slug === "books" ?
                <BooksLayoutPreview />
              : cat.slug === "radio" ?
                <RadioPreview />
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

function BooksLayoutPreview() {
  const sorted = [...allBooks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Primary book
  const featured = featuredBookId ? sorted.find((b) => b.id === featuredBookId) || sorted[0] : sorted[0];

  // Recommended books
  const recommended = recommendedBookIds
    .map((id) => sorted.find((b) => b.id === id))
    .filter((b): b is MediaItem => Boolean(b && b.id !== featured?.id));

  // Remaining books
  const usedIds = new Set([featured?.id, ...recommendedBookIds]);
  const rest = sorted.filter((b) => !usedIds.has(b.id));

  // Construct display array with max 4 items total
  // 1. Featured (1)
  // 2. Recommended (as many as fit)
  // 3. Rest (as many as fit)
  const displayBooks: MediaItem[] = [];

  if (featured) {
    displayBooks.push(featured);
  }

  for (const recBook of recommended) {
    if (displayBooks.length < 4) {
      displayBooks.push(recBook);
    }
  }

  for (const remBook of rest) {
    if (displayBooks.length < 4) {
      displayBooks.push(remBook);
    }
  }

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {displayBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

function RadioPreview() {
  const schedule = [
    { time: "06:00", title: "Утреннее слово", days: "Ежедневно", color: "bg-amber-500" },
    { time: "09:00", title: "Музыкальная программа", days: "Пн — Пт", color: "bg-emerald-500" },
    { time: "12:00", title: "Полуденная проповедь", days: "Пн, Ср, Пт, Вс", color: "bg-sky-500" },
    { time: "18:00", title: "Вечерний эфир", days: "Пн — Пт", color: "bg-orange-500" },
  ];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {/* Mini player card */}
      <Link
        href="/radio"
        className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-secondary transition-all duration-300 hover:shadow-primary hover:border-zinc-300 dark:border-zinc-800 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-teal-950/20 dark:hover:border-zinc-700 sm:p-10">
        {/* Decorative blurs */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-800/20" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-800/20" />

        <div className="relative flex flex-col items-center">
          {/* Live badge */}
          <div className="mb-5 flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-500/20 dark:ring-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">В ЭФИРЕ</span>
          </div>

          {/* Radio icon */}
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/15">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.33 48.33 0 0 0 12 6.75Z"
              />
            </svg>
          </div>

          <h3 className="mb-1 text-xl font-bold text-zinc-950 dark:text-white">Радио «Голос Надежды»</h3>
          <p className="mb-5 text-center text-sm text-zinc-500 dark:text-zinc-400">Музыка, проповеди и вдохновение 24/7</p>

          <Button className="" variant="primary" size="lg">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Слушать онлайн
          </Button>
        </div>
      </Link>

      {/* Mini schedule */}
      <div className="flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Расписание</h3>
          <Link
            href="/radio"
            className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
            Полное расписание →
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          {schedule.map((item) => (
            <div
              key={item.time}
              className="flex flex-1 items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
              <span className="shrink-0 font-mono text-sm font-bold tabular-nums text-zinc-500 dark:text-zinc-400">{item.time}</span>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">{item.title}</h4>
              </div>
              <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{item.days}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
