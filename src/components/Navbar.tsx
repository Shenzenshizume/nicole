import { Heart, Music, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  icon: "sparkles" | "heart" | "music";
};

const icons = {
  sparkles: Sparkles,
  heart: Heart,
  music: Music,
} as const;

type Props = {
  activeId: string;
  items: NavItem[];
};

export default function Navbar({ activeId, items }: Props) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/50 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm font-extrabold text-ink shadow-soft ring-1 ring-blush-200"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blush-100">
            <Heart className="h-4 w-4 fill-brand-500 text-brand-600" />
          </span>
          <span>Nicole Missiona</span>
        </a>

        <nav className="hidden items-center gap-2 sm:flex" aria-label="Primary">
          {items.map((item) => {
            const Icon = icons[item.icon];
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-blush-100 focus:outline-none focus:ring-2 focus:ring-brand-500/60",
                  isActive ? "bg-blush-100 text-ink" : "text-ink/80",
                )}
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-brand-600" : "text-ink/60")} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

