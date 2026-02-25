"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  className?: string;
}

export function EventCarousel({ heading = "Новости", events, className }: EventCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-carousel-card]")?.offsetWidth ?? 300;
    const gap = 16;
    const distance = cardWidth + gap;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      {heading && (
        <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{heading}</h2>
        </div>
      )}

      {/* Cards row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {events.map((event, i) => {
          const Tag = event.href ? "a" : "div";
          return (
            <Tag
              key={`${event.title}-${i}`}
              data-carousel-card
              {...(event.href ? { href: event.href } : {})}
              className="group relative flex min-h-[420px] w-[300px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-zinc-800">
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
                {event.label && <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">{event.label}</div>}
                {event.date && <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">{event.date}</div>}
              </div>

              {/* Bottom: title + learn more */}
              <div className="relative z-10 p-4">
                <div className="text-lg font-bold leading-snug text-white">{event.title}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-white">
                  Подробнее
                </div>
              </div>
            </Tag>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-3">
        <Button
          onClick={() => scroll("left")}
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
          onClick={() => scroll("right")}
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
