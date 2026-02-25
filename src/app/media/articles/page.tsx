import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { Badge } from "@/components/ui/badge";
import { articles } from "./data";
import { ArticleCard, authorColor, getArticleHref, readingTime } from "@/components/article-card";

export const metadata: Metadata = {
  title: "Статьи",
  description: "Публикации и материалы для духовного роста.",
};

const sorted = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featured = sorted[0];
const rest = sorted.slice(1);

export default function ArticlesPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[420px] overflow-hidden py-16 sm:py-28">
        <Image src="/hero.jpg" alt="Статьи" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-2xl space-y-5">
            <nav className="text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <Link href="/media" className="hover:text-white transition-colors">
                Медия
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-white">Статьи</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                <BookOpen className="h-3.5 w-3.5" />
                {articles.length} публикаций
              </span>
              {featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10">
                  Последняя: <span className="text-white">{formatDate(featured.date)}</span>
                </span>
              )}
            </div>
            <div className="border-l-4 border-white/80 pl-5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">Статьи</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-300 max-w-lg">Публикации и материалы для духовного роста и размышления.</p>
          </div>
        </Container>
      </section>

      {/* ───── Featured Article ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последняя публикация</p>
            <Link
              href={`/media/${featured.href || getArticleHref(featured.id)}`}
              aria-label={`Открыть статью: ${featured.title}`}
              className="group relative block overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-blue-950/20 dark:via-zinc-950 dark:to-sky-950/10 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950">
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-200/40 dark:bg-blue-800/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-sky-200/40 dark:bg-sky-800/10 blur-3xl" />

              <div className="relative p-8 sm:p-12">
                {/* Top meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <Badge className="gap-1.5 flex items-center">
                    <BookOpen className="h-3 w-3" />
                    Статья
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                    <Clock className="h-3.5 w-3.5" />
                    {readingTime(featured.description)}
                  </span>
                  <span className="text-xs text-zinc-400">{formatDate(featured.date)}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug mb-4">
                  {featured.title}
                </h2>

                {/* Description */}
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">{featured.description}</p>

                {/* Footer row */}
                <div className="flex items-center justify-between">
                  {featured.author && (
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${authorColor(featured.author).bg} ${authorColor(featured.author).text}`}>
                        {featured.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{featured.author}</p>
                        <p className="text-xs text-zinc-500">Автор</p>
                      </div>
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all duration-200">
                    Читать статью
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* ───── Articles Grid ───── */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50">
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все статьи</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <ArticleCard key={article.id} article={article} />
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
