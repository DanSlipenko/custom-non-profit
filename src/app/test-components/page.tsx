import { BookCard, RecommendedBookCard } from "@/components/book-card";
import { ArticleCard } from "@/components/article-card";
import { NewspaperCard } from "@/components/newspaper-card";
import { InfoCards } from "@/components/ui/info-cards";
import { MediaCard } from "@/components/ui/media-card";
import { PersonCard } from "@/components/ui/person-card";
import { CommunityCard } from "@/components/ui/community-card";
import { NewspaperCarousel } from "@/components/newspaper-carousel";
import { EventCarousel } from "@/components/ui/event-carousel";
import { VideoCarousel } from "@/components/ui/video-carousel";
import { VideoCard } from "@/app/media/videos/video-card";
import { BookOpen, Users, Heart } from "lucide-react";

// ── Sample data ───────────────────────────────────────────────────────────────

const sampleBook = {
  id: "book-1",
  title: "Тора и её смысл в современном мире",
  description:
    "Глубокое исследование еврейского Закона и его актуальности для жизни современного человека, написанное ведущими учёными. Книга охватывает основные концепции и помогает понять древние тексты.",
  date: "2023-06-15",
  category: "books" as const,
  author: "Рабби Давид Коэн",
  href: "#",
};

const sampleArticle = {
  id: "article-1",
  title: "Шabbat: искусство отдыха в эпоху постоянной занятости",
  description:
    "Исследование того, как древняя практика субботнего отдыха может преобразить нашу современную жизнь и вернуть нам глубокий смысл. Суббота — это не просто выходной, это целая философия.",
  date: "2024-01-20",
  category: "articles" as const,
  author: "Мириам Леви",
  href: "#",
};

const sampleNewspaper = {
  id: "news-1",
  title: "Вестник общины: Зима 2024",
  description: "В этом выпуске: итоги праздника Хануки, новости общинной жизни, интервью с молодыми лидерами, и анонс весенних программ.",
  date: "2024-01-01",
  category: "newspaper" as const,
  author: "Еврейский альянс",
  href: "#",
};

const sampleMediaItem = {
  id: "media-1",
  title: "Служение в честь Рош а-Шана",
  description: "Запись торжественного служения по случаю наступления нового еврейского года.",
  date: "2023-09-16",
  category: "videos" as const,
  author: "Рабби Моше Штейн",
  href: "#",
};

const sampleVideo = {
  id: "vid-1",
  title: "Введение в изучение Талмуда",
  description: "Вводный урок для начинающих изучать Талмуд. Рабби объясняет структуру и методологию изучения.",
  date: "2024-02-10",
  author: "Рабби Ицхак Рубин",
  authorHref: "#",
  href: "#",
};

const newspapers = [
  { ...sampleNewspaper, id: "n1", date: "2024-03-01", title: "Вестник: Весна 2024" },
  { ...sampleNewspaper, id: "n2", date: "2024-01-01", title: "Вестник: Зима 2024" },
  { ...sampleNewspaper, id: "n3", date: "2023-10-01", title: "Вестник: Осень 2023" },
  { ...sampleNewspaper, id: "n4", date: "2023-07-01", title: "Вестник: Лето 2023" },
];

const events = [
  {
    label: "СОБЫТИЕ",
    date: "15 февраля",
    title: "Праздничный вечер Пурима",
    href: "#",
  },
  {
    label: "СЛУЖЕНИЕ",
    date: "22 февраля",
    title: "Субботнее богослужение с гостями из Израиля",
    href: "#",
  },
  {
    label: "ОБРАЗОВАНИЕ",
    date: "1 марта",
    title: "Открытый урок: Законы Пасхи",
    href: "#",
  },
  {
    label: "СОБЫТИЕ",
    date: "8 марта",
    title: "Семейный пасхальный вечер",
    href: "#",
  },
];

const videos = [
  { ...sampleVideo, id: "v1", title: "Введение в изучение Талмуда" },
  { ...sampleVideo, id: "v2", title: "История еврейского народа", author: "Профессор Шимон Бар" },
  { ...sampleVideo, id: "v3", title: "Молитва Шма: смысл и традиция", author: "Рабби Давид Коэн" },
  { ...sampleVideo, id: "v4", title: "Традиции субботнего стола", author: "Рахель Бен-Давид" },
];

const infoCardData = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: "Изучение Торы",
    text: "Еженедельные уроки и лекции для всех уровней. Присоединяйтесь к нашим онлайн и офлайн классам.",
    button: { label: "Узнать больше", href: "#" },
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Общинная жизнь",
    text: "Более 500 семей объединены в нашей общине. Мы проводим вместе праздники, шаббаты и будни.",
    button: { label: "Наши общины", href: "#" },
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: "Благотворительность",
    text: "Цдака — одна из наших главных ценностей. Мы помогаем нуждающимся членам общины и за её пределами.",
    button: { label: "Помочь", href: "#" },
  },
];

