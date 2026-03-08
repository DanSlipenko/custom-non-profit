import Link from "next/link";
import { formatDate } from "@/lib/media-data";
import { ArrowRight, PlayCircleIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

export interface VideoCardItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  author?: string;
  authorHref?: string;
  date: string;
}

interface VideoCardProps {
  video: VideoCardItem;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className={cn("group flex flex-col overflow-hidden bg-white", cardHoverCn)}>
      {/* Thumbnail with play */}
      <Link href={video.href || "#"} className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 block">
        {video.imageSrc ?
          <img
            src={video.imageSrc}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        : <div className="flex h-full w-full items-center justify-center">
           <PlayCircleIcon className="h-12 w-12 text-zinc-300 dark:text-zinc-700" strokeWidth={1} />
          </div>
        }
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
            <svg className="ml-0.5 h-6 w-6 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <Link href={video.href || "#"} className="block p-6">
          <h3 className="text-xl font-semibold leading-snug group-hover:text-blue-500 text-zinc-950 dark:text-white transition-colors duration-200 line-clamp-2">
            {video.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">{video.description}</p>
        </Link>
        {video.author && video.authorHref ?
          <Link
            href={video.authorHref}
            className="group/link flex items-center justify-between text-sm border-t border-zinc-200 p-6 text-zinc-600 hover:bg-blue-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white transition-colors">
            <span className="font-medium flex items-center gap-2">
              {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </span>
            <span>{formatDate(video.date)}</span>
          </Link>
        : <div className="flex items-center justify-between text-sm text-zinc-600 border-t border-zinc-200 p-6">
            {video.author && (
              <span className="font-medium flex items-center gap-2">
                {video.author} <ArrowRight className="w-4 h-4" />
              </span>
            )}
            <span>{formatDate(video.date)}</span>
          </div>
        }
      </div>
    </div>
  );
}
