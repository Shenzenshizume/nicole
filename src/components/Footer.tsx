import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="flex flex-col items-start justify-between gap-3 rounded-3xl border border-white/60 bg-white/60 px-5 py-4 shadow-soft ring-1 ring-blush-200 backdrop-blur sm:flex-row sm:items-center">
        <div className="text-sm font-semibold text-ink/80">
          Made by me with all my love.
          <span className="ml-2 inline-flex items-center gap-1 text-brand-600">
            <Heart className="h-4 w-4 fill-brand-500" />
            <span>Always pink.</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-extrabold text-ink shadow-soft ring-1 ring-blush-200 transition hover:bg-blush-100 focus:outline-none focus:ring-2 focus:ring-brand-500/60"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4 text-ink/70" />
            <span>GitHub</span>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-2 text-xs font-extrabold text-white shadow-soft transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Deploy on Vercel</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

