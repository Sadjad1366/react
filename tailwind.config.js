/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   "Inter":['Inter']
      // },
      colors:{
     "gray-base" :"#f9f9f9",
     "gray-text" :"#a6a6a6",
     "green-app" :"#009117",
      },
    },
  },
  plugins: [],
}
