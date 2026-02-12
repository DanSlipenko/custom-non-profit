import Link from "next/link";
import Image from "next/image";
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
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <Image src="/hero.jpg" alt="Church worship service" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent" />

        <Container className="relative flex h-full flex-col justify-between pb-12 pt-32 sm:pb-16">
          <div />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <h1 className="max-w-2xl text-balance text-start text-4xl font-semibold leading-tight tracking-wide text-white sm:text-5xl md:text-6xl">
              Ассоциация Мессианских Еврейских Русскоязычных Общин
            </h1>
            <div className="relative mx-auto w-56 sm:w-64">
              <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl" />
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black/50 shadow-2xl ring-1 ring-white/15">
                {/* Replace the placeholder below with your <iframe> or <video> */}
                <div className="flex h-full items-center justify-center text-sm text-white/40">Video goes here</div>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {site.location.addressLine1}, {site.location.addressLine2}
            </p>
            <div className="flex gap-3">
              <ButtonLink href="/contact" size="lg" variant="primary">
                Присоединиться
              </ButtonLink>
              <ButtonLink href="/about" size="lg" variant="outline">
                Узнать больше
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">Gather</div>
              <p className="text-zinc-700 dark:text-zinc-300">Worship services that are warm, Scripture-centered, and welcoming.</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">Grow</div>
              <p className="text-zinc-700 dark:text-zinc-300">Groups and classes designed to help you follow Jesus day by day.</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">Serve</div>
              <p className="text-zinc-700 dark:text-zinc-300">Local outreach and mission opportunities to love our neighbors well.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">Upcoming events</h2>
              <p className="text-zinc-700 dark:text-zinc-300">Join us and get connected this month.</p>
            </div>
            <Link href="/events" className="text-sm font-medium text-zinc-950 hover:underline dark:text-white">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {upcomingEvents.map((e) => (
              <div
                key={e.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-lg font-semibold text-zinc-950 dark:text-white">{e.title}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.date}</div>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{e.time}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{e.description}</p>
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
                Your generosity helps us care for people, disciple families, and serve our city with the love of Jesus.
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
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">Our address</div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {site.location.addressLine1}
                <br />
                {site.location.addressLine2}
              </div>
              <a
                className="mt-4 inline-flex text-sm font-medium text-zinc-950 hover:underline dark:text-white"
                href={site.location.mapsUrl}
                target="_blank"
                rel="noreferrer">
                Open in Maps →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
