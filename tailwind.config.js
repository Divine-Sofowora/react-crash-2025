/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif', 'system-ui'], // custom font
          heading: ['Poppins', 'sans-serif'],            // another example
        },
        gridTemplateColumns: {
          // your custom grid layouts
          '70/30': '70% 28%',
          '3-equal': 'repeat(3, 1fr)',
          'sidebar': '250px auto 250px',
        },
      },
    },
    plugins: [],
  }
  