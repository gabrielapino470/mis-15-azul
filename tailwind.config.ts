import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        sapphire: "#1d4ed8",
        silver: "#dbe4ef",
        moon: "#f8fafc"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-montserrat)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(147, 197, 253, 0.35)",
        silver: "0 20px 60px rgba(219, 228, 239, 0.18)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, rgba(59, 130, 246, 0.22), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
