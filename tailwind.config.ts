import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ai-bg": "#050714",
        "ai-card": "rgba(16, 24, 40, 0.75)",
        "ai-border": "rgba(148, 163, 184, 0.35)",
        "ai-accent": "#7C3AED",
        "ai-accent-soft": "#4C1D95"
      },
      backgroundImage: {
        "ai-gradient":
          "radial-gradient(circle at top left, rgba(147, 51, 234, 0.5), transparent 60%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.45), transparent 55%)"
      },
      boxShadow: {
        glass:
          "0 0 0 1px rgba(148, 163, 184, 0.25), 0 18px 45px rgba(15, 23, 42, 0.9)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
