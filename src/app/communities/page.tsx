import type { Metadata } from "next";
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
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-24">
          <div className="max-w-2xl space-y-4">
            <div className="border-l-4 border-zinc-950 pl-4 dark:border-white">
              <h1 className="text-5xl font-semibold tracking-tight">Общины</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Найди место, где ты сможешь расти, служить и строить отношения в {site.name}.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Связаться
              </ButtonLink>
              <ButtonLink href="/events" variant="secondary" size="lg">
                События
              </ButtonLink>
            </div>
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
