/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'goth-bg': '#0b0b0e',
        'vampire-crimson': '#800020',
        'zinc-text': '#e4e4e7',
        'analog-border': '#3f3f46',
      },
      fontFamily: {
        'romantic-goth': ['Cinzel', 'serif'],
        'reading': ['Montserrat', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}

