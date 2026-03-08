import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { formatDate, type MediaItem } from "@/lib/media-data";
import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

interface FeaturedVideoProps {
  video: MediaItem;
}

export function FeaturedVideo({ video }: FeaturedVideoProps) {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <Container className="py-14 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Последнее видео</h2>
        <div className={cn("flex flex-col group", cardHoverCn)}>
          <Link
            href={video.href || "#"}
            className="group relative w-full aspect-video lg:aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900 block">
            {video.imageSrc && (
              <img
                src={video.imageSrc}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-950/80">
                <svg className="ml-1 h-10 w-10 text-zinc-950 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Info */}
          <div className="flex flex-col space-y-4 p-6">
            <Link href={video.href || "#"} className="group/text block">
              <h3 className="text-3xl group-hover:text-blue-600 sm:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white group-hover/text:text-blue-600 dark:group-hover/text:text-blue-400 transition-colors">
                {video.title}
              </h3>
              <p className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">{video.description}</p>
            </Link>
            <div className="flex items-center gap-4 text-sm mt-2 text-zinc-500">
              {video.author &&
                (video.authorHref ?
                  <Link
                    href={video.authorHref}
                    className="group/link flex items-center gap-1.5 font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors">
                    {video.author} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                : <span className="font-medium flex items-center gap-2">
                    {video.author} <ArrowRight className="w-4 h-4" />
                  </span>)}
              <span>{formatDate(video.date)}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
