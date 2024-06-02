/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7E22CE',
          DEFAULT: '#7E22CE',
          dark: '#7E22CE'
        },
        pmlight:{
          light: '#838383',
          DEFAULT: '#838383',
          dark: '#838383'
        }
      }
    },
  },
  plugins: [],
};
