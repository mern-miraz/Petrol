/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      container:"1320px"
    },
    fontFamily: {
      'popps': ['Poppins', 'sans-serif',],
    },
    backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
    }
  },
  plugins: [],
}

