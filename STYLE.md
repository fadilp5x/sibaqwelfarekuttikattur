# SIBAQ KUTTIKKATTUR 2K26 — STYLE GUIDE & DESIGN SYSTEM

> Comprehensive specification of design tokens, typography, color architecture, motion physics, component patterns, and anti-slop rules powering the SIBAQ Kuttikkattur 2K26 web platform and Welfare Committee Presentation.

---

## 1. Brand Identity & Visual Language

SIBAQ Kuttikkattur 2K26 is the 11th Biennial National Arts Fest of Darul Huda Islamic University, hosted at Shamsul Huda Islamic Academy, Kuttikkattur, Kozhikode, Kerala.

### Core Visual Principles
- **Celebratory & Dignified:** Blends festival vibrancy with Islamic scholarly tradition.
- **Evidence Over Jargon:** Concrete figures, verified historical photos, and exact rupee budgets instead of vague marketing copy.
- **Presentation-Room Contrast:** High-contrast surfaces engineered for projection in brightly lit halls (>4.5:1 WCAG AA, >7:1 AAA).
- **Anti-Slop Discipline:** Zero generic AI templates, zero synthetic purple gradients, zero meaningless floating blobs, zero truncated vernacular scripts.

---

## 2. Color System & Design Tokens

### 2.1 Brand Primitives & Semantic Roles

| Token Name | Hex Code | Semantic Role & Application |
|------------|----------|-----------------------------|
| `--sibaq-flame` | `#F15A24` | Primary brand accent, Stage Arrangements, CTA buttons, active tabs |
| `--sibaq-ember` | `#E52B2B` | Festival Crimson, Candidates metric, urgent action highlights |
| `--sibaq-marigold` | `#FFC928` | Carnival Yellow, Programmes metric, star ornaments, 3D gold numbers |
| `--sibaq-leaf` | `#33AC5A` | Palm Green, Campuses metric, general Islamic festive green |
| `--sibaq-emerald` | `#218C4A` | Accommodation & Facilities accent, health & safety indicators |
| `--sibaq-ring-green`| `#22C55E` | Glowing accent ring on Accommodation card (Slide 08) |
| `--sibaq-blue` | `#2F5FE8` | Vivid Blue, Venue highlights, Food item pricing display |
| `--sibaq-crimson-dark`| `#6A0C14` | Slide 08 Grand Total background gradient (top) |
| `--sibaq-crimson-mid` | `#4D070D` | Slide 08 Grand Total background gradient (middle) |
| `--sibaq-crimson-deep`| `#300307` | Slide 08 Grand Total background gradient (bottom) |
| `--sibaq-cream` | `#FFF8E8` | Presentation body background (daytime/slides 1–7) |
| `--sibaq-paper` | `#FFFDF8` | Card background surface |
| `--sibaq-ink` | `#191919` | Primary typography color (high-contrast charcoal) |
| `--sibaq-border` | `#E7D6C2` | Subtle dividing lines and card borders |

### 2.2 Section-Specific Signature Colors
Each presentation section owns an unmistakable color identity utilized in wipe transitions, headers, and badge tokens:

```
Slide 01 (Intro)         → #F15A24 (Flame Orange)
Slide 02 (Scale)         → #E52B2B (Festival Red)
Slide 03 (Programmes)    → #FFC928 (Marigold Yellow)
Slide 04 (Venue)         → #2F5FE8 (Vivid Blue)
Slide 05 (Stages)        → #F15A24 (SIBAQ Orange)
Slide 06 (Food)          → #2F5FE8 (Bright Blue)
Slide 07 (Facilities)    → #218C4A (Emerald Green)
Slide 08 (Grand Total)   → #6A0C14 (Deep Festival Crimson)
```

---

## 3. Typography Hierarchy

### 3.1 Font Families

| Role | Font Family | Google Fonts Fallback | Usage |
|------|-------------|-----------------------|-------|
| **Display / Headings** | `Poppins` (700, 800, 900) | `Anton`, `Archivo`, `sans-serif` | Slide titles, massive amounts, card headers |
| **Body / Explanatory** | `Inter`, `Plus Jakarta Sans` (400, 500, 600) | `system-ui`, `sans-serif` | Descriptions, captions, metadata |
| **Malayalam Text** | `Noto Sans Malayalam` (600, 700, 800) | `sans-serif` | Authentic food names from official poster |
| **Sacred Arabic Dua** | `Noto Naskh Arabic`, `Amiri` (700) | `Traditional Arabic`, `serif` | Slide 08 Closing Supplication |

### 3.2 Type Scale (Desktop 1920 × 1080 & Projector)

