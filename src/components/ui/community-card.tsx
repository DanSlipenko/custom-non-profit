import { cn } from "@/lib/cn";
import { cardHoverCn } from "@/lib/variants";

export interface CommunityCardProps {
  /** Path or URL for the community image (optional — shows placeholder if omitted) */
  imageSrc?: string;
  imageAlt?: string;
  /** Community name */
  name: string;
  /** Physical address */
  address: string;
  /** Community leader name */
  leader?: string;
  /** Service start time */
  serviceTime?: string;
  /** Optional link destination */
  href?: string;
  className?: string;
}

export function CommunityCard({ imageSrc, imageAlt, name, address, leader, serviceTime, href, className }: CommunityCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        cn("group flex flex-col overflow-hidden rounded-3xl bg-white group", cardHoverCn),
        href && "cursor-pointer",
        className,
      )}>
      {/* Image area — ~65% of card height */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {imageSrc ?
          <img
            src={imageSrc}
            alt={imageAlt || name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        : <div className="flex h-full w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-zinc-300 dark:text-zinc-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
              />
            </svg>
            1
          </div>
        }
      </div>

      {/* Info area */}
      <div className="flex flex-1 flex-col justify-center p-6">
        <h3 className="text-lg font-semibold leading-snug text-zinc-950 group-hover:text-blue-600 dark:text-white">{name}</h3>
        <p className="mt-1 leading-relaxed text-zinc-500 dark:text-zinc-400">{address}</p>
        {leader && (
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Лидер:</span> {leader}
          </p>
        )}
        {serviceTime && (
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Служение:</span> {serviceTime}
          </p>
        )}
      </div>
    </Wrapper>
  );
}
