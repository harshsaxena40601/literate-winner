/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            card: '#ffffff',
            'bg-card': '#ffffff',
            'bg-body': '#f5f7fb',
            'border-card': '#e5e7eb',
            'muted-foreground': '#6b7280',
            'bg-card-dark': '#0b1220',
            'bg-body-dark': '#0a0f1a',
            'border-card-dark': '#1f2937',
        },
        
      colors: {
        brand: {
          50:  "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",  // primary
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        }
      }
    },
  },
  plugins: [],
}
