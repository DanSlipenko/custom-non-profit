import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { Banner } from "@/components/ui/banner";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";
import { getItemsByCategory } from "@/lib/media-data";
import type { MediaCategory } from "@/lib/media-data";

interface MediaSubPageProps {
  category: MediaCategory;
  title: string;
  description: string;
  heroImage?: string;
}

export function MediaSubPage({ category, title, description, heroImage = "/cc-banner.jpg" }: MediaSubPageProps) {
  const items = getItemsByCategory(category);

  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src={heroImage} alt={title} className="absolute inset-0 h-full w-full object-cover" />
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
              <span className="text-white">{title}</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">{title}</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">{description}</p>
          </div>
        </Container>
      </section>

      {/* ───── All items ───── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

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
