/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#1d1936',
        'light-purple': '#2b2550',
        'lighter-purple': '#3b3755',
        'orange-accent': '#ffa500',
        'dark-orange': '#a74d28',
        'bright-green': 'rgb(130, 225, 130)',
        'medium-green': 'rgb(106, 163, 106)',
        'electric-blue': '#00D8FF',
        'translucent-black': 'rgba(0, 0, 0, 0.4)',
        'translucent-white': 'rgba(255, 255, 255, 0.4)',
        'translucent-green': 'rgb(124, 252, 0, 0.5)',

        'dark-blue': '#010f1a',
        'medium-blue': '#083e58',
        'light-blue': '#bccfd4',
        'aqua-blue': '#00D8FF',
        'slate-blue': '#7c9cf5',
        'soft-pink': '#f8a1d1',
        'lavender': '#9f87ff',
        'light-aqua': '#78ead4',
        'deep-orange': '#c56a19',
        'light-orange': '#FFB347',
        'lighter-orange': '#FFB347',
        'dark-teal': '#051c26',
        'light-teal': '#174559',
        'dark-brown': '#251e21',
        'light-brown': '#3d2c34',
        'footer': '#453d38',
        'off-white': '#ede5dd',
        'light-beige': '#f3ede7',
        'deep-red': '#300719',
        'medium-red': '#353033',
        'beige': '#ccbfb0'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sourceSans: ['Source Sans 3', 'sans-serif']
      },
      boxShadow: {
        'even-glow': '0 0 20px 5px #c56a19'
      }
    },
  },
  plugins: [],
}

// 352e28 dark-brown
