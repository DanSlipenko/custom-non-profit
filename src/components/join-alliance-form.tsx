"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { Container } from "@/components/ui/container";

type Status = "idle" | "submitting" | "error";

const inputClasses =
  "h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600";

export function JoinAllianceForm() {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    return form.name.trim().length >= 2 && emailOk && status !== "submitting";
  }, [form.email, form.name, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/join-alliance", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Что-то пошло не так. Попробуйте снова.");
      }

      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus("idle");
      toast("Спасибо за заявку! Мы скоро свяжемся с вами.", "success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Что-то пошло не так.");
    }
  }

  return (
    <section className="bg-white dark:bg-zinc-950">
      <Container className="">
        <div className="mx-auto rounded-3xl border border-zinc-200 bg-white p-8 shadow-secondary dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="mb-1 text-2xl font-semibold text-zinc-950 dark:text-white">Заявка на вступление</div>
            <p className="mb-6 text-zinc-500 dark:text-zinc-400">Заполните форму ниже, и мы свяжемся с вами в ближайшее время.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <div className="font-medium text-zinc-950 dark:text-white">
                  Имя <span className="text-red-500">*</span>
                </div>
                <input
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Ваше имя"
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

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <div className="font-medium text-zinc-950 dark:text-white">Телефон</div>
                <input
                  className={inputClasses}
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>
            </div>

            <label className="block space-y-2 overflow-hidden text-sm">
              <div className="font-medium text-zinc-950 dark:text-white">Сообщение</div>
              <textarea
                className="box-border block min-h-[120px] w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Расскажите немного о себе…"
              />
            </label>

            {status === "error" && (
              <p className="text-sm text-red-700 dark:text-red-400" aria-live="polite">
                {error || "Что-то пошло не так."}
              </p>
            )}

            <Button type="submit" disabled={!canSubmit} className="mt-4" size="lg">
              {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
