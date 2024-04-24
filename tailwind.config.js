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
      'ban': "url('/src/assets/Ban.png')",
      'Service1' : "url('/src/assets/service1.png')",
      'Service2' : "url('/src/assets/service2.png')",
      'Service3' : "url('/src/assets/service3.png')",
      'Learn' : "url('/src/assets/learn.png')",
      'Blog1' : "url('/src/assets/blog1.png')",
      'Blog2' : "url('/src/assets/blog2.png')",
      'Blog3' : "url('/src/assets/blog3.png')",
    }
  },
  plugins: [],
}

