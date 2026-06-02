import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0F2A47",
          700: "#1B3A5B",
          500: "#2E5C8A",
        },
        brown: {
          700: "#5C4433",
          500: "#8C6A4A",
          300: "#C4A688",
        },
        cream: "#FAF7F2",
        ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        editorial: "-0.02em",
      },
      fontSize: {
        display: ["clamp(2.5rem, 8vw, 7rem)", { lineHeight: "0.95" }],
        "display-sm": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1" }],
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
