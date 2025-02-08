import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/imgs/bgimgfigma2.png')",
      },
      colors: {
        text: "#e7f9ec",
        background: "#040b05",
        primary: "#30c05d",
        secondary: "#311e76",
        accent: "#90299e",
      },
    },
  },
  plugins: [daisyui],
};
