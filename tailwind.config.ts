import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fonts: {
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
        caution: "#e4595e",
        grey: {
          DEFAULT: "#6D6D6D",
          50: "#FFFFFF",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#4F4F4F",
          700: "#3D3D3D",
          800: "#111111",
        },
      },
    },
  },
};

export default config;
