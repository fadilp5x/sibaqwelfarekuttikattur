# SIBAQ Welfare Presentation: Detailed Fundraising Slides & Color-Wipe Transitions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the existing SIBAQ Kuttikkattur 2K26 Welfare Committee presentation (`/welfare-presentation`) from 5 slides to 7 slides by replacing the single generic support overview with three dedicated, highly detailed slides (Stage Arrangements ₹5,00,000, Food Arrangements ₹4,00,000 with authentic Malayalam poster transcription, Accommodation & Essential Facilities ₹1,00,000), compact combined budget context (₹10,00,000), and custom full-viewport SIBAQ brand colour-wipe transitions.

**Architecture:** Maintain the React 18 + Vite + Tailwind CSS SPA architecture on route `/welfare-presentation`. Introduce a dedicated `ColorWipeOverlay` component for cinematic brand-colored slide wipe transitions with race condition locks; replace `SectionNeeds.tsx` with three focused slide components (`SectionStageArrangements.tsx`, `SectionFoodArrangements.tsx`, `SectionAccommodation.tsx`); update `presentationData.ts` single source of truth to 7 sections; and copy the new food poster into `public/images/presentation/`.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Vite, Lucide/SVG icons, HTML5 Fullscreen API, CSS `clamp()`, GPU-accelerated transforms (`transform: translateX()`), `prefers-reduced-motion`.

**Spec:** User prompt specifying 7 slides, exact image locks, authentic Malayalam poster transcription, ₹5L/₹4L/₹1L budgets, full-viewport color-wipe transitions, and anti-slop guidelines.

## Global Constraints

1. **Route Integrity:** Modify ONLY `/welfare-presentation` and its components/data. Do not touch homepage, admin routes, authentication, or backend.
2. **Image Lock:** Retain ALL approved images exactly:
   - Stage: `https://i.postimg.cc/VkgJM8Xc/image.png` (local: `/images/presentation/need-stages.png`)
   - Accommodation: `https://i.postimg.cc/13Gpj263/image.png` (local: `/images/presentation/need-accommodation.png`)
   - Programmes: Quran (`15JgVSpB`), Group Song (`vHcyXwJ3`), Live Art (`4N99Mqt0`), Sufi Sangeetham (`9Q2YBCSY`)
   - Statistics: Students (`7L3vWHY6`), Candidates (`TYgcmpkp`), Programmes (`053t7gPV`), Campuses (`yYMb4MGg`)
   - ONLY approved replacement: Food poster -> `media_1792152967407_1733dcd9.png` / `https://i.postimg.cc/Hkdz6gnV/image.png`.
3. **No Dark Theme:** Presentation theme remains bright white and warm-white (`#FFF8E8`), with SIBAQ Orange (`#F15A24`), Festival Red (`#E52B2B`), Marigold Yellow (`#FFC928`), and Emerald Green (`#33AC5A`).
4. **Exact Budgets:** Stage = ₹5,00,000; Food = ₹4,00,000; Accommodation = ₹1,00,000; Combined = ₹10,00,000.
5. **Exact Stage Facilities (6):** THREE STAGES, PANTHAL, GREEN ROOMS, KITCHEN, DINING HALL, GUEST ROOM.
6. **Exact Accommodation Facilities (5):** ACCOMMODATION FACILITIES, COMFORT STATIONS / WASHROOM FACILITIES (STRICTLY NO "temporary toilets"), BEDROOMS & SLEEPING ARRANGEMENTS, MEDICAL SUPPORT POINT, ROAD AND PERIMETER SECURITY.
7. **Verified Food Poster Transcription (7 items):**
   - നെയ്ച്ചോറ് & ചിക്കൻ കറി (Neychoru & Chicken Curry) — ₹77,000
   - പൊറോട്ട & ചിക്കൻ കറി (Porotta & Chicken Curry) — ₹35,000
   - ചിക്കൻ ബിരിയാണി (Chicken Biriyani) — ₹88,000
   - ചായ & സ്നാക്സ് (Tea & Snacks) — ₹16,000
   - ചിക്കൻ സൂർബിയാൻ (Chicken Surbiyan) — ₹88,000 (NOT Beef Biriyani)
   - സദ്യ (Sadya) — ₹40,000
   - പൊറോട്ട & ഗ്രീൻ പീസ് (Porotta & Green Peas) — ₹30,000
