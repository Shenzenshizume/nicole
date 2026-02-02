# Nicole Missiona — Cute Pink Single Page

A cute, pink, animated single-page website with:
- A Tagalog poem + one-click copy
- A dancing couple illustration beside the poem
- Background music (autoplay attempt + play button fallback)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Tests
```bash
npm test
```

## Customize the poem
- Edit `src/utils/poem.ts`

## Add music
- Put your file at `public/audio/for-the-dancing-and-the-dreaming.mp3`
- The site will try to autoplay it (some browsers require clicking Play once)

## Deploy on Vercel
- Push this repo to GitHub
- Import it in Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` is included to ensure SPA-friendly rewrites.
