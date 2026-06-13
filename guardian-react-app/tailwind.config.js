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
        "on-surface": "#191c1d",
        "on-error": "#ffffff",
        "primary-container": "#002147",
        "on-tertiary-container": "#7487be",
        "text-primary": "#001529",
        "on-secondary-fixed-variant": "#544600",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#e9c400",
        "secondary-container": "#fcd400",
        "surface": "#f8f9fa",
        "secondary-fixed": "#ffe16d",
        "on-background": "#191c1d",
        "inverse-surface": "#2e3132",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#aec7f6",
        "surface-tint": "#465f88",
        "outline": "#74777f",
        "on-tertiary-fixed": "#001849",
        "on-error-container": "#93000a",
        "text-secondary": "#4A5568",
        "tertiary-fixed": "#dae1ff",
        "on-secondary-container": "#6e5c00",
        "surface-container-highest": "#e1e3e4",
        "tertiary": "#000825",
        "surface-variant": "#e1e3e4",
        "on-secondary-fixed": "#221b00",
        "surface-container": "#edeeef",
        "gold-dark": "#C5A000",
        "outline-variant": "#c4c6cf",
        "surface-bright": "#f8f9fa",
        "surface-muted": "#EAF1F7",
        "surface-container-high": "#e7e8e9",
        "primary": "#000a1e",
        "on-primary-container": "#708ab5",
        "surface-dim": "#d9dadb",
        "on-tertiary-fixed-variant": "#324578",
        "background": "#f8f9fa",
        "tertiary-container": "#051e50",
        "secondary": "#705d00",
        "on-primary-fixed-variant": "#2d476f",
        "primary-fixed": "#d6e3ff",
        "error-container": "#ffdad6",
        "on-primary-fixed": "#001b3d",
        "inverse-on-surface": "#f0f1f2",
        "surface-container-lowest": "#ffffff",
        "inverse-primary": "#aec7f6",
        "tertiary-fixed-dim": "#b3c5ff",
        "on-surface-variant": "#44474e",
        "error": "#ba1a1a"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "section-gap-md": "100px",
        "gutter": "40px",
        "container-max": "1280px",
        "section-gap-lg": "160px",
        "unit": "8px",
        "margin-desktop": "48px",
        "margin-mobile": "24px"
      },
      fontFamily: {
        "body-md": ["Work Sans", "sans-serif"],
        "body-lg": ["Work Sans", "sans-serif"],
        "headline-lg-mobile": ["Source Serif 4", "serif"],
        "headline-sm": ["Source Serif 4", "serif"],
        "label-caps": ["Work Sans", "sans-serif"],
        "headline-md": ["Source Serif 4", "serif"],
        "headline-lg": ["Source Serif 4", "serif"],
        "display-lg": ["Source Serif 4", "serif"],
        "button": ["Work Sans", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { "lineHeight": "26px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "30px", "fontWeight": "400" }],
        "headline-lg-mobile": ["36px", { "lineHeight": "44px", "fontWeight": "600" }],
        "headline-sm": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.15em", "fontWeight": "700" }],
        "headline-md": ["36px", { "lineHeight": "44px", "fontWeight": "600" }],
        "headline-lg": ["56px", { "lineHeight": "64px", "fontWeight": "600" }],
        "display-lg": ["72px", { "lineHeight": "80px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "button": ["14px", { "lineHeight": "20px", "fontWeight": "600" }]
      }
    }
  },
  plugins: []
}
