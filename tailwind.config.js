/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [
  //   // Other paths to your HTML files
  //   "./index.html",
  // ],
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        110: "36rem",
        104: "30rem",
        120: "40rem",
      },

      left: {
        120: "45rem",
        140: "60rem",
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
