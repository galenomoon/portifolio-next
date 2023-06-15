/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
    },
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
          white: {
            100: '#D3D3D4',
            200: '#D3D3D4E6',
            300: '#D3D3D4CC',
            400: '#D3D3D499',
            500: '#D3D3D466',
            600: '#D3D3D433',
            700: '#D3D3D41A',
            800: '#D3D3D40D',
            900: '#D3D3D405',
          }
        }
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(107.65deg, #D9A7F1 0.35%, #7AAAF6 48.28%, #63C3BE 96.21%)'
      },
    },
  },
  plugins: [],
}
