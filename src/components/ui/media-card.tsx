import Link from "next/link";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/media-data";
import type { MediaItem } from "@/lib/media-data";
import { cardHoverCn } from "@/lib/variants";

const categoryColors: Record<string, string> = {
  videos: "bg-red-500/15 text-red-600 dark:text-red-400",
  podcasts: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  articles: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  books: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  radio: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
};

const categoryLabels: Record<string, string> = {
  videos: "Видео",
  podcasts: "Подкаст",
  articles: "Статья",
  books: "Книга",
  radio: "Радио",
};

function CardContent({ item }: { item: MediaItem }) {
  return (
    <>
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {item.imageSrc ?
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        : <div className="flex h-full w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-zinc-300 dark:text-zinc-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
        }

        {/* Category badge */}
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm",
            categoryColors[item.category] || "bg-zinc-500/15 text-zinc-600",
          )}>
          {categoryLabels[item.category] || item.category}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-zinc-950 dark:text-white line-clamp-2">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">{item.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
          {item.author && <span className="font-medium">{item.author}</span>}
          <span>{formatDate(item.date)}</span>
        </div>
      </div>
    </>
  );
}

const cardClasses = cn(
  "group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
  cardHoverCn,
);

export function MediaCard({ item, className }: { item: MediaItem; className?: string }) {
  if (item.href) {
    return (
      <Link href={item.href} className={cn(cardClasses, "cursor-pointer", className)}>
        <CardContent item={item} />
      </Link>
    );
  }

  return (
    <div className={cn(cardClasses, className)}>
      <CardContent item={item} />
    </div>
  );
}
