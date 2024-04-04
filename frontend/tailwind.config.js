// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container:{
      padding:{
        md:"10rem"
      },
    }
  },
  plugins: [],
}

//here we write any default styles that we want to overwrite in tailwind