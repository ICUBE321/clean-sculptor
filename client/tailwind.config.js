/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#0b0c10",
        darkgray: "#1f2833",
        gray: "#c5c6c7",
        lightblue: "#66fcf1",
        darkblue: "#45a29e",
      },
    },
  },
  plugins: [],
};
