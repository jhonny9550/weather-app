module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      backgroundImage: {
        'cloud': "url('/src/assets/images/Cloud-background.png')"
      },
      colors: {
        base: '#100E1D',
        paper: '#1E213A',
        contrast: {
          DEFAULT: '#E7E7EB',
          dark: '#A09FB1'
        },
        primary: '#6E707A',
        secondary: '#3C47E9'
      },
      fontFamily: {
        sans: ["Raleway", 'sans-serif']
      }
    },
  },
  plugins: [],
}
