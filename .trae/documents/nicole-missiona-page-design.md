# Page Design Spec — Nicole Missiona (Single Page)

## Global Styles (Desktop-first)
- Layout system: Flexbox + CSS Grid (cards + section layouts).
- Breakpoints: Desktop default; collapse to single-column at ~768px; tighten spacing at ~480px.
- Theme: “Cute pink” palette.
  - Background: #FFF0F7 (soft blush)
  - Primary: #FF5FA2 (hot pink)
  - Secondary: #FFB3D1 (pastel pink)
  - Accent: #7C4DFF (small lavender highlights)
  - Text: #2B1B22 (deep warm gray)
- Typography:
  - Headings: bold, rounded sans (e.g., Poppins / Nunito)
  - Body: readable sans (system or same family)
  - Scale: H1 56px, H2 36px, H3 24px, Body 16–18px
- Buttons:
  - Primary: hot pink background + white text; hover darken 6–10%; active scale(0.98)
  - Secondary: white background + pink border; hover light pink fill
- Links: underline on hover; focus ring visible (accessibility).
- Motion: gentle, playful; avoid large parallax; prefer 200–500ms transitions.

## Meta Information (single page)
- Title: “Nicole Missiona — Cute Pink Animated Page”
- Description: “A cute, pink, animated single-page site celebrating Nicole Missiona with a Tagalog poem, dancing section, and music placeholder.”
- Open Graph:
  - og:title = page title
  - og:description = page description
  - og:image = placeholder image path (editable)

## Page Structure (single route: “/”)
Overall pattern: stacked full-width sections with a centered max-width container (e.g., 1040–1120px) and rounded “card” surfaces.
- Section spacing (desktop): 72–96px vertical padding.
- Cards: 16–24px padding, 20–28px border radius, subtle shadow.

---

## Section-by-Section Design

### 1) Top Navigation (sticky)
- Layout: sticky top bar; left = site name, right = anchor links.
- Elements:
  - Brand: “Nicole Missiona” (small heart/sparkle icon).
  - Nav items: Hero / About / Poem / Dance / Music.
  - Optional: small “🌸” style separator icon (SVG) near links (keep minimal).
- Interaction:
  - Smooth-scroll to anchors.
  - Active state: highlight current section (pill background in pastel pink).

### 2) Hero Section
- Layout: two-column on desktop.
  - Left: headline + subtitle + CTA buttons.
  - Right: animated illustration (SVG or CSS shapes).
- Content:
  - H1: “Nicole Missiona”
  - Subtitle: short celebratory line.
  - CTAs: “Read the Poem” (scroll to poem), “Let’s Dance” (scroll to dance).
- Animation:
  - Floating sparkles/hearts (CSS keyframes, low opacity).
  - Gentle fade-in on load.

### 3) About Section
- Layout: centered card with decorative border.
- Elements:
  - H2: “About Nicole”
  - Short paragraph (editable).
  - Optional: 2–3 “cute facts” chips (static text).

### 4) Tagalog Poem Section
- Layout: poem in a large card with a subtle gradient header.
- Elements:
  - H2: “Tula (Tagalog Poem)”
  - Poem typography: larger line-height, slightly italic option.
  - Button: “Copy Poem” (copies text).
- Interaction:
  - Copy success micro-feedback (small toast or inline “Copied!”).

### 5) Dancing Section
- Layout: left = dance controls, right = dancer stage.
- Elements:
  - H2: “Dance Time”
  - Toggle button: “Dance” / “Stop”
  - Stage: circular/rounded container with an animated character (SVG blob, cat, or stick-figure silhouette).
  - Optional: “Dance style” selector (simple: Bounce / Wiggle) if you want variety without adding pages.
- Animation behavior:
  - When enabled: loop animation (bounce + rotate + scale).
  - When disabled: settle animation to idle pose.

### 6) Background Music Placeholder Section
- Layout: music player card.
- Elements:
  - Track label: “Background Music (Placeholder)”
  - Controls: Play/Pause, timeline (optional), volume slider.
  - State messaging:
    - If no audio file configured: show “No track loaded — add your .mp3 to enable playback.”
- Interaction:
  - Controls visually interactive even if audio is missing; if missing, disable play and show helper text.

### 7) Footer
- Layout: slim footer with two columns.
- Elements:
  - Left: small closing line (e.g., “Made with love in pink.”)
  - Right: links (GitHub repo, Vercel deployment URL placeholder).

## Accessibility & Responsiveness Notes
- Keyboard navigation: visible focus rings on all interactive controls.
- Reduced motion: respect prefers-reduced-motion (pause heavy animations by default).
- Mobile: nav becomes hamburger or wraps to a second line