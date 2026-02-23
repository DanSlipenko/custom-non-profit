import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sermons",
  description: `Watch and listen to recent messages from ${site.name}.`,
};

type Sermon = {
  title: string;
  speaker: string;
  date: string;
  passage: string;
  watchUrl?: string;
  notesUrl?: string;
};

const sermons: Sermon[] = [
  {
    title: "A Hope That Holds",
    speaker: "Pastor Jordan Smith",
    date: "Feb 9, 2026",
    passage: "Romans 8:31–39",
    watchUrl: "https://www.youtube.com/",
  },
  {
    title: "Prayer in Real Life",
    speaker: "Taylor Nguyen",
    date: "Feb 2, 2026",
    passage: "Matthew 6:5–15",
    watchUrl: "https://www.youtube.com/",
  },
  {
    title: "Grace That Changes Us",
    speaker: "Pastor Jordan Smith",
    date: "Jan 26, 2026",
    passage: "Ephesians 2:1–10",
    watchUrl: "https://www.youtube.com/",
  },
];

export default function SermonsPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Sermons</h1>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Catch up on recent messages or share one with a friend.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.social.youtube} size="lg" target="_blank">
                Watch on YouTube
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Request prayer
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-14">
          <div className="grid gap-4 lg:grid-cols-2">
            {sermons.map((s) => (
              <div
                key={`${s.title}-${s.date}`}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {s.title}
                </div>
                <div className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">Speaker:</span>{" "}
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {s.speaker}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">Date:</span>{" "}
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {s.date}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-zinc-500 dark:text-zinc-400">Passage:</span>{" "}
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {s.passage}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  {s.watchUrl ? (
                    <ButtonLink
                      href={s.watchUrl}
                      variant="secondary"
                      target="_blank"
                      className="flex-1"
                    >
                      Watch
                    </ButtonLink>
                  ) : null}
                  {s.notesUrl ? (
                    <ButtonLink
                      href={s.notesUrl}
                      variant="ghost"
                      target="_blank"
                      className="flex-1"
                    >
                      Notes
                    </ButtonLink>
                  ) : (
                    <ButtonLink href="/contact" variant="ghost" className="flex-1">
                      Questions?
                    </ButtonLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

