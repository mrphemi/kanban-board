/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kb: {
          purple: {
            primary: "#635FC7",
            secondary: "#A8A4FF",
          },
          black: {
            primary: "#000112",
            secondary: "#20212C",
            tertiary: "#2B2C37",
          },
          grey: {
            dark: {
              primary: "#3E3F4E",
              secondary: "#828FA3",
            },
            light: {
              primary: "#E4EBFA",
              secondary: "#F4F7FD",
            },
          },
          mandy: {
            primary: "#EA5555",
            secondary: "#FF9898",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
