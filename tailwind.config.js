module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('assets/pattern-bg.png')",
      }),
    },
    colors: {
      very_dark_gray: "#2B2B2B",
      dark_gray: "#969696",
      backColor: "#FFFFFF",
      black: "#000000",
    },
    screens: {
      sm: "375px",
      lg: "1280px",
      xl: "1280px",
    },
  },
  plugins: [],
};
