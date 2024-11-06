import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFCF9',
        foreground: '#1A1A1A',
        blue: {
          500: '#26547C',
        },
        red: {
          500: '#EF476F',
        },
        yellow: {
          500: '#FFD166',
        },
        green: {
          500: '#06D6A0',
        },
      },
    },
  },
  plugins: [],
};
export default config;
