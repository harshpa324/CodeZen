/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      
      colors: {
        nav: "#5918df",
        text_hover: "#9f9ea3"
      },
      backgroundColor: {
        black: "#000000", 
        bg_main: "#241d36",
      },
    },
  },
  plugins: [],
};
