import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          purple: "#8B7BA8",
          "purple-light": "#A89BC2",
          "purple-dark": "#6B5B8A",
          gold: "#D4AF37",
          "gold-light": "#E8C84A",
          "gold-dark": "#B8941E",
          cream: "#F9F6F0",
          "cream-dark": "#EDE8DF",
          charcoal: "#2C2C2E",
          "charcoal-light": "#4A4A4C",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
