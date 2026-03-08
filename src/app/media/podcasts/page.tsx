import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { podcasts } from "./data";
import { FeaturedEpisode } from "./featured-episode";
import { PodcastEpisodeList } from "@/components/podcast-episode-list";

export const metadata: Metadata = {
  title: "Подкасты",
  description: "Аудиобеседы, интервью и размышления о вере.",
};

const sorted = [...podcasts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featured = sorted[0];
const rest = sorted.slice(1);

export default function PodcastsPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/church1.jpg" alt="Подкасты" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <Link href="/media" className="hover:text-white transition-colors">
                Медия
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Подкасты</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Подкасты</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Аудиобеседы, интервью и размышления о вере и духовной жизни.</p>
          </div>
        </Container>
      </section>

      {/* ───── Latest Episode (Featured) ───── */}
      {featured && <FeaturedEpisode episode={featured} />}

      {/* ───── Episode List ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Все выпуски</h2>
          <PodcastEpisodeList episodes={rest} />
        </Container>
      </section>

      <Banner
        title="Вместе мы сильнее"
        description="Присоединяйтесь к растущему сообществу единомышленников."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Вступить в Альянс", href: "/join-alliance" }}
      />
      <SubscribeToNewsletter imageSrc="/hero.jpg" />
    </div>
  );
}
