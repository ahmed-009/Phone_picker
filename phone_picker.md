---
name: Phone Picker
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#a8ffd2'
  on-tertiary: '#003824'
  tertiary-container: '#5be9ad'
  on-tertiary-container: '#006645'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-lg:
    fontFamily: Cairo
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Cairo
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Cairo
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Cairo
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Cairo
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Cairo
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Cairo
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Cairo
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Cairo
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
  label-md:
    fontFamily: Cairo
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Cairo
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

The design system establishes a high-precision, technical, yet hyper-intuitive mobile shopping experience for gadget enthusiasts and everyday consumers seeking smartphone comparisons. The UI evokes technological sophistication, analytical clarity, and decisive confidence.

The design philosophy blends **Modern Dark Minimalism** with **Glassmorphism accents**:
- **Deep Immersion:** Rich obsidian and charcoal substrates eliminate visual fatigue and make high-resolution hardware photography stand out.
- **Analytical Precision:** Critical specification comparisons (battery health, benchmark scores, camera sensor metrics) are elevated through radiant electric cyan indicators and high-contrast analytical verdict tags.
- **Tactile Fluidity:** Mobile-first touch targets with frosted translucent materials deliver native app responsiveness within a Progressive Web App shell, specifically optimized for single-handed thumb zones at a 390px baseline portrait view.
- **RTL-Native Ergonomics:** Structural geometry, swipe interactions, and dynamic comparative bars are engineered natively from right to left (RTL) for Arabic language primacy.

## Colors

The palette relies on deep oceanic and cosmic charcoals layered beneath high-energy digital accents.

### Surface Architecture
- **Canvas Base (`#0B0F17`):** The primary view substrate.
- **Surface Elevation 1 (`#111827`):** Base card containers and section segments.
- **Surface Elevation 2 (`#161F30`):** Elevated comparative tables, input fields, and active selection tabs.
- **Surface Elevation 3 (`#1E293B`):** Modals, bottom sheets, and floating bars.

### Key Accents & Verdict System
- **Primary Electric Cyan (`#00E5FF`):** Hero actions, active nav states, and critical metric highlights.
- **Secondary Teal (`#14B8A6`):** Supporting data graphs and secondary badges.
- **Verdict Superior ("أفضل من منافسيه"):** `#10B981` text & border, paired with an ambient soft glow background `rgba(16, 185, 129, 0.15)`.
- **Verdict Neutral ("متوسط"):** `#F59E0B` text & border, paired with an ambient soft background `rgba(245, 158, 11, 0.15)`.
- **Verdict Inferior ("أضعف من منافسيه"):** `#EF4444` text & border, paired with an ambient soft background `rgba(239, 68, 68, 0.15)`.

### Stroke & Glass Layers
- **Subtle Stroke:** `rgba(255, 255, 255, 0.08)` for container boundaries.
- **Highlight Stroke:** `rgba(0, 229, 255, 0.30)` for focused or winning metric containers.
- **Divider Tint:** `rgba(255, 255, 255, 0.06)` for internal data separation.

## Typography

The typographic system utilizes **Cairo** across all display, body, and numerical levels. Cairo provides exceptional legibility for Arabic geometric forms while maintaining optical proportion with Western numerals and technical units (e.g., "120Hz", "5000mAh", "4K").

### Hierarchical Roles
- **Hero & Device Titles:** Handled by `display-lg` and `display-sm`, utilizing Cairo’s extra bold weights to anchor hardware overviews.
- **Specification Categories & Sections:** Driven by `headline-lg` and `headline-md` for distinct categorical scanning (الكاميرا, البطارية, الشاشة).
- **Comparative Data & Values:** Utilizes `body-md` and `headline-sm` with tabular numerical alignment to keep column comparisons synchronized.
- **Badges & Meta Labels:** Powered by `label-lg` down to `label-sm` with strict tracking adjustments to preserve legibility in tight verdict chips.

## Layout & Spacing

The layout is built mobile-first, targeting a compact 390px portrait baseline with fluid boundary behavior.

### Grid & Ergonomic Safe Areas
- **Mobile Grid (≤ 480px):** 4 fluid columns with 12px (`0.75rem`) gutters and 16px (`1rem`) horizontal screen margins. All critical comparison actions (adding phones, toggling diffs) are anchored within the thumb-accessible bottom 40% of the viewport.
- **Tablet / Responsive Fold (`481px - 840px`):** 8 fluid columns with 16px gutters, allowing side-by-side spec stickiness.
- **Desktop Comparison Console (`> 840px`):** Max container constraint of 1024px centered, using 12 columns with 24px (`1.5rem`) gutters.

### Component Spacing Rhythm
- **Micro Spacing (`space-xs` to `space-sm`):** Reserved for badge paddings, icon-to-label gaps, and hardware spec micro-details.
- **Container Rhythm (`space-md` to `space-lg`):** Governs internal card padding and stack separations within phone comparison matrices.
- **Structural Separation (`space-xl`):** Separates core technical blocks (e.g., moving from Geekbench performance metrics to physical build specifications).

