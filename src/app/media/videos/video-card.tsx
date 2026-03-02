import Link from "next/link";
import { formatDate } from "@/lib/media-data";
import { ArrowRight } from "lucide-react";

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
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white hover:shadow-primary transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      {/* Thumbnail with play */}
      <Link href={video.href || "#"} className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 block">
        {video.imageSrc ?
          <img
            src={video.imageSrc}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        : <div className="flex h-full w-full items-center justify-center">
            <svg
              className="h-12 w-12 text-zinc-300 dark:text-zinc-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
        }
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm dark:bg-zinc-950/80">
            <svg className="ml-0.5 h-6 w-6 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <Link href={video.href || "#"} className="p-5 block">
          <h3 className="text-xl font-semibold leading-snug text-zinc-950 dark:text-white line-clamp-2">{video.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">{video.description}</p>
        </Link>
        {video.author && video.authorHref ?
          <Link
            href={video.authorHref}
            className="group/link flex items-center justify-between text-xs border-t border-zinc-200 dark:border-zinc-800 py-6 px-5 text-zinc-500 hover:bg-blue-50 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-white transition-colors">
            <span className="font-medium flex items-center gap-2">
              {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </span>
            <span>{formatDate(video.date)}</span>
          </Link>
        : <div className="flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 py-6 px-5">
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
