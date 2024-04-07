import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        '1920': '1920px',
      },
      colors: {
        white: '#ffffff',
        primary: '#295845',
      },
    },
  },
  plugins: [],
};
export default config;
