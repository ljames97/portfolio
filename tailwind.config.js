/** @type {import('tailwindcss').Config} */
export default {
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
        'dark-brown': '#3f3a36',
        'bright-green': 'rgb(130, 225, 130)',
        'medium-green': 'rgb(106, 163, 106)',
        'electric-blue': '#00D8FF',
        'translucent-black': 'rgba(0, 0, 0, 0.4)',
        'translucent-white': 'rgba(255, 255, 255, 0.4)',
        'translucent-green': 'rgb(124, 252, 0, 0.5)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

