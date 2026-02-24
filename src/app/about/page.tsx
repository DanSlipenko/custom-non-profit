import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Banner } from "@/components/ui/banner";
import { Users, Globe, Star } from "lucide-react";
import { HistorySection } from "@/components/about/history-section";
import { MissionSection } from "@/components/about/mission-section";
import { TeamSection } from "@/components/about/team-section";

export const metadata: Metadata = {
  title: "О нас",
  description: "Узнайте об истории, миссии и руководстве Альянса Мессианских Еврейских Русскоязычных Общин.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Альянс общин" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="transition-colors hover:text-white">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">О нас</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">О нас</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Альянс Мессианских Еврейских Русскоязычных Общин объединяет верующих по всему миру — людей, разделяющих веру в Иешуа Мессию и
              любовь к Его народу.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-white/15 p-4 text-zinc-300 backdrop-blur-sm">
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Более 30 общин</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Международный Альянс</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Основан в 1998 году</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Sections ───── */}
      <HistorySection />
      <MissionSection />
      <TeamSection />

      {/* ───── Join Alliance CTA ───── */}
      <Banner
        title="Вступить в Альянс"
        description="Станьте частью нашего сообщества. Вместе мы сильнее — заполните заявку и присоединяйтесь."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Вступить в Альянс", href: "/join-alliance" }}
      />
    </div>
  );
}
