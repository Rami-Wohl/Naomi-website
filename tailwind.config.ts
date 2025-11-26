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
        gold: "linear-gradient(180deg, #CFB670 0%, #9B7A38 45%, #E4C879 75%, #7A5C24 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
