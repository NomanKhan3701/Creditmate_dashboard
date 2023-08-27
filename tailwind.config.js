/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'blue-100': '#121927',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'neutral-000': '#ffffff',
      'neutral-100': '#f7f7f7',
      'neutral-200': '#b9b9b9',
      'neutral-300': '#a9a9a9',
      'neutral-400': '#878a8f',
      'neutral-500': '#404752',
      'neutral-600': '#0f141e',
    },

    extend: {
      fontSize: {
        '11': '1.1rem',
        '12': '1.2rem',
        '13': '1.3rem',
        '14': '1.4rem',
        '15': '1.5rem',
        '16': '1.6rem',
        '17': '1.7rem',
        '18': '1.8rem',
        '19': '1.9rem',
        '20': '2rem',
        '21': '2.1rem',
        '22': '2.2rem',
        '23': '2.3rem',
        '24': '2.4rem',
        '25': '2.5rem',
        '26': '2.6rem',
        '27': '2.7rem',
        '28': '2.8rem',
        '29': '2.9rem',
        '30': '3rem',
        '31': '3.1rem',
        '32': '3.2rem',
        '33': '3.3rem',
        '34': '3.4rem',
        '35': '3.5rem',
        '36': '3.6rem',
      },
      spacing: {
        '1': '.1rem',
        '2': '.2rem',
        '4': '.4rem',
        '6': '.6rem',
        '8': '.8rem',
        '10': '1rem',
        '12': '1.2rem',
        '14': '1.4rem',
        '16': '1.6rem',
        '18': '1.8rem',
        '20': '2rem',
        '22': '2.2rem',
        '24': '2.4rem',
        '26': '2.6rem',
        '28': '2.8rem',
        '30': '3rem',
        '32': '3.2rem',
        '34': '3.4rem',
        '36': '3.6rem',
        '38': '3.8rem',
        '40': '4rem',
        '42': '4.2rem',
      },
      borderRadius: {
        '6': '.6rem',
        '8': '.8rem',
        '10': '1rem',
        '16': '1.6rem',
        '50': '50%',
      }
    }
  },
  plugins: [],
}