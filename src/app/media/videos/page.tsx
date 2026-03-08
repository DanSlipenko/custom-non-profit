import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { videos, primaryVideoId, highlightedIds } from "./data";
import { VideoGrid } from "./video-grid";
import { HighlightedVideos } from "./highlighted-videos";
import { FeaturedVideo } from "./featured-video";

export const metadata: Metadata = {
  title: "Видео",
  description: "Видеоматериалы, записи служений и обучающие ролики.",
};

const sorted = [...videos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Primary: pinned video or fallback to most recent
const featured = primaryVideoId ? sorted.find((v) => v.id === primaryVideoId) || sorted[0] : sorted[0];

// Highlighted: pinned starred videos (excluding the primary)
const highlighted = highlightedIds.map((id) => sorted.find((v) => v.id === id)).filter((v) => v && v.id !== featured?.id);

// Everything else
const usedIds = new Set([featured?.id, ...highlightedIds]);
const rest = sorted.filter((v) => !usedIds.has(v.id));

export default function VideosPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Видео" className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">Видео</span>
            </nav>
            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Видео</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Видеоматериалы, записи служений и обучающие ролики нашей общины.</p>
          </div>
        </Container>
      </section>

      {/* ───── Featured Video ───── */}
      {featured && <FeaturedVideo video={featured} />}

      {/* ───── Highlighted Videos ───── */}
      <HighlightedVideos videos={highlighted} />

      {/* ───── Video Grid ───── */}
      <VideoGrid videos={rest} />

      {/* ───── Banner CTA ───── */}
      <Banner
        title="Вместе мы сильнее"
        description="Присоединяйтесь к растущему сообществу единомышленников и делайте мир лучше вместе."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Вступить в Альянс", href: "/join-alliance" }}
      />

      {/* ───── Newsletter ───── */}
      <SubscribeToNewsletter imageSrc="/hero.jpg" />
    </div>
  );
}
