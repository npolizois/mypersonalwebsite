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
        // You can add more colors here as needed
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // You can use the 'Inter' font or any other font you prefer
      },
      // You can extend other theme properties like spacing, font sizes, etc. as needed
    },
  },
  plugins: [],
  variants: {
    extend: {
      // Here you can add variant extensions if needed
    },
  },
  corePlugins: {
    // You can enable or disable specific core plugins here
  },
};
