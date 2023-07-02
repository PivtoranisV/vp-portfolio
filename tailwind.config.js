/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4789f5',
        secondary: '#ffd94f',
        tertiary: '#151030',
      },
      backgroundImage: {
        hero: "url('/bg2.jpg')",
      },
    },
  },
  plugins: [],
};
