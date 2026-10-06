/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Logo-aligned primary and accent colors
        "brand-navy": "#0B2553",       // Primary authoritative navy from logo
        "brand-navy-dark": "#071735",  // Deeper shade
        "brand-blue": "#0E3B82",       // Royal blue midtone
        "brand-azure": "#0284C7",      // Vibrant azure from logo gradient sphere
        "brand-cyan": "#0EA5E9",
        "brand-ice": "#F0F7FF",        // Soft ice blue tint

        // High-end editorial neutrals (inspired by Coverly template)
        "warm-canvas": "#FAF8F5",      // Crisp warm ivory canvas
        "warm-card": "#F5F2EB",        // Warm sand / oat card background
        "warm-card-hover": "#EFEBE2",  // Hover state
        "warm-border": "#E7E2D9",      // Fine editorial border
        "warm-border-strong": "#D5CEBF",
        "charcoal": "#121824",         // Rich deep slate for high contrast typography
        "charcoal-muted": "#525D6F",   // Subdued readable copy
        "charcoal-light": "#8A94A6",

        // Maintained aliases for compatibility
        "primary": "#0B2553",
        "primary-container": "#071735",
        "secondary": "#0284C7",
        "secondary-container": "#E0F2FE",
        "secondary-fixed": "#0284C7",
        "tertiary": "#0E3B82",
        "tertiary-container": "#071735",
        "surface": "#FAF8F5",
        "surface-muted": "#F5F2EB",
        "surface-container": "#F5F2EB",
        "surface-container-highest": "#E7E2D9",
        "text-primary": "#121824",
        "text-secondary": "#525D6F",
        "on-surface": "#121824",
        "on-primary": "#ffffff",
        "on-background": "#121824",
        "background": "#FAF8F5",
        "outline": "#D5CEBF",
        "outline-variant": "#E7E2D9"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        full: "9999px"
      },
      spacing: {
        "section-gap-md": "80px",
        "section-gap-lg": "120px",
        "container-max": "1280px"
      },
      fontFamily: {
        serif: ["Newsreader", "Source Serif 4", "Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["Newsreader", "Source Serif 4", "serif"],
        body: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "headline-sm": ["Newsreader", "Source Serif 4", "serif"],
        "headline-md": ["Newsreader", "Source Serif 4", "serif"],
        "headline-lg": ["Newsreader", "Source Serif 4", "serif"],
        "display-lg": ["Newsreader", "Source Serif 4", "serif"],
        "label-caps": ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "button": ["Plus Jakarta Sans", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
