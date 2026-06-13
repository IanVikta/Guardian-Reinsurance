---
name: Guardian Prestige
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#000825'
  on-tertiary: '#ffffff'
  tertiary-container: '#051e50'
  on-tertiary-container: '#7487be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#dae1ff'
  tertiary-fixed-dim: '#b3c5ff'
  on-tertiary-fixed: '#001849'
  on-tertiary-fixed-variant: '#324578'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-muted: '#EAF1F7'
  text-primary: '#001529'
  text-secondary: '#4A5568'
  gold-dark: '#C5A000'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-gap-lg: 128px
  section-gap-md: 80px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style

This design system embodies the "Guardian" persona: protective, established, and intellectually superior. It is designed for a B2B audience in the high-stakes world of reinsurance, where trust is the primary currency. 

The aesthetic is **Corporate Modern with a Minimalist Editorial influence**. It avoids the clutter of traditional insurance sites, opting instead for a "Boutique Firm" feel. We achieve this through:
- **Authority:** High-contrast serif headings that command attention.
- **Precision:** A strict adherence to a baseline grid and generous whitespace.
- **Stability:** A palette of deep navy grounded by professional gold accents.
- **Clarity:** Functional, utilitarian layouts that prioritize information hierarchy over decorative flair.

The emotional goal is to make the client feel they are in the hands of seasoned experts who value technical accuracy and forward-thinking risk management.

## Colors

The palette is anchored by **Guardian Navy (#002147)**, representing institutional strength and heritage. This is the primary color for all critical brand elements, heavy backgrounds, and primary navigation.

**Prestige Gold (#FFD700)** is used as a strategic accent. It should be applied sparingly to draw the eye to primary CTAs, active states, or premium "Eyebrow" text. For better legibility on white backgrounds, the `gold-dark` variant may be used for text.

Backgrounds utilize a tiered system of neutrals. The base is clean white, with **Surface Muted (#EAF1F7)** used for secondary section backgrounds or card surfaces to provide subtle depth without the need for heavy shadows. Text is kept to a near-black navy to maintain softer contrast than pure black, enhancing readability and premium feel.

## Typography

This system uses a **Serif-on-Sans** pairing to balance traditional authority with modern accessibility. 

**Source Serif 4** is the voice of the brand. It is used for all major headlines and the Hero value proposition. Its editorial quality suggests deep knowledge and literary sophistication.

**Work Sans** provides a technical, clean, and highly legible counterpoint for all body copy, data, and interactive labels. It is chosen for its professional, "no-nonsense" character.

**Key Rules:**
- **Eyebrows:** Always use `label-caps` in Prestige Gold or Primary Navy above H2 headlines.
- **Line Height:** Maintain generous leading (1.5x for body) to ensure the interface feels airy and unhurried.
- **Alignment:** Primary headlines are left-aligned to reinforce a structured, grid-based layout.

## Layout & Spacing

The layout follows a **12-column Fixed Grid** for desktop, ensuring that content remains centered and readable on large displays. 

**Spacing Principles:**
- **The 8px Rule:** All margins, padding, and gaps must be multiples of 8px.
- **Generous Verticality:** Sections should be separated by `section-gap-lg` (128px) to allow the high-quality imagery and typography to "breathe." This whitespace is intentional; it signals confidence and prevents the user from feeling overwhelmed by technical data.
- **Content Reflow:** On mobile, the 12-column grid collapses to a single column with 20px side margins. Images should scale to full-width, and padding should reduce to `section-gap-md` (80px) between major blocks.

## Elevation & Depth

To maintain a premium, modern feel, this design system avoids heavy drop shadows and faux-3D effects. Depth is communicated through **Tonal Layering and Low-Contrast Outlines.**

- **Surface Tiers:** Use the neutral `surface-muted` color to define cards or containers against the white background. This creates a soft, "nested" appearance.
- **Ghost Borders:** For interactive elements like input fields or secondary buttons, use 1px solid borders in a light gray (#D1D5DB).
- **Subtle Ambient Shadows:** Only for floating elements (like dropdown menus), use a very soft, highly diffused shadow: `0 4px 20px rgba(0, 33, 71, 0.08)`. The tint of the shadow should be a derivative of the Primary Navy, never pure black.
- **Glassmorphism:** Use sparingly for sticky navigation bars. A `backdrop-filter: blur(12px)` with a 90% opaque white background keeps the interface light and modern.

## Shapes

The shape language is **Soft (0.25rem)**. While a completely sharp (0px) look can feel too aggressive and "old-school corporate," a pill-shaped (3) look is too casual for reinsurance. 

- **Standard Elements:** Buttons, cards, and input fields use a consistent 4px (0.25rem) radius.
- **Large Elements:** Featured images or major section containers may use an 8px (0.5rem) radius for a slightly softer feel.
- **Iconography:** Use "Stroke" icons with a 1.5pt weight. Avoid filled icons unless used for social media branding in the footer.

## Components

### Buttons
- **Primary:** Solid Guardian Navy background, white text. No shadow. 4px rounded corners.
- **Secondary/CTA:** Solid Prestige Gold background, Navy text. Use for "Get a Quote."
- **Ghost:** Navy 1px border, Navy text, transparent background.

### Input Fields
- Understated design. 1px light gray border, white background. On focus, the border transitions to Guardian Navy with a 2px inset ring. Labels are always `body-md` placed above the field.

### Cards
- No shadows. Use `surface-muted` background or a simple 1px border. Padding should be generous (minimum 32px) to keep content centered and clear.

### FAQ Accordions
- Flat design. Questions are `headline-sm`. The expand/collapse icon is a simple plus/minus in Prestige Gold.

### Lists
- Use custom bullets. Instead of standard dots, use a 4px solid gold square or a subtle Navy chevron to align with the professional brand style.

### Footer
- High-density information. Background should be `primary_color_hex` (Navy) with white text. Use `label-caps` for column headers. Organize links into clear logical clusters (Products, Claims, Resources).