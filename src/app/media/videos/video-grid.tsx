import { Container } from "@/components/ui/container";
import type { MediaItem } from "@/lib/media-data";
import { VideoCard } from "./video-card";

interface VideoGridProps {
  videos: MediaItem[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) return null;

  return (
    <section className="bg-zinc-50 dark:bg-black">
      <Container className="py-14 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все видео</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Container>
    </section>
  );
}
