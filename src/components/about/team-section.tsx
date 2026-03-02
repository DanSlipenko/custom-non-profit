import { Container } from "@/components/ui/container";
import { PersonCard } from "@/components/ui/person-card";
import { Badge } from "@/components/ui/badge";

const leaders = [
  {
    role: "Председатель Альянса",
    name: "Пастор Александр Соловьёв",
    initials: "АС",
    color: "from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
    description:
      "Более 20 лет преданного служения еврейскому народу. Александр отвечает за стратегическое развитие Альянса и координацию международных проектов.",
    responsibilities: "Стратегическое планирование, международные связи, представительство Альянса",
  },
  {
    role: "Заместитель председателя",
    name: "Пастор Давид Ромашко",
    initials: "ДР",
    color: "from-violet-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256",
    description:
      "Давид управляет операционной деятельностью и помогает общинам внедрять библейские принципы наставничества в повседневную жизнь верующих.",
    responsibilities: "Операционное управление, развитие программ наставничества",
  },
  {
    role: "Директор медиа-служения",
    name: "Мария Кузнецова",
    initials: "МК",
    color: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
    description:
      "Мария возглавляет работу с общественностью и медиа, создавая мост между древними истинами Писания и современным цифровым поколением.",
    responsibilities: "Связи с общественностью, медиа-контент, социальные сети",
  },
  {
    role: "Координатор общин",
    name: "Иосиф Варшавский",
    initials: "ИВ",
    color: "from-amber-500 to-orange-500",
    description: "Опытный координатор, помогающий пасторам и лидерам общин выстраивать крепкие взаимоотношения на межрегиональном уровне.",
    responsibilities: "Межрегиональная координация, поддержка лидеров общин",
  },
  {
    role: "Руководитель молодёжного служения",
    name: "Анна Лебедева",
    initials: "АЛ",
    color: "from-emerald-500 to-teal-600",
    description:
      "Анна вдохновляет молодое поколение всем сердцем искать Бога, отвечая за молодёжные конференции, лагеря и программы ученичества.",
    responsibilities: "Молодёжные программы, организация лагерей и конференций",
  },
  {
    role: "Ответственный за обучение",
    name: "Раввин Меир Гольдштейн",
    initials: "МГ",
    color: "from-cyan-500 to-blue-500",
    description:
      "Меир отвечает за разработку теологических учебных материалов и проведение семинаров по глубокому изучению Торы и Нового Завета.",
    responsibilities: "Теологическое образование, семинары, учебная литература",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-zinc-950/90 dark:bg-black">
      <Container className="py-16 lg:py-20">
        <div className="space-y-3 text-center">
          <Badge variant="outline" size="lg" className="!text-white">
            Руководство
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight text-white">Команда Альянса</h2>
          <p className="mx-auto max-w-xl text-white text-lg">
            Наша команда — служители с многолетним опытом, объединённые любовью к Богу, Его народу и Его Слову.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {leaders.map((l) => (
            <PersonCard
              key={l.name}
              name={l.name}
              role={l.role}
              imageSrc={l.image}
              description={l.description}
              responsibilities={l.responsibilities}
              initials={l.initials}
              colorClass={l.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
