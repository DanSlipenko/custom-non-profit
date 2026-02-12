import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} or plan your visit.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Have a question, need prayer, or want to plan a visit? Send us a message—we’d
                love to help.
              </p>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Church office
                </div>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <a className="hover:underline" href={`mailto:${site.contact.email}`}>
                    {site.contact.email}
                  </a>
                  <br />
                  <a className="hover:underline" href={`tel:${site.contact.phone}`}>
                    {site.contact.phone}
                  </a>
                </div>
                <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                  {site.location.addressLine1}
                  <br />
                  {site.location.addressLine2}
                </div>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <ButtonLink
                    href={site.location.mapsUrl}
                    target="_blank"
                    variant="secondary"
                    className="flex-1"
                  >
                    Directions
                  </ButtonLink>
                  <ButtonLink href="/events" variant="ghost" className="flex-1">
                    Upcoming events
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                Send a message
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                This form currently stores nothing and sends to a basic endpoint. Hook it up
                to email (SendGrid/Mailgun) when you’re ready.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

