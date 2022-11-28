// Theme customization --> https://daisyui.com/theme-generator/
const themes = [
  {
    light: {
      primary: "#7c37ad",
      secondary: "#ff4081",
      accent: "#f0e6f6",
      neutral: "#333333",
      "base-100": "#f3f4f6",
    },
    dark: {
      primary: "#7c37ad",
      secondary: "#ff4081",
      accent: "#f0e6f6",
      neutral: "#f3f4f6",
      "base-100": "#333333",
    },
  },
];

module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-triangle-after")({
      triangles: {
        select: {
          color: "currentColor",
          direction: "up",
          size: [100, 68],
        },
        next: {
          color: "currentColor",
          direction: "left",
          right: "2rem",
          top: "3rem",
          size: 100,
        },
      },
    }),
  ],
  daisyui: {
    themes,
  },
};
