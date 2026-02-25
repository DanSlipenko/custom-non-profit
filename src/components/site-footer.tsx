import Link from "next/link";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import Image from "next/image";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
      {children}
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="font-semibold tracking-tight text-zinc-950 dark:text-white">
              <Image src="/logo.svg" alt="Логотип" width={100} height={100} />
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {site.location.addressLine1}
              <br />
              {site.location.addressLine2}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              <a className="hover:underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              <br />
              <a className="hover:underline" href={`tel:${site.contact.phone}`}>
                {site.contact.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">Навигация</div>
              <div className="flex flex-col gap-2">
                <FooterLink href="/media">Медия</FooterLink>
                <FooterLink href="/communities">Общины</FooterLink>
                <FooterLink href="/about">О нас</FooterLink>
                <FooterLink href="/read-torah">Тора</FooterLink>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-950 dark:text-white">Следующие шаги</div>
              <div className="flex flex-col gap-2">
                <FooterLink href="/contact">Контакты</FooterLink>
                <FooterLink href="/join-alliance">Вступить в Альянс</FooterLink>
                <FooterLink href="/give">Пожертвовать</FooterLink>
                <a
                  className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  href={site.location.mapsUrl}
                  target="_blank"
                  rel="noreferrer">
                  Маршрут
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-zinc-950 dark:text-white">Время служений</div>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {site.serviceTimes.map((s) => (
                <li key={s.label} className="flex items-center justify-between">
                  <span>{s.label}</span>
                  <span className="font-medium text-zinc-950 dark:text-white">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {site.name}. Все права защищены.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-950 dark:hover:text-white" href={site.social.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
