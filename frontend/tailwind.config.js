/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#08080a',
          50: '#0c0c0f',
          100: '#111114',
          200: '#18181d',
          300: '#222228',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e8c547',
          dark: '#a8861f',
          muted: 'rgba(201, 162, 39, 0.15)',
        },
        muted: '#7a7a85',
        soft: '#b0b0b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