8. **Color-Wipe Transitions:** Full-viewport sweep covering outgoing slide before revealing incoming slide. Navigation input locked during transition. Respects `prefers-reduced-motion`.
9. **Deployment Target:** GitHub remote `https://github.com/fadilp5x/sibaqwelfarekuttikattur.git` on branch `main`.

## Review Focus

1. **Transition Race Conditions:** User rapidly presses Spacebar or clicks Next during an active 760ms color-wipe. Expected: Navigation input is debounced/locked until transition completes, preventing skipped slides or stuck overlays.
2. **Reduced Motion Accessibility:** User has `prefers-reduced-motion: reduce` set in system preferences. Expected: Fullscreen sweep animation is bypassed; slide changes instantly or with a fast cross-fade without disorienting motion.
3. **Food Poster Aspect Ratio & Responsiveness:** On mobile viewports (360x800, 390x844), vertical split must stack cleanly without shrinking the poster into an unreadable thumbnail or clipping food rates.
4. **Dock Safe Areas on Short Projectors (1366x768):** Bottom presentation dock must not obscure the estimated budget banner or facility lists.
5. **Direct URL / Hash Deep-Linking:** Visiting `/welfare-presentation#stages` or `?slide=food` navigates directly to the correct slide without getting stuck in a transition overlay.

---

### Task 1: Asset Preparation & Single Source of Truth Update

**Files:**
- Modify: `public/images/presentation/` (copy new food poster)
- Modify: `src/lib/presentationData.ts:1-190`

**Interfaces:**
- Consumes: `media_1792152967407_1733dcd9.png` (uploaded poster)
- Produces: Updated `PRESENTATION_SECTIONS` (7 entries), `STAGE_DATA`, `FOOD_DATA`, `ACCOMMODATION_DATA`, `COMBINED_BUDGET_DATA` in `presentationData.ts`.

- [ ] **Step 1: Copy verified new food poster asset**
Copy `C:\Users\SSU\.gemini\antigravity\brain\cb6f7074-f7d3-4963-8b77-6fc22be58a0b\.user_uploaded\media_1792152967407_1733dcd9.png` to `public/images/presentation/food-poster-new.png`.
Verify file exists and is readable.

- [ ] **Step 2: Update `src/lib/presentationData.ts` with 7 sections and detailed data**
Update `PRESENTATION_SECTIONS` to 7 items:
  1. `{ id: 'opening', number: '01', title: 'Introducing SIBAQ', shortLabel: 'Intro' }`
  2. `{ id: 'scale', number: '02', title: 'The Scale of SIBAQ', shortLabel: 'Our Reach' }`
  3. `{ id: 'culture', number: '03', title: 'Cultural Programmes', shortLabel: 'Programmes' }`
  4. `{ id: 'venue', number: '04', title: 'Venue & Dates', shortLabel: 'Venue' }`
  5. `{ id: 'stages', number: '05', title: 'Stage Arrangements', shortLabel: 'Stages' }`
  6. `{ id: 'food', number: '06', title: 'Food Arrangements', shortLabel: 'Food' }`
  7. `{ id: 'accommodation', number: '07', title: 'Accommodation & Facilities', shortLabel: 'Facilities' }`

Add typed objects:
- `stageArrangements`: kicker, title, image, remoteUrl, facilities list (6 items), budget: `₹5,00,000`, accentColor: `#F15A24`.
- `foodArrangements`: kicker, title, posterImage, posterRemoteUrl, items list (7 verified items with Malayalam, English, and INR price), overallBudget: `₹4,00,000`, accentColor: `#FFC928`.
- `accommodationFacilities`: kicker, title, image, remoteUrl, facilities list (5 items with respectful terms), budget: `₹1,00,000`, accentColor: `#33AC5A`.
- `overallBudget`: combinedTotal: `₹10,00,000`, label: 'Estimated Combined Requirement', breakdown: `[{ name: 'Stage', amount: '₹5,00,000' }, { name: 'Food', amount: '₹4,00,000' }, { name: 'Accommodation', amount: '₹1,00,000' }]`.

