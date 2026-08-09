# Phase 1 source audit

**Status:** Working source of truth  
**Audit date:** 2026-08-09  
**Purpose:** Establish accurate product identities, claims, assets, links, and evidence before visual design or implementation.

## Executive decision

The portfolio should be organized around one professional idea:

> **Make language visible.** Federico turns difficult-to-interpret language needs, curriculum demands, and support decisions into practical systems for learners, families, teachers, and schools.

The MVP should feature four product stories, with one unmistakable lead:

1. **Build the text your students need to see** — LinguaFlow Teacher, the lead flagship.
2. **From scores to shared understanding** — action research, My Multilingual Family, and LinguaFlow Family.
3. **From curriculum complexity to actionable support** — EALDesk Elementary.
4. **From rough teaching ideas to usable language scaffolds** — Scaffold.

LinguaFlow Teacher is intentionally scoped to teacher-created mentor texts; the learner reading platform will move to the separate Lingua Bridge identity and is outside this MVP. Classroom Support Compass remains a supporting project and will be presented generically without SSIS-specific framing.

## Evidence reviewed

This audit is based on:

- the public project URLs supplied by Federico;
- public metadata and interface copy from the deployed products;
- the public repositories in the LenguajeLabs-design GitHub account;
- source from `teaching-portfolio-2026`, `EALDesk-Elementary`, `LinguaFlow`, `LinguaFlow-Family`, `Multilingual-Learner-Family-Guide`, `scaffold`, `Student-Support-Compass`, and the repository currently named `classroom-compass`;
- the current résumé, capstone PDF, capstone findings graphic, portrait, institutional logos, social image, and existing product screenshots.

Authentication-protected workflows and live production data were not inspected. Product outcomes are not inferred from source code.

## Audience model

| Audience | Need | Portfolio evidence |
| --- | --- | --- |
| Students | Access rigorous learning without reducing intellectual demand | EALDesk, Scaffold, LinguaFlow |
| Families | Understand language development and act with confidence | Action research, My Multilingual Family, LinguaFlow Family |
| Teachers | Turn specialist knowledge into usable next steps | EALDesk, Scaffold, LinguaFlow Teacher |
| Systems | Create shared language and more consistent support decisions | Action research, Classroom Support Compass, professional experience |

## Product inventory

### 1. Multilingual Family Ecosystem — flagship

**Public products**

