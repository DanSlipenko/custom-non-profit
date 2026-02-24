import { cn } from "@/lib/cn";
import { Badge } from "./badge";

export interface PersonCardProps {
  name: string;
  role: string;
  /** Optional avatar image URL */
  imageSrc?: string;
  /** Fallback initials if no image is provided */
  initials?: string;
  /** Gradient color class for the background and fallback avatar */
  colorClass?: string;
  /** Optional bio/description text */
  description?: string;
  /** Optional responsibilities text */
  responsibilities?: string;
  /** Optional extra classes */
  className?: string;
}

export function PersonCard({
  name,
  role,
  imageSrc,
  initials,
  description,
  responsibilities,
  colorClass = "from-zinc-400 to-zinc-500",
  className,
}: PersonCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl bg-zinc-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}>
      {/* Left Media Area */}
      <div className={cn("relative h-48 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden bg-gradient-to-br", !imageSrc && colorClass)}>
        <div className="absolute inset-0 z-10 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-black/10 dark:to-zinc-900/40 sm:to-zinc-900" />
        {imageSrc ?
          <img src={imageSrc} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        : <div className="relative flex h-full w-full items-center justify-center text-5xl font-bold text-white shadow-inner">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-black/5 blur-xl dark:bg-white/5" />
            <span className="relative z-10 drop-shadow-md">{initials}</span>
          </div>
        }

        {/* Role Pill */}
        <div className="absolute bottom-4 left-1/2 z-20 w-max -translate-x-1/2 rounded-full bg-white/20 px-6 py-3 text-base font-semibold tracking-wider text-zinc-100 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-950/80 dark:text-zinc-200">
          {role}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 border-l border-zinc-200 dark:border-zinc-800">
        <div className="flex-1 flex flex-col justify-center space-y-4 mb-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">{name}</h3>

          {description && <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>}
        </div>

        {responsibilities && (
          <div className="pt-5 border-t border-zinc-200 dark:border-zinc-800 shrink-0">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Ответственность</p>
            <p className="text-base text-zinc-900 dark:text-zinc-100 font-medium">{responsibilities}</p>
          </div>
        )}
      </div>
    </div>
  );
}
