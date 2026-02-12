import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { NavLink } from "@/components/nav-link";
import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-950 dark:text-white"
          >
            <span className="grid size-8 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
              G
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/ministries">Ministries</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/sermons">Sermons</NavLink>
            <NavLink href="/give">Give</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <MobileNav />
          <ButtonLink href="/contact" variant="secondary" size="sm">
            Plan a visit
          </ButtonLink>
          <ButtonLink href="/give" size="sm" className="hidden sm:inline-flex">
            Give
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

