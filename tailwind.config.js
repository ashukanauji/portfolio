/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#06b6d4',
        surface: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(124,58,237,0.25), rgba(2,6,23,1) 40%)',
      },
    },
  },
  plugins: [],
};
