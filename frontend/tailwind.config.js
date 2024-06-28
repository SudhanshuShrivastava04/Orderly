/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['"Unbounded"', "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        'responsive': ['max(4vw, 22px)','4rem'],
      },
      backgroundImage: {
        header: "url('/header_img.png')",
      },
      animation: {
        "fadeIn" : "fadeIn 1s ease-in-out forwards",
      }
    },
  },
  plugins: [],
};
