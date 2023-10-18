/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#514CD9",
        primaryAtl: "#144FE7",
        secondary: "#872EC4",
        bgColor: "#121212",
        secondaryText: "#929292",
      },
      fontWeight: {
        thin: 200,
        light: 300,
        medium: 500,
        semibold: 600,
        extrabold: 900,
      },
    },
  },
  plugins: [],
};
