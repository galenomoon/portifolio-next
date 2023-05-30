/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        typography: {
          100: '#383738',
          200: '#383738E6',
          300: '#383738CC',
          400: '#38373899',
          500: '#38373866',
          600: '#38373833',
          700: '#3837381A',
          800: '#3837380D',
          900: '#38373805',
        }
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(107.65deg, #D9A7F1 0.35%, #7AAAF6 48.28%, #63C3BE 96.21%)',
      },
    },
  },
  plugins: [],
}
