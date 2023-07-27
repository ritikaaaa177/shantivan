/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        110: "36rem",
      },

      boxShadow: {
        "inset-transparent": "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
      },

      fontFamily: {
        // Add your custom font family here
        custom: ["Comfortaa", "cursive"],
        info: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
