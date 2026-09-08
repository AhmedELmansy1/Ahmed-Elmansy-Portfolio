import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        accent: {
          blue: "#3B82F6",
          "blue-hover": "#2563EB",
          gold: "#F5C542",
          "gold-hover": "#D4AF37",
          red: "#EF4444",
          "red-hover": "#DC2626",
        },
        navy: {
          deep: "#030712",
          midnight: "#050816",
          surface: "#07111F",
          card: "#0A1020",
          border: "#1E293B",
          muted: "#94A3B8",
        },
        gold: {
          metallic: "#D4AF37",
          bright: "#F5C542",
          deep: "#EAB308",
        },
        blue: {
          electric: "#2563EB",
          royal: "#3B82F6",
          light: "#60A5FA",
        },
        red: {
          crimson: "#DC2626",
          signal: "#EF4444",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
      },
      boxShadow: {
        'glow-gold': '0 0 30px -5px rgba(245, 197, 66, 0.25)',
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.25)',
        'glow-red': '0 0 30px -5px rgba(239, 68, 68, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};

export default config;
