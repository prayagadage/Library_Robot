/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        library: {
          bg: '#10141d',        // Deep dark slate/gunmetal
          bgDark: '#0b0f15',    // Darker shade
          card: '#1f293a',      // Lighter slate for cards
          cardHover: '#2a3648', // Hover state
          accent: '#FCD34D',    // Vibrant yellow/gold
          text: '#FFFFFF',      // Primary text
          textMuted: '#9CA3AF', // Secondary text (gray-400)
          border: '#374151',    // Subtle borders
          success: '#10B981',   // Green for status
          warning: '#F59E0B',   // Orange
          danger: '#EF4444',    // Red
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 15px rgba(244, 196, 48, 0.1)',
      }
    },
  },
  plugins: [],
}

