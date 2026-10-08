import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", surface: "var(--surface)", ink: "var(--ink)", muted: "var(--muted)",
        line: "var(--line)", accent: "var(--accent)", onaccent: "var(--on-accent)",
        hi: "var(--hi)", onhi: "var(--on-hi)", danger: "var(--danger)",
      },
      fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], body: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
