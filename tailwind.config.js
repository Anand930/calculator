/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      caretColor:{
        transparent:"transparent",
      },
      borderColor: {
        transparent: 'transparent',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
    },
  },
  plugins: [],
}

