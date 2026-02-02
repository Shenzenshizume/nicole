export default function MiniDancingCouple() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-28 w-28 sm:h-32 sm:w-32"
      role="img"
      aria-label="Dancing couple"
    >
      <defs>
        <linearGradient id="miniDress" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF2D86" />
          <stop offset="1" stopColor="#FF7AB7" />
        </linearGradient>
        <linearGradient id="miniSuit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C4DFF" />
          <stop offset="1" stopColor="#B39DFF" />
        </linearGradient>
      </defs>

      <g className="origin-center animate-dance-wiggle">
        <circle cx="92" cy="80" r="16" fill="#FFD7EA" />
        <path d="M76 102c5-12 10-19 16-19s11 7 16 19" fill="#FFD7EA" />
        <path
          d="M56 156c16-40 32-52 48-52s32 12 48 52c-26 14-48 20-72 20s-46-6-72-20Z"
          fill="url(#miniDress)"
          opacity="0.92"
        />

        <circle cx="150" cy="92" r="15" fill="#FFE3F0" />
        <path d="M136 112c5-12 9-19 14-19s9 7 14 19" fill="#FFE3F0" />
        <path
          d="M124 164c10-34 22-54 36-54s26 20 36 54c-20 10-36 14-54 14s-34-4-54-14Z"
          fill="url(#miniSuit)"
          opacity="0.92"
        />

        <path d="M114 74c8-14 18-22 30-22s22 8 30 22c-10 6-18 8-30 8s-20-2-30-8Z" fill="#FFB3D1" opacity="0.7" />
      </g>
    </svg>
  );
}