| Level | Size | Weight | Line Height | Tracking | Example |
|-------|------|--------|-------------|----------|---------|
| **Hero Grand Total** | `5rem`–`7.2rem` (80–115px) | 900 (Black) | `1.0` | `-0.02em` | `₹10,00,000` |
| **Section Big Budget** | `3rem`–`3.5rem` (48–56px) | 900 (Black) | `1.05` | `-0.02em` | `₹5,00,000` |
| **Slide Title** | `2rem`–`2.75rem` (32–44px) | 900 (Black) | `1.1` | `0.02em` | `STAGE ARRANGEMENTS` |
| **Section Kicker** | `0.75rem`–`0.875rem` (12–14px) | 800 (Extrabold) | `1.2` | `0.22em` | `FACILITIES REQUIRED` |
| **Card Heading** | `0.875rem`–`1rem` (14–16px) | 800 (Extrabold) | `1.2` | `0.05em` | `THREE STAGES` |
| **Arabic Dua** | `1.75rem`–`2.25rem` (28–36px) | 700 (Bold) | `1.65` | `normal` | `اللَّهُمَّ تَقَبَّلْ مِنَّا صَدَقَاتِنَا...` |
| **Pill / Badge Label** | `0.65rem`–`0.75rem` (10–12px) | 800 (Extrabold) | `1.0` | `0.18em` | `10 LAKHS INR` |

---

## 4. Layout & Spacing Architecture

### 4.1 Grid & Screen Ratios
- **16:9 Presentation Canvas:** Optimized for widescreen projectors and laptops.
- **Container Constraints:**
  - Content inner width: `max-w-6xl` (1152px) to `max-w-7xl` (1280px).
  - Presentation fixed header clearance: `pt-16 sm:pt-20`.
  - Presentation dock bottom breathing room: `pb-24 sm:pb-28`.
- **Responsive Fluidity:**
  - `grid-cols-1` on mobile (<768px).
  - `grid-cols-2` or `grid-cols-3` on desktop/projector (≥1024px).
  - Card max-heights tuned to fit within standard 768p laptop screens without vertical scroll clipping.

---

## 5. Component Patterns & Specifications

### 5.1 Presentation Header ([`PresentationHeader.tsx`](file:///e:/IMP%20FILES/Music/SLIDES/src/components/welfare/PresentationHeader.tsx))
- **Height:** `h-16 sm:h-18` fixed top bar with `backdrop-blur-md bg-[#FFF8E8]/95`.
- **Identity Lockup:** `‹ Home` shortcut link, SIBAQ logo icon, uppercase brand mark, and festival edition sub-label.
- **Segmented 01–08 Tabs:**
  - Active: Pill shape, `bg-[#F15A24] text-white shadow-sm scale-105`.
  - Inactive: `text-[#191919]/65 hover:bg-black/5`.
  - Adaptive Labels: Shows short title (`Intro`, `Our Reach`, `Programmes`, `Venue`, `Stages`, `Food`, `Facilities`, `Total`) from `lg:` viewport upwards.
- **Right Status Pill:** `● WELFARE COMMITTEE BRIEFING` with live green pulse indicator.
- **Fullscreen Action:** Dedicated toggle button (`F` hotkey).

### 5.2 Autohiding Presentation Dock ([`PresentationDock.tsx`](file:///e:/IMP%20FILES/Music/SLIDES/src/components/welfare/PresentationDock.tsx))
- **Shape & Elevation:** Rounded floating pill `rounded-full bg-white/95 backdrop-blur-md border border-[#E7D6C2] shadow-lg`.
- **Positioning:** Floating `bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40`.
- **Autohide Logic:**
  - Idle Timer: Fades out and slides down (`opacity-0 translate-y-16`) after **3,000ms** of inactivity.
  - Re-engagement: Immediately restores on mouse move, touch, keyboard interaction, or hovering over the bottom 56px trigger zone (`fixed bottom-0 h-14`).
- **Progress Track:** Dual-tone track with gradient fill (`from-[#F15A24] via-[#FFC928] to-[#33AC5A]`).
- **Terminal Slide Behavior:** On Slide 08 (`isLast`), the Next button and `SPACE / →` hint visually deactivate (`opacity-40 cursor-not-allowed`) to signal presentation completion.

### 5.3 Icon-Led Facility Cards
- **Geometry:** `rounded-2xl sm:rounded-3xl bg-white border border-[#E7D6C2]/60 shadow-sm hover:shadow-md`.
- **Icon Container:** `w-8 h-8 sm:w-9 sm:h-9 rounded-xl` with 10% tinted accent background (`bg-[#F15A24]/10` or `bg-[#218C4A]/10`).
- **Typography:** Bold uppercase headings without paragraph clutter for instant projection legibility.

