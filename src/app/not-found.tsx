import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-20 lg:py-38">
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">404</div>
        <h1 className="text-4xl font-semibold tracking-tight">Страница не найдена</h1>
        <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          The page you’re looking for doesn’t exist (or it moved). Try one of the links below.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/" size="lg">
            На главную
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Связаться с нами
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
