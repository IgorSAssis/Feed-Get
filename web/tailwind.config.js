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
        surfacePrimary: "#18181B",
        surfaceSecondary: "#27272A",
        whiteWithOpacity: "rgba(217, 217, 217, 0.15)",
        stroke: "#52525B",
        light: {
          header: {
            bg: "#fcfcfc",
            border: "#eeeeee"
          },
          surfacePrimary: "#FFF",
          surfaceSecondary: "#F4F4F5",
          textPrimary: "#27272A",
          textSecondary: "#71717A",
          stroke: "#D4D4D8"
        },
      },
      borderRadius: {
        md: "4px",
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
