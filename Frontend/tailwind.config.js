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
          bg: '#132C2B',        // Deep teal / charcoal green
          bgDark: '#0F1F1E',    // Darker shade for contrast
          card: '#1E3F3F',      // Lighter dark teal for cards
          cardHover: '#2A4F4F', // Hover state
          accent: '#F4C430',    // Warm yellow/gold
          text: '#FFFFFF',      // Primary text
          textMuted: '#8FA3A3', // Secondary text
          border: '#2C5555',    // Subtle borders
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

