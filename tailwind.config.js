module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "4rem",
    },
    extend: {
      colors: {
        lightgray: "#e9e9e9",
        blue: "#1a6646",
        green: "#486c05",
        coustom1: "#f7f5f0",
      },
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.0)",
        glass2: "rgba(255, 255, 255, 0.5)",
      },
    },
    fontFamily: {
      bah: ["Bahnschrift"],
      openSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
