import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", "cursive"],
        main: ["var(--font-main)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
