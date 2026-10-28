---
name: Social Connect
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#424656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d7'
  primary: '#0050cd'
  on-primary: '#ffffff'
  primary-container: '#0866ff'
  on-primary-container: '#f9f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#0058bc'
  on-secondary: '#ffffff'
  secondary-container: '#0070eb'
  on-secondary-container: '#fefcff'
  tertiary: '#4f5b65'
  on-tertiary: '#ffffff'
  tertiary-container: '#67737d'
  on-tertiary-container: '#f3f8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00184a'
  on-primary-fixed-variant: '#003fa5'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#d8e4f0'
  tertiary-fixed-dim: '#bcc8d3'
  on-tertiary-fixed: '#111d25'
  on-tertiary-fixed-variant: '#3d4852'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  display-lg:
    fontFamily: Roboto Flex
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Roboto Flex
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Roboto Flex
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Roboto Flex
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 22px
  title-sm:
    fontFamily: Roboto Flex
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  body-md:
    fontFamily: Roboto Flex
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Roboto Flex
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  caption:
    fontFamily: Roboto Flex
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 2rem
  margin: 0.75rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system delivers a social utility experience centered on high-volume content consumption, frictionless interaction, and community engagement. The visual language balances structured density with effortless clarity. 

The aesthetic is Modern Functionalist: ultra-clean structural surfaces, recognizable interaction anchors, and content-first neutral scaffolding. The UI retreats into the background to prioritize user-generated media, updates, and interpersonal conversations. Micro-interactions are snappy, tactile, and immediately communicative, establishing an environment that feels familiar, dependable, and continuously active.

## Colors

The color palette is anchored around an iconic blue core, functional system states, and structured neutral tiers:

- **Primary Action Blue (`#0866FF`):** Dedicated to primary action triggers, active tabs, prominent links, and core navigation highlights.
- **Interactive Dark Blue (`#1877F2`):** Used for hover states on primary controls, secondary brand markers, and high-emphasis accent points.
- **Light Tint Blue (`#E7F3FF`):** Applied to active tab container pills, unread message indicators, active pill tags, and soft highlight backdrops.
- **Pure White (`#FFFFFF`):** Reserved for card surfaces, flyouts, modals, and the persistent top navigation container.
- **Canvas Neutral (`#F0F2F5`):** The global viewport background, establishing a soft contrast boundary beneath pure white content containers.
- **Primary Text (`#1C1E21`):** Applied across all body copy, user handles, headlines, and high-contrast iconography.
- **Secondary Text (`#65676B`):** Applied to timestamps, metadata, placeholder text, deactivated icons, and secondary utility labels.
- **Structural Border (`#CED0D4`):** For subtle dividers, input borders, card outlines in dense feeds, and separation rules.
- **Success Green (`#42B72A`):** Online status pips, completed actions, positive confirmation badges, and live indicators.
- **Alert & Notification Red (`#E41E3F`):** Notification count badges, live stream indicators, critical warnings, and destructive triggers.

## Typography

The typography leverages `Roboto Flex` (with fallback to platform standard stacks: `system-ui`, `-apple-system`, `Segoe UI`, `Helvetica`, `Arial`). The system prioritizes legibility, variable weight precision, and rapid scanning.

- **Display & Headlines:** Used selectively for portal titles, modal headers, and section hubs. Tight letter-spacing maintains a compact horizontal footprint.
- **Titles (`title-md`, `title-sm`):** Tailored for account names in post headers, group titles, and persistent drawer navigation categories.
- **Body (`body-lg`, `body-md`):** `body-lg` (15px/20px) is optimized for user feed updates, rendering paragraph text with optimal readability without taking excessive vertical height. `body-md` is standard for secondary descriptors and multi-line comments.
- **Labels & Captions:** Bold weights ensure microcopy (such as interaction buttons, notification counts, and section chips) remains instantly legible against saturated colors.

## Layout & Spacing

The layout is built on an adaptable multi-column architecture tailored to screen capability:

- **Desktop (1100px+):** A 3-column layout anchored by a fixed 56px sticky top navigation bar.
  - **Left Rail (280px–360px fixed width):** Personal profile shortcuts, system navigation bookmarks, and quick-access directories.
  - **Center Feed (500px–680px fluid max-width):** The primary engagement track housing Composer, Stories trays, and algorithmic feed cards.
  - **Right Rail (280px–360px fixed width):** Sponsored units, group updates, and the real-time contact list with presence indicators.
- **Tablet (768px–1099px):** Collapses the left rail into an off-canvas drawer or top horizontal iconography; retains the main feed and consolidates contacts into a floating panel.
- **Mobile (<768px):** The top navigation simplifies to branding, search, and message quick-actions. The primary route switches to a fixed bottom navigation bar (54px height) featuring 5 core hubs (Home, Video, Marketplace, Groups, Profile/Menu). Feed cards expand edge-to-edge with eliminated outer horizontal margins for full screen real-estate efficiency.

