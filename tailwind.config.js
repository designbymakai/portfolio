// tailwind.config.js (ESM)
import headlessui from "@headlessui/tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.9rem",
      base: "1.1rem",
      lg: "1.22rem",
      xl: "1.35rem",
      "2xl": "1.663rem",
      "3xl": "2.053rem",
      "4xl": "2.541rem",
      "5xl": "3.152rem",
    },
    extend: {
      colors: {
        "dbm-db": {
          100: "#101827",
          200: "#1C273C",
          300: "#2B3952",
          400: "#3D4C67",
          500: "#51607D",
        },
        "dbm-lb": { 100: "#abe0ec", 200: "#57c1da", 300: "#258EA6", 400: "#124753" },
        "dbm-gr": { 100: "#5E5A3F", 200: "#6A6547", 300: "#75704E", 400: "#837E5C", 500: "#918C6B" },
        "dbm-w": { 100: "#f8f9fa", 200: "#E5E7EB", 300: "#CDCFD3", 400: "#B6B8BC", 500: "#9FA1A4" },
        "dbm-pr": { 100: "#c4add8", 200: "#9368B7", 300: "#5f3c7d", 400: "#2b1b38" },
        "dbm-cr": { 100: "#ffd3c6", 200: "#ff8360", 300: "#f93700", 400: "#932000" },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [headlessui, tailwindcssAnimate],
};