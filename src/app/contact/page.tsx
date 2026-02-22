import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { Banner } from "@/components/ui/banner";
import { InfoCards } from "@/components/ui/info-cards";
import type { InfoCard } from "@/components/ui/info-cards";
import { site } from "@/lib/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} or plan your visit.`,
};

const contactCards: InfoCard[] = [
  {
    icon: <MapPin className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />,
    title: "Visit us",
    text: (
      <>
        {site.location.addressLine1}
        <br />
        {site.location.addressLine2}
      </>
    ),
    button: { label: "Get directions", href: site.location.mapsUrl, target: "_blank" },
  },
  {
    icon: <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />,
    title: "Church office",
    text: (
      <span className="space-y-1">
        <span className="block">
          <a className="hover:underline" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
        </span>
        <span className="block">
          <a className="hover:underline" href={`tel:${site.contact.phone}`}>
            {site.contact.phone}
          </a>
        </span>
        <span className="mt-2 block text-zinc-500 dark:text-zinc-400">We usually respond within 1–2 business days.</span>
      </span>
    ),
  },
  {
    icon: <Clock className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />,
    title: "Service times",
    text: (
      <ul className="space-y-1">
        {site.serviceTimes.map((st) => (
          <li key={st.label} className="flex justify-between gap-4">
            <span>{st.label}</span>
            <span className="font-medium text-zinc-950 dark:text-white">{st.time}</span>
          </li>
        ))}
      </ul>
    ),
    button: { label: "Upcoming events", href: "/events" },
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-y-26">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/church1.jpg" alt="Church building" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Get in Touch</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Whether you have a question, need prayer, or want to plan a visit — we&apos;d love to hear from you. Reach out anytime.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-white/15 p-4 text-zinc-300 backdrop-blur-sm">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-white/70" />
                <a href={`mailto:${site.contact.email}`} className="font-medium text-white transition-colors hover:text-zinc-200">
                  {site.contact.email}
                </a>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-white/70" />
                <a href={`tel:${site.contact.phone}`} className="font-medium text-white transition-colors hover:text-zinc-200">
                  {site.contact.phone}
                </a>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Form section ───── */}
      <ContactForm imageSrc="/church1.jpg" />

      {/* ───── Contact info cards ───── */}
      <InfoCards cards={contactCards} />

      {/* ───── Banner CTA ───── */}
      <Banner
        title="We'd love to meet you"
        description="Come visit us this Sunday — everyone is welcome, no matter where you are on your journey."
        imageSrc="/cc-banner.jpg"
        action={{ label: "About us", href: "/about" }}
      />
    </div>
  );
}
