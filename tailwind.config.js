module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'serif'],
        roboto: ['Roboto', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
