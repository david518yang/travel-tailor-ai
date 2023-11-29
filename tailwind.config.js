module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
