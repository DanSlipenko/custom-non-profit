import { type MediaItem } from "@/lib/media-data";

/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  VIDEO DATA — edit this array to add/remove videos  ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * Add a new video by copying one of the objects below and
 * changing the fields. The most recent 6 (by date) will
 * automatically appear on the /media hub page.
 *
 * author     → alliance/community name that posted the video
 * authorHref → link to the alliance's page (e.g. /communities/grace-downtown)
 *
 * ── Pinning ──
 * primaryVideoId   → (optional) id of the video shown in the big featured slot
 * highlightedIds   → (optional) ids of videos shown in a highlighted row above the grid
 * If primaryVideoId is not set, the most recent video is used.
 */

/** Optional: set a specific video as the primary featured video */
export const primaryVideoId: string | undefined = "v1";

/** Optional: set videos to highlight at the top (shown before the main grid) */
export const highlightedIds: string[] = ["v2", "v3"];

export const videos: MediaItem[] = [
  {
    id: "v1",
    category: "videos",
    title: "Воскресное служение — Февраль 2026",
    description: "Запись воскресного служения с участием хора и проповедью пастора.",
    date: "2026-02-16",
    author: "Grace Downtown",
    authorHref: "/communities/grace-downtown",
    imageSrc: "/cc-banner.jpg",
    href: "#",
  },
  {
    id: "v2",
    category: "videos",
    title: "Молодёжная конференция 2026",
    description: "Основные моменты молодёжной конференции «Вера и будущее».",
    date: "2026-02-10",
    author: "Grace Westside",
    authorHref: "/communities/grace-westside",
    imageSrc: "/church1.jpg",
    href: "#",
  },
  {
    id: "v3",
    category: "videos",
    title: "Рождественский концерт",
    description: "Праздничный концерт с участием музыкальных групп общины.",
    date: "2025-12-25",
    author: "Grace Northpoint",
    authorHref: "/communities/grace-northpoint",
    imageSrc: "/hero.jpg",
    href: "#",
  },
  {
    id: "v4",
    category: "videos",
    title: "Интервью с миссионерами",
    description: "Беседы с миссионерами о их служении и опыте в разных странах.",
    date: "2025-12-15",
    author: "Grace Eastgate",
    authorHref: "/communities/grace-eastgate",
    imageSrc: "/cc-banner.jpg",
    href: "#",
  },
  {
    id: "v5",
    category: "videos",
    title: "Библейский разбор: Послание к Римлянам",
    description: "Подробный разбор ключевых глав Послания к Римлянам.",
    date: "2025-11-20",
    author: "Grace Downtown",
    authorHref: "/communities/grace-downtown",
    imageSrc: "/church1.jpg",
    href: "#",
  },
  {
    id: "v6",
    category: "videos",
    title: "Свидетельства — Истории веры",
    description: "Личные истории людей, чья жизнь изменилась благодаря вере.",
    date: "2025-11-10",
    author: "Grace Lakeview",
    authorHref: "/communities/grace-lakeview",
    imageSrc: "/hero.jpg",
    href: "#",
  },
  {
    id: "v7",
    category: "videos",
    title: "Пасхальное служение 2025",
    description: "Запись пасхального богослужения с крещением.",
    date: "2025-04-20",
    author: "Grace Riverside",
    authorHref: "/communities/grace-riverside",
    imageSrc: "/cc-banner.jpg",
    href: "#",
  },
];
