/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens: {
        'sm': '640px',
        'md': '880px',
        'lg': '1200px',
        'xl': '1600px',
        '2xl': '1800px',
    },
    extend: {
      colors: {
        cardGreen: '#000000',
        cardGreen2: '#303030'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 35s linear infinite',
      },
    },
  },
  plugins: [],
}
