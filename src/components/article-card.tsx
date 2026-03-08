import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { formatDate, type MediaItem } from "@/lib/media-data";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

export function getArticleHref(id: string) {
  return `/articles/${id}`;
}

/** Rough reading-time estimate (~180 words/min, based on description length). */
export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 180));
  return `${mins} мин`;
}

/** Deterministic accent colour per author initial */
export const ACCENT_COLORS = [
  { bg: "bg-violet-100 dark:bg-violet-900/30", text: "text-violet-600 dark:text-violet-400" },
  { bg: "bg-sky-100 dark:bg-sky-900/30", text: "text-sky-600 dark:text-sky-400" },
  { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400" },
  { bg: "bg-rose-100 dark:bg-rose-900/30", text: "text-rose-600 dark:text-rose-400" },
  { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400" },
];

export function authorColor(name?: string) {
  if (!name) return ACCENT_COLORS[0];
  return ACCENT_COLORS[name.charCodeAt(0) % ACCENT_COLORS.length];
}

interface ArticleCardProps {
  article: MediaItem;
  className?: string;
}

export function ArticleCard({ article, className = "" }: ArticleCardProps) {
  const color = authorColor(article.author);

  return (
    <Link
      href={`/media/${article.href || getArticleHref(article.id)}`}
      aria-label={`Открыть статью: ${article.title}`}
      className={cn(
        "group flex flex-col bg-white p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50",
        cardHoverCn,
        className,
      )}>
      {/* Tag + reading time */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
          <Clock className="h-3 w-3" />
          {readingTime(article.description)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3 flex-1">{article.description}</p>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          {article.author && <span className="text-xs mt-1 font-medium text-zinc-600 dark:text-zinc-400">{article.author}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400">{formatDate(article.date)}</span>
          <ArrowRight className="h-4 w-4 text-violet-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
}
