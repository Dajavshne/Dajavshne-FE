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
        gray: 'rgb(120, 134, 149)',
        beige: '#F0E7D6',
      },
      margin: {
        18: '72px',
      },
      padding: {
        13: '52px',
        18: '72px',
        25: '100px',
        desktop: '150px',
      },
      overflow: {
        overlay: 'overlay',
      },
      backgroundColor: {
        grayishBlue: 'rgb(193, 217, 225)',
      },
      backgroundImage: {
        looper: 'url("/images/looper-group.svg")',
      },
      borderRadius: {
        4: '4px',
        10: '10px',
      },
      fontFamily: {
        'open-sans': ['var(--font-open-sans)'],
        arimo: ['var(--font-arimo)'],
      },
      inset: {
        13: '52px',
        25: '100px',
      },
    },
  },
  plugins: [],
};
export default config;
