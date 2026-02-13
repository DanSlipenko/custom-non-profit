import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

interface BannerProps {
  /** Main heading text */
  title: string;
  /** Supporting text below the heading */
  description?: string;
  /** Optional CTA button */
  action?: {
    label: string;
    href: string;
  };
  /** Background image URL (covers the full banner) */
  imageSrc?: string;
  /** Colour variant when no image is used */
  variant?: "dark" | "light" | "accent";
  /** Extra classes on the outer section */
  className?: string;
}

const variantClasses: Record<string, string> = {
  dark: "bg-zinc-900 text-white",
  light: "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white",
  accent: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
};

export function Banner({ title, description, action, imageSrc, variant = "dark", className }: BannerProps) {
  return (
    <section className={cn("relative overflow-hidden", !imageSrc && variantClasses[variant], className)}>
      {/* Background image */}
      {imageSrc && (
        <>
          <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <Container className={cn("relative z-10 py-16 sm:py-20", "flex flex-col items-center text-center")}>
        <h2 className={cn("max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl", imageSrc ? "text-white" : undefined)}>{title}</h2>

        {description && (
          <p
            className={cn(
              "mt-4 max-w-xl text-lg leading-relaxed",
              imageSrc ? "text-zinc-200"
              : variant === "light" ? "text-zinc-500 dark:text-zinc-400"
              : "text-white/80",
            )}>
            {description}
          </p>
        )}

        {action && (
          <ButtonLink href={action.href} variant={variant === "light" && !imageSrc ? "primary" : "outline"} size="lg" className="mt-8">
            {action.label}
          </ButtonLink>
        )}
      </Container>
    </section>
  );
}