- [My Multilingual Family](https://www.mymultilingualfamily.com/)
- [LinguaFlow Family](https://lenguajelabs-design.github.io/LinguaFlow-Family/#/today)
- [2026 action-research presentation](https://lenguajelabs-design.github.io/teaching-portfolio-2026/#research)

**Source repositories**

- `LenguajeLabs-design/Multilingual-Learner-Family-Guide`
- `LenguajeLabs-design/LinguaFlow-Family`
- `LenguajeLabs-design/teaching-portfolio-2026`

**Problem**

Language-development data and school terminology are often available without being understandable or actionable for the families and educators supporting multilingual learners.

**Audience**

Multilingual families, EAL teachers, classroom teachers, and school leaders.

**Verified product capabilities**

- My Multilingual Family explains WIDA proficiency levels 1–6, typical language skills, school supports, home supports, and language-development timelines.
- The guide supports English, Spanish, Simplified Chinese, Korean, French, and Japanese in the current source.
- LinguaFlow Family provides a Today/This Week pathway, an age-filtered activity library, family-facing explanations, Parent Academy content, reviewed questions, and school-conversation prompts.
- LinguaFlow Family's first public release supports English, Simplified Chinese, and Korean.
- LinguaFlow Family uses no account or backend in the current MVP; language and age preferences remain in the browser.

**Evidence available**

- The current teaching portfolio reports that 6 of 6 early respondents rated the guide "very useful."
- It reports that 2 of 2 early family respondents understood WIDA levels "much better."
- The portfolio explicitly labels this as early feedback rather than a long-term impact evaluation. Preserve that qualification wherever the figures appear.

**Portfolio treatment**

Present this as one end-to-end story: problem of practice → action research → family guide → practical family product → early feedback → next questions.

**Assets available**

- 1200×675 capstone findings graphic.
- Capstone PDF.
- Existing 1280×977 family-guide screenshot.
- LinguaFlow Family logo, six activity images, four family/academy images, and photo-credit documentation.

**Assets still needed**

- Clean current screenshots of My Multilingual Family without the feedback/sign-in overlay visible in the existing capture.
- Desktop and mobile screenshots of LinguaFlow Family's Today, activity detail, Parent Academy, and School Connection flows.
- Optional artifact showing the guide's evolution from research prototype to public release.

**Claim constraints**

- Do not imply WIDA affiliation or endorsement.
- Do not convert early feedback into a generalized impact claim.
- Do not claim translations have received native-speaker review unless confirmed for the specific language and content.

### 2. EALDesk Elementary — flagship

**Public product**

- [EALDesk Elementary](https://lenguajelabs-design.github.io/EALDesk-Elementary/)

**Source repository**

- `LenguajeLabs-design/EALDesk-Elementary`

**Problem**

Elementary teachers need to match language supports to literacy tasks and learner proficiency without searching across disconnected curriculum, framework, and strategy documents.

**Audience**

Elementary classroom teachers and EAL specialists.

**Verified product capabilities**

- Reader's Workshop and Writer's Workshop pathways.
- Quick tools organized by task and WIDA level.
- Strategy bank across listening, speaking, reading, and writing.
- WIDA reference, assessment support, and translation guidance.
- Unit goals, language demands, scaffolds, differentiation, mentor texts, and teacher-created planning exemplars.
- Teaching and Learning Cycle guidance.

**Verified product principle**

The current homepage states that EALDesk helps teachers choose one purposeful language support for the moment in front of them without adding more noise to the day.

**Portfolio treatment**

Show a fragmented set of curriculum and learner demands becoming one clear planning path. Emphasize information architecture, domain modeling, and classroom usability rather than the number of pages alone.

**Assets available**

- Existing 1280×977 homepage screenshot.
- Product source includes authentic workshop, strategy, assessment, translation, and unit-detail states.

**Assets still needed**

- One clean overview screenshot at current production dimensions.
- One unit-detail screen demonstrating language demands and differentiation.
- One quick-tool interaction across WIDA levels.
- One mobile composition.

**Claim constraints**

- Present teacher-created examples as planning exemplars, not real student work.
- Preserve the existing statement that EALDesk is WIDA-informed and not affiliated with or endorsed by WIDA.
- Do not claim measured time savings until evaluated.

### 3. Scaffold — flagship

**Public product**

- [Scaffold](https://lenguajelabs-design.github.io/scaffold/)

**Approved status**

- **Beta** — the product is working and publicly accessible, but remains under active testing and refinement.

**Source repository**

- `LenguajeLabs-design/scaffold`

**Problem**

Teachers may know the content goal but need help converting rough planning notes into explicit language objectives, vocabulary, sentence frames, classroom activities, differentiation, and assessment moves.

**Audience**

Classroom teachers and EAL specialists planning for multilingual learners.

**Verified product capabilities**

- Lesson Planner using grade, WIDA band, topic, and teacher notes.
- Classroom Copilot for immediate teaching moments.
- Generated/simple explanations, key vocabulary, sentence frames, quick activities, extension questions, and teacher moves.
- Sample plans and sample classroom supports.
- Connections to available EALDesk units in the current source.
- Privacy prompt asking teachers not to enter student names or identifying information.

**Portfolio treatment**

Demonstrate a before-and-after transformation from rough teacher thinking to an editable classroom plan. Anchor the story in the principle "Technology serves judgment."

**Assets available**

- Existing access-screen capture.
- Three-page Scaffold PDF.
- Existing lesson-output image.
- Complete sample lesson and sample Copilot data in the source.

**Assets still needed**

- Replace the access-screen image as the primary screenshot; it does not communicate product value.
- Capture the lesson-input flow, completed plan, Copilot input, and Copilot results.
- Capture a mobile state and a printable/exported state.

**Claim constraints**

- Describe the product as AI-assisted, not autonomous.
- Do not imply that generated plans replace teacher review or expertise.
- Describe Scaffold as **Beta** and set the expectation that workflows and outputs are still being refined.
- Do not label it launched, finished, or generally available.

### 1. LinguaFlow Teacher — lead flagship

**Public product**

- [Read LinguaFlow](https://www.readlinguaflow.com/)

**Source repository**

- `LenguajeLabs-design/LinguaFlow`

**Approved portfolio scope**

LinguaFlow Teacher helps teachers create purposeful mentor texts for their students. The portfolio will focus only on this teacher-facing workflow.

**Problem**

Teachers need mentor texts that are meaningful and age-respectful while making specific language structures, vocabulary, and genre expectations visible to multilingual learners.

**Audience**

Classroom teachers and EAL specialists creating supported reading and writing instruction.

**Verified product capabilities within scope**

- Creates meaningful, level-appropriate mentor texts and supported readings.
- Organizes planning around context, Key Language Use, language features, mentor text, and teaching move.
- Provides reading styles and genres with distinct language demands and structures.
- Includes WIDA-informed genre framing while stating that LinguaFlow is independent and not affiliated with or endorsed by WIDA.
- Preserves age-respectful ideas while adding vocabulary, comprehension, discussion, and writing support.

**Portfolio treatment**

Present one focused transformation: a teacher identifies what students need to understand, notice, and do with language, then creates a mentor text designed around that purpose.

**Out of scope**

- The learner-facing personalized reading platform.
- Reading-library, vocabulary, offline-library, and learner-account stories.
- The future Lingua Bridge product identity.

These may become a separate portfolio project after Lingua Bridge has its own confirmed public product and narrative.

**Assets available**

- Educator interface states, teacher-generator source, brand images, and the current public mentor-text workspace.

**Assets still needed**

- Current production captures of the planning inputs, generated mentor text, language-feature support, and teaching move.
- One mobile capture of the teacher workflow.

### 5. Classroom Support Compass — supporting, source divergence

**Public product**

- [Classroom Support Compass](https://compass-lenguajelab.replit.app/ssis/)

**Related source repositories**

- `LenguajeLabs-design/Student-Support-Compass`
- `LenguajeLabs-design/classroom-compass`

**Problem**

Teachers and student-support teams need a fast way to move from an observed concern to classroom-ready universal or targeted supports and clearer follow-up conversations.

**Verified public capabilities**

- Support areas covering classroom participation, social interaction, speech and language, literacy, mathematics, sensory/physical needs, and related concerns.
- Tier 1 universal and Tier 2 targeted strategies.

**Source capabilities in the older prototype**

- Need-area library, support-plan builder, saved ideas, referral guidance, and explicit consideration of multilingual learners.

**Source conflict to resolve**

- The public Replit product is titled SSIS Classroom Support Compass and is more developed than the older `Student-Support-Compass` repository.
- The `classroom-compass` repository currently contains a Lenguaje Labs marketing site and product screenshot library rather than the deployed Compass source.

**Portfolio treatment**

Keep as a compact, school-neutral supporting story. Describe the general problem of making student-support decisions faster and more actionable without naming SSIS or implying school endorsement.

**Approved naming constraint**

- Use **Classroom Support Compass** in portfolio copy.
- Do not use SSIS branding, logos, internal processes, or claims about institutional adoption.
- Screenshots should be cropped or selected so school-specific identifiers are not prominent.

**Assets still needed**

- Current clean screenshots of the live index, a need-area view, and Tier 1/Tier 2 guidance.

**Fix before prominent linking**

- Replace the public metadata placeholder: "Update this description to reflect the app."

### 6. Previous portfolios — source material, not featured projects

**Sources**

- [Teaching Portfolio 2026](https://lenguajelabs-design.github.io/teaching-portfolio-2026/)
- [Lenguaje Labs site](https://lenguajelabs-design.github.io/lenguaje-labs-site/)

**Preserve**

- "Make language visible."
- "Built from the classroom outward."
- "Human judgment is the system."
- The students/families/teachers/systems ecosystem.
- Action-research narrative and carefully qualified early findings.
- Teaching and Learning Cycle.
- Beliefs about participation, home language, and responsible technology.
- Professional experience, credentials, portrait, résumé, capstone, and contact links.

**Do not preserve by default**

- The old three-item project hierarchy.
- Text-only project presentation.
- Year-specific framing as the permanent identity.
- Starter infrastructure that is not needed by a public static portfolio.

## Professional asset inventory

| Asset | Available | Notes |
| --- | --- | --- |
| Portrait | Yes | 800×800 JPEG; suitable for MVP with responsive derivatives |
| Résumé | Yes | Four-page PDF; confirm it is the release-ready version before launch |
| Capstone | Yes | PDF available |
| Capstone findings | Yes | 1200×675 PNG |
| Current social image | Yes | 1536×1024; useful conceptual reference, but a new social crop will be required |
| Institutional logos | Yes | Kyungbok, Seoul Metropolitan Office of Education, NSU, UIC, and Harvard GSE assets available |
| Signature favicon | Yes | Source PNG is 2400×1400 and should be converted into proper favicon sizes |
| Product screenshots | Partial | EALDesk and family-guide captures are usable as references; Scaffold primary capture must be replaced |
| LinkedIn | Yes | Present in existing portfolio |
| GitHub | Yes | `LenguajeLabs-design` organization/profile link present |
| Contact email | Yes | Existing portfolio uses `forozc1@gmail.com`; Scaffold also displays a different product email, so use context-specific addresses |

## Status vocabulary for the new portfolio

Use only these labels unless stronger evidence becomes available:

- **Live** — publicly accessible and intended for current use.
- **Public preview** — accessible, but still being tested or refined.
- **Beta** — explicitly described as a work in progress.
- **Prototype** — demonstrates a concept but is not positioned as a current service.
- **Research project** — reports a study or inquiry; not interchangeable with a product outcome.

Never use "launched," "adopted," "used by schools," "improved outcomes," or similar language without direct confirmation and evidence.

## Known inconsistencies and decisions needed

| Priority | Item | Why it matters | Resolution |
| --- | --- | --- | --- |
| Resolved | LinguaFlow identity | The source contains both teacher and learner experiences | Portfolio features LinguaFlow Teacher mentor-text creation only; learner platform moves to Lingua Bridge and is outside the MVP |
| Resolved | Compass context | The live URL and title reference SSIS | Present Classroom Support Compass generically without school branding or institutional claims |
| Medium | Compass canonical source | Live product has diverged from public repositories | Treat the live experience as canonical product evidence unless the current source is identified |
| Resolved | Scaffold release status | Existing portfolio says coming soon while the product is publicly accessible | Describe Scaffold as Beta |
| Medium | Family-guide naming | Repository says WIDA Family Guide; live brand says Multilingual Learner Family Guide / My Multilingual Family | Use My Multilingual Family publicly and explain WIDA only as the referenced framework |
| Medium | Translation review | Language availability is verified, review quality is not universally verified | Confirm which translations received fluent-speaker review |
| Medium | Contact identity | Personal and product-specific emails differ | Choose one primary portfolio contact |
| Low | Legacy site relationship | Two earlier portfolios remain public | Decide on redirects/successor notices at launch, not during MVP build |

## Provisional review of the 2026 portfolio

Scores are directional and based on source/content inspection; mobile, runtime accessibility, and performance were not fully measured.

| Dimension | Score / 5 | Evidence |
| --- | ---: | --- |
| Concept | 5 | "Make language visible" connects research, practice, products, and audiences |
| First viewport | 5 | Identifies Federico, the work, its beneficiaries, and the next action |
| Specificity | 5 | EAL practice, WIDA, pedagogy, and international-school experience are explicit |
| Typography | 4 | Strong display language and clear hierarchy in the existing composition |
| Editorial composition | 4 | Research, pedagogy, work, practice, and experience have a deliberate sequence |
| Visual quality | 3 | Strong portrait/research assets, but product interfaces are underrepresented |
| Signature moment | 4 | The Language Access ecosystem is conceptually strong but can become more expressive |
| Interaction | 3 | Clear anchored journey; limited evidence of product-led interaction depth |
| UX clarity | 4 | Navigation and calls to action are explicit |
| Mobile | 2 | Not verified in this audit |
| Accessibility | 4 | Source includes semantic sections, skip link, labels, and descriptive alt text; runtime testing remains |
| Performance | 2 | Not measured in this audit |
| Cohesion | 4 | Copy, visual system, and professional story largely belong to one world |

## MVP content readiness

| Section | Readiness | Remaining work |
| --- | --- | --- |
| Positioning and hero | Ready for Phase 2 | Tighten final short introduction |
| Family flagship | High | Fresh screenshots; confirm translation review wording |
| EALDesk flagship | High | Fresh detail and mobile screenshots |
| Scaffold flagship | High | Capture value states rather than the access screen and write clear Beta expectations |
| LinguaFlow Teacher supporting story | High | Draft concise case-study copy and capture the current mentor-text workflow |
| Compass supporting story | Medium-high | Capture school-neutral screenshots and use the live experience as canonical evidence |
| Research and pedagogy | High | Edit for web length; preserve evidence qualifications |
| Experience and credentials | High | Confirm résumé version and logo-use preferences |
| Contact | Medium-high | Select primary email |

## Phase 1 completion criteria

- [x] New repository established locally.
- [x] Phase 1 working branch created.
- [x] Existing portfolio source and assets inventoried.
- [x] Public product links matched to related repositories where possible.
- [x] Flagship and supporting hierarchy documented.
- [x] Claims and evidence constraints documented.
- [x] Screenshot gaps documented.
- [x] Naming, status, and source conflicts documented.
- [x] Federico confirms the LinguaFlow product scope.
- [x] Federico confirms generic, school-neutral Compass framing.
- [x] Federico confirms Scaffold's Beta status.

## Three highest-leverage next actions

1. **Capture value-bearing product states.**  
   Expected effect: lets authentic product evidence lead the visual design.  
   Evidence of resolution: approved desktop and mobile image set for each flagship, with no private data or temporary overlays.

2. **Approve the family ecosystem as one flagship case study.**  
   Expected effect: gives the MVP a complete research-to-product story and prevents two family products from competing for attention.  
   Evidence of resolution: approved sequence and wording for research, guide, family app, early feedback, and next steps.

3. **Draft the Phase 2 narrative at portfolio length.**  
   Expected effect: converts the verified source material into a clear reading journey before visual implementation begins.  
   Evidence of resolution: approved homepage outline, section purpose, project summaries, and calls to action.
