import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "../ui/button";

const values = [
  {
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Верность Священному Писанию",
    description: "Божье Слово — абсолютно непреложный фундамент нашей веры и жизни.",
    body: "Мы верим, что Библия является вдохновлённым Словом Самого Бога. Мы строим наше служение, учение и повседневную жизнь на её истинах, обучая каждое поколение жить по вере и благодати.",
  },
  {
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f381?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Искренняя любовь к Израилю",
    description: "Наше сердце неустанно бьётся ради духовного возрождения Божьего народа.",
    body: "Мы верим в особое Божье призвание для еврейского народа. Наша цель — с любовью нести Благую Весть, способствуя их примирению с Иешуа Мессией и поддерживая общины всем, чем можем.",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Глобальное единство общин",
    description: "Разные континенты и страны, но одна огромная семья во Христе.",
    body: "Мы осознаём, что наша истинная сила кроется в единстве. Как единое Тело Мессии, мы поддерживаем друг друга, делясь ресурсами и опытом, чтобы вместе служить Богу и отвечать на нужды мира.",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Ученичество и наставничество",
    description: "Взращиваем верных учеников, которые смогут научить других.",
    body: "Мы посвящены процессу глубокого наставничества. Наша задача — вдохновлять верующих в их призвании, поднимать новых лидеров и передавать эстафету веры следующему поколению.",
  },
  {
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Сила молитвы и поклонения",
    description: "Служение в живом присутствии Духа Святого — центр нашей жизни.",
    body: "Мы ищем лица Божьего во всём, что делаем. Наши общины — это дома непрестанной молитвы и искреннего поклонения в духе и истине, где Бог обновляет сердца Своих детей.",
  },
  {
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Благовестие и дела милосердия",
    description: "Мы не просто говорим о Божьей любви, но являем её на практике.",
    body: "Мы призваны быть светом для мира через активную проповедь Евангелия и дела сострадания, заботясь о нуждах ближних и помогая тем, кто оказался в трудных жизненных обстоятельствах.",
  },
];

export function MissionSection() {
  return (
    <section className="bg-white pb-20 pt-16 dark:bg-zinc-950 lg:pb-28 lg:pt-24">
      <Container>
        <div className="mx-auto w-full max-w-6xl space-y-12">
          {/* Header */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="outline" size="lg">
              Миссия
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Во что мы верим</h2>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Наша миссия — укреплять и объединять мессианские общины по всему лицу земли, нести Евангелие еврейскому народу и всеми силами
              поддерживать верующих в их неуклонном духовном росте и практическом служении.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {values.map((v) => {
              return (
                <div
                  key={v.title}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-secondary transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="relative h-48 w-full shrink-0 overflow-hidden bg-zinc-200 dark:bg-zinc-800 sm:h-74">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:backdrop-blur-sm dark:from-black/80 dark:via-black/40" />
                    <p className="absolute bottom-6 left-6 right-6 z-20 text-lg font-medium leading-relaxed text-white">
                      <Quote className="mr-1.5 inline-block -translate-y-0.5 text-blue-300" size={20} fill="currentColor" />
                      {v.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col px-8 pb-8 pt-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">{v.title}</h3>
                      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{v.body}</p>
                    </div>
                  </div>
                  <div className="flex items-center border-t border-zinc-200 p-8 hover:bg-blue-100 cursor-pointer dark:border-zinc-800">
                    Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
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
