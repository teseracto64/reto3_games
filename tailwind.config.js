/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'store': {
        light: '#ffffff',
        default: '#1F2937',
        dark: '#111827',
        darkblue:'#317CBC',
        blue:'#1A97F2',
        gray:'#757C88',
        succes:'#4BB543'

      },
    },
  },
  plugins: [],
}

