/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.html'],
  theme: {
      extend: {
        animation: {
          fadein:'fade-in linear',
        },
        scale: {
          '-1': '-1'
        }
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        logo: ["Lobster", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
  },
  plugins: [],
};