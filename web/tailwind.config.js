module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6",
        },
        surfaceSecondary: "#27272A",
        whiteWithOpacity: "rgba(217, 217, 217, 0.15)"
      },
      borderRadius: {
        md: "4px",
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
