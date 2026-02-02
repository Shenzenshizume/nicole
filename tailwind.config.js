/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blush: {
          50: "#FFF0F7",
          100: "#FFE3F0",
          200: "#FFD1E6",
          300: "#FFB3D1",
        },
        brand: {
          400: "#FF7AB7",
          500: "#FF5FA2",
          600: "#FF2D86",
        },
        ink: "#2B1B22",
        lilac: "#7C4DFF",
      },
      fontFamily: {
        cute: ["Nunito", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "Noto Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(255, 95, 162, 0.22)",
      },
    },
  },
  plugins: [],
};
