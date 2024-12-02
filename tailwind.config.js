/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9207BE",
        secondary: "#1E1E1E",
        custom: {
          gray: "#747070",
          lightgray: "#B1ACAC",
        },
      },
    },
  },
  plugins: [],
};
