import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4A93A",
          light: "#E8C766",
          dark: "#A07F1F",
        },
        sand: "#EFE6CF",
        charcoal: "#1A1A1A",
        graphite: "#2A2A2A",
        rose: "#C8302C",
        forest: "#2E5D3A",
      },
      fontFamily: {
        display: ["'Oswald'", "'Bebas Neue'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(212,169,58,0.35)",
        "glow-lg": "0 0 60px rgba(212,169,58,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        spray: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(110%)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        spray: "spray 6s linear infinite",
        "slide-in-right": "slide-in-right 0.35s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
