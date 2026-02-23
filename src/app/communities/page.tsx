import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { CommunityCard } from "@/components/ui/community-card";
import { communities } from "@/lib/communities";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Общины",
  description: `Найди место, где ты сможешь расти, служить и строить отношения в ${site.name}.`,
};

export default function CommunitiesPage() {
  return (
    <div>
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/church1.jpg" alt="Общины" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="transition-colors hover:text-white">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Общины</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Общины</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">Найди место, где ты сможешь расти, служить и строить отношения в {site.name}.</p>
          </div>
        </Container>
      </section>

      {/* Community cards grid */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">Наши общины</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {communities.map((c) => (
              <CommunityCard
                key={c.slug}
                name={c.name}
                imageSrc={c.imageSrc}
                address={c.address}
                leader={c.leader}
                serviceTime={c.serviceTime}
                href={`/communities/${c.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
