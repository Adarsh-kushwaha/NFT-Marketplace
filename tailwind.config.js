module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgBlack: '#121212',
        bgWhite: '#ffffff',
        textBlue: '#0066ff',
        lightGray: '#f3f3f3',
      },
    },
  },
  plugins: [],
}