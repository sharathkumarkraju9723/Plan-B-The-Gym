/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* BACKGROUNDS */
        base: "#F5F5F5",          // app background
        section: "#838181",       // section background (light blackish)
        surface: "#EFEFEF",       // forms / cards (light blackish)

        /* BUTTONS */
        button: "#C2C5C9",        // silver gray
        buttonHover: "#AEB2B7",   // darker silver
        buttonBorder: "#000307",

        /* TEXT */
        textPrimary: "#000000",   // dark black
        textMuted: "#444444",     // dark gray
        textSubtle: "#666666",    // medium gray
        textLight: "#FFFFFF",     // text on images

        /* UI */
        divider: "#D0D0D0",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