- [ ] **Step 3: Run TypeScript compiler check**
Run: `npm run typecheck` or `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**
```bash
git add public/images/presentation/food-poster-new.png src/lib/presentationData.ts
git commit -m "feat(data): expand presentation sections to 7 with detailed facilities and verified food poster"
```

---

### Task 2: Build the Full-Screen Color-Wipe Transition System

**Files:**
- Create: `src/components/welfare/ColorWipeOverlay.tsx`
- Modify: `src/pages/WelfarePresentation.tsx`

**Interfaces:**
- Produces: `<ColorWipeOverlay isWiping={boolean} phase={'idle'|'covering'|'revealing'} color={string} onCoverComplete={fn} onRevealComplete={fn} />`
- Consumes: `activeSectionIndex`, slide transition requests from dock, header, keyboard, wheel.

- [ ] **Step 1: Implement `ColorWipeOverlay.tsx`**
Create component with:
- Fixed full-screen overlay (`fixed inset-0 z-[90] pointer-events-none`).
- GPU-accelerated wipe panel using `transform: translateX(...)` with CSS cubic-bezier easing (`cubic-bezier(0.77, 0, 0.175, 1)`).
- When `phase === 'covering'`: sweep panel from `translateX(-100%)` to `translateX(0%)` (duration: ~380ms). Calls `onCoverComplete()` when 100% coverage is reached.
- When `phase === 'revealing'`: sweep panel from `translateX(0%)` to `translateX(100%)` (duration: ~420ms). Calls `onRevealComplete()` when exit finishes.
- Slide-specific SIBAQ color selection:
  - Slide 1: `#F15A24` (Flame Orange)
  - Slide 2: `#E52B2B` (Festival Red)
  - Slide 3: `#FFC928` (Marigold Yellow)
  - Slide 4: `#33AC5A` (Emerald Green)
  - Slide 5: `#F15A24` (Flame Orange - Stages)
  - Slide 6: `#FFC928` (Marigold Yellow - Food)
  - Slide 7: `#33AC5A` (Emerald Green - Accommodation)
- Reduced-motion check via `window.matchMedia('(prefers-reduced-motion: reduce)')`: if enabled, transitions instantly switch slide with a subtle 150ms opacity fade and no sweeping panel.

- [ ] **Step 2: Wire transition controller in `WelfarePresentation.tsx`**
- Add state `isTransitioning: boolean`, `wipePhase: 'idle' | 'covering' | 'revealing'`, `targetSectionIndex: number | null`, `wipeColor: string`.
- Wrap navigation calls (`handleNext`, `handlePrev`, `scrollToSection`, keyboard arrows, Spacebar) in `triggerWipeTransition(destinationIndex)`.
- Input lock: if `isTransitioning` is true, discard duplicate navigation requests.
- When `onCoverComplete()` fires: instantly set `activeSectionIndex(destinationIndex)`, scroll page to the section element (`behavior: 'instant'`), then trigger `revealing` phase.
- When `onRevealComplete()` fires: reset to `idle`, unlock `isTransitioning`.

- [ ] **Step 3: Verify build and transition logic**
Run: `npm run build`
Expected: PASS with 0 build errors.

- [ ] **Step 4: Commit**
```bash
git add src/components/welfare/ColorWipeOverlay.tsx src/pages/WelfarePresentation.tsx
git commit -m "feat(motion): add full-screen SIBAQ brand color-wipe transitions with input locking"
```

---

### Task 3: Implement Slide 05 — SectionStageArrangements

**Files:**
- Create: `src/components/welfare/SectionStageArrangements.tsx`
- Modify: `src/pages/WelfarePresentation.tsx`

**Interfaces:**
- Consumes: `PRESENTATION_DATA.stageArrangements`
- Produces: Responsive `<SectionStageArrangements />` component with 16:9 desktop layout, large stage photo, 6 arrangements, and ₹5,00,000 budget banner.

- [ ] **Step 1: Implement `SectionStageArrangements.tsx`**
- Layout: `section#stages`, `min-h-[100svh]`, `pt-20 pb-28`, warm-white background `#FFF8E8`.
- Header:
  - Kicker: `05 / FACILITIES REQUIRED FOR SIBAQ 2K26`
  - Headline: `STAGE <span class="text-[#F15A24]">ARRANGEMENTS</span>`
- Two-Column Grid (16:9 balanced desktop composition):
  - Left Column: Large authentic stage photo (`/images/presentation/need-stages.png`), rounded-3xl, subtle shadow, zero redundant nested frames.
  - Right Column: Clean numbered list of the 6 exact arrangements:
    1. THREE STAGES
    2. PANTHAL
    3. GREEN ROOMS
    4. KITCHEN
    5. DINING HALL
    6. GUEST ROOM
    Each with compact numbered pill (`01`–`06`) and subtle alternating warm accents.
