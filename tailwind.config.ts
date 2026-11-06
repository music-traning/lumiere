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
        obsidian: '#07080a',
        charcoal: '#111318',
        midnight: '#0c1220',
        gold: {
          DEFAULT: '#c5a869',
          light: '#dfd6be',
          muted: '#9e8452',
        },
        bronze: {
          DEFAULT: '#8c6d46',
          dark: '#4a3926',
        },
      },
      fontFamily: {
        serif: [
          '"Cormorant Garamond"',
          '"Playfair Display"',
          '"Noto Serif JP"',
          '"Yu Mincho"',
          '"Hiragino Mincho ProN"',
          'serif',
        ],
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
