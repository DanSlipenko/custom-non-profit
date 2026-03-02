import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { getRecentByCategory, formatDate } from "@/lib/media-data";
import { ArticleCard } from "@/components/article-card";
import { PodcastEpisodeList } from "@/components/podcast-episode-list";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { getDailyReading, torahVersion } from "@/lib/torah-data";
import { ArrowRight, BookOpen, Scroll, BookMarked } from "lucide-react";
import { EventCarousel } from "@/components/ui/event-carousel";
import { VideoCarousel } from "@/components/ui/video-carousel";
import { events as allEvents } from "@/lib/events";
import { CountdownSection } from "@/components/countdown-section";
import { NewspaperCarousel } from "@/components/newspaper-carousel";
import { newspaper } from "@/app/media/newspaper/data";
import { LightRays } from "@/components/ui/light-rays";
import { NoteBanner } from "@/components/president-note";

/* ── Target Date for Countdown ── */
// 24 days relative to when this module loads
const targetDate = new Date(Date.now() + 24 * 24 * 60 * 60 * 1000);

export default function Home() {
  /* ── Recent media ── */
  const recentVideos = getRecentByCategory("videos", 4);
  const recentArticles = getRecentByCategory("articles", 3);
  const recentPodcasts = getRecentByCategory("podcasts", 3);

  /* ── Torah reading ── */
  const { portion, chapter, readingIndex, totalReadings } = getDailyReading();

  return (
    <div>
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <Image src="/hero.jpg" alt="Church worship service" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent" />

        <Container className="relative flex h-full flex-col justify-between pb-12 pt-32 sm:pb-16">
          <div />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <h1 className="max-w-2xl text-balance text-start text-4xl font-semibold leading-tight tracking-wide text-white sm:text-5xl md:text-6xl">
              Ассоциация Мессианских Еврейских Русскоязычных Общин
            </h1>
            <div className="relative mx-auto w-56 sm:w-64">
              <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl" />
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black/50 shadow-2xl ring-1 ring-white/15">
                {/* Replace the placeholder below with your <iframe> or <video> */}
                <div className="flex h-full items-center justify-center text-sm text-white/40">Video goes here</div>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {site.location.addressLine1}, {site.location.addressLine2}
            </p>
            <div className="flex gap-3">
              <ButtonLink href="/contact" size="lg" variant="primary">
                Присоединиться
              </ButtonLink>
              <ButtonLink href="/about" size="lg" variant="outline">
                Узнать больше
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="p-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-2 border-r py-12 border-zinc-200 dark:border-zinc-800">
              <div className="text-lg font-semibold text-zinc-950 dark:text-white">Собрания</div>
              <p className="text-zinc-700 dark:text-zinc-300">Теплые и гостеприимные богослужения, основанные на Писании.</p>
            </div>
            <div className="space-y-2 border-r py-12 border-zinc-200 dark:border-zinc-800">
              <div className="text-lg font-semibold text-zinc-950 dark:text-white">Рост</div>
              <p className="text-zinc-700 dark:text-zinc-300">Группы и классы, которые помогут вам следовать за Иисусом каждый день.</p>
            </div>
            <div className="space-y-2 py-12 ">
              <div className="text-lg font-semibold text-zinc-950 dark:text-white">Служение</div>
              <p className="text-zinc-700 dark:text-zinc-300">Возможности для миссии и благовестия, чтобы проявлять любовь к ближним.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Note from the President ───── */}
      <NoteBanner
        name="Joe Doe"
        title="Президент АМЕРО"
        imageSrc="/president.jpg"
        paragraphs={[
          "Дорогие братья и сёстры! От всего сердца приветствую вас на страницах нашей ассоциации. Мы живём в особое время — время, когда Господь призывает еврейский народ вернуться к своим корням и познать Мессию Иешуа.",
          "Наша миссия — объединять русскоязычные мессианские общины, поддерживать пасторов и служителей, распространять Евангелие среди еврейского народа и народов нашей земли. Каждый из вас — дорогая часть этого тела.",
          "Я верю, что лучшее ещё впереди. Будем вместе идти путём веры, любви и служения — ради Его Царства.",
        ]}
        buttonLabel="Узнать больше"
        buttonHref="/about#team"
      />

      <CountdownSection event={allEvents[0]} targetDate={targetDate} />

      {/* ───── Newspaper ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Газета</h2>
              <p className="max-w-xl text-zinc-600 dark:text-zinc-400">Листайте и скачивайте свежие выпуски нашей общинной газеты.</p>
            </div>
            <ButtonLink href="/media/newspaper" variant="primary" size="md">
              Все выпуски →
            </ButtonLink>
          </div>

          <NewspaperCarousel issues={newspaper} />
        </Container>
      </section>

      <section className="border-t border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">Пожертвования</h2>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Ваша щедрость помогает нам заботиться о людях, наставлять семьи и служить нашему городу с любовью Иисуса.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/give" size="lg">
                  Пожертвовать онлайн
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Нужна молитва?
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">Upcoming events</h2>
              <p className="text-zinc-700 dark:text-zinc-300">Join us and get connected this month.</p>
            </div>
            <ButtonLink href="/events" variant="primary" size="md">
              Все события →
            </ButtonLink>
          </div>

          <EventCarousel
            heading="" // Hiding the internal heading since we have one above
            events={allEvents.slice(0, 6).map((e) => ({
              label: e.label,
              date: e.date,
              title: e.title,
              imageSrc: e.imageSrc,
              href: `/events/${e.slug}`,
            }))}
          />
        </Container>
      </section>

      {/* ───── Recent Videos ───── */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-50 border-t border-zinc-200 dark:border-zinc-800">
        <LightRays className="opacity-20" />
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-950">Видео</h2>
              <p className="max-w-xl text-zinc-600 dark:text-zinc-400">Проповеди и записи наших богослужений.</p>
            </div>
            <ButtonLink href="/media/videos" variant="primary" size="md">
              Все видео →
            </ButtonLink>
          </div>

          <VideoCarousel
            className="mt-10"
            videos={recentVideos.map((v) => ({
              id: v.id,
              title: v.title,
              description: v.description,
              imageSrc: v.imageSrc,
              href: v.href ?? "#",
              author: v.author,
              authorHref: v.authorHref,
              date: formatDate(v.date),
            }))}
          />
        </Container>
      </section>

      {/* ───── Articles & Podcasts ───── */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Статьи и подкасты</h2>
              <p className="max-w-xl text-zinc-600 dark:text-zinc-400">Читайте и слушайте — оставайтесь на связи с общиной.</p>
            </div>
            <ButtonLink href="/media" variant="primary" size="md">
              Все медиа →
            </ButtonLink>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Articles */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Статьи</h3>
              <div className="grid gap-4">
                {recentArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Podcasts */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Подкасты</h3>
              <PodcastEpisodeList episodes={recentPodcasts} />
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Torah Reading ───── */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Чтение Торы</h2>
              <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
                Ежедневная глава из недельной порции Торы. Читайте, размышляйте, изучайте.
              </p>
            </div>
            <ButtonLink href="/read-torah" variant="secondary" size="md">
              Читать полностью →
            </ButtonLink>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-zinc-200 bg-white shadow-secondary dark:border-zinc-800 dark:bg-zinc-950">
              {/* Header */}
              <div className="flex flex-col gap-4 border-b border-zinc-200 px-8 py-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 dark:bg-white">
                    <BookOpen className="h-6 w-6 text-white dark:text-zinc-900" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">{portion.name}</h3>
                      <span className="text-lg font-medium text-zinc-300 dark:text-zinc-600" dir="rtl">
                        {portion.hebrewName}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {portion.book} &middot; {portion.summary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                    <BookMarked className="h-3.5 w-3.5" />
                    День {readingIndex + 1} из {totalReadings}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                    <Scroll className="h-3.5 w-3.5" />
                    {torahVersion}
                  </div>
                </div>
              </div>

              {/* Preview verses (first 5) */}
              <div className="px-8 py-8 sm:px-10 bg-neutral-50 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                  Глава {chapter.chapter}
                </p>
                <div className="space-y-0">
                  {chapter.verses.slice(0, 5).map((v) => (
                    <p key={v.verse} className="text-[17px] leading-[2] text-zinc-700 dark:text-zinc-300">
                      <span className="mr-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-zinc-100 text-[11px] font-bold tabular-nums text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 align-text-top">
                        {v.verse}
                      </span>
                      {v.text}{" "}
                    </p>
                  ))}
                  {chapter.verses.length > 5 && (
                    <p className="pt-4 text-sm text-zinc-400 dark:text-zinc-500">…ещё {chapter.verses.length - 5} стихов</p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-zinc-200 px-8 py-5 dark:border-zinc-800 sm:px-10">
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {portion.book} · Глава {chapter.chapter}
                </span>
                <Link
                  href="/read-torah"
                  className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900">
                  Читать далее
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Newsletter ───── */}
      <SubscribeToNewsletter imageSrc="/cc-banner.jpg" />
    </div>
  );
}
