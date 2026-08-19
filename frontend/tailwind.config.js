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
          DEFAULT: '#0a0a0d',
          50: '#0f0f12',
          100: '#141418',
          200: '#1a1a1f',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f2d76a',
          dark: '#b8962e',
        },
        muted: '#8a8a94',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
