module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'serif'],
        roboto: ['Roboto', 'serif']
      },
      colors: {
        'splash-title-gray-blue': '#2E4564'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
