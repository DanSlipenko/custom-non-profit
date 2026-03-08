import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { formatDate, type MediaItem } from "@/lib/media-data";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

interface HighlightedVideosProps {
  videos: (MediaItem | undefined)[];
}

export function HighlightedVideos({ videos }: HighlightedVideosProps) {
  if (videos.length === 0) return null;

  return (
    <section className="bg-white dark:bg-zinc-950">
      <Container className="pb-14 sm:pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Рекомендуемое</h2>
        <div className="flex flex-col gap-12">
          {videos.map(
            (video) =>
              video && (
                <div key={video.id} className={cn("group grid gap-6 sm:gap-8 lg:grid-cols-5 items-center", cardHoverCn)}>
                  <Link
                    href={video.href || "#"}
                    className="relative lg:col-span-3 aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 block">
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
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-950/80">
                        <svg className="ml-1 h-8 w-8 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="lg:col-span-2 flex flex-col justify-center space-y-4 py-2 sm:py-4">
                    <Link href={video.href || "#"} className="block group/text">
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 group-hover/text:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                        {video.description}
                      </p>
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 pt-2">
                      {video.author && video.authorHref ?
                        <Link
                          href={video.authorHref}
                          className="group/link flex items-center gap-1.5 font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors">
                          {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      : <div className="flex items-center gap-1.5 font-medium">
                          {video.author} <ArrowRight className="w-4 h-4" />
                        </div>
                      }
                      <span>{formatDate(video.date)}</span>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </Container>
    </section>
  );
}
