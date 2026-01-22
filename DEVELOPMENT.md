# Development Log

## [Init] Setup & Infrastructure
- **Stack**: Next.js 15, TypeScript, Tailwind CSS.
- **Dependencies**: Added `framer-motion` for animations, `lucide-react` for icons, `clsx` + `tailwind-merge` for class utility.
- **Design System**:
  - **Colors**: Defined 'Engineering' palette (Slate background, Emerald/Violet/Amber accents).
  - **Contact**: Footer/Contact section.
  - Implemented `Contact.tsx`.
  - Added interaction links and "Scroll to Top".
  - **Assets**: Moved latest resume to `public/` for accessibility.
- **Content Refresh**:
  - Updated Poetry Section with authentic poems from 'Heartstrings Unplayed' manuscript (English, French, Spanish).
  - Replaced "Portfolio V1" with "Aspire Web Suite" to highlight recent professional work.
- **Personal Section**: 
  - Added `Personal.tsx` utilizing a Bento Grid layout to showcase "Antoine the Human" alongside "Antoine the Engineer".
  - Integrated personal photography (Music, Food, Aesthetic).
  - **Fonts**: Inter (Sans), JetBrains Mono (Mono), Playfair Display (Serif/Poetry).
  - **Structure**: Moving towards a Single Page Application (SPA) with smooth scrolling sections.

## [Plan]
- **Hero**: Typewriter effect, dark/tech vibe.
  - Implemented `Hero.tsx` using `framer-motion` for entrance animations and typewriter text.
  - Using random delays and cursors for "Engineering" feel.
  - Linked Resume and Socials.
- **Poetry**: Trilingual toggle.
  - Implemented `Poetry.tsx` with a serif font (`Playfair Display`) and distinct rose-tinted aesthetic.
  - Used State for language switching (English/French/Spanish) with AnimatePresence transitions.
  - Added background noise/blur effects for a "dreamy" atmosphere.
- **Timeline**: Vertical terminal-style journey.
  - Implemented `About.tsx` with a responsive vertical timeline.
  - Added "Terminal" header and Lucide icons for each milestone.
  - Used Framer Motion for scroll-triggered animations.
- **Neural Audit**: Interactive visual component for N3XU$.
  - Implemented `NeuralAudit.tsx` with a split-screen design (File Input vs. Terminal Output).
  - Added simulated processing states (Scanning -> Extracting -> JSON).
  - Used specific colors (Violet/Emerald) to represent the AI process.
- **Projects**: Grid layout for featured works.
  - Implemented `Projects.tsx` with hover effects and tag pills.
  - Featured N3XU$, Click-A-Mole, and SentinelStream.
