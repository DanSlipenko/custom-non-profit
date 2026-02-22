"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { Container } from "@/components/ui/container";

type Status = "idle" | "submitting" | "error";

interface SubscribeToNewsletterProps {
  /** Optional background image URL — renders as a full-bleed cover */
  imageSrc?: string;
}

export function SubscribeToNewsletter({ imageSrc }: SubscribeToNewsletterProps) {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  const canSubmit = useMemo(() => {
    return /^\S+@\S+\.\S+$/.test(email.trim()) && status !== "submitting";
  }, [email, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setEmail("");
      setStatus("idle");
      toast("Вы успешно подписались на рассылку!", "success");
    } catch {
      setStatus("error");
      toast("Что-то пошло не так. Попробуйте снова.", "error");
    }
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background layer */}
      {imageSrc ?
        <>
          <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </>
      : <div className="absolute inset-0 bg-zinc-900 dark:bg-zinc-900" />}

      {/* Content */}
      <Container className="relative z-10 py-16 sm:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Подпишитесь на рассылку</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Будьте в курсе наших последних новостей и событий. Введите свой email ниже, чтобы подписаться.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex bg-white/10 p-1 backdrop-blur-sm rounded-full w-full max-w-xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              className="h-16 w-full rounded-full border border-white/20 bg-white/10 px-6 text-white outline-none ring-0 placeholder:text-zinc-400 focus:border-white/40 backdrop-blur-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
              required
            />
            <Button type="submit" disabled={!canSubmit} className="shrink-0" size="lg">
              {status === "submitting" ? "Отправка..." : "Подписаться"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
