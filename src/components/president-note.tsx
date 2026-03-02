import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export interface PresidentNoteProps {
  /** Small-caps label above the section (default: "Слово президента") */
  label?: string;
  /** President's full name */
  name: string;
  /** President's title / role */
  title: string;
  /** Path to the president's photo (relative to /public) */
  imageSrc: string;
  /** One or more message paragraphs */
  paragraphs: string[];
  /** Closing signature line (default: `С любовью во Мессии, {name}`) */
  signature?: string;
  /** Optional CTA button label */
  buttonLabel?: string;
  /** Optional CTA button href */
  buttonHref?: string;
}

export function NoteBanner({
  label = "Слово президента",
  name,
  title,
  imageSrc,
  paragraphs,
  signature,
  buttonLabel,
  buttonHref,
}: PresidentNoteProps) {
  const closingLine = signature ?? `С любовью во Мессии, ${name}`;

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Label */}
          <p className="mb-10 text-xs font-semibold mx-auto w-fit uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">{label}</p>

          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16 lg:items-start">
            {/* President card */}
            <div className="flex flex-row items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:w-60">
              <div className="relative h-80 shrink-0 overflow-hidden rounded-2xl bg-zinc-200 shadow-md ring-1 ring-zinc-900/10 dark:bg-zinc-800 dark:ring-white/10 w-full ">
                <Image src={imageSrc} alt={`${name} — ${title}`} fill className="object-cover" />
              </div>
              <div className="lg:mt-3">
                <p className="font-semibold text-zinc-950 dark:text-white">{name}</p>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{title}</p>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              {/* Decorative opening quote */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 -left-2 select-none text-8xl font-serif leading-none text-zinc-200 dark:text-zinc-800">
                &ldquo;
              </span>

              <div className="relative space-y-5 text-[17px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Closing signature */}
              <p className="mt-8 text-sm font-medium italic text-zinc-400 dark:text-zinc-500">{closingLine}</p>

              {buttonLabel && buttonHref && (
                <div className="mt-6">
                  <ButtonLink href={buttonHref} variant="primary" size="md">
                    {buttonLabel}
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
