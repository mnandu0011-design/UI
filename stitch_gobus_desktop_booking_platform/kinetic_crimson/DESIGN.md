---
name: Kinetic Crimson
colors:
  surface: '#faf9fd'
  surface-dim: '#dbd9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1b1e'
  on-surface-variant: '#5c3f40'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#906f6f'
  outline-variant: '#e5bdbd'
  surface-tint: '#bf0032'
  primary: '#ae002d'
  on-primary: '#ffffff'
  primary-container: '#d7193f'
  on-primary-container: '#ffeded'
  inverse-primary: '#ffb3b4'
  secondary: '#b7102a'
  on-secondary: '#ffffff'
  secondary-container: '#db313f'
  on-secondary-container: '#fffbff'
  tertiary: '#00632a'
  on-tertiary: '#ffffff'
  tertiary-container: '#127e3a'
  on-tertiary-container: '#c5ffc9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b4'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#920024'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001c'
  tertiary-fixed: '#95f8a5'
  tertiary-fixed-dim: '#7adb8c'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#faf9fd'
  on-background: '#1a1b1e'
  surface-variant: '#e3e2e6'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes a confident, precise, and highly legible desktop booking experience centered around vibrant red and pristine white. Designed for clarity, operational efficiency, and rapid decision-making across standard display resolutions (1366x768 through 1920x1080), the visual tone balances commercial energy with institutional reliability.

The design movement blends **Modern Utilitarianism** with **Structured Spatial Elevation**:
- Structural layouts emphasize wide-screen horizontal orientation, presenting complex routing details, schedules, and pricing matrices without vertical clutter.
- Surfaces favor high-contrast crisp white containers layered over subtle light grey and blush backgrounds.
- Absolutely no blue or indigo accents; navigational anchors, interactive cues, focus states, and primary actions are strictly expressed in brand red or functional emerald.
- Visual cadence is brisk and reassuring, eliminating booking friction and cognitive fatigue.

## Colors

The palette establishes an unambiguous hierarchy, channeling attention to conversion paths, seat availability, and itinerary validation.

### Core Roles
- **Primary Red (`#D7193F`)**: Directs key interactions, primary action buttons, selected seat indicators, and active primary navigation tabs.
- **Secondary Red (`#E63946`)**: Used for hover states, highlighted journey tags, and secondary action boundaries.
- **Dark Red (`#B5122B`)**: Applied on pressed states, active indicators, and high-emphasis brand badges.
- **Light Red Tint (`#FFF5F6`)**: Background tint for selected card rows, input focus backdrops, and active step banners.
- **Neutral Light Grey (`#F8F9FA`)**: Canvas and foundation backdrop behind structured white cards.
- **Surface White (`#FFFFFF`)**: Primary fill for cards, dropdown menus, seat deck panels, and navigation surfaces.
- **Dark Text (`#202124`)**: High-contrast foreground for primary headings, bus timings, operator titles, and costs.
- **Secondary Text (`#5F6368`)**: Intermediate contrast for metadata, bus features, stops, and placeholder text.
- **Structural Border (`#E8DDE0`)**: Muted, crimson-tinted grey for component borders, dividers, and card outlines.

### Functional Alerts
- **Success Green (`#16803C`)**: Exclusively reserved for confirmed bookings, available seats, on-time tags, and verified amenities.
- **Error Red (`#C62828`)**: Reserved for system alerts, booking errors, and sold-out/unavailable states.
- **Zero-Tolerance Rule**: Under no circumstances should blue be used for links, focus rings, buttons, or informational banners. Focus outlines must leverage a transparent alpha overlay of `#D7193F`.

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for prominent headers, route signposts, and fare displays with **Inter** for data grids, booking tables, seat indicators, and general interface text.

- **Numerics & Timing**: Bus departure/arrival times, durations, and seat numbers rely on tabular figures in Inter (`font-feature-settings: 'tnum' on, 'cv05' on`) to ensure clean vertical alignment across trip comparison cards.
- **Display Weights**: Headlines use a 700 bold weight with subtle negative tracking (`-0.02em` to `-0.01em`) to maintain crisp punchiness on desktop resolutions without feeling bulky.
- **Labels & Microcopy**: Status tags, uppercase seat deck designations (e.g., LOWER DECK, UPPER DECK), and amenities use `label-sm` or `label-md` with positive letter spacing for rapid scanning.

## Layout & Spacing

The layout is built for desktop-first booking workflows (1366px to 1920px viewports):
- **Grid Architecture**: Standard 12-column fixed-max grid capped at 1280px for standard displays and 1440px for wide screens, centered horizontally with `margin: 2rem` (32px) margins and `gutter: 1.5rem` (24px) column gutters.
- **Horizontal Journey Cards**: Search results utilize wide horizontal cards with distinct tabular columns: Operator Info (3 cols), Route Times & Durations (4 cols), Amenities & Ratings (2 cols), and Price & Seat CTA (3 cols).
- **Seat Layout Matrix**: Upper and lower bus decks use a strict 4-column seat spacing matrix (`space-sm` gap between adjoining seats, `space-lg` aisle channel).
- **Vertical Spacing Rhythm**: Page sections separate by `space-xl` (32px), individual search cards by `space-md` (16px), and internal card padding standardized at `space-lg` (24px).

