"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cardHoverCn } from "@/lib/variants";

export interface EventItem {
  /** Category or label shown above the title (e.g. "MESSAGE", "EVENTS") */
  label?: string;
  /** Date string (e.g. "February 12") */
  date?: string;
  /** Event title */
  title: string;
  /** Background image URL */
  imageSrc?: string;
  /** Link destination */
  href?: string;
}

export interface EventCarouselProps {
  /** Section heading */
  heading?: string;
  /** Array of events to display */
  events: EventItem[];
  /** Link for the "View all" card */
  viewAllHref?: string;
  /** Total count shown in the "View all" card subtitle */
  viewAllCount?: number;
  className?: string;
}

export function EventCarousel({ heading = "Новости", events, viewAllHref, viewAllCount, className }: EventCarouselProps) {
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
      {/* Header */}
      {heading && (
        <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{heading}</h2>
        </div>
      )}

      {/* Cards row */}
      <div className="overflow-visible [&_.embla\_\_viewport]:overflow-visible">
        <Carousel
          setApi={(emblaApi) => {
            setApi(emblaApi);
            onApiChange(emblaApi);
          }}
          opts={{ align: "start", slidesToScroll: 1 }}
          className="w-full">
          <CarouselContent className="py-8 px-2">
            {events.map((event, i) => {
              const Tag = event.href ? "a" : "div";
              return (
                <CarouselItem key={`${event.title}-${i}`} className="basis-[300px] pl-4">
                  <Tag
                    {...(event.href ? { href: event.href } : {})}
                    className={cn(
                      "group relative flex min-h-[420px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-zinc-800",
                      cardHoverCn,
                    )}>
                    {/* Background image */}
                    {event.imageSrc && (
                      <img
                        src={event.imageSrc}
                        alt={event.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

                    {/* Top: label + date */}
                    <div className="relative z-10 p-4">
                      {event.label && (
                        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">{event.label}</div>
                      )}
                      {event.date && (
                        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">{event.date}</div>
                      )}
                    </div>

                    {/* Bottom: title + learn more */}
                    <div className="relative z-10 p-4">
                      <div className="text-lg font-bold leading-snug text-white">{event.title}</div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-white">
                        Подробнее
                      </div>
                    </div>
                  </Tag>
                </CarouselItem>
              );
            })}

            {/* "View all" card */}
            {viewAllHref && (
              <CarouselItem className="basis-[300px] pl-4">
                <a
                  href={viewAllHref}
                  className="group flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-300 hover:border-primary/40 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors group-hover:bg-primary/10">
                    <ChevronRight className="h-7 w-7 text-zinc-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white">
                      Все события
                    </p>
                    {viewAllCount !== undefined && <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">{viewAllCount} событий</p>}
                  </div>
                </a>
              </CarouselItem>
            )}
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
