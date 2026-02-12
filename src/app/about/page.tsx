import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}: our mission, values, and leadership.`,
};

export default function AboutPage() {
  const values = [
    {
      title: "Jesus at the center",
      body: "We gather to worship Jesus, study Scripture, and live by grace through faith.",
    },
    {
      title: "Community that feels like family",
      body: "You don’t have to do life alone. We grow best when we’re known and supported.",
    },
    {
      title: "A faith that moves outward",
      body: "We serve our city with compassion, generosity, and practical help.",
    },
  ];

  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">About {site.name}</h1>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              We’re a local church committed to helping people follow Jesus—through worship,
              discipleship, and service. Whether you’ve been in church for years or you’re
              exploring faith for the first time, you’re welcome here.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Plan a visit
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
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {v.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">What we believe</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                We believe the Bible is God’s Word, Jesus is our Savior, and the Holy Spirit
                empowers us to live a new life. Our hope is in the gospel—God’s grace given
                freely through Jesus.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Want to talk with a pastor or learn more? We’d love to meet you.
              </p>
              <ButtonLink href="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Leadership
              </div>
              <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start justify-between gap-4">
                  <span>Lead Pastor</span>
                  <span className="font-medium text-zinc-950 dark:text-white">
                    Pastor Jordan Smith
                  </span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span>Worship Director</span>
                  <span className="font-medium text-zinc-950 dark:text-white">
                    Taylor Nguyen
                  </span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span>Kids Ministry</span>
                  <span className="font-medium text-zinc-950 dark:text-white">
                    Morgan Lee
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Replace these names with your real leadership team.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

