/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6E9',
          100: '#F3EAC7',
          200: '#E7D492',
          300: '#DBBE5E',
          400: '#D1AC3D',
          500: '#C59B27', // Signature Gold
          600: '#A37B1B',
          700: '#7E5B15',
          800: '#5C4010',
          900: '#3D290A',
          glow: '#F5D77F',
        },
        champagne: {
          light: '#F8F4EA',
          base: '#E5D6C1',
          gold: '#D4AF37',
          rose: '#D8C3B5',
        },
        obsidian: {
          950: '#070708',
          900: '#0D0D10',
          850: '#141419',
          800: '#1C1C24',
          700: '#2A2A36',
          600: '#3D3D4E',
        },
        ivory: {
          50: '#FEFCFA',
          100: '#FAF6F0',
          200: '#F3ECE0',
          300: '#EAE0D0',
          400: '#DFD1BD',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Cinzel', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5C378 0%, #D4AF37 50%, #A37B1B 100%)',
        'radial-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(28, 28, 36, 0.8) 0%, rgba(13, 13, 16, 1) 100%)',
      }
    },
  },
  plugins: [],
}
