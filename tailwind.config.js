/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9A96E',
        secondary: '#1C1C1E',
        accent: '#F5E6D3',
        cream: '#FDFAF6',
        charcoal: '#2D2D2D',
        taupe: '#9B8F8F',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      transitionDuration: {
        1200: '1200ms',
      },
      zIndex: {
        60: '60',
        70: '70',
      },
      animation: {
        'bounce-slow': 'bounce-arrow 2.2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2.2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'wa-pulse': 'wa-pulse 2.2s ease-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '50%': { transform: 'translateY(10px) translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,169,110,0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(201,169,110,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'wa-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
      },
    },
  },
  plugins: [],
}
