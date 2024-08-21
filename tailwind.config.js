/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        shadowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
          '50%': { boxShadow: '0 0 15px rgba(112, 73, 243, 0.5)' },
        },
      },
      animation: {
        shadowPulse: 'shadowPulse 1.5s ease-in-out infinite',
      },

      colors: {
        'text-color': "#CAC5D4",
        'bg': "#0A0420",
        "grad-from": "#6F3FEE",
        "grad-to": "#FA9478",
      }
    },
  },
  plugins: [],
}

