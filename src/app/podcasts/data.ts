import { type MediaItem } from "@/lib/media-data";

/**
 * PODCAST DATA — edit this array to add/remove podcasts.
 * The most recent 6 will appear on the /media hub page.
 */
export const podcasts: MediaItem[] = [
  {
    id: "p1",
    category: "podcasts",
    title: "Вера в повседневной жизни",
    description: "Как применять библейские принципы каждый день.",
    date: "2026-02-14",
    author: "Мария Сидорова",
    href: "#",
    alliance: { name: "Альянс Благодати", href: "/communities/grace-downtown" },
  },
  {
    id: "p2",
    category: "podcasts",
    title: "Диалог о молитве",
    description: "Откровенный разговор о силе и значении молитвы.",
    date: "2026-02-07",
    author: "Пастор Иван",
    href: "#",
    alliance: { name: "Церковь Надежды", href: "/communities/hope-church" },
  },
  {
    id: "p3",
    category: "podcasts",
    title: "Семья и вера",
    description: "Как строить крепкую семью на основе веры.",
    date: "2026-01-28",
    author: "Алексей и Ольга",
    href: "#",
    alliance: { name: "Альянс Благодати", href: "/communities/grace-downtown" },
  },
  {
    id: "p4",
    category: "podcasts",
    title: "Молодёжь и вызовы",
    description: "Обсуждение актуальных вопросов молодого поколения.",
    date: "2026-01-15",
    author: "Дмитрий Козлов",
    href: "#",
  },
  {
    id: "p5",
    category: "podcasts",
    title: "Служение в обществе",
    description: "Как община может менять мир вокруг себя.",
    date: "2025-12-20",
    author: "Мария Сидорова",
    href: "#",
    alliance: { name: "Живая Вода", href: "/communities/living-water" },
  },
  {
    id: "p6",
    category: "podcasts",
    title: "История церкви",
    description: "Путешествие по ключевым моментам истории христианства.",
    date: "2025-12-05",
    author: "Пастор Иван",
    href: "#",
  },
  {
    id: "p7",
    category: "podcasts",
    title: "Музыка и поклонение",
    description: "Роль музыки в духовной жизни общины.",
    date: "2025-11-18",
    author: "Тимофей Лебедев",
    href: "#",
    alliance: { name: "Церковь Надежды", href: "/communities/hope-church" },
  },
];
