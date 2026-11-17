# Portfolio design and content rules

This site presents Federico Orozco as “EAL Specialist · Learning Designer.” Use that label consistently. Summary: “I design practical tools, teacher learning, and family resources, many of them AI-powered, that help schools serve multilingual learners.”

## Visual system

- Use Heritage Navy as the foundation: deep navy `#102642`, warm ivory `#F5F0E7`, soft blue `#9BAFC4`, and muted brass `#B59A67`.
- Do not reintroduce brown as a primary action color, bright blue, neon accents, gradients, glassmorphism, or unrelated decorative palettes.
- Use only two self-hosted type roles: Source Serif 4 for editorial display text and Inter for interface and body text. Fonts and their licenses live in public/fonts.
- Do not add another font family without an explicit design decision.
- Prefer thin rules, generous whitespace, calm surfaces, and clear hierarchy over dense cards or ornamental effects.

## Positioning

- Lead with EAL expertise, learning design, teacher development, family partnership, and evidence-informed practice.
- Keep the page order: hero, proof strip, point of view, work, leadership focus, research/capstone, approach, experience/credentials, about/contact, footer.
- Use one shared .container for gutters and maximum width. Remove section numbers rather than showing an incomplete sequence.
- Keep the hero center label fixed as “The learner”; give the hero CTA room in the first desktop viewport.
- Present apps and tools as leadership case studies and evidence of systems thinking—not as a software marketplace.
- Do not invent metrics, titles, degrees, awards, testimonials, clients, or outcomes.
- Keep credentials accurate: Harvard courses must say “Professional Education” and must not be presented as degrees. Keep the shield beside that course group only.
- Leave testimonials and unverified project evidence disabled with TODO comments until supplied.
- Keep the email address centralized in contactEmail until a custom-domain address is confirmed.

## Project display

- Preserve the real project names, logos, links, and status labels.
- Use the Leadership Case Studies pattern for the app directory: logo, project name, status, audience, leadership contribution, and primary action.
- Teacher introductions and other supporting PDFs belong as secondary downloads inside the matching case-study row.
- Keep primary project links and document downloads as separate actions.
- Do not touch the separate Scaffold repository when updating this portfolio.

## Interaction and accessibility

- Keep navigation direct and predictable; do not use scroll hijacking or transitions that delay reading.
- Make buttons and links visibly distinguishable with sufficient contrast and clear labels.
- Maintain keyboard access, focus states, useful alt text, reduced-motion support, and responsive layouts.
- Open project links reliably in the current tab unless there is a deliberate reason to use another tab.

## Before publishing

- Run `npm run build`.
- Check the local preview at desktop and mobile widths.
- Verify every project link and downloadable PDF.
- Check that new copy remains leadership-oriented and factually supportable.
- Do not deploy automatically unless the user explicitly asks for deployment.