- Bottom Budget Banner:
  - Full-width high-contrast card:
    - Label: `ESTIMATED AMOUNT`
    - Amount: `₹5,00,000` (bold display font, highly legible from a distance)
    - Warm tinted orange surface (`bg-[#FFF2EB] border-2 border-[#F15A24]`), elegant typography.
    - Clear safe margin above the fixed presentation dock.

- [ ] **Step 2: Mount `SectionStageArrangements` in `WelfarePresentation.tsx`**
Replace `SectionNeeds` import with `SectionStageArrangements`.

- [ ] **Step 3: Verify typecheck and build**
Run: `npm run typecheck && npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**
```bash
git add src/components/welfare/SectionStageArrangements.tsx src/pages/WelfarePresentation.tsx
git commit -m "feat(slide): add Stage Arrangements slide with 6 facilities and ₹5,00,000 budget banner"
```

---

### Task 4: Implement Slide 06 — SectionFoodArrangements

**Files:**
- Create: `src/components/welfare/SectionFoodArrangements.tsx`
- Modify: `src/pages/WelfarePresentation.tsx`

**Interfaces:**
- Consumes: `PRESENTATION_DATA.foodArrangements` (7 verified items, new poster)
- Produces: Responsive `<SectionFoodArrangements />` split-screen slide with poster on left, 7 food item rows on right, and ₹4,00,000 budget banner at bottom.

- [ ] **Step 1: Implement `SectionFoodArrangements.tsx`**
- Layout: `section#food`, `min-h-[100svh]`, `pt-20 pb-28`, `#FFF8E8` surface.
- Header:
  - Kicker: `06 / FOOD ITEMS AND ESTIMATED COSTS`
  - Headline: `FOOD <span class="text-[#B45309]">ARRANGEMENTS</span>`
- Split-Screen Composition:
  - Left Side: The new authentic Malayalam fundraising poster (`/images/presentation/food-poster-new.png`) filling the height edge-to-edge within its card container with natural aspect ratio and rounded-2xl border.
  - Right Side: Clean, legible list of all 7 verified food items:
    1. Neychoru & Chicken Curry (നെയ്ച്ചോറ് & ചിക്കൻ കറി) — `₹77,000`
    2. Porotta & Chicken Curry (പൊറോട്ട & ചിക്കൻ കറി) — `₹35,000`
    3. Chicken Biriyani (ചിക്കൻ ബിരിയാണി) — `₹88,000`
    4. Tea & Snacks (ചായ & സ്നാക്സ്) — `₹16,000`
    5. Chicken Surbiyan (ചിക്കൻ സൂർബിയാൻ) — `₹88,000`
    6. Sadya (സദ്യ) — `₹40,000`
    7. Porotta & Green Peas (പൊറോട്ട & ഗ്രീൻ പീസ്) — `₹30,000`
    Each item rendered in an elegant white card row with Malayalam text, English label, and bold right-aligned INR price badge.
- Bottom Food Budget Banner:
  - High-contrast banner:
    - Label: `ESTIMATED AMOUNT (OVERALL FOOD BUDGET)`
    - Amount: `₹4,00,000`
    - Tinted yellow/amber surface (`bg-[#FFFBEB] border-2 border-[#FFC928]`).
    - Note: Independent total clearly separated from item rates.

- [ ] **Step 2: Mount `SectionFoodArrangements` in `WelfarePresentation.tsx`**

- [ ] **Step 3: Verify typecheck and build**
Run: `npm run typecheck && npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**
```bash
git add src/components/welfare/SectionFoodArrangements.tsx src/pages/WelfarePresentation.tsx
git commit -m "feat(slide): add Food Arrangements slide with verified poster, 7 items, and ₹4,00,000 budget banner"
```

---

### Task 5: Implement Slide 07 — SectionAccommodation & Combined Budget Summary

**Files:**
- Create: `src/components/welfare/SectionAccommodation.tsx`
- Modify: `src/components/welfare/PresentationHeader.tsx`
- Modify: `src/components/welfare/PresentationDock.tsx`
- Modify: `src/pages/WelfarePresentation.tsx`

**Interfaces:**
- Consumes: `PRESENTATION_DATA.accommodationFacilities`, `PRESENTATION_DATA.overallBudget`
- Produces: Responsive `<SectionAccommodation />` with 5 respectful facilities, ₹1,00,000 budget banner, and compact ₹10,00,000 combined requirement context.

- [ ] **Step 1: Implement `SectionAccommodation.tsx`**
- Layout: `section#accommodation`, `min-h-[100svh]`, `pt-20 pb-28`, `#FFF8E8` surface.
- Header:
  - Kicker: `07 / COMFORT, SAFETY AND ESSENTIAL SUPPORT`
  - Headline: `ACCOMMODATION & <span class="text-[#33AC5A]">ESSENTIAL FACILITIES</span>`
