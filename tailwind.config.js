/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Clash Display"],
      },
      colors: {
        'primary': '#4640DE',
        'bground':'#F8F8FD',
        'p':'#515B6F',
        'second':'#26A4FF'
      },
    },
  },
  plugins: [],
};
