import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, Download, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate } from "@/lib/media-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newspaper } from "./data";
import { authorColor } from "@/components/article-card";
import { NewspaperCard } from "@/components/newspaper-card";

export const metadata: Metadata = {
  title: "Газета",
  description: "Официальные печатные издания и вестники общины.",
};

const sorted = [...newspaper].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featured = sorted[0];
const rest = sorted.slice(1);

export default function NewspaperPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[420px] overflow-hidden py-16 sm:py-28">
        <Image src="/hero.jpg" alt="Газета" fill priority sizes="100vw" className="object-cover" />
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
              <span className="text-white">Газета</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                <BookOpen className="h-3.5 w-3.5" />
                {newspaper.length} выпусков
              </span>
              {featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10">
                  Последний: <span className="text-white">{formatDate(featured.date)}</span>
                </span>
              )}
            </div>
            <div className="border-l-4 border-white/80 pl-5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">Газета</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-300 max-w-lg">
              Официальные печатные издания и вестники для чтения в удобном формате.
            </p>
          </div>
        </Container>
      </section>

      {/* ───── Featured Issue ───── */}
      {featured && (
        <section className="bg-white dark:bg-zinc-950">
          <Container className="py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последний выпуск</p>
            <div className="group relative block overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-blue-950/20 dark:via-zinc-950 dark:to-sky-950/10 shadow-none transition-all duration-300 hover:shadow-primary">
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-200/40 dark:bg-blue-800/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-sky-200/40 dark:bg-sky-800/10 blur-3xl" />

              <div className="relative">
                <div className="p-8">
                  {/* Top meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <Badge variant="outline" className="gap-1.5 flex items-center bg-white !shadow-none">
                      Последние новости
                    </Badge>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 leading-snug mb-4">
                    <Newspaper className="h-8 w-8 text-zinc-800 dark:text-zinc-400" strokeWidth={1.5} />
                    {featured.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">{featured.description}</p>
                </div>
                {/* Footer row */}
                <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800">
                  {featured.author && (
                    <div className="flex items-center gap-3 w-full px-8">
                      <div className="flex items-center justify-between w-full">
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

                        <span className="text-sm text-zinc-600">{formatDate(featured.date)}</span>
                      </div>
                    </div>
                  )}
                  <a
                    href={featured.href}
                    download
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-white border-l  border-zinc-200 dark:border-zinc-800 px-18 py-8 gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    Скачать PDF
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ───── Issues Grid ───── */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50">
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все выпуски</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((issue) => (
              <NewspaperCard key={issue.id} issue={issue} />
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
