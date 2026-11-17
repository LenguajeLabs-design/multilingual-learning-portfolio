# Portfolio revision review

## Result

The organizing idea is research and classroom experience translated into tools, teacher learning, and resources families can use. The page now uses the supplied “EAL Specialist · Learning Designer” positioning, one work section, an evidence strip, a real Approach section, and an expanded timeline and professional-learning column.

The revised design uses self-hosted Source Serif 4 and Inter, shared containers capped at 1280px, ivory/navy surfaces, and the existing brass and blue accents. The learner remains the fixed center of the interactive diagram. On mobile the diagram becomes four touch controls in a two-column grid.

## Verification

- Production build and TypeScript compilation pass.
- Dependency versions are pinned to the existing lockfile; no framework upgrade was introduced.
- Browser layouts checked at 1440×900, 1280×800, 1024×900, 768×1024, 390×844, and 375×812.
- No horizontal overflow found. Main desktop CTA is inside the first viewport; active links meet the 24px minimum.
- All five project URLs return HTTP 200, including redirects to scaffolded.app and languagesupporttoolkit.app.
- Three teacher introductions and the capstone are public downloads. Their contact text and mailto links use hello@federicoorozco.co.
- The full résumé was moved outside the repository to a private local folder. Header and experience actions now open a CV-request email instead of a PDF.
- Three self-hosted WOFF2 files each return HTTP 200 locally.
- Project tiles use identical dimensions, padding, borders and corner radii. Optimized PNG marks are approximately 9–14 KB each.
- Only LinkedIn links use a new tab. My Multilingual Family has exactly two outgoing links: its project row and the capstone.
- Small logos are loaded immediately; portrait and optional interface preview use lazy loading.
- No translations, language switcher, localStorage language handling, hidden legacy product sections, or duplicate compact credentials remain in the source.

LinkedIn rejects automated HTTP requests; its supplied profile URL is preserved. No production performance score is claimed.

## Content decisions and TODOs

- User-confirmed figures supersede the brief: 17 years in language education, 20,000+ students taught, and 100+ Korean English teachers trained. The proof strip pairs those three teaching figures with the family guide’s 7 languages.
- Harvard courses are grouped and explicitly labeled Professional Education, separate from degrees.
- A genuine family-guide interface screenshot already exists and is available through an expandable preview. Other tool screenshots remain TODOs.
- Toolkit and Compass evidence remain TODOs. Testimonials render nothing until approved quotes, names and roles are supplied.
- The confirmed contact address hello@federicoorozco.co is centralized in contactEmail for all contact links and structured metadata.
- Section numbers were removed throughout; the four Approach step numbers remain.
- Exact supplied copy was prioritized where it conflicts with the two-use limit on “practical”: the supplied hero, focus title, course title, About paragraph, and reusable summary all contain that word. “Coherent/coherence” was removed; “visible” appears only in the supplied Approach heading.

## Visual review

| Dimension | Score / 5 | Evidence |
| --- | --- | --- |
| Concept / specificity | 4 | Classroom evidence and teacher/family resources organize the page. |
| First viewport | 4 | New positioning, supplied headline, introduction and CTA fit at desktop widths. |
| Typography | 4 | Two self-hosted type roles; restrained hierarchy and readable measures. |
| Composition / cohesion | 4 | One gutter system; uniform logos; one navy Approach band. |
| Interaction / clarity | 4 | Same-tab project actions; distinct PDF downloads; direct section navigation. |
| Mobile | 4 | Two-column proof strip and diagram; stacked project and experience layouts. |
| Accessibility | 4 | Semantic landmarks, visible focus, pressed states and reduced motion. No full assistive-technology audit claimed. |
| Performance | 4 | Smaller logos, no external font requests, and much less legacy CSS. No Lighthouse score claimed. |

The diagram is the signature interaction; the typography and project rows carry the editorial identity. The next improvements depend on content: add current tool screenshots and obtain colleague quotes.

## Screenshots

Captures include the page content area; scrollbar exclusion can make image pixels slightly narrower than the CSS viewport.
These captures predate the corrected teaching figures, confirmed email, and CV-on-request change.

- [Desktop overview](previews/revision/desktop-overview.jpg)
- [1440px](previews/revision/1440-hero.jpg)
- [1280px](previews/revision/1280-hero.jpg)
- [1024px](previews/revision/1024-hero.jpg)
- [768px](previews/revision/768-hero.jpg)
- [390px](previews/revision/390-hero.jpg)
- [375px](previews/revision/375-hero.jpg)
- [375px full page](previews/revision/375-full.jpg)
