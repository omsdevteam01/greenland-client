import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#F8F6F1',
          100: '#F2EDE4',
          200: '#E8DED0',
          300: '#DCCBB5',
          400: '#CDB99F',
          500: '#B8A58D',
          600: '#A99479',
          700: '#927E64',
          800: '#766B5E',
          900: '#5A5046',
        },
        emerald: {
          50: '#FAF9F6',
          100: '#F5F1E9',
          200: '#EDE4D5',
          300: '#E2D5C3',
          400: '#D5C3AA',
          500: '#C4B299',
          600: '#B09D83',
          700: '#98866E',
          800: '#7D6D59',
          900: '#635646',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(63, 56, 47, 0.15)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;