import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        ivory: "#fbf7ef",
        linen: "#efe4d5",
        champagne: "#d7bd83",
        gold: "#a88042",
        navy: "#14213d",
        aubergine: "#5b496a",
        rose: "#c88983",
        sage: "#8f9a82"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(20, 33, 61, 0.10)",
        glow: "0 18px 45px rgba(168, 128, 66, 0.16)"
      },
      backgroundImage: {
        "paper-light":
          "linear-gradient(135deg, rgba(251,247,239,0.98), rgba(239,228,213,0.72)), radial-gradient(circle at 15% 0%, rgba(200,137,131,0.20), transparent 34%), radial-gradient(circle at 90% 10%, rgba(91,73,106,0.14), transparent 28%)",
        "navy-depth":
          "linear-gradient(135deg, #14213d 0%, #29304f 44%, #5b496a 100%)",
        "gold-sheen":
          "linear-gradient(135deg, rgba(215,189,131,0.22), rgba(200,137,131,0.16), rgba(91,73,106,0.10))"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.24s ease-out",
        "accordion-up": "accordion-up 0.24s ease-out"
      }
    }
  },
  plugins: []
};

export default config;
