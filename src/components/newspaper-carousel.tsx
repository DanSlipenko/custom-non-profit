"use client";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useState, useCallback } from "react";
import { NewspaperCard } from "@/components/newspaper-card";
import type { MediaItem } from "@/lib/media-data";

interface NewspaperCarouselProps {
  issues: MediaItem[];
  className?: string;
}

export function NewspaperCarousel({ issues, className }: NewspaperCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onApiChange = useCallback((api: CarouselApi) => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);
  }, []);

  // Show the 6 most recent issues
  const recent = [...issues].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="overflow-visible [&_.embla\_\_viewport]:overflow-visible">
        <Carousel
          setApi={(emblaApi) => {
            setApi(emblaApi);
            onApiChange(emblaApi);
          }}
          opts={{ align: "start", slidesToScroll: 1 }}
          className="w-full">
          <CarouselContent className="p-6">
            {recent.map((issue) => (
              <CarouselItem key={issue.id} className="basis-[380px] pl-4">
                <NewspaperCard issue={issue} className="h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Navigation arrows — same style as VideoCarousel / EventCarousel */}
      <div className="flex gap-3">
        <Button
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          variant="outline"
          size="md"
          className={cn(
            "flex h-12 flex-1 items-center justify-center group rounded-full border border-zinc-200 transition-colors",
            canScrollPrev ?
              "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
            : "text-zinc-300 dark:text-zinc-700 cursor-default",
          )}
          aria-label="Назад">
          <ChevronLeft strokeWidth={1.2} className="translate-x-1 group-hover:translate-x-0 transition-transform duration-200" />
          Назад
        </Button>
        <Button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          variant="outline"
          size="md"
          className={cn(
            "flex h-12 flex-1 items-center justify-center group rounded-full border border-zinc-200 transition-colors",
            canScrollNext ?
              "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
            : "text-zinc-300 dark:text-zinc-700 cursor-default",
          )}
          aria-label="Вперёд">
          Вперед
          <ChevronRight strokeWidth={1.2} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  );
}
