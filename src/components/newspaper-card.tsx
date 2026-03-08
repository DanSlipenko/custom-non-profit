import { Download, Newspaper } from "lucide-react";
import { formatDate, type MediaItem } from "@/lib/media-data";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

interface NewspaperCardProps {
  issue: MediaItem;
  className?: string;
}

export function NewspaperCard({ issue, className = "" }: NewspaperCardProps) {
  return (
    <div className={cn("group flex flex-col h-full bg-white overflow-hidden", cardHoverCn, className)}>
      {/* Date */}
      <div className="flex items-center gap-2 justify-between bg-gradient-to-r from-blue-200/90 via-blue-200/70 to-blue-100/80 dark:border-zinc-800 p-6 border-b border-zinc-200 dark:border-zinc-800">
        {issue.author && (
          <div className="text-xs font-medium font-semibold flex items-center gap-2 rounded-full text-zinc-600 dark:text-zinc-400">
            <Newspaper className="h-6 w-6 text-zinc-800 dark:text-zinc-400" strokeWidth={1.5} />
            {issue.author}
          </div>
        )}

        <span className="text-xs text-zinc-600">{formatDate(issue.date)}</span>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-2 py-4">
          {/* Title */}
          <h3 className="text-xl font-bold leading-snug group-hover:text-blue-500 text-zinc-900 dark:text-white transition-colors duration-200 mb-2">
            {issue.title}
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-5 flex-1">{issue.description}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <a
          href={issue.href}
          download
          className="inline-flex items-center p-6 hover:bg-blue-50 w-full justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 gap-1.5">
          Скачать PDF
          <Download className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
