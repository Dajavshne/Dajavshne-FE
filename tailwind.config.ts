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
        primary: '#0F5A42',
      },
      padding: {
        desktop: '150px',
      },
    },
  },
  plugins: [],
};
export default config;
