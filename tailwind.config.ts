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
          DEFAULT: "#6D6D6D",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#4F4F4F",
          700: "#3D3D3D",
          800: "#111111",
        },
        white: "#ffffff",
        background: "#f3f3f3",
        caution: "#e4595e",
        border: "#DDDDDD",
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
          "32px",
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
          "20px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "body-4": [
          "18px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "body-5": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        caption: [
          "14px",
          { lineHeight: "1.5", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
