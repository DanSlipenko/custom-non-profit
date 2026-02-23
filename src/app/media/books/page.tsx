import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { books, featuredBookId, recommendedIds } from "./data";
import { type MediaItem } from "@/lib/media-data";
import { BookCard, RecommendedBookCard } from "@/components/book-card";

export const metadata: Metadata = {
  title: "Книги",
  description: "Рекомендованные книги и литература для изучения.",
};

const sorted = [...books].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const featured = featuredBookId ? sorted.find((b) => b.id === featuredBookId) || sorted[0] : sorted[0];
const recommended = recommendedIds
  .map((id) => sorted.find((b) => b.id === id))
  .filter((b): b is MediaItem => b !== undefined && b.id !== featured?.id)
  .slice(0, 3);

const usedIds = new Set([featured?.id, ...recommended.map((b) => b.id)]);
const rest = sorted.filter((b) => !usedIds.has(b.id));

export default function BooksPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[420px] overflow-hidden py-16 sm:py-28">
        <img src="/cc-banner.jpg" alt="Книги" className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">Книги</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">
                <BookOpen className="h-3.5 w-3.5" />
                {books.length} книг
              </span>
            </div>
            <div className="border-l-4 border-white/80 pl-5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">Книги</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-300 max-w-lg">
              Рекомендованные книги и литература для глубокого изучения веры и духовного роста.
            </p>
          </div>
        </Container>
      </section>

      {/* ───── Featured Book ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Выбор редакции</p>
            <Link
              href={featured.href || "#"}
              className="group relative block overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 dark:from-blue-950/20 dark:via-zinc-950 dark:to-blue-950/10 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-primary hover:shadow-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950">
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-200/40 dark:bg-blue-800/10 blur-3xl transition-opacity group-hover:opacity-75" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue-200/40 dark:bg-blue-800/10 blur-3xl transition-opacity group-hover:opacity-75" />

              <div className="relative flex flex-col md:flex-row gap-8 lg:gap-14 p-8 sm:p-12 items-center">
                {/* Visual Cover representation */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="flex h-72 w-48 sm:h-80 sm:w-56 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-blue-200 to-blue-100 shadow-xl shadow-blue-900/10 dark:from-blue-900/50 dark:to-blue-950/40 ring-1 ring-blue-300/50 dark:ring-blue-700/50 group-hover:scale-[1.03] transition-transform duration-300 group-hover:rotate-0">
                    <svg
                      className="h-24 w-24 text-blue-600/80 dark:text-blue-500/80 drop-shadow-md"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.331 0 4.474.89 6.071 2.356.022.02.044.038.067.056l-.138-.131ZM12 6.042A8.967 8.967 0 0 1 18 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.281V6.042Z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="md:w-2/3 flex flex-col justify-center">
                  {/* Top meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
                      <BookOpen className="h-4 w-4" />
                      Главная книга
                    </span>
                    <span className="text-xs text-zinc-500 font-semibold bg-zinc-100 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-full dark:bg-zinc-900">
                      {formatDate(featured.date)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight mb-5">
                    {featured.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
                    {featured.description}
                  </p>

                  {/* Footer row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    {featured.author && (
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-bold text-lg ring-1 ring-blue-200 dark:ring-blue-800">
                          {featured.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">{featured.author}</p>
                          <p className="text-sm font-medium text-zinc-500">Автор</p>
                        </div>
                      </div>
                    )}
                    <div className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all duration-200 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full border border-blue-100 dark:border-blue-900/50">
                      Подробнее о книге
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* ───── Recommended Books ───── */}
      {recommended.length > 0 && (
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200/50 dark:border-zinc-800/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/50 to-transparent dark:from-zinc-900/20 dark:to-transparent pointer-events-none" />
          <Container className="py-16 sm:py-20 relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
              Рекомендованная литература
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((book) => (
                <RecommendedBookCard key={book.id} book={book} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ───── All Books Grid ───── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все книги</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((book) => (
              <BookCard key={book.id} book={book} />
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
    </div>
  );
}
