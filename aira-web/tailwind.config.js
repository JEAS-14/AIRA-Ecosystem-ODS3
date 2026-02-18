/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Esto hace que la clase 'font-sans' use DM Sans
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        aira: {
          blue: '#3574BB',
        }
      },
    },
  },
  plugins: [],
}