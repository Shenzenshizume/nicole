export default function DancingCouple() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-soft ring-1 ring-blush-200 backdrop-blur">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-6 h-14 w-14 rounded-full bg-blush-100 blur-2xl" />
        <div className="absolute bottom-8 right-10 h-16 w-16 rounded-full bg-blush-200 blur-2xl" />
      </div>

      <svg
        viewBox="0 0 320 320"
        className="h-full max-h-[360px] w-full max-w-[360px] p-8"
        role="img"
        aria-label="Dancing couple illustration"
      >
        <defs>
          <linearGradient id="dress" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF2D86" />
            <stop offset="1" stopColor="#FF7AB7" />
          </linearGradient>
          <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C4DFF" />
            <stop offset="1" stopColor="#B39DFF" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#FF5FA2" floodOpacity="0.22" />
          </filter>
        </defs>

        <g filter="url(#soft)" className="origin-center animate-dance-wiggle">
          <path
            d="M88 200c20-54 40-70 60-70s40 16 60 70c-32 18-60 26-90 26s-58-8-90-26Z"
            fill="url(#dress)"
            opacity="0.92"
          />
          <circle cx="128" cy="108" r="22" fill="#FFD7EA" />
          <path d="M110 140c6-16 14-26 18-26s12 10 18 26" fill="#FFD7EA" />
          <path d="M108 156c-18 8-28 22-30 42" stroke="#FFD7EA" strokeWidth="14" strokeLinecap="round" />
          <path d="M148 156c20 6 34 18 44 36" stroke="#FFD7EA" strokeWidth="14" strokeLinecap="round" />

          <path
            d="M200 210c12-46 28-72 48-72s36 26 48 72c-26 16-48 22-72 22s-46-6-72-22Z"
            fill="url(#suit)"
            opacity="0.92"
          />
          <circle cx="238" cy="122" r="20" fill="#FFE3F0" />
          <path d="M220 148c6-16 12-26 18-26s12 10 18 26" fill="#FFE3F0" />
          <path d="M218 166c-20 8-30 22-32 44" stroke="#FFE3F0" strokeWidth="14" strokeLinecap="round" />
          <path d="M258 166c18 6 30 18 38 34" stroke="#FFE3F0" strokeWidth="14" strokeLinecap="round" />

          <path
            d="M160 86c10-18 24-28 40-28s30 10 40 28c-10 8-22 12-40 12s-30-4-40-12Z"
            fill="#FFB3D1"
            opacity="0.7"
          />
        </g>

        <g className="animate-floaty" opacity="0.85">
          <path d="M74 74c8-14 20-14 28 0c-8 10-20 10-28 0Z" fill="#FF5FA2" />
          <path d="M266 78c8-14 20-14 28 0c-8 10-20 10-28 0Z" fill="#7C4DFF" />
          <path d="M92 258c10-16 24-16 34 0c-10 12-24 12-34 0Z" fill="#FF7AB7" />
        </g>
      </svg>
    </div>
  );
}

