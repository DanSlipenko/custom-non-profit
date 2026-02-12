import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { EventCarousel } from "@/components/ui/event-carousel";
import { communities, getCommunityBySlug } from "@/lib/communities";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return {};

  return {
    title: community.name,
    description: community.description,
  };
}

export default async function CommunityPage({ params }: PageProps) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden">
        {/* Background image */}
        {community.imageSrc && (
          <img src={community.imageSrc} alt={community.name} className="absolute inset-0 h-full w-full object-cover" />
        )}
        {/* Fallback bg when no image */}
        {!community.imageSrc && <div className="absolute inset-0 bg-zinc-900" />}
        {/* Left-to-right gradient: dark → transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10 py-14 sm:py-24">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/communities" className="hover:text-white transition-colors">
                Общины
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{community.name}</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">{community.name}</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">{community.description}</p>
            {/* Details inline */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-300 bg-white/10 p-4 rounded-2xl">
              <span>
                <span className="font-medium text-white">Лидер:</span> {community.leader}
              </span>
              <span>
                <span className="font-medium text-white">Служение:</span> {community.serviceTime}
              </span>
              <span>
                <span className="font-medium text-white">Адрес:</span> {community.address}
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/communities" variant="secondary" size="lg">
                Ссылка на общину
              </ButtonLink>
              {community.mapsUrl && (
                <ButtonLink href={community.mapsUrl} variant="outline" size="lg">
                  Открыть на карте
                </ButtonLink>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-14">
          <EventCarousel
            heading="События"
            events={[
              {
                label: "Проповедь",
                title: "Последняя проповедь",
                imageSrc: community.imageSrc,
              },
              {
                date: "2 февраля",
                title: "Запуск малых групп",
                imageSrc: community.imageSrc,
              },
              {
                date: "12 февраля",
                title: "Семейный вечер",
                imageSrc: community.imageSrc,
              },
              {
                date: "27-28 февраля",
                title: "Молодёжная конференция",
                imageSrc: community.imageSrc,
              },
              {
                label: "События",
                title: "Календарь общины",
                href: "/events",
                imageSrc: community.imageSrc,
              },
            ]}
          />
        </Container>
      </section>
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16">
          <div className="mx-auto max-w-xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Присоединяйтесь к нам</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Мы будем рады видеть вас на нашем следующем служении. Свяжитесь с нами, если у вас есть вопросы.
            </p>
            <div className="flex justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Связаться
              </ButtonLink>
              <ButtonLink href="/communities" variant="secondary" size="lg">
                Все общины
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
