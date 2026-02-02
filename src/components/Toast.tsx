import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

type Props = {
  open: boolean;
  message: string;
};

export default function Toast({ open, message }: Props) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 left-1/2 z-50 w-[min(520px,calc(100%-2rem))] -translate-x-1/2 transition",
        "opacity-100",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-soft ring-1 ring-blush-200 backdrop-blur">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 ring-1 ring-blush-200">
          <CheckCircle2 className="h-5 w-5 text-brand-600" />
        </span>
        <div className="text-sm font-semibold text-ink/80">{message}</div>
      </div>
    </div>
  );
}

