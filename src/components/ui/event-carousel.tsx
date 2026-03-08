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

export function EventCarousel({ heading = "Новости", events, className }: EventCarouselProps) {
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
          <CarouselContent className="p-6">
            {events.map((event, i) => {
              const Tag = event.href ? "a" : "div";
              return (
                <CarouselItem key={`${event.title}-${i}`} className="basis-[350px] pl-4">
                  <Tag
                    {...(event.href ? { href: event.href } : {})}
                    className={cn(
                      "group relative flex min-h-[30rem] w-full flex-col justify-between bg-zinc-800",
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
                    <div className="relative z-10 p-6 flex flex-col gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 group-hover:text-white">
                      {event.label && (
                        <div className="">{event.label}</div>
                      )}
                      {event.date && (
                        <div className="">{event.date}</div>
                      )}
                    </div>

                    {/* Bottom: title + learn more */}
                    <div className="relative z-10 p-6">
                      <div className="text-lg font-bold leading-snug text-white">{event.title}</div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-white">
                        Подробнее
                      </div>
                    </div>
                  </Tag>
                </CarouselItem>
              );
            })}


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
            "flex h-12 flex-1 items-center justify-center group rounded-full border border-zinc-200 transition-colors",
            canScrollLeft ?
              "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
            : "text-zinc-300 dark:text-zinc-700 cursor-default",
          )}
          aria-label="Назад">
          <ChevronLeft strokeWidth={1.2} className="group-hover:translate-x-1 transition-transform duration-200" />
          Назад
        </Button>
        <Button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollRight}
          variant="outline"
          size="md"
          className={cn(
            "flex h-12 flex-1 items-center justify-center group rounded-full border border-zinc-200 transition-colors",
            canScrollRight ?
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