## Elevation & Depth

Visual hierarchy combines crisp structural borders (`#E8DDE0`) with soft, diffuse, crimson-tinted shadows to prevent a sterile, flat appearance while avoiding dark muddy dropshadows.

- **Level 0 (Flat / Canvas)**: Background `#F8F9FA` with zero elevation.
- **Level 1 (Card Resting)**: Surface `#FFFFFF`, border `1px solid #E8DDE0`, shadow `0 2px 8px -2px rgba(32, 33, 36, 0.04), 0 1px 3px 0 rgba(215, 25, 63, 0.03)`.
- **Level 2 (Hover / Active Cards)**: Surface `#FFFFFF`, border `1px solid #D7193F`, shadow `0 8px 24px -4px rgba(215, 25, 63, 0.08), 0 2px 6px -1px rgba(32, 33, 36, 0.04)`.
- **Level 3 (Sticky Booking Summary & Modals)**: Surface `#FFFFFF`, border `1px solid #E8DDE0`, shadow `0 16px 36px -6px rgba(32, 33, 36, 0.12), 0 4px 12px -2px rgba(215, 25, 63, 0.06)`.
- **Seat Deck Elevation**: Individual available seats use an extruded pill/box shape with an inset bottom shadow (`inset 0 -2px 0 0 rgba(232, 221, 224, 0.8)`) to mimic tactile passenger seating.

## Shapes

The design system implements balanced geometric corners (Level 2: `0.5rem` / `8px` baseline). This imparts modern softness while retaining the tabular structure required for travel timetables.

- **Cards & Canvas Modules**: Standardized to `rounded-lg` (16px / `1rem`) for overall search result containers and search bar pods.
- **Buttons, Inputs & Dropdowns**: Built with `rounded` (8px / `0.5rem`) to maintain compact ergonomics.
- **Seat Units**: Molded with `rounded` (6px) with an inner headrest curve (`rounded-sm`).
- **Badges, Tags & Chips**: Set to fully rounded pill shapes for status tags (`9999px`) or `rounded` (6px) for feature chips.

## Components

### Top Navigation Bar
- Full-width white background (`#FFFFFF`) anchored by a bottom edge border (`1px solid #E8DDE0`).
- Top-level active item has a 3px bottom indicator in primary red (`#D7193F`) and text colored `#D7193F`.
- Global brand badge in `#D7193F` with crisp white logo typography.

### Buttons & Interactive Controls
- **Primary Button**: Solid `#D7193F` fill, white `#FFFFFF` text, `font-weight: 600`. Hover state shifts to `#E63946`; active state transitions to `#B5122B`. Focus ring: `3px solid rgba(215, 25, 63, 0.25)`.
- **Secondary Button**: White `#FFFFFF` fill, `1px solid #E8DDE0` border, `#202124` text. Hover changes border to `#D7193F` and text to `#D7193F` with `#FFF5F6` background.
- **Ghost/Tertiary**: Transparent fill, `#D7193F` text, hover background `#FFF5F6`.

### Bus Journey Results Card
- Desktop layout: Left-to-right flex container.
- Route display: Bold departure time (`headline-sm`), dotted path separator line with total duration, and bold arrival time.
- Fare column: Distinct price badge in `headline-md` `#202124` accompanied by primary red CTA "Select Seats".
- Expansion tray: Clicking "Select Seats" expands the seat layout seamlessly downward within the card using background `#F8F9FA` and an inner border.

### Seat Selection Grid
- Standardized visual key for seat states:
  - **Available**: White `#FFFFFF` background, `1.5px solid #E8DDE0` border, `#202124` text. Hover turns border `#D7193F`.
  - **Selected**: Solid `#D7193F` background, white `#FFFFFF` icon/text, subtle drop shadow.
  - **Booked / Unavailable**: `#F8F9FA` background, `#D8DADC` border, crossed or muted interior with `#A0A4A8` label.
  - **Female-Reserved**: Light red tint `#FFF5F6` background, `#E63946` border.
- Layout distinguishes Driver Seat (iconic boundary), Lower Deck, and Upper Deck with clear horizontal navigation tabs.

### Status Tags & Chips
- **On-Time / Fast Route**: `#16803C` text, `#EAF5ED` background, no border.
- **Filling Fast / Limited**: `#D7193F` text, `#FFF5F6` background, `1px solid #F6CFD5`.
- **AC / Sleeper / Seater Amenities**: `#5F6368` text, `#F8F9FA` background, `1px solid #E8DDE0`.

### Form & Input Fields
- White container with `1px solid #E8DDE0` resting border, `#202124` input value, and `#5F6368` placeholder.
- Focus state: Border turns `#D7193F` with an outer glow of `0 0 0 3px rgba(215, 25, 63, 0.15)`. No default blue browser outlines.
- City interchange swap button: Circular `36px` white button with `1px solid #E8DDE0` border and `#D7193F` icon centered between Origin and Destination inputs.