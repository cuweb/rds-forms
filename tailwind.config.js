/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('rds-tailwind-theme')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

