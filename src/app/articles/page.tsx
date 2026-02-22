import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { articles } from "./data";

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
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/hero.jpg" alt="Статьи" className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">Статьи</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Статьи</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Публикации и материалы для духовного роста и размышления.</p>
          </div>
        </Container>
      </section>

      {/* ───── Featured Article ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-14 sm:py-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последняя публикация</h2>
            <Link
              href={featured.href || "#"}
              className="group block rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Статья
                  </span>
                  <span className="text-sm text-zinc-500">{formatDate(featured.date)}</span>
                </div>
                <h3 className="text-3xl font-semibold tracking-tight text-zinc-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h3>
                <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{featured.description}</p>
                {featured.author && (
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-blue-400">
                      {featured.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{featured.author}</span>
                  </div>
                )}
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* ───── Articles Grid ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все статьи</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={article.href || "#"}
                className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
                <span className="inline-flex w-fit items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Статья
                </span>
                <h3 className="text-xl font-semibold text-zinc-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">{article.description}</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
                  {article.author && (
                    <>
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                        {article.author.charAt(0)}
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </>
                  )}
                  <span className="ml-auto">{formatDate(article.date)}</span>
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
