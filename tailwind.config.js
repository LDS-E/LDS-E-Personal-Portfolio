import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/imgs/bgimgfigma2.png')",
      },
      colors: {
        primary: "#BFFF0A",
        primarylight: "#B3EB14",
        secondary: "#5546FF",
        textInBlack: "#010101",
        textInWhite: "#FFFF95",
        accent: "#FF7AC9",
        backtest: "#1F2937",
        backdark: "#141D2F",
      },
    },
  },
  plugins: [daisyui],
};
