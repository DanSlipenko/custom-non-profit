import { Container } from "@/components/ui/container";
import { LightRays } from "@/components/ui/light-rays";
import { Badge } from "@/components/ui/badge";

const milestones = [
  {
    year: "1991",
    heading: "Зарождение движения",
    text: "Основание первых мессианских общин среди русскоязычных верующих.",
  },
  {
    year: "1998",
    heading: "Создание Альянса",
    text: "Объединение разрозненных общин в единый Альянс для совместного служения и поддержки.",
  },
  {
    year: "2005",
    heading: "Новые горизонты",
    text: "Расширение работы: запуск масштабного медиа-служения и системы обучающих программ.",
  },
  {
    year: "2015",
    heading: "Международный рост",
    text: "Альянс преодолел границы, объединив более 30 общин в разных странах мира.",
  },
  {
    year: "Сегодня",
    heading: "Взгляд в будущее",
    text: "Мы продолжаем расти, вдохновляя и активно поддерживая общины по всему миру.",
  },
];

export function HistorySection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Light Rays Background */}
      <LightRays />

      <Container className="relative z-10 py-20 lg:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <Badge size="lg">История</Badge>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Наш путь</h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Альянс рождён из глубокой веры и желания объединить русскоязычных мессианских верующих по всему миру. Каждый шаг нашей истории —
            это свидетельство Божьей верности.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Vertical line (aligned to the left) */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((m) => {
              return (
                <div key={m.year} className="relative pl-16 lg:pl-24">
                  {/* Dot on the left line */}
                  <div className="absolute left-6 lg:left-8 top-6 -translate-x-[calc(50%-0.5px)] sm:-translate-x-[calc(50%-0.5px)] z-10 flex items-center justify-center">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-[5px] ring-zinc-50 dark:bg-white dark:ring-zinc-950">
                      <span className="h-2 w-2 rounded-full bg-white dark:bg-zinc-950" />
                    </span>
                  </div>

                  {/* Card (all aligned to the right side of the line) */}
                  <div className="w-full sm:w-[85%] lg:w-[75%]">
                    <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-6 shadow-secondary backdrop-blur-sm transition-shadow hover:shadow-primary hover:border-blue-200 dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-8">
                      <div className="flex flex-col gap-2 sm:items-baseline">
                        <span className="text-4xl font-bold tracking-wider text-zink-600 dark:text-blue-500 px-4 py-2 bg-blue-200/80 shadow-primary rounded-full">
                          {m.year}
                        </span>
                        <h3 className="text-2xl font-semibold mt-4 tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                          {m.heading}
                        </h3>
                      </div>
                      <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">{m.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
