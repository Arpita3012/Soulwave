module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        rubik: ["Rubik", "sans-serif"],
      },
      height:{
        "1/10":"10%",
        "9/10":"90%",
      },
      backgroundImage: {
        'gradient-site': "linear-gradient(to bottom, #fce7f3, #fff0f6)", // Adjust colors if needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


