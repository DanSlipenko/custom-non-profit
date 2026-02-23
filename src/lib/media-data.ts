export type MediaCategory = "videos" | "podcasts" | "articles" | "books" | "radio";

/** Structured content block for articles */
export type ArticleContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  date: string;
  imageSrc?: string;
  href?: string;
  category: MediaCategory;
  author?: string;
  /** Link to the author/alliance page (e.g. /communities/grace-downtown) */
  authorHref?: string;
  /** Alliance this item is associated with */
  alliance?: {
    name: string;
    href?: string;
  };
  /** Rich body content for article detail pages */
  content?: ArticleContentBlock[];
}

/* ─── Category metadata ─── */

export interface CategoryMeta {
  slug: MediaCategory;
  label: string;
  description: string;
  alliance?: {
    name: string;
    href?: string;
  };
}

export const categories: CategoryMeta[] = [
  {
    slug: "videos",
    label: "Видео",
    description: "Видеоматериалы, записи служений и обучающие ролики.",
    alliance: { name: "Grace Downtown", href: "/communities/grace-downtown" },
  },
  {
    slug: "podcasts",
    label: "Подкасты",
    description: "Аудиобеседы, интервью и размышления о вере.",
    alliance: { name: "Grace Downtown", href: "/communities/grace-downtown" },
  },
  {
    slug: "articles",
    label: "Статьи",
    description: "Публикации и материалы для духовного роста.",
    alliance: { name: "Grace Downtown", href: "/communities/grace-downtown" },
  },
  {
    slug: "books",
    label: "Книги",
    description: "Рекомендованные книги и литература для изучения.",
    alliance: { name: "Grace Downtown", href: "/communities/grace-downtown" },
  },
  {
    slug: "radio",
    label: "Радио",
    description: "Радиопередачи и аудиозаписи эфиров.",
    alliance: { name: "Grace Downtown", href: "/communities/grace-downtown" },
  },
];

/* ─── Import data from each sub-page's own data file ─── */

import { videos } from "@/app/media/videos/data";
import { podcasts } from "@/app/media/podcasts/data";
import { articles } from "@/app/media/articles/data";
import { books } from "@/app/media/books/data";
import { radioItems } from "@/app/media/radio/data";

const allItems: Record<MediaCategory, MediaItem[]> = {
  videos,
  podcasts,
  articles,
  books,
  radio: radioItems,
};

/* ─── Helpers ─── */

function sortByDate(items: MediaItem[]): MediaItem[] {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getItemsByCategory(category: MediaCategory): MediaItem[] {
  return sortByDate(allItems[category] || []);
}

export function getRecentByCategory(category: MediaCategory, limit = 6): MediaItem[] {
  return getItemsByCategory(category).slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
