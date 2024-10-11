/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',  
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }

          '3xl': '1600px',
          // => @media (min-width: 1600px) { ... }
        }     
      },
      fontFamily: {
        'source-sans': ['Source Sans 3', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: "var(--background-body)",
        "text-primary": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "d-background": "var(--dark-background-body)",
        "d-text-primary": "var(--dark-text-main)",
        "d-text-secondary": "var(--dark-text-secondary)",
        primary: "var(--primary-color)",
        gray: colors.gray,
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',  
      },
      backgroundImage: {
        // "grad-theme-135":
        //   "linear-gradient(135deg, rgba(241, 178, 168, 1) 0%, rgb(236, 87, 168, 1) 49%, rgba(91, 90, 247, 1) 100%)",
      },
      boxShadow: {
        navbar:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
  }, 
  
  plugins: [
    typography
  ],
}

