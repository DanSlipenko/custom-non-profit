import { type MediaItem } from "@/lib/media-data";

/**
 * RADIO DATA — edit this array to add/remove radio programs.
 * The most recent 6 will appear on the /media hub page.
 */
export const radioItems: MediaItem[] = [
  {
    id: "r1",
    category: "radio",
    title: "Утренняя программа — Слово на день",
    description: "Ежедневное краткое размышление над библейским стихом.",
    date: "2026-02-15",
    author: "Ведущий: Андрей",
    href: "#",
  },
  {
    id: "r2",
    category: "radio",
    title: "Вечерний эфир — Вопросы веры",
    description: "Ответы на вопросы слушателей о вере и жизни.",
    date: "2026-02-08",
    author: "Пастор Иван",
    href: "#",
  },
  {
    id: "r3",
    category: "radio",
    title: "Музыкальная передача",
    description: "Лучшая христианская музыка и истории за песнями.",
    date: "2026-01-30",
    author: "Тимофей Лебедев",
    href: "#",
  },
  {
    id: "r4",
    category: "radio",
    title: "Детская программа — Библейские герои",
    description: "Истории из Библии, адаптированные для детей.",
    date: "2026-01-18",
    author: "Ольга Иванова",
    href: "#",
  },
  {
    id: "r5",
    category: "radio",
    title: "Интервью — Жизнь в миссии",
    description: "Беседы с людьми, посвятившими жизнь служению.",
    date: "2025-12-22",
    author: "Мария Сидорова",
    href: "#",
  },
  {
    id: "r6",
    category: "radio",
    title: "Субботний обзор",
    description: "Еженедельный обзор событий в общине и мире.",
    date: "2025-12-08",
    author: "Ведущий: Андрей",
    href: "#",
  },
];
