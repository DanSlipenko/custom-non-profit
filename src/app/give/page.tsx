import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description: `Give to support the mission of ${site.name}.`,
};

export default function GivePage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Give</h1>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Thank you for your generosity. Your giving helps people meet Jesus, grow in
              faith, and experience practical care.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.givingUrl} size="lg" target="_blank">
                Give online
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Questions about giving
              </ButtonLink>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Update `site.givingUrl` to your giving provider (Tithe.ly, Pushpay, Planning
              Center Giving, etc.).
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Online
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                Give securely online in minutes—one-time or recurring.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                In-person
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                You can give during Sunday services using an envelope or card.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                By mail
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                Mail checks to: {site.location.addressLine1}, {site.location.addressLine2}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

