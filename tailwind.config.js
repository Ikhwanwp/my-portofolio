const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "16px",
        lg: "100px",
        xl: "200px",
      },
    },
    extend: {
      colors: {
        "color-bg-dark": "#1E3040",
        "color-bg-light": "#D9D9D9",
        "color-primary": "#DD8432",
        "color-primary-dark": "#B06016",
        "color-primary-light": "#DCB087",
        "color-secondary": "#FFFFFF",
        "color-secondary-dark": "#9D9EA5",
      },
    },
  },
  plugins: [],
});
