import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { EventCarousel } from "@/components/ui/event-carousel";
import { PodcastEpisodeList } from "@/components/podcast-episode-list";
import { ArticleCard } from "@/components/article-card";
import { communities, getCommunityBySlug } from "@/lib/communities";
import { getEventsByCommunity } from "@/lib/events";
import { getRecentByCategory, formatDate, type MediaItem } from "@/lib/media-data";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return {};

  return {
    title: community.name,
    description: community.description,
  };
}

export default async function CommunityPage({ params }: PageProps) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) notFound();

  const communityEvents = getEventsByCommunity(slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden">
        {community.imageSrc && (
          <img src={community.imageSrc} alt={community.name} className="absolute inset-0 h-full w-full object-cover" />
        )}
        {!community.imageSrc && <div className="absolute inset-0 bg-zinc-900" />}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10 py-14 sm:py-24">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/communities" className="hover:text-white transition-colors">
                Общины
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{community.name}</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">{community.name}</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">{community.description}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-300 bg-white/15 backdrop-blur-sm p-4 rounded-2xl">
              <span>
                <span className="font-medium text-white">Лидер:</span> {community.leader}
              </span>
              <span>
                <span className="font-medium text-white">Служение:</span> {community.serviceTime}
              </span>
              <span>
                <span className="font-medium text-white">Адрес:</span> {community.address}
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/communities" variant="secondary" size="lg">
                Ссылка на общину
              </ButtonLink>
              {community.mapsUrl && (
                <ButtonLink href={community.mapsUrl} variant="outline" size="lg">
                  Открыть на карте
                </ButtonLink>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-14">
          <EventCarousel
            heading="События"
            events={
              communityEvents.length > 0 ?
                communityEvents.map((e) => ({
                  label: e.label,
                  date: e.date,
                  title: e.title,
                  imageSrc: e.imageSrc,
                  href: `/events/${e.slug}`,
                }))
              : [
                  {
                    label: "События",
                    title: "Календарь общины",
                    href: "/events",
                    imageSrc: community.imageSrc,
                  },
                ]
            }
          />
        </Container>
      </section>

      {/* ── Media: Videos ── */}
      <MediaVideosSection />

      {/* ── Media: Podcasts ── */}
      <MediaPodcastsSection />

      {/* ── Media: Articles ── */}
      <MediaArticlesSection />

      <SubscribeToNewsletter imageSrc="/hero.jpg" />
    </div>
  );
}

/* ─── Media sub-sections ─── */

function MediaVideosSection() {
  const videos = getRecentByCategory("videos", 4);

  return (
    <section className="bg-zinc-50 dark:bg-black">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Видео</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Записи служений и видеоматериалы.</p>
          </div>
          <ButtonLink href="/media/videos" variant="secondary" size="md">
            Все видео →
          </ButtonLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((video: MediaItem) => (
            <div
              key={video.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-secondary hover:shadow-primary transition-all duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm dark:bg-zinc-950/80">
                    <svg className="ml-0.5 h-6 w-6 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </Link>
              <div className="flex flex-1 flex-col justify-between">
                <Link href={video.href || "#"} className="p-5 block">
                  <h3 className="text-xl font-semibold leading-snug text-zinc-950 dark:text-white line-clamp-2">{video.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">{video.description}</p>
                </Link>
                {video.author && video.authorHref ?
                  <Link
                    href={video.authorHref}
                    className="group/link flex items-center justify-between text-xs border-t border-zinc-200 dark:border-zinc-800 py-4 px-5 text-zinc-500 hover:bg-blue-50 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-white transition-colors">
                    <span className="font-medium flex items-center gap-2">
                      {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </span>
                    <span>{formatDate(video.date)}</span>
                  </Link>
                : <div className="flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 py-4 px-5">
                    {video.author && <span className="font-medium">{video.author}</span>}
                    <span>{formatDate(video.date)}</span>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MediaPodcastsSection() {
  const episodes = getRecentByCategory("podcasts", 4);

  return (
    <section className="bg-white dark:bg-zinc-950">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Подкасты</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Аудиобеседы, интервью и размышления о вере.</p>
          </div>
          <ButtonLink href="/media/podcasts" variant="secondary" size="md">
            Все подкасты →
          </ButtonLink>
        </div>
        <PodcastEpisodeList episodes={episodes} />
      </Container>
    </section>
  );
}

function MediaArticlesSection() {
  const articles = getRecentByCategory("articles", 3);

  return (
    <section className="bg-zinc-50 dark:bg-black">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Статьи</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Публикации и материалы для духовного роста.</p>
          </div>
          <ButtonLink href="/media/articles" variant="secondary" size="md">
            Все статьи →
          </ButtonLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: MediaItem) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
