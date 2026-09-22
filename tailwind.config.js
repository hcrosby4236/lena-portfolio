/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blinker: ["var(--font-blinker)", "cursive"],
        reenieBeanie: ["var(--font-reenieBeanie)", "cursive"],
        emilysCandy: ["var(--font-emilysCandy)", "cursive"],
      }
    },
  },
  plugins: [],
};
