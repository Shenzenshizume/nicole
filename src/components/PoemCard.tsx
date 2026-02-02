import { Copy, Sparkles } from "lucide-react";
import { getPoemText, poemLines } from "@/utils/poem";

type Props = {
  onCopy: (text: string) => void;
};

export default function PoemCard({ onCopy }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-soft ring-1 ring-blush-200 backdrop-blur">
      <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-blush-100 via-white/40 to-blush-200/60 px-6 py-4">
        <div className="inline-flex items-center gap-2 text-sm font-extrabold text-ink">
          <Sparkles className="h-4 w-4 text-lilac" />
          <span>sana ikaw na</span>
        </div>
        <button
          type="button"
          onClick={() => onCopy(getPoemText())}
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-xs font-extrabold text-white shadow-soft transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
        >
          <Copy className="h-4 w-4" />
          <span>Copy poem</span>
        </button>
      </div>

      <div className="px-6 py-6 sm:px-8">
        <div className="rounded-2xl bg-white/60 px-5 py-5 ring-1 ring-blush-200">
          <div className="space-y-3 text-base font-semibold leading-relaxed text-ink/85 sm:text-lg">
            {poemLines.map((line) => (
              <p key={line} className="italic">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

