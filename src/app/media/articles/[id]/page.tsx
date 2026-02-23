import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { formatDate, type ArticleContentBlock } from "@/lib/media-data";
import { articles } from "../data";

function getArticleById(id: string) {
  return articles.find((a) => a.id === id);
}

function contentToPlainText(content?: ArticleContentBlock[]): string {
  if (!content) return "";
  return content
    .map((block) => {
      if (block.type === "list") return block.items.join(" ");
      if (block.type === "quote") return block.text;
      return block.text;
    })
    .join(" ");
}

function readingTimeMins(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return { title: "Статья не найдена" };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageSrc ? [article.imageSrc] : undefined,
    },
  };
}

/** Renders a single content block */
function ContentBlock({ block }: { block: ArticleContentBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="mt-10 mb-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{block.text}</h2>;
    case "paragraph":
      return <p className="mb-5 leading-8 text-zinc-700 dark:text-zinc-300">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-blue-500 pl-6">
          <div className="flex gap-3">
            <Quote className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
            <div>
              <p className="text-lg italic leading-8 text-zinc-700 dark:text-zinc-300">{block.text}</p>
              {block.attribution && <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">— {block.attribution}</p>}
            </div>
          </div>
        </blockquote>
      );
    case "list":
      return (
        <ul className="mb-5 space-y-2 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 leading-7">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) notFound();

  const plainText = contentToPlainText(article.content) || `${article.title} ${article.description}`;
  const mins = readingTimeMins(plainText);
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentIdx = sortedArticles.findIndex((a) => a.id === id);
  const prevArticle = sortedArticles[currentIdx + 1] ?? null;
  const nextArticle = sortedArticles[currentIdx - 1] ?? null;

  return (
    <div className="flex flex-col">
      {/* ───── Top Nav Bar ───── */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-4">
        <Container>
          <div className="flex items-center justify-between">
            <nav className="text-sm text-zinc-500 dark:text-zinc-400">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Главная
              </Link>
              <span className="mx-2 opacity-40">/</span>
              <Link href="/media/articles" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Статьи
              </Link>
              <span className="mx-2 opacity-40">/</span>
              <span className="text-zinc-900 dark:text-white line-clamp-1 max-w-xs inline-block align-bottom">{article.title}</span>
            </nav>
            <Link
              href="/media/articles"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              Все статьи
            </Link>
          </div>
        </Container>
      </section>

      {/* ───── Article Body ───── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-12">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-base font-medium text-black ring-1 ring-white/20">
                  <BookOpen className="h-4 w-4" />
                  Статья
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-zinc-800">
                  <Clock className="h-3.5 w-3.5" />
                  {mins} мин чтения
                </span>
                <span className="text-sm text-zinc-800">{formatDate(article.date)}</span>
              </div>
            </div>
            <div className="mb-4 border-b mt-4 border-zinc-200 dark:border-zinc-800 pb-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">{article.title}</h1>
              <p className="text-lg leading-8 mt-4 text-zinc-700 dark:text-zinc-300 max-w-2xl">{article.description}</p>
              {article.author && (
                <p className="text-sm font-medium text-zinc-700 mt-4 dark:text-zinc-300/90">
                  Автор: <span className="text-zinc-900 dark:text-white">{article.author}</span>
                </p>
              )}
            </div>
            {/* Content blocks */}
            {article.content && article.content.length > 0 ?
              article.content.map((block, i) => <ContentBlock key={i} block={block} />)
            : <p className="leading-8 text-zinc-700 mt-4 dark:text-zinc-300">{article.description}</p>}

            {/* Divider */}
            <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              {/* Author card */}
              {article.author && (
                <div className="flex items-center gap-4 mb-8 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-lg font-bold text-blue-600 dark:text-blue-400">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">{article.author}</p>
                    <p className="text-sm text-zinc-500">Автор статьи</p>
                  </div>
                </div>
              )}

              {/* Prev / Next navigation */}
              <div className="grid sm:grid-cols-2 border overflow-hidden border-zinc-200 dark:border-zinc-800 rounded-2xl">
                {prevArticle ?
                  <Link
                    href={prevArticle.href || `/articles/${prevArticle.id}`}
                    className="group flex flex-col gap-1 hover:bg-blue-50 dark:hover:bg-blue-900/40 p-4 transition-all duration-200">
                    <span className="flex items-center gap-1 text-sm text-zinc-400 ml-1">
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                      Предыдущая
                    </span>
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                      {prevArticle.title}
                    </span>
                  </Link>
                : <div />}
                {nextArticle ?
                  <Link
                    href={nextArticle.href || `/articles/${nextArticle.id}`}
                    className="group flex flex-col gap-1 border-l border-zinc-200 dark:border-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 p-4 transition-all duration-200 text-right sm:items-end">
                    <span className="flex items-center gap-1 text-sm text-zinc-400 mr-1">
                      Следующая
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                      {nextArticle.title}
                    </span>
                  </Link>
                : <div />}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <SubscribeToNewsletter imageSrc="/hero.jpg" />
    </div>
  );
}
