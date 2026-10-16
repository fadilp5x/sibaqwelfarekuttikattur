# SIBAQ Kuttikkattur 2K26 — Design References Manifest

Location: `.agents/resources/design-references/`
Purpose: External design references, design systems, inspiration sources, and anti-pattern guides collected for the Welfare Committee Presentation Website.

---

## 1. shadcn.io/design
- **Canonical URL:** https://www.shadcn.io/design
- **Type:** Design System & UI Specification Library
- **Access / Installation Method:** Web reference / documentation (not an npm package or agent skill)
- **Application to SIBAQ:**
  - Token architecture conventions (3-tier: primitive -> semantic -> component tokens).
  - Radix/Tailwind component accessible patterns (focus-visible rings, ARIA roles, dialog modal ergonomics).
  - Used strictly as an architectural reference for component contracts. Does NOT mean copying white-box SaaS aesthetics; adapted to SIBAQ's dark maroon/flame palette.

## 2. Awesome DESIGN.md
- **Canonical URL:** https://github.com/VoltAgent/awesome-design-md
- **Type:** Design System Documentation Standard for AI Agents
- **Access / Installation Method:** GitHub repository / markdown specification
- **Application to SIBAQ:**
  - Standard format for AI-readable `DESIGN.md` in the project root.
  - Documents color hex values, contrast ratios, font scales, spacing steps, motion rules, and strict "Do / Don't" guidance.
  - Ensures all subsequent agent steps adhere to SIBAQ brand constraints without hallucinating generic templates.

## 3. TypeUI
- **Canonical URL:** https://www.typeui.sh/docs
- **Type:** Design System Engine / MCP Integration
- **Access / Installation Method:** MCP Server / Web Documentation (Requires API Key / Authentication if using MCP server)
- **Status in Workspace:** Not authenticated as a live MCP server; fallback to local Tailwind CSS tokens and project DESIGN.md.
- **Application to SIBAQ:**
  - Fluid typography scaling formulas (`clamp(min, preferred, max)`).
  - Optical kerning and leading rules for oversized Anton display headlines on large projector screens.

## 4. Claude Web Design Killer Setup
- **Canonical Source:** Anthropic developer community design setup / frontend design prompt stack
- **Type:** Methodology & Prompt Engineering Framework
- **Access / Installation Method:** Applied via installed `frontend-design` skill and project guidelines
- **Application to SIBAQ:**
  - Extreme intentionality in layout variance (no uniform symmetric card walls).
  - High typographic tension (pairing condensed display with airy geometric sans-serif).
  - Dark mode depth layering (layered dark surfaces #150A10 -> #1F0F16 -> #2A1420 rather than flat black).

## 5. AI Website Cloner Template
- **Canonical Source:** Reference templates / visual cloning methodologies
- **Type:** Visual Audit & Reverse-Engineering Methodology
- **Access / Installation Method:** Methodology reference
- **Application to SIBAQ:**
  - Used strictly for high-fidelity asset discovery, DOM extraction, and visual audit from the live site (https://sibaqkuttikkattur.vercel.app/).
  - Explicit rule: Do NOT clone foreign templates or scaffold Next.js; preserve existing React + Vite + Tailwind repository architecture.

## 6. Diagram Design
- **Canonical Source:** Structural diagramming standards (Mermaid, SVG layout)
- **Type:** Visual Schematics & Architecture Diagrams
- **Access / Installation Method:** Builtin SVG rendering & Mermaid in markdown
- **Application to SIBAQ:**
  - Architecture maps, motion storyboards, and committee request flows.
  - SVG vector assets in `public/media/` and `src/components/` (e.g., `sibaq-programme-constellation.svg`).

## 7. PPT Master
- **Canonical Source:** Presentation deck visual structuring principles
- **Type:** Presentation Narrative & Pacing Methodology
- **Access / Installation Method:** Structural guideline (NOT generating .pptx files)
- **Application to SIBAQ:**
  - Translating the 6-part narrative arc of a live committee pitch into an interactive webpage.
  - Section pacing: Opening hook -> Scale & Authority -> Cultural Substance -> Venue Reality -> Concrete Welfare Ask -> Closing Emotional Pledge.
  - Full-screen presentation mode (`F` key, full viewport framing).

## 8. Godly (godly.website)
- **Canonical URL:** https://godly.website/
- **Type:** Web Design Inspiration Gallery (Curated high-end creative websites)
- **Access / Installation Method:** Web gallery reference
- **Application to SIBAQ:**
  - Inspires editorial festival aesthetics: cinematic dark backdrops, asymmetric photo compositions, oversized typography, and smooth, meaningful transitions.
  - Zero tolerance for corporate SaaS cards, purple gradients, or template hero sections.

## 9. iyO / Datacurve
- **Canonical Source:** Awwwards Site of the Year / editorial interactive site references
- **Type:** Immersive Interaction & Motion Benchmark
- **Access / Installation Method:** Web reference
- **Application to SIBAQ:**
  - Benchmark for micro-motion: subtle mouse parallax, masked image reveals, and staggered typography entrances.
  - Proves how an organization can convey immense scale and cultural prestige through restrained, high-performance interactions.
