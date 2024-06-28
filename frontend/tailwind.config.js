/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['"Unbounded"', "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      width: {
        "4/5": "80%",
      },
    },
  },
  plugins: [],
};
