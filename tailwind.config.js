const daisyThemes = require("daisyui/src/colors/themes");

// Theme customization --> https://daisyui.com/theme-generator/
const themes = [
  {
    light: {
      ...daisyThemes["[data-theme=light]"],
      primary: "#7c37ad",
      secondary: "#ff4081",
      accent: "#f0e6f6",
    },
    dark: {
      ...daisyThemes["[data-theme=dark]"],
      primary: "#7c37ad",
      secondary: "#ff4081",
      accent: "#f0e6f6",
    },
  },
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes,
  },
};
