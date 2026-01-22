/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* BRAND */
        primary: "#2F6F5F",     // PLAN B green (buttons, highlights)
        secondary: "#F5F1E8",   // light beige background
        
        /* TEXT */
        dark: "#2a2a2a",        // main text
        muted: "#6B6B6B",       // secondary text
        light: "#9A9A9A",       // captions / footer text

        /* UI */
        border: "#E5E5E5",
        surface: "#FFFFFF",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
