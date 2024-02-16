/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx', './src/components/ui/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        btn: '0 0 0 2px rgba(255,255,255,0.2)'
      }
    }
  },
  plugins: []
};

export default config;
