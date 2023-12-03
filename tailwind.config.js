/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily:{
      'display': ['Hellix','Helvetica','Oswald']
    },
    extend: {
      fontFamily: {
        hellix: 'Hellix'
      },
      colors:{
        brand:{
          rose: "#FF5353"
        }
      },
      text:{
        display: '40px'
      }
    },
  },
  plugins: [],
}

