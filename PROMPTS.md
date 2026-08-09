# PROMPTS.md

This file documents the AI prompts and conversations used to build the ABTalks platform redesign.

## 1. Initial Prompt
**User:**
> Redesign ABTalks
> Reimagine the platform you're standing on.
> 
> The Situation
> ABTalks runs a 60-day coding challenge for Indian college students.
> Students pick a track, build something every day, and maintain a public learning streak by submitting:
> A GitHub commit, A LinkedIn post.
> Most students use the platform on their phones, late at night after college.
> 
> Ship at Minimum
> Design and build the following three screens: Landing Page (/), Student Dashboard (/dashboard), Challenge Day (/day/12).
> Must be designed mobile-first (390px), handle edge cases, and introduce at least one thoughtful idea. Out of scope: Auth, real DB. Use mock data.

**AI Action:**
- Evaluated requirements and created an Implementation Plan for a Vite + React + Vanilla CSS mobile-first web app.
- Proposed a "Late Night Grace Period" banner and a "60-Day Journey Map" as thoughtful UX features.
- Initialized the Vite project, installed `lucide-react` and `react-router-dom`, and built the initial dark mode UI with glassmorphism.

## 2. GitHub Push
**User:**
> push all code here ehttps://github.com/dasouvik122005/Onyxcoder.git

**AI Action:**
- Initialized git repository.
- Added remote origin and successfully pushed the initial commit to the `main` branch.

## 3. UI/UX Overhaul Request
**User:**
> ui ux is very bad please change the design

**AI Action:**
- Created a new Implementation Plan proposing a highly premium, sleek, minimal aesthetic inspired by developer tools like Vercel/Linear.
- Reworked the entire CSS architecture to feature a pitch-black background (`#000000`), subtle gray borders (`#222222`), and a structured **Bento Grid** layout.
- Rewrote the components to fit the Bento Grid system.

## 4. Full Screen Layout Request
**User:**
> please cover full screen not only the middle portion. Design loooks good but  cove4r the full screen

**AI Action:**
- Adjusted CSS media queries to expand the `max-width` on desktop devices (up to `1200px` - `1400px`).
- Modified the Bento Grid to use `repeat(4, 1fr)` on the Landing page and a wide 3-column split on the Dashboard for large screens, making full use of desktop viewports while retaining perfect mobile responsiveness.

## 5. UI Alignment Fix
**User:**
> Fix that portion design *(attached image of cut-off streak ring)*

**AI Action:**
- Identified that the SVG streak progress ring was configured as a decorative background and getting cut off.
- Updated the Flexbox layout of the streak card to render the text and the ring side-by-side, making the ring fully visible and centered.
- Pushed the final layout fix to GitHub.

## 6. Finalization (PROMPTS.md)
**User:**
> ready its properly we have to submit it *(attached image of submission requirements)*

**AI Action:**
- Created this `PROMPTS.md` file to satisfy the 3rd submission requirement.
- Pushed it to the GitHub repository to ensure automated verification passes.
