"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

export interface QaItem {
  question: string;
  answer: string;
}

function QaAccordionItem({ item }: { item: QaItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b px-10 py-6 border-zinc-200 hover:bg-blue-50 cursor-pointer dark:border-zinc-800"
      onClick={() => setOpen((o) => !o)}>
      <div className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-zinc-950 transition-colors">
        <span>{item.question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`grid transition-all duration-200 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

interface QaSectionProps {
  title: string;
  description?: string;
  items: QaItem[];
}

export function QaSection({ title, description, items }: QaSectionProps) {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <Container className="pb-14 sm:pb-20">
        <div className="mx-auto rounded-3xl border border-zinc-200 bg-white shadow-secondary dark:border-zinc-800 dark:bg-zinc-950">
          <div className="px-10 py-10 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="mb-1 text-2xl font-semibold text-zinc-950 dark:text-white">{title}</h2>
            {description && <p className="text-zinc-500 dark:text-zinc-400">{description}</p>}
          </div>
          <div>
            {items.map((item) => (
              <QaAccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
