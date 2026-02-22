import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { books } from "./data";

export const metadata: Metadata = {
  title: "Книги",
  description: "Рекомендованные книги и литература для изучения.",
};

const sorted = [...books].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BooksPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Книги" className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">Книги</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Книги</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Рекомендованные книги и литература для глубокого изучения веры.</p>
          </div>
        </Container>
      </section>

      {/* ───── Book Shelf ───── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-14 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
            Рекомендованная литература
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((book) => (
              <Link
                key={book.id}
                href={book.href || "#"}
                className="group flex gap-5 rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
                {/* Book spine / cover */}
                <div className="flex h-36 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 shadow-inner dark:from-amber-900/20 dark:to-amber-950/10">
                  <svg className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.331 0 4.474.89 6.071 2.356.022.02.044.038.067.056l-.138-.131ZM12 6.042A8.967 8.967 0 0 1 18 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.281V6.042Z"
                    />
                  </svg>
                </div>

                {/* Book info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      Книга
                    </span>
                    <h3 className="text-lg font-semibold leading-snug text-zinc-950 dark:text-white line-clamp-2">{book.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">{book.description}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                    {book.author && <span className="font-medium text-amber-700 dark:text-amber-400">{book.author}</span>}
                    <span>{formatDate(book.date)}</span>
                  </div>
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
