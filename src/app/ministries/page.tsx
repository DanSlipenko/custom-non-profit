import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ministries",
  description: `Find a place to belong at ${site.name}.`,
};

export default function MinistriesPage() {
  const ministries = [
    {
      title: "Kids",
      when: "Sundays during both services",
      body: "Safe, fun, and Bible-centered classes for infants through elementary age.",
    },
    {
      title: "Students",
      when: "Wednesdays 6:30 PM",
      body: "A space for middle and high school students to grow in faith and friendships.",
    },
    {
      title: "Groups",
      when: "Weeknights",
      body: "Small groups that meet in homes for prayer, discussion, and community.",
    },
    {
      title: "Worship",
      when: "Rehearsals weekly",
      body: "Musicians and vocalists serving our church family through worship.",
    },
    {
      title: "Outreach",
      when: "Monthly opportunities",
      body: "Serve our city through partnerships, projects, and practical care.",
    },
    {
      title: "Care",
      when: "As needed",
      body: "Pastoral care, prayer, and support for those walking through difficult seasons.",
    },
  ];

  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Ministries</h1>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              There’s a place for you. Explore ways to grow, serve, and build community at{" "}
              {site.name}.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Get connected
              </ButtonLink>
              <ButtonLink href="/events" variant="secondary" size="lg">
                See events
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {m.title}
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {m.when}
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

