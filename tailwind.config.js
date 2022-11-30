const colors = require('tailwindcss/colors');
module.exports = {
  content: ["src/**/*.jsx", "./index.html"],

  theme: {
   extend:{
padding:{
  12.5: "50px",
}
   }, 
    colors: {transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
     tomato: colors.red,
   
//       tomato:{
//         light: "rgb(250, 112, 112)",
//         default:"rgb(255, 81, 81)",
//         dark:"rgb(218, 9, 9)",
//       },
// gray:{
//   light:" rgb(131, 129, 129)"
// }
    },
     extend: {},
  },
  plugins: [],
};
