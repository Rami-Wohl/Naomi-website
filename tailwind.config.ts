import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        headers: ["var(--font-headers)", "cursive"],
        main: ["var(--font-main)", "serif"],
      },
      backgroundImage: {
        gold: "linear-gradient(180deg, #998857 0%, #6A5A38 45%, #A89761 100%)",
      },
      colors: {
        gold: "#998857",
        charcoal: "#1F1F1F",
        onyx: "#2A2A2A",
        ivory: "#FAF7F0",
        linen: "#F2ECE1",
        sand: "#E8E1D2",
        contrast: "#e4e4e7",
      },
    },
  },
  plugins: [],
} satisfies Config;
