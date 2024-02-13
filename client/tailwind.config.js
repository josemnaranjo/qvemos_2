/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#F5E1A4",
      secondary: "#2566A2",
      tertiary: "#184269",
    },
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"],
      limelight: ["Limelight", "serif"],
    },
    fontSize: {
      xxl: "42px",
      xl: "35px",
      lg: "29px",
      md: "24px",
      body: "17px",
      label: "14px",
    },
  },
  plugins: [],
};
