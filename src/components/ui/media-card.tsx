import Link from "next/link";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/media-data";
import type { MediaItem } from "@/lib/media-data";
import { cardHoverCn } from "@/lib/variants";
import { FileText } from "lucide-react";

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
            <FileText className="h-12 w-12 text-zinc-300 dark:text-zinc-700" strokeWidth={1} />
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
      <div className="flex flex-1 flex-col justify-between">
        <div className="p-6">
          <h3 className="text-xl font-semibold group-hover:text-blue-600 leading-snug text-zinc-900 line-clamp-2">{item.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-zinc-500 line-clamp-2">{item.description}</p>
        </div>

        <div className="p-6 flex items-center justify-between text-sm text-zinc-600 border-t border-zinc-200">
          {item.author && <span className="font-medium">{item.author}</span>}
          <span>{formatDate(item.date)}</span>
        </div>
      </div>
    </>
  );
}

const cardClasses = cn(
  "group flex flex-col bg-white",
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
