/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Specify the EJS files where Tailwind should be applied
    "./src/**/*.js",
    // Other files you want Tailwind to be purged in for production builds
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
