import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="flex flex-col items-start gap-3 rounded-3xl border border-white/60 bg-white/60 px-5 py-4 shadow-soft ring-1 ring-blush-200 backdrop-blur sm:flex-row sm:items-center">
        <div className="text-xs font-semibold text-ink/80 sm:flex-1 sm:text-sm">
          Made by me with all my love.
          <span className="ml-2 inline-flex items-center gap-1 text-brand-600">
            <Heart className="h-4 w-4 fill-brand-500" />
            <span>Always pink.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

