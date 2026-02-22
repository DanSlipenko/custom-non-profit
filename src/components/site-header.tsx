import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { NavLink } from "@/components/nav-link";
import { NavDropdown } from "@/components/nav-dropdown";
import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <Container className="flex h-22 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-950 dark:text-white">
            <span className="grid size-8 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">G</span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <NavDropdown
              label="Медия"
              items={[
                { label: "Вся медия", href: "/media", icon: "Play" },
                { label: "Видео", href: "/videos", icon: "Video" },
                { label: "Подкасты", href: "/podcasts", icon: "Mic" },
                { label: "Проповеди", href: "/sermons", icon: "BookOpen" },
                { label: "Статьи", href: "/articles", icon: "FileText" },
                { label: "Книги", href: "/books", icon: "BookMarked" },
                { label: "Радио", href: "/radio", icon: "Radio" },
                { label: "Газета", href: "/about", icon: "Newspaper" },
              ]}
            />
            <NavLink href="/communities">Общины</NavLink>
            <NavLink href="/sermons">Обучение</NavLink>
            <NavLink href="/give">Пожертвовать</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <MobileNav />
          <ButtonLink href="/contact" variant="secondary" size="md">
            Контакты
          </ButtonLink>
          <ButtonLink href="/join-alliance" size="md" className="hidden sm:inline-flex">
            Вступить в Альянс
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
