import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6356f8",
          50: "#edf0ff",
          100: "#dee3ff",
          200: "#c4caff",
          300: "#a1a7ff",
          400: "#7c7bfe",
          500: "#6356f8",
          600: "#5a3eed",
          700: "#4d31d1",
          800: "#3f2aa9",
        },
        grey: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        white: "#ffffff",
        background: "#f3f3f3",
        caution: "#e4595e",
      },
      fontSize: {
        "heading-1": [
          "40px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-2": [
          "38px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-3": [
          "34px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-4": [
          "28px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-1": [
          "28px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "body-2": [
          "24px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "body-3": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "body-4": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        caption: [
          "12px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
