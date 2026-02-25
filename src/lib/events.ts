export interface EventDetail {
  slug: string;
  title: string;
  /** Category tag shown above the title (e.g. "Малая группа", "Конференция") */
  label: string;
  /** Display date (e.g. "2 февраля, 2026") */
  date: string;
  /** Display time (e.g. "18:00 – 20:00") */
  time: string;
  /** Short description for cards / meta */
  summary: string;
  /** Full description shown on the detail page */
  description: string;
  /** Who the event is for */
  audience: string;
  /** What to bring / how to prepare */
  whatToBring: string;
  /** Physical location name + address */
  location: string;
  /** Google Maps link */
  mapsUrl: string;
  /** Host / organizer name */
  hostName: string;
  /** Host role or title */
  hostRole: string;
  /** Background image URL */
  imageSrc: string;
  /** Slug of the associated community (optional) */
  communitySlug?: string;
}

export const events: EventDetail[] = [
  {
    slug: "zapusk-malyh-grupp",
    title: "Международная конференция",
    label: "Конференция",
    date: "2 - 4 марта, 2026 (Пн - Ср), 3 дня ",
    time: "18:00 – 20:00",
    summary: "Присоединяйтесь к запуску новых малых групп — место, где строятся настоящие отношения.",
    description:
      "Малые группы — это сердце нашей общины. Это неформальные еженедельные встречи по 6–12 человек, где мы вместе изучаем Библию, делимся жизнью, молимся друг за друга и просто проводим время вместе. На этой вводной встрече вы узнаете, как устроены малые группы, познакомитесь с лидерами и найдёте группу, которая подходит именно вам.",
    audience:
      "Для всех — как для новичков, так и для тех, кто давно в общине. Особенно приглашаем тех, кто хочет углубить свою веру и найти близкое общение.",
    whatToBring:
      "Возьмите с собой Библию (или телефон с приложением), хорошее настроение и готовность познакомиться с новыми людьми. Мы обеспечим горячие напитки и лёгкие закуски.",
    location: "123 Main St, Springfield, ST 12345",
    mapsUrl: "https://maps.google.com/?q=123+Main+St+Springfield+ST+12345",
    hostName: "Пастор Джон Смит",
    hostRole: "Координатор малых групп",
    imageSrc: "/images/conference.png",
    communitySlug: "grace-downtown",
  },
  {
    slug: "semejnyj-vecher",
    title: "Семейный вечер",
    label: "Семейное событие",
    date: "12 февраля, 2026",
    time: "17:00 – 20:00",
    summary: "Вечер для всей семьи — общение, игры, вкусная еда и время друг с другом.",
    description:
      "Приглашаем вас на тёплый семейный вечер! Это время, когда семьи нашей общины собираются вместе, чтобы отдохнуть, поиграть и насладиться общением. Будут настольные игры для взрослых, активности для детей, совместный ужин и короткое ободряющее слово. Приходите всей семьёй — для каждого найдётся что-то интересное.",
    audience: "Для семей с детьми любого возраста, пар и всех, кто хочет провести вечер в тёплой компании.",
    whatToBring:
      "Принесите одно блюдо на общий стол (салат, закуска или десерт). Если у вас есть любимая настольная игра — берите с собой! Для малышей будет отдельная зона с присмотром.",
    location: "456 Oak Ave, Springfield, ST 12345",
    mapsUrl: "https://maps.google.com/?q=456+Oak+Ave+Springfield+ST+12345",
    hostName: "Пастор Сара Джонсон",
    hostRole: "Лидер семейного служения",
    imageSrc: "/church1.jpg",
    communitySlug: "grace-westside",
  },
  {
    slug: "molodezhnaya-konferenciya",
    title: "Молодёжная конференция",
    label: "Конференция",
    date: "27–28 февраля, 2026",
    time: "10:00 – 18:00 (оба дня)",
    summary: "Два дня поклонения, обучения и общения для молодёжи.",
    description:
      "Молодёжная конференция — это два насыщенных дня, посвящённых росту в вере, поклонению и глубокому общению. Вас ждут вдохновляющие проповеди, воркшопы по практическим вопросам веры, живое поклонение и много времени для неформального общения. Конференция — отличная возможность найти единомышленников и получить вдохновение для следующего шага в вере.",
    audience: "Молодёжь и молодые взрослые от 16 до 30 лет. Приглашайте друзей — регистрация открыта для всех!",
    whatToBring:
      "Удобная одежда, блокнот для заметок, Библия. Обед включён в программу обоих дней. Если хотите остаться на ночь — возьмите спальник и средства гигиены.",
    location: "789 Elm Dr, Springfield, ST 12345",
    mapsUrl: "https://maps.google.com/?q=789+Elm+Dr+Springfield+ST+12345",
    hostName: "Пастор Михаил Ли",
    hostRole: "Лидер молодёжного служения",
    imageSrc: "/church1.jpg",
    communitySlug: "grace-northpoint",
  },
  {
    slug: "vechernyaya-molitva",
    title: "Вечерняя молитва",
    label: "Молитва",
    date: "Каждую среду",
    time: "19:00 – 20:30",
    summary: "Еженедельная встреча для совместной молитвы и поклонения.",
    description:
      "Каждую среду мы собираемся в небольшом кругу для совместной молитвы. Это спокойное, наполненное Божьим присутствием время, когда мы молимся за нашу общину, наш город и друг за друга. Встреча включает короткое размышление над Писанием, время поклонения и свободную молитву. Приходите, даже если вы только начинаете свой путь в молитве.",
    audience: "Для всех, кто хочет расти в молитвенной жизни — от новичков до опытных молитвенников.",
    whatToBring: "Библию и открытое сердце. Горячий чай и кофе будут на месте.",
    location: "123 Main St, Springfield, ST 12345",
    mapsUrl: "https://maps.google.com/?q=123+Main+St+Springfield+ST+12345",
    hostName: "Пастор Елена Петрова",
    hostRole: "Координатор молитвенного служения",
    imageSrc: "/church1.jpg",
    communitySlug: "grace-riverside",
  },
  {
    slug: "izuchenie-biblii",
    title: "Изучение Библии",
    label: "Малая группа",
    date: "Каждый четверг",
    time: "19:00 – 21:00",
    summary: "Углублённое изучение Писания в неформальной обстановке.",
    description:
      "Присоединяйтесь к нашему еженедельному изучению Библии. Мы разбираем книги Библии по главам, обсуждаем их значение и применение в повседневной жизни. Атмосфера дружеская и открытая — вопросы приветствуются! Сейчас мы изучаем Евангелие от Иоанна и приглашаем вас присоединиться на любом этапе.",
    audience: "Для всех уровней — как для тех, кто только начинает читать Библию, так и для тех, кто изучает её много лет.",
    whatToBring: "Библию (любой перевод), ручку и блокнот. Мы будем рады, если вы принесёте что-нибудь к чаю — но это не обязательно.",
    location: "654 Lake Blvd, Springfield, ST 12345",
    mapsUrl: "https://maps.google.com/?q=654+Lake+Blvd+Springfield+ST+12345",
    hostName: "Пастор Дэвид Ким",
    hostRole: "Пастор-учитель",
    imageSrc: "/church1.jpg",
    communitySlug: "grace-lakeview",
  },
];

export function getEventBySlug(slug: string): EventDetail | undefined {
  return events.find((e) => e.slug === slug);
}

export function getEventsByCommunity(communitySlug: string): EventDetail[] {
  return events.filter((e) => e.communitySlug === communitySlug);
}
