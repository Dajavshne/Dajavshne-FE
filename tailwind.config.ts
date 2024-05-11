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
        blue: 'rgb(43, 174, 218)',
      },
      padding: {
        desktop: '150px',
      },
      overflow: {
        overlay: 'overlay',
      },
      borderColor: {
        gray: 'rgb(120, 134, 149)',
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [],
};
export default config;
