import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "mobile": '375px',
      "tablet": "768px",
      "desktop": "1440px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "nav-bar": "84px"
      },
      textColor: {
        "primary": '#171717',
        "primary-hover": "#0a0a0a",
        "primary-invert": "#fff",
        "secondary": "#525252"
      },
      borderColor: {
        "primary": "#e5e5e5"
      },
      backgroundColor: {
        "primary": "#fff",
        "primary-inverted": "#0a0a0a",
        "primary-hover": "#fafafa",
        "brand-primary": "#4338ca",
        "brand-primary-emphasize": "#3730a3"
      }
    },
  },
  plugins: [],
};
export default config;
