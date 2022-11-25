/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      white:{
        basic:"#FFFFFF"
      },
      pallet:{
        primary:'#FD4556',
        secondary:'#000000',
        third:'#FFFBF5',
        redcons:'#53212B',
        transitionbutton:'#FF6C7A',
        transitiontextbutton:'#EEA3A3'
      },
    },
    fontFamily:{
      display:['Inter']
    }
  },
  plugins: [],
}