- Two-Column Layout:
  - Left Side: Authentic accommodation photo (`/images/presentation/need-accommodation.png`), rounded-3xl, subtle shadow.
  - Right Side: 5 facilities with respectful institutional terminology:
    1. ACCOMMODATION FACILITIES
    2. COMFORT STATIONS / WASHROOM FACILITIES (zero instances of "temporary toilets")
    3. BEDROOMS & SLEEPING ARRANGEMENTS
    4. MEDICAL SUPPORT POINT
    5. ROAD AND PERIMETER SECURITY
- Bottom Budget Banner:
  - High-contrast emerald banner:
    - Label: `ESTIMATED AMOUNT`
    - Amount: `₹1,00,000`
    - Tinted green surface (`bg-[#F0FDF4] border-2 border-[#33AC5A]`).

- [ ] **Step 2: Add Compact Combined Requirement Context (₹10,00,000)**
- In `PresentationHeader.tsx` / `PresentationDock.tsx`:
  - Display a sleek, restrained badge: `ESTIMATED TOTAL: ₹10,00,000` (compact, professional, non-intrusive).
  - Explicitly states it is the combined estimated requirement for all three areas.

- [ ] **Step 3: Update `PresentationHeader` and `PresentationDock` for 7 slides**
- Header tabs automatically render 01 through 07 with short labels (`Intro`, `Reach`, `Programmes`, `Venue`, `Stages`, `Food`, `Facilities`).
- Dock displays `0N / 07` and updates progress percentage (`((idx + 1) / 7) * 100`).

- [ ] **Step 4: Verify typecheck and build**
Run: `npm run typecheck && npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/welfare/SectionAccommodation.tsx src/components/welfare/PresentationHeader.tsx src/components/welfare/PresentationDock.tsx src/pages/WelfarePresentation.tsx
git commit -m "feat(slide): add Accommodation slide with 5 facilities, ₹1L budget, and compact ₹10L combined context"
```

---

### Task 6: Comprehensive Verification Across 5 Viewports & Anti-Slop Audit

**Files:**
- Create: `scratch/verify_all_slides.cjs` (CDP-based multi-viewport testing & screenshot generation)

**Interfaces:**
- Tests all 7 slides at 5 distinct screen resolutions:
  1. `1920 × 1080` (Full HD Projector / Desktop)
  2. `1366 × 768` (Standard Laptop / Budget Projector)
  3. `768 × 1024` (iPad / Tablet Portrait)
  4. `390 × 844` (iPhone 14 / Modern Smartphone)
  5. `360 × 800` (Android Standard)

- [ ] **Step 1: Create CDP verification script**
Write `scratch/verify_all_slides.cjs` to launch headless Chrome, navigate through all 7 slides, trigger the color-wipe transitions, and capture full-screen screenshots at all target viewports.

- [ ] **Step 2: Run verification script against preview server**
Run: `node scratch/verify_all_slides.cjs`
Verify:
- All 7 slides render cleanly.
- Budget banners are completely visible above the dock.
- Color-wipe overlay triggers smoothly without glitch or trapped screen.
- 0 console errors.

- [ ] **Step 3: Anti-Slop Checklist Audit**
Verify:
- [x] Zero generic AI layouts, zero floating bubbles/sparkles.
- [x] All 10 approved photos locked and intact.
- [x] New food poster displayed with high fidelity.
- [x] 7 food items correctly transcribed with Malayalam text and exact prices.
- [x] "Temporary toilets" completely absent; "Comfort stations" / "Washrooms" used.
- [x] WCAG AA contrast standards met across all headings and badges.

- [ ] **Step 4: Push to GitHub**
Push clean commits to remote:
```bash
git push origin main
```
Verify remote is updated on `fadilp5x/sibaqwelfarekuttikattur`.
