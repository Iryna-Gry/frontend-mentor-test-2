import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '8px 8px #000000',
        'card-shadow-hover':'16px 16px #000000',
      },
      colors: {
        'custom-gray': '#7F7F7F',
      },
      backgroundColor: {
        'yellow-bg': 'hsl(47, 88%, 63%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'custom-black': 'hsl(0, 0%, 7%)',
        
      },
      backgroundImage: {
        'card-shadow': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
