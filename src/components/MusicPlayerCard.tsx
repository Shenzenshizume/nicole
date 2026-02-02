import { cn } from "@/lib/utils";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Status = "idle" | "ready" | "playing" | "paused";

export default function MusicPlayerCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [trackName, setTrackName] = useState<string>("No track loaded");
  const [volume, setVolume] = useState(0.7);

  const canPlay = status !== "idle";
  const isPlaying = status === "playing";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    return () => {
      if (trackUrl) URL.revokeObjectURL(trackUrl);
    };
  }, [trackUrl]);

  const volumeIcon = useMemo(() => {
    return volume <= 0.01 ? VolumeX : Volume2;
  }, [volume]);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio || !trackUrl) return;

    if (audio.paused) {
      try {
        await audio.play();
        setStatus("playing");
      } catch {
        setStatus("paused");
      }
      return;
    }

    audio.pause();
    setStatus("paused");
  }

  function onPickFile(file: File) {
    const nextUrl = URL.createObjectURL(file);
    setTrackName(file.name);
    setTrackUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return nextUrl;
    });
    setStatus("ready");
  }

  function onEnded() {
    setStatus("paused");
  }

  const VolumeIcon = volumeIcon;

  return (
    <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft ring-1 ring-blush-200 backdrop-blur sm:p-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-semibold text-ink/60">Background Music (Placeholder)</div>
          <div className="mt-1 text-lg font-extrabold text-ink">{trackName}</div>
          <div className="mt-2 text-sm font-semibold text-ink/70">
            If you have a song you like (for example, one that feels like “dancing and dreaming”), add it here.
          </div>
        </div>

        <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-brand-500/40 bg-white/70 px-5 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:bg-blush-100 focus-within:ring-2 focus-within:ring-brand-500/60">
          <input
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={(e) => {
              const f = e.currentTarget.files?.[0];
              if (f) onPickFile(f);
              e.currentTarget.value = "";
            }}
          />
          <span>Choose audio file</span>
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!canPlay}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold shadow-soft transition focus:outline-none focus:ring-2 focus:ring-brand-500/70",
              canPlay ? "bg-brand-600 text-white hover:bg-brand-500" : "bg-white/60 text-ink/50",
            )}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>

          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-blush-200">
            <VolumeIcon className="h-4 w-4 text-ink/60" />
            <input
              aria-label="Volume"
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-2 w-full cursor-pointer accent-brand-600"
            />
            <span className="w-10 text-right text-xs font-semibold text-ink/60">{Math.round(volume * 100)}%</span>
          </div>
        </div>

        <div className="text-xs font-semibold text-ink/60">
          {trackUrl ? "Tip: Keep this tab open for continuous music." : "No audio yet — choose a file to enable playback."}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={trackUrl ?? undefined}
        onEnded={onEnded}
        onPlay={() => setStatus("playing")}
        onPause={() => setStatus((s) => (s === "playing" ? "paused" : s))}
        onCanPlay={() => setStatus((s) => (s === "idle" ? "ready" : s))}
      />
    </div>
  );
}

