/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'bg-primary-light': colors.white,
        'text-primary-light': colors.neutral[800],
        'text-secondary-light': colors.neutral[600],
        'border-primary-light': colors.neutral[300],
        'accent-light': colors.blue[600],

        'bg-primary-dark': '#111111',
        'bg-secondary-dark': '#1a1a1a',
        'bg-tertiary-dark': '#1a1a1a',  
        'text-primary-dark': colors.neutral[100],
        'text-secondary-dark': colors.neutral[400],
        'border-primary-dark': colors.neutral[700],
        'accent-dark': colors.blue[500],
        'link-blue': colors.blue[600],
      },
    },
  },
  plugins: [],
} 