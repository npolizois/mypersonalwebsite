/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan your component files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        dark: "#020c1b",
        light: "#ccd6f6",
      },
    },
  },
  plugins: [],
};
