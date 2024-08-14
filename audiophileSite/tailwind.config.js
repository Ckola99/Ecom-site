/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroMobile': "url('/assets/home/mobile/image-header.jpg')",
        'speakerBg': "url('/assets/home/mobile/image-speaker-zx7.jpg')"
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'main-orange': '#D87D4A',
        'second-gray': '#F1F1F1',
      }
    },
  },
  plugins: [],
}
