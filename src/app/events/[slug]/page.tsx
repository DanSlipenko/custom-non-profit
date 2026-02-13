import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { events, getEventBySlug } from "@/lib/events";
import { getCommunityBySlug } from "@/lib/communities";
import { CalendarDays, Clock, MapPin, Users, Backpack, User, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const community = event.communitySlug ? getCommunityBySlug(event.communitySlug) : undefined;

  return (
    <div>
      {/* ───── Hero ───── */}
      <section className="relative min-h-[420px] overflow-hidden">
        <img src={event.imageSrc} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10 py-14 sm:py-24">
          <div className="max-w-2xl space-y-5">
            {/* Breadcrumb */}
            <nav className="text-sm text-zinc-300">
              <Link href="/events" className="transition-colors hover:text-white">
                События
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{event.title}</span>
            </nav>

            {/* Label */}
            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
              {event.label}
            </span>

            {/* Title */}
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{event.title}</h1>
            </div>

            <p className="text-lg leading-8 text-zinc-200">{event.summary}</p>

            {/* Quick meta badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-white/10 p-4 text-zinc-300 backdrop-blur-sm">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">{event.date}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">{event.time}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">{event.location}</span>
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Связаться
              </ButtonLink>
              <ButtonLink href={event.mapsUrl} variant="outline" size="lg">
                Открыть на карте
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Details ───── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-14">
          <div className="grid gap-6 lg:grid-cols-3 bg-neutral-100 border border-neutral-200 rounded-3xl overflow-hidden shadow-primary ">
            {/* Main description */}
            <div className="space-y-4 lg:col-span-2 p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Описание</h2>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">{event.description}</p>
            </div>

            {/* Sidebar cards */}
            <div className="border-l border-neutral-200 overflow-hidden flex flex-col">
              {/* Host card */}
              <div
                className={`bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden ${community ? "flex-1 border-b border-neutral-200" : "flex-1"}`}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-950 dark:text-white">
                  <User className="h-4 w-4" />
                  Организатор
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="font-medium text-zinc-950 dark:text-white">{event.hostName}</div>
                  <div className="text-zinc-500 dark:text-zinc-400">{event.hostRole}</div>
                </div>
              </div>

              {/* Community card */}
              {community && (
                <Link
                  href={`/communities/${community.slug}`}
                  className="group flex-1 block bg-white p-5 hover:bg-blue-100 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                  <div className="mb-1 text-sm font-semibold text-zinc-950 dark:text-white">Община</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{community.name}</span>
                    <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Audience + What to bring ───── */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
        <Container className="py-14">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-zinc-950 dark:text-white">
                <Users className="h-5 w-5" />
                Для кого
              </div>
              <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{event.audience}</p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-zinc-950 dark:text-white">
                <Backpack className="h-5 w-5" />
                Что взять с собой
              </div>
              <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{event.whatToBring}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Location ───── */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Место проведения</h2>
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-500" />
              <div>
                <div className="font-medium text-zinc-950 dark:text-white">{event.location}</div>
                <a
                  className="mt-2 inline-flex text-sm font-medium text-zinc-950 hover:underline dark:text-white"
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noreferrer">
                  Открыть в Google Maps →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── CTA Footer ───── */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16">
          <div className="mx-auto max-w-xl space-y-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Присоединяйтесь</h2>
            <p className="text-zinc-700 dark:text-zinc-300">Мы будем рады видеть вас! Если у вас есть вопросы — свяжитесь с нами.</p>
            <div className="flex justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Связаться
              </ButtonLink>
              <ButtonLink href="/events" variant="secondary" size="lg">
                Все события
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
