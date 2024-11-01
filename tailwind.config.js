/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mosaic': "url(./src/assets/MosaicBackground.svg)",
        'dark-fade-to-top': "linear-gradient(to top, #121316, #0D272E00)",
        'dark-fade-to-left': "linear-gradient(to left, #121316, #121316, #12131600)",
        'dark-fade-to-right': "linear-gradient(to right, #121316, #121316, #12131600)",
        'outer-135deg-border': "linear-gradient(35deg, #191B20, #191B20, #191B20, #44656F, #44656F)"
      },
      colors: {
        'green-background': "#0D242C",
        'background': '#121316',
        'brand-800': '#0A2B2C'
      },
      transitionProperty: {
        header: "width, padding"
      }
    }
  },
  plugins: [],
}

