import { Music2, Pause, Play } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
};

export default function BackgroundMusic({ src, title }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [blocked, setBlocked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const canAutoplay = useMemo(() => {
    if (import.meta.env.MODE === "test") return false;
    if (typeof window === "undefined") return false;
    if (typeof window.matchMedia !== "function") return true;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.55;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setLoadError(true);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!canAutoplay) return;

    let cancelled = false;
    try {
      const attempt = audio.play();
      if (attempt && typeof (attempt as Promise<void>).catch === "function") {
        (attempt as Promise<void>).catch(() => {
          if (cancelled) return;
          try {
            audio.muted = true;
            setMuted(true);
            setBlocked(false);
            void audio.play();
          } catch {
            setBlocked(true);
          }
        });
      }
    } catch {
      try {
        audio.muted = true;
        setMuted(true);
        setBlocked(false);
        void audio.play();
      } catch {
        setBlocked(true);
      }
    }
    return () => {
      cancelled = true;
    };
  }, [canAutoplay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!muted) return;

    let armed = true;
    const enableSound = async () => {
      if (!armed) return;
      armed = false;
      try {
        audio.muted = false;
        setMuted(false);
        await audio.play();
      } catch {
        setBlocked(true);
      }
    };

    window.addEventListener("pointerdown", enableSound, { once: true });
    window.addEventListener("keydown", enableSound, { once: true });
    return () => {
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, [muted]);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    setBlocked(false);

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setBlocked(true);
      }
      return;
    }

    audio.pause();
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !audio.muted;
    audio.muted = next;
    setMuted(next);
  }

  return (
    <div className="pointer-events-auto w-full sm:w-auto">
      <audio ref={audioRef} src={src} preload="auto" autoPlay playsInline />

      <div className="flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 shadow-soft ring-1 ring-blush-200 backdrop-blur">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-soft">
          <Music2 className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-xs font-extrabold text-ink">{title}</div>
          {loadError ? (
            <div className="text-[11px] font-semibold text-ink/60">Audio file not found</div>
          ) : blocked ? (
            <div className="text-[11px] font-semibold text-ink/60">Tap play to start music</div>
          ) : muted ? (
            <div className="text-[11px] font-semibold text-ink/60">Tap anywhere to enable sound</div>
          ) : (
            <div className="text-[11px] font-semibold text-ink/60">Background music</div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-2 text-xs font-extrabold text-white shadow-soft transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            aria-label={playing ? "Pause music" : "Play music"}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span className="hidden sm:inline">{playing ? "Pause" : "Play"}</span>
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full bg-white/70 px-3 py-2 text-xs font-extrabold text-ink shadow-soft ring-1 ring-blush-200 transition hover:bg-blush-100 focus:outline-none focus:ring-2 focus:ring-brand-500/60"
            aria-label={muted ? "Unmute music" : "Mute music"}
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  );
}

