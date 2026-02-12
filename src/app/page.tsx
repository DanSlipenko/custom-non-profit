import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Home() {
  const upcomingEvents = [
    {
      title: "Newcomers Lunch",
      date: "Feb 23",
      time: "12:30 PM",
      description: "Meet the pastors, make friends, and learn how to get connected.",
    },
    {
      title: "Serve Day",
      date: "Mar 2",
      time: "9:00 AM",
      description: "A city-wide outreach project—bring gloves and a friend.",
    },
    {
      title: "Prayer Night",
      date: "Mar 6",
      time: "6:30 PM",
      description: "Worship, Scripture, and guided prayer for our church and city.",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.08),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(24,24,27,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(244,244,245,0.08),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(244,244,245,0.06),transparent_55%)]" />

        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                <span className="inline-block size-2 rounded-full bg-emerald-500" />
                Sundays {site.serviceTimes[0]?.time}
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.tagline}
              </h1>
              <p className="max-w-prose text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Join us this week for worship, meaningful community, and practical teaching
                from the Bible. You’re welcome here—no matter your story.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Plan a visit
                </ButtonLink>
                <ButtonLink href="/sermons" variant="secondary" size="lg">
                  Watch sermons
                </ButtonLink>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                  Kids ministry available
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                  Free parking
                </span>
                <a
                  className="rounded-full bg-zinc-100 px-3 py-1 hover:underline dark:bg-zinc-900"
                  href={site.location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                      Service times
                    </div>
                    <div className="mt-2 space-y-2">
                      {site.serviceTimes.map((s) => (
                        <div
                          key={s.label}
                          className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 text-sm dark:bg-zinc-900"
                        >
                          <span className="text-zinc-600 dark:text-zinc-300">
                            {s.label}
                          </span>
                          <span className="font-medium text-zinc-950 dark:text-white">
                            {s.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    <div className="font-semibold text-zinc-950 dark:text-white">
                      First time?
                    </div>
                    <p className="mt-1 leading-6">
                      Stop by the Welcome Table in the lobby—we’d love to meet you and
                      help you find your way.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <ButtonLink href="/about" variant="secondary" className="flex-1">
                      What we believe
                    </ButtonLink>
                    <ButtonLink href="/contact" className="flex-1">
                      Ask a question
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Gather
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Worship services that are warm, Scripture-centered, and welcoming.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Grow
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Groups and classes designed to help you follow Jesus day by day.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Serve
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Local outreach and mission opportunities to love our neighbors well.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Upcoming events
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Join us and get connected this month.
              </p>
            </div>
            <Link
              href="/events"
              className="text-sm font-medium text-zinc-950 hover:underline dark:text-white"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {upcomingEvents.map((e) => (
              <div
                key={e.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {e.title}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {e.date}
                  </div>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {e.time}
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">Give</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Your generosity helps us care for people, disciple families, and serve our
                city with the love of Jesus.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/give" size="lg">
                  Give online
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Need prayer?
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Our address
              </div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {site.location.addressLine1}
                <br />
                {site.location.addressLine2}
              </div>
              <a
                className="mt-4 inline-flex text-sm font-medium text-zinc-950 hover:underline dark:text-white"
                href={site.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
