import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming events at ${site.name}.`,
};

type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

const events: Event[] = [
  {
    title: "Newcomers Lunch",
    date: "Sunday, Feb 23",
    time: "12:30 PM",
    location: "Church Lobby",
    description:
      "A casual lunch after service. Meet leaders, hear our story, and find your next step.",
  },
  {
    title: "Serve Day",
    date: "Saturday, Mar 2",
    time: "9:00 AM",
    location: "Meet in the Parking Lot",
    description:
      "We’ll serve our community through cleanup, encouragement, and practical help.",
  },
  {
    title: "Prayer Night",
    date: "Wednesday, Mar 6",
    time: "6:30 PM",
    location: "Sanctuary",
    description:
      "Worship, Scripture, and guided prayer for our church family and our city.",
  },
];

export default function EventsPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Events</h1>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              There’s something for everyone—join us and get connected at {site.name}.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Ask about an event
              </ButtonLink>
              <ButtonLink href="/ministries" variant="secondary" size="lg">
                Explore ministries
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14">
          <div className="grid gap-4 lg:grid-cols-2">
            {events.map((e) => (
              <div
                key={e.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {e.title}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {e.date}
                  </div>
                </div>
                <div className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">Time:</span>{" "}
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {e.time}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">Location:</span>{" "}
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {e.location}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {e.description}
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-zinc-950 hover:underline dark:text-white"
                  >
                    RSVP / Questions →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-white">
              Looking for directions?
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {site.location.addressLine1}, {site.location.addressLine2}
            </p>
            <a
              className="mt-3 inline-flex text-sm font-medium text-zinc-950 hover:underline dark:text-white"
              href={site.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps →
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

