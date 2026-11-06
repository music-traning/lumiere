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
          muted: '#a88d58',
        },
        bronze: {
          DEFAULT: '#9c7b52',
          dark: '#4a3926',
        },
      },
      fontFamily: {
        serif: [
          '"Times New Roman"',
          'Georgia',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          'YuMincho',
          '"Noto Serif JP"',
          'serif',
        ],
        sans: [
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'YuGothic',
          '"Noto Sans JP"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
