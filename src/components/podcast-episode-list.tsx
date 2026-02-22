"use client";

import Link from "next/link";
import { ChevronRight, Play, Mic } from "lucide-react";
import { formatDate } from "@/lib/media-data";

export interface PodcastEpisode {
  id: string | number;
  title: string;
  description?: string;
  author?: string;
  date: string;
  href?: string;
  alliance?: {
    name: string;
    href?: string;
  };
}

interface PodcastEpisodeListProps {
  episodes: PodcastEpisode[];
}

export function PodcastEpisodeList({ episodes }: PodcastEpisodeListProps) {
  return (
    <div className="space-y-4">
      {episodes.map((episode, idx) => (
        <div
          key={episode.id}
          className="flex items-stretch overflow-hidden rounded-2xl border border-zinc-200 shadow-secondary hover:shadow-primary transition-shadow duration-200 dark:border-zinc-800 dark:from-purple-950/20 dark:to-zinc-950">
          {/* Content */}
          <Link href={episode.href || "#"} className="group flex flex-1 items-center gap-4 p-4 sm:px-6 sm:py-6 min-w-0">
            {/* Episode number */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-zinc-600 dark:bg-blue-900/30 dark:text-zinc-400">
              <Mic className="h-6 w-6" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-zinc-950 dark:text-white truncate">{episode.title}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                {episode.description && <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{episode.description}</p>}
                {episode.alliance &&
                  (episode.alliance.href ?
                    <Link
                      href={episode.alliance.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-200 transition-all group/alliance-link duration-200 dark:bg-blue-900/40 dark:text-blue-300">
                      {episode.alliance.name}
                      <ChevronRight className="h-3 w-3 group-hover/alliance-link:translate-x-0.5 transition-transform" />
                    </Link>
                  : <span className="inline-flex shrink-0 items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      {episode.alliance.name}
                    </span>)}
              </div>
            </div>

            {/* Meta */}
            <div className="hidden shrink-0 text-right text-sm text-zinc-500 sm:flex sm:flex-col sm:items-end sm:gap-0.5">
              {episode.author && <div className="font-medium">{episode.author}</div>}
              <div>{formatDate(episode.date)}</div>
            </div>
          </Link>

          {/* Play button column */}
          <Link
            href={episode.href || "#"}
            className="group/play flex items-center border-l border-zinc-200 px-10 hover:bg-blue-100 text-gray-800 transition-colors duration-200 dark:border-zinc-700 dark:hover:bg-blue-950/30">
            <Play className="h-5 w-5 transition-transform group-hover/play:scale-110" fill="currentColor" />
          </Link>
        </div>
      ))}
    </div>
  );
}