## Elevation & Depth

Visual hierarchy relies on crisp surface layering combined with ambient, diffused shadows:

- **Level 0 (Canvas):** `#F0F2F5` flat surface.
- **Level 1 (Card & Post Baseline):** `#FFFFFF` surfaces layered directly over `#F0F2F5`. Subtle ambient drop shadow: `0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05)`. On desktop, a 1px border (`#CED0D4`) is added or substituted when contrast needs reinforcement.
- **Level 2 (Sticky Headers & Menus):** Top navigation bar and sticky tab controls. `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08)`.
- **Level 3 (Popovers, Dropdowns & Flyouts):** User profile menus, notification flyouts, search autocompletes, and inline context menus: `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.05)`.
- **Level 4 (Modals & Overlays):** Composer dialogs, media viewers, and account switchers: `box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2)`. Underlaid with an active backdrop veil: `rgba(244, 246, 248, 0.8)` or dark theater mode `rgba(0, 0, 0, 0.7)`.

## Shapes

The interface balances soft structural surfaces with perfectly rounded utility anchors:

- **Cards & Content Blocks:** Standard 8px border-radius (`roundedness: 2`) establishes clean architectural modularity across feed elements, dialogs, and panels.
- **Interactive Inputs:** Search inputs, status post prompt triggers ("What's on your mind?"), and filter chips use a fully rounded capsule (`rounded-full` / 9999px) to invite casual touch interaction.
- **Avatar System:** Strictly circular (50% border radius). Avatars feature an optional 2px pure white border when nested or layered over media, and dynamic green presence status dots anchored to the bottom-right quadrant.
- **Action Trays & Reaction Badges:** Micro-buttons and utility icon holders use 50% circular footprints (36px or 40px circles) for standalone tool states, or rounded-md (6px) within segmented groups.

## Components

### Buttons
- **Primary:** Background `#0866FF`, label `#FFFFFF`, 0 36px height, font `label-md`. Hover triggers `#1877F2`. Active state compresses slightly (`transform: scale(0.98)`).
- **Secondary:** Background `#E4E6EB` (or `#F0F2F5`), label `#1C1E21`. Hover switches to `#D8DADF`.
- **Tertiary / Soft:** Background `#E7F3FF`, label `#0866FF`. Hover darkens tint.
- **Ghost / Action Utility:** Transparent background, label `#65676B`, 8px padding. Used for card reactions (Like, Comment, Share) with an active hover background of `#F2F2F2`.

### Avatars & Status
- Standard dimensions: 40px (Feed Post), 36px (Comments), 32px (Navigation), 60px (Stories), 168px (Profile Header).
- **Default Silhouette:** When no user photo is available, render a geometric neutral `#CED0D4` silhouette encased within an `#E4E6EB` circular container.
- **Presence Dot:** 10px–14px `#42B72A` circle ringed with a 2px `#FFFFFF` outline, anchored at the bottom-right corner.

### Cards & Feed Posts
- White `#FFFFFF` container with `0.5rem` (8px) radius on desktop; edge-to-edge on mobile with top/bottom 1px hairline border `#CED0D4`.
- Post Header: 40px Avatar, bold author name (`title-sm`), timestamp + privacy glyph (`caption` in `#65676B`), and a right-aligned horizontal ellipses utility button.
- Interaction Bar: Dividers top and bottom (`#CED0D4` at 0.5px or `#E4E6EB`), splitting into 3 equal text-icon action buttons (Like, Comment, Share).

### Chips & Filter Pills
- Heights of 32px or 36px, fully pill-shaped.
- Unselected: `#E4E6EB` background with `#1C1E21` text.
- Selected: `#E7F3FF` light blue background with `#0866FF` bold text.

### Form Inputs & Composer
- Prompt Box ("What's on your mind?"): Capsule pill shape, `#F0F2F5` background, `#65676B` placeholder text, zero visible border until hovered (`#CED0D4`).
- Standard Input Field: 40px height, `#FFFFFF` background, 6px radius, 1px border `#CED0D4`. Focused state highlights border with 2px `#0866FF`.

### Checkboxes & Radio Controls
- Radio controls are 20px circles with `#0866FF` active center dot. Checkboxes are 20px squares with 4px border radius, filling with `#0866FF` and a white check icon upon selection.

### Sticky Navigation & Mobile Nav
- **Sticky Top Bar:** Fixed desktop/mobile bar (56px) in `#FFFFFF`, with 1px border-bottom `#CED0D4`. Contains brand glyph, search expansion capsule, centered navigation tabs (with `#0866FF` indicator line for the active tab), and right-hand circular utility icon buttons.
- **Mobile Bottom Navigation:** Fixed bottom dock (54px), `#FFFFFF`, 5 equidistant touch targets with 24px icons. Active item features `#0866FF` fill and label, inactive uses `#65676B`.
- **Notification Badges:** Absolute positioned top-right pill/circle in `#E41E3F`, white bold typography (`caption`), min-width 18px.