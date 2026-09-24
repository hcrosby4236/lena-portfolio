/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reenie: ["var(--font-reenie)", "cursive"],
        gulzar: ["var(--font-gulzar)", "cursive"],
        ruwudu: ["var(--font-ruwudu)", "cursive"],
      }
    },
  },
  plugins: [],
};
