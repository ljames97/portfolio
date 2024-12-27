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
        'orange-accent': '#8e22b0'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

