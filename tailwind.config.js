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
        'translucent-black': 'rgba(0, 0, 0, 0.4)',
        'dark-blue': '#010f1a',
        'medium-blue': '#123653',
        'deep-orange': '#c56a19',
        'dark-orange': '#a74d28',
        'dark-teal': '#051c26',
        'off-white': '#ede5dd',
        'accent': '#FFB347',
        'hover-accent': '#ffa729',
        'green-hover-accent': '#98fc98',
        'light-green': '#79be79'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sourceSans: ['Source Sans 3', 'sans-serif']
      },
      boxShadow: {
        'even-glow': '0 0 20px 5px #c56a19'
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to bottom, #010f1a, #051c26)',
        'blue-gradient-right': 'linear-gradient(to right, #010f1a, #051c26)',
      },
      transitionProperty: {
        opacity: "opacity",
        transform: "transform",
      },
    }
  },
  plugins: [],
}