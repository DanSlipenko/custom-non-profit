import Link from "next/link";
import { BookOpen } from "lucide-react";
import { type MediaItem } from "@/lib/media-data";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

export function RecommendedBookCard({ book }: { book: MediaItem }) {
  return (
    <Link
      href={book.href || "#"}
      className={cn(
        "group flex flex-col gap-6 border border-zinc-200 bg-white p-6 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950",
        cardHoverCn,
      )}>
      {/* Book spine / cover */}
      <div className="flex h-56 sm:h-72 w-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-inner dark:from-blue-900/30 dark:to-blue-950/10 transition-transform duration-300 group-hover:scale-[1.03] ring-1 ring-blue-200/50 dark:ring-blue-800/20">
        <svg className="h-20 w-20 text-blue-500/80 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
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
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-4 ring-1 ring-blue-500/20">
            <BookOpen className="h-4 w-4" />
            Рекомендуем
          </span>
          <h3 className="text-xl sm:text-2xl font-bold leading-snug text-zinc-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {book.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">{book.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-100 dark:border-zinc-800/80 pt-5">
          {book.author && <span className="font-medium text-blue-800 dark:text-blue-300">{book.author}</span>}
          <span>{new Date(book.date).getFullYear()}</span>
        </div>
      </div>
    </Link>
  );
}

export function BookCard({ book }: { book: MediaItem }) {
  return (
    <Link
      href={book.href || "#"}
      className={cn(
        "group flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950",
        cardHoverCn,
      )}>
      {/* Book spine / cover */}
      <div className="flex h-62 w-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-inner dark:from-blue-900/30 dark:to-blue-950/10 transition-transform duration-300 group-hover:scale-[1.02] ring-1 ring-blue-200/50 dark:ring-blue-800/20">
        <svg className="h-16 w-16 text-blue-500/80 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
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
          <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {book.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">{book.description}</p>
        </div>
        <div className="mt-5 flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-100 dark:border-zinc-800/80 pt-4 pb-1">
          {book.author && <span className="font-medium text-blue-800 dark:text-blue-300">{book.author}</span>}
          <span>{new Date(book.date).getFullYear()}</span>
        </div>
      </div>
    </Link>
  );
}
