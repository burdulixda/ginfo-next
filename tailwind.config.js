module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1366px',
      },
      colors: {
        ginfoRed: '#c53437',
        ginfoGrayText: '#a2a2a2',
      },
      spacing: {
        13: '3.125rem',
        25: '6.125rem',
        65: '16.875rem',
      },
      maxWidth: {
        side: '16.875rem',
      },
      fontFamily: {
        firaGoMedium: ['FiraGO-Medium', 'sans-serif'],
        firaGoBold: ['FiraGO-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
