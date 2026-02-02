import { HeartHandshake } from "lucide-react";

export default function AboutCard() {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft ring-1 ring-blush-200 backdrop-blur sm:p-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold text-ink/80 ring-1 ring-blush-200">
        <HeartHandshake className="h-4 w-4 text-brand-600" />
        <span>Talking stage, gentle feelings, soft vibes</span>
      </div>

      <p className="text-base text-ink/80 sm:text-lg">
        This page is a simple way to say: I’m grateful we met, and I like getting to know you. If you ever read this,
        I hope it feels like a warm pink hug.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink/70 ring-1 ring-blush-200">
          Kind
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink/70 ring-1 ring-blush-200">
          Sweet
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink/70 ring-1 ring-blush-200">
          Bright energy
        </span>
      </div>
    </div>
  );
}

