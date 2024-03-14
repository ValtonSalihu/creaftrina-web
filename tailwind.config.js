/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-lightbrown": "#A8715A",
        
        "color-box": "#FFF8F5"
      }
    },
    container: {
      center: true,
      padding: {
        default: "30px",
        md:"50px"
      }
    }
  },
  plugins: [],
}

