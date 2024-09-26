/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // Enable dark mode based on user's system preferences
  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // Dark background color
        secondary: "#64ffda", // Accent color
        dark: "#020c1b", // Darker background color
        light: "#ccd6f6", // Light text color
        highlight: "#38a169", // Custom highlight color for hover effects
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Primary font
        heading: ['"Roboto Slab"', "serif"], // Heading font
      },
      spacing: {
        128: "32rem", // Custom large spacing for containers
      },
    },
  },
  plugins: [],
};
