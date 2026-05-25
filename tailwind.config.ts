import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b0ff",
          500: "#338dfc",
          600: "#1d6ef1",
          700: "#1558de",
          800: "#1847b4",
          900: "#193f8d",
          950: "#142856",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        dark: {
          50: "#f6f6f9",
          100: "#ececf2",
          200: "#d5d5e2",
          300: "#b1b1c9",
          400: "#8787ab",
          500: "#686891",
          600: "#545278",
          700: "#454462",
          800: "#3b3a53",
          900: "#1a1a2e",
          950: "#0f0f1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(51, 141, 252, 0.2), 0 0 20px rgba(51, 141, 252, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(51, 141, 252, 0.4), 0 0 60px rgba(51, 141, 252, 0.2)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
export default config;
