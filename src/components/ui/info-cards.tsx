import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRight, ChevronRight } from "lucide-react";

export interface InfoCard {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
  button?: { label: string; href: string; variant?: "secondary" | "ghost"; target?: string };
}

interface InfoCardsProps {
  cards: InfoCard[];
}

export function InfoCards({ cards }: InfoCardsProps) {
  return (
    <section className="bg-zinc-100 py-32 dark:bg-zinc-950">
      <Container>
        <div className="grid md:grid-cols-3 shadow-secondary rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col bg-white border-r border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex-1 px-6 py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  {card.icon}
                </div>
                <div className="text-2xl mt-6 font-semibold text-zinc-900">{card.title}</div>
                <div className="mt-2 text-base leading-6 text-zinc-500 dark:text-zinc-300">{card.text}</div>
              </div>
              {card.button && (
                <Link
                  href={card.button.href}
                  target={card.button.target}
                  className="group mt-auto flex w-full items-center justify-start border-t border-zinc-200 px-6 py-8 text-sm uppercase font-medium text-zinc-600 hover:text-zinc-900 transition-colors hover:bg-blue-100 gap-2">
                  {card.button.label}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-200" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
