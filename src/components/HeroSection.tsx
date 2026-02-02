import { ArrowDown, Heart, Sparkles } from "lucide-react";
import FloatingDecor from "@/components/FloatingDecor";

type Props = {
  onPrimary: () => void;
  onSecondary: () => void;
};

export default function HeroSection({ onPrimary, onSecondary }: Props) {
  return (
    <section id="hero" className="relative px-4 pb-8 pt-10 sm:pb-10 sm:pt-14">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 sm:grid-cols-2">
        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink shadow-soft ring-1 ring-blush-200">
            <Sparkles className="h-4 w-4 text-lilac" />
            <span>Cute pink animated single-page</span>
          </div>

          <h1 className="font-cute text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Nicole <span className="text-brand-600">Missiona</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-ink/80 sm:text-lg">
            A small, soft page made for the sweetest kind of "hi"—with a Tagalog poem, a dancing moment, and a music
            player placeholder.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onPrimary}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Read the poem</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onSecondary}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-500/40 bg-white/70 px-5 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:bg-blush-100 focus:outline-none focus:ring-2 focus:ring-brand-500/60"
            >
              <Sparkles className="h-4 w-4 text-lilac" />
              <span>Let’s dance</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-ink/70">
            <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-blush-200">Pink theme</span>
            <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-blush-200">Cute animations</span>
            <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-blush-200">Deployable to Vercel</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-blush-100/70 via-white/30 to-blush-200/50" />
            <div className="relative">
              <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-blush-100 ring-1 ring-blush-200 sm:h-72 sm:w-72">
                <div className="relative h-44 w-44 rounded-[40px] bg-gradient-to-br from-brand-500 to-brand-600 shadow-soft sm:h-56 sm:w-56">
                  <div className="absolute left-10 top-16 h-4 w-4 rounded-full bg-white/95" />
                  <div className="absolute right-10 top-16 h-4 w-4 rounded-full bg-white/95" />
                  <div className="absolute left-1/2 top-24 h-2 w-8 -translate-x-1/2 rounded-full bg-white/90" />
                  <div className="absolute -left-7 top-10 h-16 w-16 rounded-3xl bg-blush-200/60 blur-md" />
                  <div className="absolute -right-6 bottom-6 h-14 w-14 rounded-3xl bg-lilac/20 blur-md" />
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-ink/75">
                A tiny cute character to keep the page smiling.
              </p>
            </div>
          </div>
          <FloatingDecor />
        </div>
      </div>
    </section>
  );
}

