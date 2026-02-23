import { cn } from "@/lib/cn";

export interface PersonCardProps {
  name: string;
  role: string;
  /** Optional avatar image URL */
  imageSrc?: string;
  /** Fallback initials if no image is provided */
  initials?: string;
  /** Gradient color class for the background and fallback avatar */
  colorClass?: string;
  /** Optional extra classes */
  className?: string;
}

export function PersonCard({ name, role, imageSrc, initials, colorClass = "from-zinc-400 to-zinc-500", className }: PersonCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}>
      {/* Background Banner */}
      <div className={cn("relative h-32 bg-gradient-to-br", !imageSrc && colorClass)}>
        {imageSrc ?
          <>
            <img src={imageSrc} alt="" className="h-full w-full object-cover opacity-40 blur-md dark:opacity-30" />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
          </>
        : <>
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute -right-2 bottom-0 h-16 w-16 rounded-full bg-white/10" />
          </>
        }
      </div>

      {/* Avatar Container */}
      <div className="relative -mt-16 flex flex-col items-center px-6 pb-8 text-center">
        <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full ring-4 ring-white shadow-xl dark:ring-zinc-950">
          {imageSrc ?
            <img src={imageSrc} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          : <div
              className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br text-3xl font-bold text-white", colorClass)}>
              {initials}
            </div>
          }
        </div>

        <div className="mt-5 space-y-1.5">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">{name}</h3>
          <p className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
