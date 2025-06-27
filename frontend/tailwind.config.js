import daisyui from "daisyui";

const openBptTheme = {
  primary: "#7B9051" /* Muted Olive Green */,
  "primary-focus": "#657843" /* Darker Olive for focus/hover */,
  "primary-content": "#F9FAF6" /* Soft off-white for text on primary */,
  "primary-50": "#F3F7E9",
  "primary-100": "#E2EBCF",
  "primary-200": "#C5D6A7",
  "primary-300": "#A8C280",
  "primary-400": "#8FAC65",
  "primary-500": "#7B9051",
  "primary-600": "#657843",
  "primary-700": "#4F5E35",
  "primary-800": "#3B4728",

  secondary: "#3E646C" /* Deep Teal for secondary elements */,
  "secondary-focus": "#2E4D52" /* Darker Teal for focus/hover */,
  "secondary-content": "#FFFFFF" /* White for text on secondary */,
  "secondary-50": "#E6F1F2",
  "secondary-100": "#C0D7DA",
  "secondary-200": "#9ABDC2",
  "secondary-300": "#74A3AA",
  "secondary-400": "#5C8991",
  "secondary-500": "#3E646C",
  "secondary-600": "#2E4D52",
  "secondary-700": "#213A3E",
  "secondary-800": "#15282A",

  accent: "#F4A259" /* Warm Peach for highlights and accents */,
  "accent-focus": "#D18342" /* Darker Peach for focus/hover */,
  "accent-content": "#FFFFFF" /* White for text on accent */,
  "accent-50": "#FDEEE2",
  "accent-100": "#FBD6B8",
  "accent-200": "#F9BE8E",
  "accent-300": "#F7A764",
  "accent-400": "#F59249",
  "accent-500": "#F4A259",
  "accent-600": "#D18342",
  "accent-700": "#A96933",
  "accent-800": "#814F24",

  neutral: "#333639" /* Deep Gray for text and neutral elements */,
  "neutral-focus": "#1F2021" /* Almost Black for strong emphasis */,
  "neutral-content": "#FBFBFA" /* Near-white for text on dark neutral */,
  "neutral-50": "#E8E9E9",
  "neutral-100": "#C5C7C8",
  "neutral-200": "#A2A5A6",
  "neutral-300": "#7F8385",
  "neutral-400": "#5C6063",
  "neutral-500": "#333639",
  "neutral-600": "#1F2021",
  "neutral-700": "#151617",
  "neutral-800": "#0A0B0C",

  "base-0": "#FFFFFF" /* White background */,
  "base-100": "#FBFBFA" /* Main background, very light */,
  "base-200": "#F6F6F4" /* Slightly darker background */,
  "base-300": "#EDEDE9" /* Even more contrast for cards/sections */,
  "base-content": "#333639" /* Text color on light backgrounds */,

  info: "#87A8D0" /* Soft Blue for informational messages */,
  success: "#7D9D72" /* Muted Green for success messages */,
  warning: "#E6A157" /* Warm Amber for warnings */,
  error: "#BF4E54" /* Muted Warm Red for errors */,
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        openBptTheme,
      },
    ],
  },
  theme: {
    colors: {
      ...openBptTheme,
    },
    extend: {
      boxShadow: {
        "r-sm": "1px 0 2px 0 rgb(0 0 0 / 0.05)",
        r: "1px 0 3px 0 rgb(0 0 0 / 0.1), 1px 0 2px -1px rgb(0 0 0 / 0.1)",
        "r-md":
          "4px 0 6px -1px rgb(0 0 0 / 0.1), 2px 0 4px -2px rgb(0 0 0 / 0.1)",
        "r-lg":
          "10px 0 15px -3px rgb(0 0 0 / 0.1), 4px 0 6px -4px rgb(0 0 0 / 0.1)",
        "r-xl":
          "20px 0 25px -5px rgb(0 0 0 / 0.1), 8px 0 10px -6px rgb(0 0 0 / 0.1)",
        "r-2xl": "25px 0 50px -12px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [daisyui],
};
