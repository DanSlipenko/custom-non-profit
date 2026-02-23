import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Banner } from "@/components/ui/banner";
import { PersonCard } from "@/components/ui/person-card";
import { BookOpen, Heart, Globe, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "О нас",
  description: "Узнайте об истории, миссии и руководстве Альянса Мессианских Еврейских Русскоязычных Общин.",
};

const milestones = [
  { year: "1991", text: "Основание первых мессианских общин среди русскоязычных верующих." },
  { year: "1998", text: "Объединение общин в единый Альянс для совместного служения и поддержки." },
  { year: "2005", text: "Расширение работы: запуск медиа-служения и обучающих программ." },
  { year: "2015", text: "Альянс объединяет более 30 общин в разных странах мира." },
  { year: "Сегодня", text: "Мы продолжаем расти, вдохновляя и поддерживая общины по всему миру." },
];

const values = [
  {
    icon: BookOpen,
    title: "Верность Писанию",
    body: "Слово Божье — основа нашей веры. Мы строим жизнь и служение на Библии.",
  },
  {
    icon: Heart,
    title: "Любовь к еврейскому народу",
    body: "Наше сердце бьётся ради возрождения Израиля и принятия Мессии.",
  },
  {
    icon: Globe,
    title: "Единство общин",
    body: "Разные города и страны — одна семья. Мы идём вместе как Тело Мессии.",
  },
];

const leaders = [
  {
    role: "Председатель Альянса",
    name: "Пастор Александр Соловьёв",
    initials: "АС",
    color: "from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    role: "Заместитель председателя",
    name: "Пастор Давид Ромашко",
    initials: "ДР",
    color: "from-violet-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    role: "Директор медиа-служения",
    name: "Мария Кузнецова",
    initials: "МК",
    color: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
  },
  { role: "Координатор общин", name: "Иосиф Варшавский", initials: "ИВ", color: "from-amber-500 to-orange-500" },
  { role: "Руководитель молодёжного служения", name: "Анна Лебедева", initials: "АЛ", color: "from-emerald-500 to-teal-600" },
  { role: "Ответственный за обучение", name: "Раввин Меир Гольдштейн", initials: "МГ", color: "from-cyan-500 to-blue-500" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-26">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Альянс общин" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="transition-colors hover:text-white">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">О нас</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">О нас</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Альянс Мессианских Еврейских Русскоязычных Общин объединяет верующих по всему миру — людей, разделяющих веру в Иешуа Мессию и
              любовь к Его народу.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-white/15 p-4 text-zinc-300 backdrop-blur-sm">
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Более 30 общин</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Международный Альянс</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Основан в 1998 году</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── History & Mission ───── */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* History */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">История</div>
                <h2 className="text-3xl font-semibold tracking-tight">Наш путь</h2>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Альянс рождён из глубокой веры и желания объединить русскоязычных мессианских верующих по всему миру. Каждый шаг нашей
                  истории — это свидетельство Божьей верности и силы Его Слова.
                </p>
              </div>

              <ol className="relative space-y-6 border-l border-zinc-200 dark:border-zinc-800 pl-6">
                {milestones.map((m) => (
                  <li key={m.year} className="relative">
                    <span className="absolute -left-[32px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 dark:bg-white ring-4 ring-white dark:ring-zinc-950">
                      <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-zinc-950" />
                    </span>
                    <div className="text-sm font-semibold text-zinc-950 dark:text-white">{m.year}</div>
                    <p className="mt-0.5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{m.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mission & Values */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Миссия</div>
                <h2 className="text-3xl font-semibold tracking-tight">Зачем мы существуем</h2>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Наша миссия — укреплять и объединять мессианские общины, нести Евангелие еврейскому народу и поддерживать верующих в их
                  духовном росте и служении.
                </p>
              </div>

              <div className="grid gap-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="flex gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-950 dark:text-white">{v.title}</div>
                        <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{v.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Team & Leadership ───── */}
      <section className="bg-zinc-50 dark:bg-black">
        <Container className="py-16">
          <div className="space-y-3 text-center">
            <div className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Руководство</div>
            <h2 className="text-3xl font-semibold tracking-tight">Команда Альянса</h2>
            <p className="mx-auto max-w-xl text-zinc-700 dark:text-zinc-300">
              Наша команда — служители с многолетним опытом, объединённые любовью к Богу, Его народу и Его Слову.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <PersonCard key={l.name} name={l.name} role={l.role} imageSrc={l.image} initials={l.initials} colorClass={l.color} />
            ))}
          </div>
        </Container>
      </section>

      {/* ───── Join Alliance CTA ───── */}
      <Banner
        title="Вступить в Альянс"
        description="Станьте частью нашего сообщества. Вместе мы сильнее — заполните заявку и присоединяйтесь."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Вступить в Альянс", href: "/join-alliance" }}
      />
    </div>
  );
}
