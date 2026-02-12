export interface Community {
  slug: string;
  name: string;
  address: string;
  leader: string;
  serviceTime: string;
  /** Short description shown on the landing page */
  description: string;
  /** Background image for the hero section */
  imageSrc?: string;
  /** Google Maps link */
  mapsUrl?: string;
}

export const communities: Community[] = [
  {
    slug: "grace-downtown",
    name: "Grace Downtown",
    address: "123 Main St, Springfield, ST 12345",
    leader: "Pastor John Smith",
    serviceTime: "Воскресенье, 10:00",
    imageSrc: "/church1.jpg",
    description:
      "Grace Downtown — это сердце нашей ассоциации. Мы расположены в центре города и открыты для каждого, кто ищет общение, поклонение и рост в вере.",
    mapsUrl: "https://maps.google.com/?q=123+Main+St+Springfield+ST+12345",
  },
  {
    slug: "grace-westside",
    name: "Grace Westside",
    address: "456 Oak Ave, Springfield, ST 12345",
    leader: "Pastor Sarah Johnson",
    serviceTime: "Воскресенье, 11:00",
    description:
      "Grace Westside — это тёплая и гостеприимная община на западе города. Здесь каждый найдёт своё место для служения и роста.",
    mapsUrl: "https://maps.google.com/?q=456+Oak+Ave+Springfield+ST+12345",
  },
  {
    slug: "grace-northpoint",
    name: "Grace Northpoint",
    address: "789 Elm Dr, Springfield, ST 12345",
    leader: "Pastor Michael Lee",
    serviceTime: "Воскресенье, 9:30",
    description:
      "Grace Northpoint объединяет семьи и молодёжь северной части города. Наше служение сфокусировано на изучении Писания и общении.",
    mapsUrl: "https://maps.google.com/?q=789+Elm+Dr+Springfield+ST+12345",
  },
  {
    slug: "grace-eastgate",
    name: "Grace Eastgate",
    address: "321 Pine Rd, Springfield, ST 12345",
    leader: "Pastor Anna Davis",
    serviceTime: "Воскресенье, 10:30",
    description: "Grace Eastgate — активная община, которая служит через благотворительность, поддержку и заботу о ближнем.",
    mapsUrl: "https://maps.google.com/?q=321+Pine+Rd+Springfield+ST+12345",
  },
  {
    slug: "grace-lakeview",
    name: "Grace Lakeview",
    address: "654 Lake Blvd, Springfield, ST 12345",
    leader: "Pastor David Kim",
    serviceTime: "Суббота, 17:00",
    description: "Grace Lakeview — уютная община у озера. Мы проводим субботние служения и активно участвуем в жизни нашего района.",
    mapsUrl: "https://maps.google.com/?q=654+Lake+Blvd+Springfield+ST+12345",
  },
  {
    slug: "grace-riverside",
    name: "Grace Riverside",
    address: "987 River Ln, Springfield, ST 12345",
    leader: "Pastor Elena Petrova",
    serviceTime: "Воскресенье, 10:00",
    description: "Grace Riverside — это место, где вера и служение переплетаются. Мы стремимся быть светом для нашего сообщества.",
    mapsUrl: "https://maps.google.com/?q=987+River+Ln+Springfield+ST+12345",
  },
  {
    slug: "grace-hillcrest",
    name: "Grace Hillcrest",
    address: "159 Hill St, Springfield, ST 12345",
    leader: "Pastor Mark Wilson",
    serviceTime: "Воскресенье, 11:30",
    description: "Grace Hillcrest расположена в живописном районе на холме. Наша община — это семья, где каждый голос важен.",
    mapsUrl: "https://maps.google.com/?q=159+Hill+St+Springfield+ST+12345",
  },
  {
    slug: "grace-southpark",
    name: "Grace Southpark",
    address: "753 Park Way, Springfield, ST 12345",
    leader: "Pastor Julia Chen",
    serviceTime: "Воскресенье, 9:00",
    description: "Grace Southpark — молодая и динамичная община. Мы верим, что каждый может найти своё призвание и расти в вере.",
    mapsUrl: "https://maps.google.com/?q=753+Park+Way+Springfield+ST+12345",
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
