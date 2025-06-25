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
  },
};

export default config;
