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
          red: "#EF4444",
          "red-hover": "#DC2626",
          gold: "#F59E0B",
          "gold-hover": "#D97706",
          blue: "#3B82F6",
          "blue-hover": "#2563EB",
          cyan: "#06B6D4",
        },
        dark: {
          bg: "#0B0F19",
          surface: "#111827",
          card: "#1E293B",
          border: "#334155",
          muted: "#94A3B8",
        },
        light: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#F1F5F9",
          border: "#E2E8F0",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        'glow-red': '0 0 20px -5px rgba(239, 68, 68, 0.3)',
        'glow-gold': '0 0 20px -5px rgba(245, 158, 11, 0.3)',
        'glow-blue': '0 0 20px -5px rgba(59, 130, 246, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'cyber-grid-light': 'linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};

export default config;
