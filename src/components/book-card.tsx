import Link from "next/link";
import { BookOpen } from "lucide-react";
import { type MediaItem } from "@/lib/media-data";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

export function RecommendedBookCard({ book }: { book: MediaItem }) {
  return (
    <Link href={book.href || "#"} className={cn("group flex flex-col bg-white", cardHoverCn)}>
      {/* Book spine / cover */}
      <div className="flex h-56 sm:h-82 w-full shrink-0 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 shadow-inner transition-transform duration-300 group-hover:scale-[1.03] ring-1 ring-blue-200/50 dark:ring-blue-800/20">
        <BookOpen className="h-20 w-20 text-blue-500/80 drop-shadow-sm" strokeWidth={1} />
      </div>

      {/* Book info */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-700 mb-4 ring-1 ring-blue-500/20">
            <BookOpen className="h-4 w-4" />
            Рекомендуем
          </span>
          <h3 className="text-xl sm:text-2xl font-bold leading-snug text-zinc-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-500 line-clamp-3">{book.description}</p>
        </div>
        <div className="p-6 flex items-center justify-between text-sm text-zinc-600 border-t border-zinc-200">
          {book.author && <span className="font-medium text-zinc-600">{book.author}</span>}
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
      className={cn("group flex min-w-[120px] flex-col bg-white", cardHoverCn)}>
      {/* Book spine / cover */}
      <div className="flex h-72 w-full shrink-0 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 shadow-inner transition-transform duration-300 group-hover:scale-[1.02] ring-1 ring-blue-200/50">
        <BookOpen className="h-16 w-16 text-blue-500/80 drop-shadow-sm" strokeWidth={1} />
      </div>

      {/* Book info */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="p-6">
          <h3 className="text-xl font-bold leading-snug text-zinc-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
          <p className="text-base leading-relaxed text-zinc-500 line-clamp-3 mt-2">{book.description}</p>
        </div>
        <div className="p-6 flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-200">
          {book.author && <span className="font-medium text-zinc-600">{book.author}</span>}
          <span>{new Date(book.date).getFullYear()}</span>
        </div>
      </div>
    </Link>
  );
}
