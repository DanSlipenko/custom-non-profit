import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { EventCarousel } from "@/components/ui/event-carousel";
import { VideoCard } from "@/app/media/videos/video-card";
import { PodcastEpisodeList } from "@/components/podcast-episode-list";
import { ArticleCard } from "@/components/article-card";
import { communities, getCommunityBySlug } from "@/lib/communities";
import { getEventsByCommunity } from "@/lib/events";
import { getRecentByCategory, type MediaItem } from "@/lib/media-data";
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
        <div className="grid gap-4 sm:grid-cols-2">
          {videos.map((video: MediaItem) => (
            <VideoCard
              key={video.id}
              video={{
                id: video.id,
                title: video.title,
                description: video.description,
                imageSrc: video.imageSrc,
                href: video.href,
                author: video.author,
                authorHref: video.authorHref,
                date: video.date,
              }}
            />
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
