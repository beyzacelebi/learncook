/* eslint-env node */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: '#fbf8e6ff',
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      },
    },
  },
  plugins: [],
});
