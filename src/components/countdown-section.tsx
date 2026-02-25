"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { LightRays } from "@/components/ui/light-rays";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import type { EventDetail } from "@/lib/events";
import { Badge } from "@/components/ui/badge";

interface CountdownSectionProps {
  event: EventDetail;
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

import Image from "next/image";

export function CountdownSection({ event, targetDate }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return null; // Avoid hydration mismatch on the countdown values
  }

  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-zinc-950 dark:border-zinc-800">
      {/* Background Image */}
      {event.imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image src={event.imageSrc} alt={event.title} fill className="object-cover opacity-60 mix-blend-overlay" priority />
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-transparent to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-550/50 via-zinc-950/80 to-zinc-950" />
      <LightRays className="opacity-50 z-0" />

      <Container className="relative z-10 py-16 sm:py-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Event Info */}
          <div className="flex flex-col items-center text-center space-y-8 lg:items-start lg:text-left">
            <Badge variant="filled" className="!bg-white" size="sm">
              Следующее событие
            </Badge>

            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{event.title}</h2>
              <p className="text-lg text-zinc-200">{event.summary}</p>
            </div>
          </div>

          {/* Bottom Row: Details and Timer */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Left Container: Event Details */}
            <div className="flex flex-col justify-center gap-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 text-lg text-zinc-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
                  <Calendar className="h-5 w-5 text-blue-400" />
                </div>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-4 text-lg text-zinc-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
                  <Clock className="h-5 w-5 text-blue-400" />
                </div>
                <span className="truncate max-w-[300px]">Arrival: {event.time}</span>
              </div>
              <div className="flex items-center gap-4 text-lg text-zinc-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="truncate max-w-[300px]">{event.location.split(",")[0]}</span>
              </div>
            </div>

            {/* Right Container: Countdown Timer */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:px-12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 w-full max-w-lg">
                <TimeUnit value={timeLeft.days} label="Дней" />
                <TimeUnit value={timeLeft.hours} label="Часов" />
                <TimeUnit value={timeLeft.minutes} label="Минут" />
                <TimeUnit value={timeLeft.seconds} label="Секунд" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <ButtonLink href={`/events/${event.slug}`} variant="primary" size="lg" className="group">
              Зарегистрироваться
            </ButtonLink>
            <ButtonLink href={`/events/${event.slug}`} variant="outline" size="lg" className="group">
              Подробнее
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  // Pad with zero if less than 10
  const paddedValue = value < 10 ? `0${value}` : value;

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-zinc-900/80 shadow-inner ring-1 ring-white/10">
        <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-white font-mono">{paddedValue}</span>
      </div>
      <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-zinc-400">{label}</span>
    </div>
  );
}
