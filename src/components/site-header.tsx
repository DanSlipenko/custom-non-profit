import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { NavLink } from "@/components/nav-link";
import { NavDropdown } from "@/components/nav-dropdown";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <Container className="flex h-22 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-950 dark:text-white">
            <Image src="/logo.svg" alt="Logo" width={70} height={70} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex ml-16">
            <NavLink href="/communities">Общины</NavLink>
            <NavLink href="/about">О нас</NavLink>
            <NavLink href="/read-torah">Тора</NavLink>
            <NavDropdown
              label="Медия"
              href="/media"
              items={[
                { label: "Видео", href: "/media/videos", icon: "Video" },
                { label: "Подкасты", href: "/media/podcasts", icon: "Mic" },
                { label: "Статьи", href: "/media/articles", icon: "FileText" },
                { label: "Книги", href: "/media/books", icon: "BookMarked" },
                { label: "Радио", href: "/media/radio", icon: "Radio" },
                { label: "Газета", href: "/media/newspaper", icon: "Newspaper" },
              ]}
            />
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
