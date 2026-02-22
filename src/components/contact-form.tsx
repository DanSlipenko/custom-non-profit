"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { Container } from "@/components/ui/container";

type Status = "idle" | "submitting" | "error";

const inputClasses =
  "h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600";

interface ContactFormProps {
  imageSrc?: string;
}

export function ContactForm({ imageSrc }: ContactFormProps) {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    return form.name.trim().length >= 2 && emailOk && form.message.trim().length >= 10 && status !== "submitting";
  }, [form.email, form.message, form.name, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus("idle");
      toast("Message sent! We'll be in touch soon.", "success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const formContent = (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="mb-1 text-2xl font-semibold text-zinc-950 dark:text-white">Send a message</div>
      <p className="mb-6 text-zinc-500 dark:text-zinc-400">
        Have a question, need prayer, or want to plan a visit? We&apos;d love to hear from you.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <div className="font-medium text-zinc-950 dark:text-white">
            Name <span className="text-red-500">*</span>
          </div>
          <input
            className={inputClasses}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label className="space-y-2 text-sm">
          <div className="font-medium text-zinc-950 dark:text-white">
            Email <span className="text-red-500">*</span>
          </div>
          <input
            className={inputClasses}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            required
          />
        </label>
      </div>

      <label className="block space-y-2 overflow-hidden text-sm">
        <div className="font-medium text-zinc-950 dark:text-white">
          Message <span className="text-red-500">*</span>
        </div>
        <textarea
          className="box-border block min-h-[120px] max-h-[200px] w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="How can we help?"
          required
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700 dark:text-red-400" aria-live="polite">
          {error || "Something went wrong."}
        </p>
      )}

      <Button type="submit" disabled={!canSubmit} className="mt-4" size="lg">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );

  return (
    <section className="bg-white dark:bg-zinc-950">
      <Container>
        <div
          className={`mx-auto rounded-3xl border border-zinc-200 bg-white shadow-primary dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden ${imageSrc ? "max-w-6xl" : "max-w-4xl"}`}>
          {imageSrc ?
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">{formContent}</div>
              <div className="relative hidden lg:block">
                <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          : formContent}
        </div>
      </Container>
    </section>
  );
}
