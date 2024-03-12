import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#0A112B'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:  [
      {
        mytheme: {
          "primary": "#0A112B",
          "secondary": "#FFFFFF",
          "accent": "#1A316E",
          "neutral": "#4979AD",
          "lighten": "#A4C0E0",
          'blue' : "#3b82f6",
          "purple": "#a855f7",
          "pink" : "#ec4899"
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
export default config
