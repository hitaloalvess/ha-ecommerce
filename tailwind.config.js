/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'primaryRed': '#F0141E',
        'primaryBlack': '#030303',
        'primaryWhite': '#FFFFFF',
        'customEmperor-600': '#515151',
        'customNevada-500': '#717274',
        'customAlto-300': '#D9D9D9',
        'customEbony-950': '#060907',
        'customBunker-950': '#080A0E',
        'customBlackPearl-950': '#040C1B',
        'customVulcan-950': '#0F141F',
        'customMirage-950': '#151B26',
        'customBigStone-950': '#1A2841',
        'customWhite50%': 'rgba(255,255,255, 0.5)',
        'customBigStone60%': 'rgba(26, 40, 65, 0.60)',
      },
      gradientColorStops: {
        'shadow-dark': `rgba(4, 12, 27, 0.99) 5%, rgba(4, 12, 27, 0.75) 35%, rgba(4, 12, 27, 0.99) 100%`,
      }
    },
  },
  plugins: [],
}

