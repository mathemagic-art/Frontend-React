module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // false or 'media'
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#6C6CE2",
        secondary: "#323280",
        dark: "#0a0922",
        bright: "#F1F5FF",
        text: "#757D8A",
        head: "#5F5B80",
      },
    },
    screens: {
      tablet: { max: "1300px" },
      // => @media (max-width: 1300px) { ... }

      laptop: "1620px",
      // => @media (min-width: 1024px) { ... }

      desktop: "162px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
