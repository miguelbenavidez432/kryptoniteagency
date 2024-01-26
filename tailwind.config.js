// /* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#969a99",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        grayDark: '#454c47',
        lightColor: '#3a4443',
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'kryptonite': "url('../src/assets/kriptonite.png')",

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