// ── Section wrapper ────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 border-b border-zinc-100 last:border-none">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 px-6">{title}</h2>
      {children}
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TestComponentsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-200 px-6 py-8">
        <h1 className="text-3xl font-bold text-zinc-900">Component Gallery</h1>
        <p className="mt-1 text-zinc-500 text-sm">All custom cards and carousels in one place.</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ─── BookCard ─── */}
        <Section title="BookCard">
          <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              sampleBook,
              { ...sampleBook, id: "b2", title: "Путь праведника: Месилат Йешарим" },
              { ...sampleBook, id: "b3", title: "Мишна Тора Рамбама" },
            ].map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </Section>

        {/* ─── RecommendedBookCard ─── */}
        <Section title="RecommendedBookCard">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
            {[
              sampleBook,
              { ...sampleBook, id: "rb2", title: "Пятикнижие с комментариями Раши" },
              { ...sampleBook, id: "rb3", title: "Шулхан Арух: практическое руководство" },
            ].map((b) => (
              <RecommendedBookCard key={b.id} book={b} />
            ))}
          </div>
        </Section>

        {/* ─── ArticleCard ─── */}
        <Section title="ArticleCard">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 overflow-hidden">
            {[
              sampleArticle,
              { ...sampleArticle, id: "a2", title: "Молитва Амида: руководство", author: "Шломо Бергман" },
              { ...sampleArticle, id: "a3", title: "Что такое кашрут и зачем он нужен", author: "Хана Розенберг" },
            ].map((a) => (
              <ArticleCard key={a.id} article={a} className="border-r border-b border-zinc-100 last:border-r-0" />
            ))}
          </div>
        </Section>

        {/* ─── NewspaperCard ─── */}
        <Section title="NewspaperCard">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
            {newspapers.slice(0, 3).map((n) => (
              <NewspaperCard key={n.id} issue={n} />
            ))}
          </div>
        </Section>

        {/* ─── MediaCard ─── */}
        <Section title="MediaCard (videos / podcasts / articles)">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
            {[
              { ...sampleMediaItem, id: "m1", category: "videos" as const, title: "Новогоднее богослужение" },
              { ...sampleMediaItem, id: "m2", category: "podcasts" as const, title: "Беседа о смысле Шаббата" },
              { ...sampleMediaItem, id: "m3", category: "articles" as const, title: "Статья: Что значит быть евреем" },
            ].map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </Section>

        {/* ─── VideoCard ─── */}
        <Section title="VideoCard">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 overflow-hidden">
            {videos.slice(0, 3).map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </Section>

        {/* ─── PersonCard ─── */}
        <Section title="PersonCard">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 p-6">
            <PersonCard
              name="Рабби Давид Коэн"
              role="Главный раввин"
              initials="ДК"
              colorClass="from-blue-400 to-blue-600"
              description="Рабби Давид Коэн руководит общиной более 15 лет, известен своим глубоким знанием Торы и умением доступно объяснять сложные концепции."
              responsibilities="Галахические решения, духовное руководство, преподавание"
            />
            <PersonCard
              name="Мириам Штейн"
              role="Директор образования"
              initials="МШ"
              colorClass="from-violet-400 to-violet-600"
              description="Мириам возглавляет образовательные программы для детей и взрослых, создавая современные учебные курсы на основе традиционных методов."
              responsibilities="Учебные программы, детские классы, семинары"
            />
          </div>
        </Section>

        {/* ─── CommunityCard ─── */}
        <Section title="CommunityCard">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            <CommunityCard
              name="Синагога Бейт-Ам"
              address="ул. Большая Садовая, 12, Москва"
              leader="Рабби Шимон Кац"
              serviceTime="Пятница 19:00, Суббота 10:00"
              href="#"
            />
            <CommunityCard
              name="Еврейский культурный центр"
              address="пр. Невский, 56, Санкт-Петербург"
              leader="Рабби Авраам Левин"
              serviceTime="Суббота 10:30"
              href="#"
            />
            <CommunityCard
              name={"Общинный дом «Шалом»"}
              address="ул. Дерибасовская, 8, Одесса"
              leader="Рабби Йосеф Рабинович"
              serviceTime="Пятница 18:30, Суббота 9:30"
              href="#"
            />
          </div>
        </Section>

        {/* ─── InfoCards ─── */}
        <Section title="InfoCards">
          <InfoCards cards={infoCardData} />
        </Section>

        {/* ─── NewspaperCarousel ─── */}
        <Section title="NewspaperCarousel">
          <div className="p-6">
            <NewspaperCarousel issues={newspapers} />
          </div>
        </Section>

        {/* ─── EventCarousel ─── */}
        <Section title="EventCarousel">
          <div className="px-6">
            <EventCarousel heading="Ближайшие события" events={events} viewAllHref="#" viewAllCount={12} />
          </div>
        </Section>

        {/* ─── VideoCarousel ─── */}
        <Section title="VideoCarousel">
          <div className="px-6 bg-zinc-900 rounded-3xl py-8">
            <VideoCarousel videos={videos} />
          </div>
        </Section>
      </div>
    </main>
  );
}
