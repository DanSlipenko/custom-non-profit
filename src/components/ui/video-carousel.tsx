"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { VideoCard } from "@/app/media/videos/video-card";

export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  author?: string;
  authorHref?: string;
  date: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  className?: string;
}

export function VideoCarousel({ videos, className }: VideoCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const onApiChange = useCallback((api: CarouselApi) => {
    if (!api) return;
    const update = () => {
      setCanScrollLeft(api.canScrollPrev());
      setCanScrollRight(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
  }, []);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Scrollable row */}
      <div className="overflow-visible bg-white/10 backdrop-blur-sm rounded-4xl [&_.embla\_\_viewport]:overflow-visible p-6">
        <Carousel
          setApi={(emblaApi) => {
            setApi(emblaApi);
            onApiChange(emblaApi);
          }}
          opts={{ align: "start", slidesToScroll: 1 }}
          className="w-full">
          <CarouselContent className="py-6 px-2">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="px-4 basis-[500px]">
                <VideoCard video={video} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-3">
        <Button
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollLeft}
          variant="outline"
          size="md"
          className={cn(
            "flex h-12 flex-1 items-center !bg-white justify-center rounded-full border border-zinc-200 transition-colors dark:border-zinc-800",
            canScrollLeft ?
              "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
            : "text-zinc-300 dark:text-zinc-700 cursor-default",
          )}
          aria-label="Назад">
          <ChevronLeft strokeWidth={1.2} />
          Назад
        </Button>
        <Button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollRight}
          variant="outline"
          size="md"
          className={cn(
            "flex h-12 flex-1 items-center !bg-white justify-center rounded-full border border-zinc-200 transition-colors dark:border-zinc-800",
            canScrollRight ?
              "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
            : "text-zinc-300 dark:text-zinc-700 cursor-default",
          )}
          aria-label="Вперёд">
          Вперед
          <ChevronRight strokeWidth={1.2} />
        </Button>
      </div>
    </div>
  );
}