### 5.4 Slide 08: Grand Total & Closing Supplication ([`SectionTotalSupport.tsx`](file:///e:/IMP%20FILES/Music/SLIDES/src/components/welfare/SectionTotalSupport.tsx))
- **Atmospheric Background:** Deep festival crimson gradient (`#6A0C14` to `#300307`) with a faint 7% opacity crowd texture and warm golden-orange ambient blur flares in the corners.
- **Header Lockup:** White SIBAQ logo, gold "KUTTIKKATTUR 2K26" kicker, and uppercase motto:
  `TOGETHER FOR KNOWLEDGE, ARTS AND A BRIGHTER GENERATION`.
- **Grand Total Amount:** Dual-stop gradient gold text (`#FFFDF0` → `#FFD768` → `#F59E0B`) with 3D drop-shadow and celebratory rays (`\\` `//`).
- **3-Card Component Breakdown:**
  1. `01` Orange badge — Stage Arrangements: `₹5,00,000`
  2. `02` Amber badge — Food Arrangements: `₹4,00,000`
  3. `03` Green badge — Accommodation & Facilities: `₹1,00,000` (highlighted with `border-2 border-[#22C55E]`)
- **Arabic Supplication:** Crisp white Arabic typography (`اللَّهُمَّ تَقَبَّلْ مِنَّا صَدَقَاتِنَا...`) with full diacritics, accompanied by an English translation below a gold 4-point star divider.

---

## 6. Motion & Transition Mechanics

### 6.1 Full-Screen Brand Colour-Wipe ([`ColorWipeOverlay.tsx`](file:///e:/IMP%20FILES/Music/SLIDES/src/components/welfare/ColorWipeOverlay.tsx))
Slide navigation utilizes an authentic full-screen wipe transition matching the destination slide's brand color:

```
[Phase A: Trigger]
       │
       ▼ (380ms ease-in)
[Phase B: Screen Covered] ──► Instantaneous scroll alignment (`scrollBehavior = auto`)
       │
       ▼ (400ms ease-out)
[Phase C: Reveal Destination]
```

- **Forward Wipe:** Sweeps in from the right (`translateX(100% → 0%)`), exits to the left (`translateX(-100%)`).
- **Backward Wipe:** Sweeps in from the left (`translateX(-100% → 0%)`), exits to the right (`translateX(100%)`).
- **Reduced Motion Support:** Automatically falls back to a 120ms gentle opacity crossfade when `prefers-reduced-motion` is active.

### 6.2 Keyboard Controller Specifications

| Key | Action | Guard / Behavior |
|-----|--------|------------------|
| `Space` | Next Slide | Blurs active element; ignores inside form inputs |
| `Shift + Space` | Previous Slide | Advances backward |
| `→` / `↓` / `PageDown` | Next Slide | Rate limited with 400ms cooldown |
| `←` / `↑` / `PageUp` | Previous Slide | Rate limited with 400ms cooldown |
| `Home` | Jump to Slide 01 | Direct navigation to Opening Intro |
| `End` | Jump to Slide 08 | Direct navigation to Total & Dua |
| `F` / `f` | Toggle Fullscreen | Uses native Fullscreen API |

---

## 7. Media & Photographic Standards

- **Authentic Aspect Ratios:** All authentic photos maintain natural `aspect-[16/9]` or `aspect-[16/10]` compositions without artificial white letterboxing borders.
- **Vernacular Graphics:** The official Malayalam Food Sponsorship Poster is displayed flush-aligned at full resolution (`lg:col-span-4`) alongside high-contrast readable food pricing cards (`lg:col-span-8`).
- **Hero Video Scrim:** Background YouTube festival footage features a multi-stop dark vignette gradient (`bg-neutral-950/60` and `from-neutral-950/90 to-neutral-950/80`) guaranteeing WCAG text contrast regardless of video brightness.

---

## 8. Anti-Slop Implementation Checklist

- [x] **No Generic Stock Vectors:** All graphics are SVG-coded specifically for the festival's actual domains (stages, audio rigs, dining halls, sleeping quarters, first-aid, security).
- [x] **No Unverified Data:** Every financial figure equals the verified total ($5\text{L} + 4\text{L} + 1\text{L} = 10\text{L}$).
- [x] **No Truncated Foreign Scripts:** Malayalam food titles render in complete Unicode text.
- [x] **No Keyboard Trap or Spacebar Hijack:** Navigation keys decouple focus from buttons to prevent unintended synthetic clicks.
- [x] **Clean Console Standard:** Zero runtime errors, zero 500 network failures during offline preview, and no unused asset preload warnings.
