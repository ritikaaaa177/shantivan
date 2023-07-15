/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        '128': '46rem',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

