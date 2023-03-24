/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],

    extend: {
      color: {
        lilla: "#5856D6",

        rosa: "#cca9f9",

        lysRød: "#f26584",

        hvid: "#FFFFF",

        "base-100": "#5ABE8C",

        info: "#9BCDED",

        success: "#74FF91",

        warning: "#FACD47",

        error: "#306EF9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
