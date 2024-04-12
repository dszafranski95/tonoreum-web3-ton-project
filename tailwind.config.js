// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'], // Add Flowbite to the content configuration

  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Existing DaisyUI plugin
    require('flowbite/plugin') // Add Flowbite plugin
  ],
}
