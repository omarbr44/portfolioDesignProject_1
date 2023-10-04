/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  /* darkMode: 'class', */
  theme: {
    extend: {
      colors:{
        "site-primary": "#232a54",
        "site-secondary": "#c96746",
/*         primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
 */      }
    },
    fontFamily:{
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens:{
      sm: {'max': '640px'},
      md: {'max': '1024px',
            'min': '640px'} ,
      lg: '1024px',
    }
  },
  plugins: [],
}

