/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide_message: {
          "0%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        showContextMenu: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        slide_message: "slide_message 0.3s ease-in-out",
        showContextMenu: "showContextMenu 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
