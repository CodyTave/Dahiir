import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: { 0: "#303030", 1: "#4A4A4A", 2: "#A3A3A3" },
        light: { 0: "#FBFBFB" },
        ph: { 0: "#F2F2F2" },
        blue: { 0: "#4E6BB1" },
        green: { 0: "#4EB162" },
        yellow: { 0: "#B1A14E" },
      },
    },
  },
  plugins: [],
};
export default config;
