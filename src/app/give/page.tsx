import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { InfoCards } from "@/components/ui/info-cards";
import type { InfoCard } from "@/components/ui/info-cards";
import { Banner } from "@/components/ui/banner";
import { site } from "@/lib/site";
import { CreditCard, HandHeart, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Give",
  description: `Give to support the mission of ${site.name}.`,
};

const giveCards: InfoCard[] = [
  {
    icon: <CreditCard className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />,
    title: "Online",
    text: "Give securely online in minutes—one-time or recurring.",
    button: { label: "Give online", href: site.givingUrl, target: "_blank" },
  },
  {
    icon: <HandHeart className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />,
    title: "In-person",
    text: "You can give during Sunday services using an envelope or card.",
  },
  {
    icon: <Mail className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />,
    title: "By mail",
    text: (
      <>
        Mail checks to:
        <br />
        {site.location.addressLine1}
        <br />
        {site.location.addressLine2}
      </>
    ),
  },
];

export default function GivePage() {
  return (
    <div className="flex flex-col pb-26">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24 bg-zinc-950">
        <img src="/hero.jpg" alt="Giving" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Give</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Give</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Thank you for your generosity. Your giving helps people meet Jesus, grow in faith, and experience practical care.
            </p>
          </div>
        </Container>
      </section>

      {/* ───── Give Options Cards ───── */}
      <div className="relative">
        <InfoCards cards={giveCards} />
      </div>

      {/* ───── Banner CTA ───── */}
      <Banner
        title="Questions about giving?"
        description="If you need help setting up online giving, changing a recurring gift, or getting your giving statement, we're here to help."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Contact us", href: "/contact" }}
      />
    </div>
  );
}
