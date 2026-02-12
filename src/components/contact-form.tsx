"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    return (
      form.name.trim().length >= 2 &&
      emailOk &&
      form.message.trim().length >= 10 &&
      status !== "submitting"
    );
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
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <div className="font-medium text-zinc-950 dark:text-white">Name</div>
          <input
            className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label className="space-y-1 text-sm">
          <div className="font-medium text-zinc-950 dark:text-white">Email</div>
          <input
            className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            required
          />
        </label>
      </div>

      <label className="space-y-1 text-sm">
        <div className="font-medium text-zinc-950 dark:text-white">Message</div>
        <textarea
          className="min-h-32 w-full resize-y rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="How can we help?"
          required
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          className={cn(
            "text-sm",
            status === "success" && "text-emerald-700 dark:text-emerald-400",
            status === "error" && "text-red-700 dark:text-red-400",
            status === "idle" && "text-zinc-600 dark:text-zinc-400",
            status === "submitting" && "text-zinc-600 dark:text-zinc-400",
          )}
          aria-live="polite"
        >
          {status === "idle" && "We usually respond within 1–2 business days."}
          {status === "submitting" && "Sending…"}
          {status === "success" && "Message sent! We’ll be in touch soon."}
          {status === "error" && (error || "Something went wrong.")}
        </div>

        <Button type="submit" disabled={!canSubmit} className="sm:min-w-40">
          Send message
        </Button>
      </div>
    </form>
  );
}

