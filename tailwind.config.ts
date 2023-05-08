import type { Config } from 'tailwindcss'

export default {
  content: [

    "app/**/*.tsx",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ee5253",
          secondary: "#10ac84",
          accent: "#ff9f43",
          neutral: "#576574",
          "base-100": "#222f3e",
          info: "#0abde3",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config
