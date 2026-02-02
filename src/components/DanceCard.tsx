import { cn } from "@/lib/utils";
import { PartyPopper, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type DanceStyle = "bounce" | "wiggle";

export default function DanceCard() {
  const [isDancing, setIsDancing] = useState(false);
  const [style, setStyle] = useState<DanceStyle>("bounce");

  const dancerAnim = useMemo(() => {
    if (!isDancing) return "";
    return style === "bounce" ? "animate-dance-bounce" : "animate-dance-wiggle";
  }, [isDancing, style]);

  return (
    <div className="grid grid-cols-1 gap-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft ring-1 ring-blush-200 backdrop-blur sm:grid-cols-2 sm:p-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold text-ink/80 ring-1 ring-blush-200">
          <PartyPopper className="h-4 w-4 text-brand-600" />
          <span>Dance Time</span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold text-ink">Press the button and let the cuteness move</h3>
        <p className="mt-2 text-sm font-semibold text-ink/75">
          A tiny animation you can toggle anytime.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setIsDancing((v) => !v)}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold shadow-soft transition focus:outline-none focus:ring-2 focus:ring-brand-500/70",
              isDancing ? "bg-ink text-white hover:bg-ink/90" : "bg-brand-600 text-white hover:bg-brand-500",
            )}
          >
            <Sparkles className="h-4 w-4" />
            <span>{isDancing ? "Stop" : "Dance"}</span>
          </button>

          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-ink/70" htmlFor="dance-style">
              Dance style
            </label>
            <select
              id="dance-style"
              value={style}
              onChange={(e) => setStyle(e.target.value as DanceStyle)}
              className="h-10 w-full rounded-xl border border-blush-200 bg-white/70 px-3 text-sm font-semibold text-ink shadow-sm outline-none ring-0 focus:border-brand-500/60"
            >
              <option value="bounce">Bounce</option>
              <option value="wiggle">Wiggle</option>
            </select>
          </div>

          <p className="text-xs font-semibold text-ink/60">Tip: Turn on music below to make it feel extra alive.</p>
        </div>
      </div>

      <div className="relative">
        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blush-100 via-white/40 to-blush-200/60 ring-1 ring-blush-200 sm:h-72">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-500/15 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-lilac/15 blur-2xl" />

          <div className={cn("relative", dancerAnim)}>
            <div className="h-40 w-40 rounded-[44px] bg-gradient-to-br from-brand-500 to-brand-600 shadow-soft">
              <div className="absolute left-10 top-16 h-4 w-4 rounded-full bg-white/95" />
              <div className="absolute right-10 top-16 h-4 w-4 rounded-full bg-white/95" />
              <div className="absolute left-1/2 top-28 h-2 w-10 -translate-x-1/2 rounded-full bg-white/90" />
              <div className="absolute -left-4 top-10 h-10 w-10 rounded-3xl bg-white/20" />
              <div className="absolute -right-4 top-10 h-10 w-10 rounded-3xl bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