## Elevation & Depth

Visual hierarchy uses physical glass layering, surface luminance stepping, and subtle chromatic outer glows rather than heavy muddy dropshadows.

### Layer Hierarchy
1. **Level 0 (Canvas):** Pure `#0B0F17`, unlit.
2. **Level 1 (Card Bases):** Background `#111827` overlaid with a 1px solid stroke of `rgba(255, 255, 255, 0.08)`. No directional shadow.
3. **Level 2 (Active/Selected Items):** Background `#161F30` with a subtle top edge highlight `rgba(255, 255, 255, 0.12)` and ambient diffuse shadow: `0 8px 24px -4px rgba(0, 0, 0, 0.45)`.
4. **Level 3 (Sticky Nav & Modals):** Frosted glass composition: `background: rgba(17, 24, 39, 0.75)`, `backdrop-filter: blur(16px)`, encased with a crisp `rgba(255, 255, 255, 0.10)` perimeter outline.

### Metric Highlight Glow
When a smartphone specification is marked as the category winner, the enclosing container adopts a glowing outer halo:
`box-shadow: 0 0 16px -2px rgba(0, 229, 255, 0.25); border-color: rgba(0, 229, 255, 0.40);`

## Shapes

The interface embraces a continuous curved silhouette that matches physical smartphone hardware aesthetics:
- **Base Components & Spec Cards:** Fixed at `16px` (`rounded-lg`), mirroring the corner radius of modern handheld devices.
- **Buttons & Search Inputs:** `12px` to `16px` curvature for effortless touch ergonomics.
- **Verdict Badges & Numerical Pills:** Full circular caps (`rounded-full` / `9999px`) to distinguish categorical tags from interactive functional cards.
- **Sheet Overlays & Modals:** Top corner radii anchored at `24px` (`rounded-xl`) with flat bottom edges adhering to screen boundaries.

## Components

### Buttons
- **Primary CTA:** Radiant Electric Cyan (`#00E5FF`) background with deep contrast slate text (`#0B0F17`), weight 700. Pressed state scales down to `97%` with a brightness reduction.
- **Secondary / Action Button:** Translucent slate surface (`#161F30`) bounded by `rgba(255, 255, 255, 0.08)` border, with crisp white or teal typography.
- **Icon Quick-Actions:** 44x44px touch target minimum, centered Feather/Lucide vector stroke set at 2px weight.

### Verdict Badges
- **Structure:** Inline pill badges with a 6px internal horizontal padding, 2px vertical padding, incorporating Lucide status micro-icons (e.g., check-circle, minus-circle, alert-circle).
- **Tokens:**
  - **Superior:** Background `rgba(16, 185, 129, 0.15)`, text & icon `#10B981`, border `1px solid rgba(16, 185, 129, 0.3)`. Text: "أفضل من منافسيه".
  - **Average:** Background `rgba(245, 158, 11, 0.15)`, text & icon `#F59E0B`, border `1px solid rgba(245, 158, 11, 0.3)`. Text: "متوسط".
  - **Inferior:** Background `rgba(239, 68, 68, 0.15)`, text & icon `#EF4444`, border `1px solid rgba(239, 68, 68, 0.3)`. Text: "أضعف من منافسيه".

### Spec Comparison Cards
- **Architecture:** Double or triple column matrix with sticky column headers presenting phone models side-by-side. 
- **Row Alternation:** Background shifts between transparent and `rgba(255, 255, 255, 0.02)` across spec rows to sustain tracking fidelity across RTL lines.
- **Divergence Highlighting:** Rows with divergent values apply bold text weights and subtle teal callout borders.

### Input Fields & Search Bars
- **Style:** Deep charcoal background (`#111827`), inset padding of 14px, 16px corner radius, framed by `rgba(255, 255, 255, 0.08)`.
- **States:** Active typing state transitions the border to `#00E5FF` with a localized diffuse glow `0 0 0 3px rgba(0, 229, 255, 0.15)`. Search icon positioned on the right side with RTL offset.

### Floating Bottom Navigation
- **Dock Layout:** Fixed bottom floating bar spanning `calc(100% - 32px)`, elevated 12px above bottom screen margin.
- **Surface:** Glassmorphic slate (`rgba(17, 24, 39, 0.85)`, `backdrop-filter: blur(20px)`), with 20px corner radius and `rgba(255, 255, 255, 0.10)` stroke.
- **Tabs (3 slots):**
  1. **الهواتف (Phones):** Icon `Smartphone`, label underneath.
  2. **المقارنة (Compare):** Icon `Columns2` (or `Scale`), label underneath, accompanied by an active numerical badge indicating selected devices count (e.g., "2").
  3. **إضافة (Add):** Center or flanking slot with an highlighted icon `PlusCircle` colored in `#00E5FF`.
- **States:** Active tab triggers an animated pill highlight and changes icon/text tone to `#00E5FF`; inactive tabs rest at `rgba(255, 255, 255, 0.5)`.