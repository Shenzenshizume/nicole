import { Heart, Sparkles } from "lucide-react";

const items = [
  { top: "12%", left: "10%", size: 16, type: "sparkle" },
  { top: "18%", left: "85%", size: 18, type: "heart" },
  { top: "42%", left: "6%", size: 14, type: "heart" },
  { top: "52%", left: "92%", size: 16, type: "sparkle" },
  { top: "74%", left: "12%", size: 18, type: "sparkle" },
  { top: "82%", left: "88%", size: 14, type: "heart" },
];

export default function FloatingDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it, idx) => (
        <div
          key={idx}
          className="absolute animate-floaty"
          style={{ top: it.top, left: it.left, animationDelay: `${idx * 0.35}s` }}
        >
          <div className="animate-twinkle" style={{ animationDelay: `${idx * 0.22}s` }}>
            {it.type === "heart" ? (
              <Heart
                size={it.size}
                className="fill-brand-500 text-brand-600 opacity-60 drop-shadow"
              />
            ) : (
              <Sparkles size={it.size} className="text-lilac opacity-70 drop-shadow" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

