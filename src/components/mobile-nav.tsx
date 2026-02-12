"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type NavItem = { href: string; label: string };

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/ministries", label: "Ministries" },
      { href: "/events", label: "Events" },
      { href: "/sermons", label: "Sermons" },
      { href: "/give", label: "Give" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
        className="inline-flex size-10 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
      >
        <span className="sr-only">Open menu</span>
        <span className="grid gap-1">
          <span className="h-0.5 w-5 rounded bg-current" />
          <span className="h-0.5 w-5 rounded bg-current" />
          <span className="h-0.5 w-5 rounded bg-current" />
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          id="mobile-nav"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-3 top-3 w-[min(92vw,380px)] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
              <div className="font-semibold tracking-tight text-zinc-950 dark:text-white">
                {site.name}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                <span className="sr-only">Close menu</span>
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            <nav className="p-3">
              <ul className="grid gap-1">
                {items.map((it) => {
                  const active =
                    pathname === it.href ||
                    (it.href !== "/" && pathname?.startsWith(it.href));
                  return (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white",
                          active &&
                            "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white",
                        )}
                      >
                        <span>{it.label}</span>
                        <span className="text-zinc-400 dark:text-zinc-500">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}

