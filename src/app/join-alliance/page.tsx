import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { JoinAllianceForm } from "@/components/join-alliance-form";
import { QaSection } from "@/components/ui/qa-section";
import type { QaItem } from "@/components/ui/qa-section";
import { Banner } from "@/components/ui/banner";
import { Users } from "lucide-react";
import { SubscribeToNewsletter } from "@/components/subscribe-to-newsletter";

const joinAllianceFaqs: QaItem[] = [
  {
    question: "Кто может вступить в Альянс?",
    answer:
      "Альянс открыт для всех, кто разделяет наши ценности и стремится к общей цели. Мы приветствуем людей любого возраста и профессии.",
  },
  {
    question: "Есть ли членский взнос?",
    answer: "Нет, участие в Альянсе полностью бесплатное. Мы строим сообщество на добровольной основе.",
  },
  {
    question: "Как быстро рассматривается заявка?",
    answer: "Обычно мы связываемся с вами в течение 2–3 рабочих дней после подачи заявки.",
  },
  {
    question: "Какие обязательства у участников?",
    answer: "Мы ценим активное участие, но понимаем, что у каждого свой ритм жизни. Главное — искреннее желание быть частью сообщества.",
  },
  {
    question: "Можно ли выйти из Альянса?",
    answer: "Конечно, участие полностью добровольное. Вы можете покинуть Альянс в любое время.",
  },
];

export const metadata: Metadata = {
  title: "Вступить в Альянс",
  description: "Присоединяйтесь к нашему альянсу — вместе мы сильнее. Заполните заявку, и мы свяжемся с вами.",
};

export default function JoinAlliancePage() {
  return (
    <div className="flex flex-col gap-y-26">
      {/* ───── Hero ───── */}
      <section className="relative min-h-[400px] overflow-hidden py-14 sm:py-24">
        <img src="/cc-banner.jpg" alt="Люди вместе" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <nav className="text-sm text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Вступить в Альянс</span>
            </nav>

            <div className="border-l-4 border-white pl-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">Вступить в Альянс</h1>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Вместе мы можем больше. Присоединяйтесь к сообществу единомышленников, объединённых общей целью и верой.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-300 bg-white/15 backdrop-blur-sm p-4 rounded-2xl">
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-white/70" />
                <span className="font-medium text-white">Открыто для всех</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ───── Form section ───── */}
      <JoinAllianceForm />
      {/* ───── Banner ───── */}

      <Banner
        title="Вместе мы сильнее"
        description="Присоединяйтесь к растущему сообществу единомышленников и делайте мир лучше вместе."
        imageSrc="/cc-banner.jpg"
        action={{ label: "Общины", href: "/communities" }}
      />

      {/* ───── FAQ section ───── */}
      <QaSection
        title="Часто задаваемые вопросы"
        description="Ответы на самые популярные вопросы о вступлении в Альянс."
        items={joinAllianceFaqs}
      />

      {/* ───── Newsletter section ───── */}
      <SubscribeToNewsletter imageSrc="/cc-banner.jpg" />
    </div>
  );
}
