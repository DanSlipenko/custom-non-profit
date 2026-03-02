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
          <CarouselContent className="py-8 px-2">
            {recent.map((issue) => (
              <CarouselItem key={issue.id} className="basis-[380px] pl-4">
                <NewspaperCard issue={issue} className="h-full" />
              </CarouselItem>
            ))}

            {/* "View all" card */}
            <CarouselItem className="basis-[380px] pl-4">
              <a
                href="/media/newspaper"
                className="group flex h-full min-h-[260px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-300 hover:border-primary/40 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors group-hover:bg-primary/10">
                  <ChevronRight className="h-7 w-7 text-zinc-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white">
                    Все выпуски
                  </p>
                  <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">{issues.length} выпусков</p>
                </div>
              </a>
            </CarouselItem>
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
            "flex h-12 flex-1 items-center !bg-white justify-center rounded-full border border-zinc-200 transition-colors dark:border-zinc-800",
            canScrollPrev ?
              "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
            : "text-zinc-300 dark:text-zinc-700 cursor-default",
          )}
          aria-label="Назад">
          <ChevronLeft strokeWidth={1.2} />
          Назад
        </Button>
        <Button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          variant="outline"
          size="md"
          className={cn(
            "flex h-12 flex-1 items-center !bg-white justify-center rounded-full border border-zinc-200 transition-colors dark:border-zinc-800",
            canScrollNext ?
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
