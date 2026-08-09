# Phase 2 narrative and information architecture

**Status:** Proposed MVP narrative  
**Date:** 2026-08-09  
**Depends on:** [`phase-1-source-audit.md`](phase-1-source-audit.md)

## 1. Portfolio concept

### One-sentence concept

> **Make language visible.** A connected portfolio in which complex language-learning needs become clear, practical systems for students, families, teachers, and schools.

### Audience promise

Within the first viewport, a visitor should understand that Federico is:

- an experienced EAL educator;
- a multilingual learning designer;
- a researcher who investigates problems before building;
- a product maker who turns specialist knowledge into usable tools;
- committed to technology that supports human judgment.

### Narrative movement

The site moves from the human need to the system around it:

```text
One learner
    ↓
Family understanding
    ↓
Teacher action
    ↓
School-wide support
```

The portfolio should never imply that technology is the center of this model. Language access is the center; products are the structures that help people create it.

## 2. Creative constraints

These constraints should guide Phase 3 visual concept work.

1. **Interfaces are evidence.** Real products should occupy more visual space than decorative objects.
2. **Motion reveals relationships.** Movement should connect, organize, clarify, or show before-and-after transformation.
3. **One signature world.** The Language Access Ecosystem is the memorable interaction; individual projects should not compete with separate visual gimmicks.
4. **Quiet reading after spectacle.** Immersive transitions lead into calm, editorial sections where the work can be understood.
5. **Every effect has an equivalent.** Touch, keyboard, reduced-motion, and non-WebGL experiences retain the complete story and actions.

## 3. MVP sitemap

```text
/
├── #work
├── #research
├── #approach
├── #about
├── /work/linguaflow-teacher
├── /work/multilingual-family-ecosystem
├── /work/ealdesk-elementary
└── /work/scaffold
```

### MVP route decisions

- The homepage contains the complete high-level professional story.
- Each flagship receives a dedicated case-study route.
- LinguaFlow Teacher leads the homepage and receives the first case-study route; Classroom Support Compass remains a concise supporting feature.
- Research and professional experience remain on the homepage, with direct PDF links for deeper reading.
- The implementation should generate real static case-study URLs rather than making essential content available only in animated overlays.

## 4. Primary navigation

### Desktop

| Item | Destination | Purpose |
| --- | --- | --- |
| Federico Orozco / FO. | `/` | Persistent home identity |
| Work | `/#work` | Flagship and supporting products |
| Research | `/#research` | Action research and evidence |
| Approach | `/#approach` | Pedagogy and responsible technology |
| About | `/#about` | Experience and credentials |
| Résumé | PDF | Direct professional action |
| Start a conversation | Email | Primary contact action |

### Mobile

Use a compact header with:

- `FO.` home link;
- `Work` shortcut;
- menu button with a visible text label;
- a menu containing Research, Approach, About, Résumé, and Contact.

Avoid hiding the only contact action behind animation or a hover state.

## 5. Homepage sequence and copy

### Section 1 — First viewport

**Purpose:** Identify Federico, establish the central idea, and invite exploration.

**Eyebrow**

> EAL educator · Multilingual learning designer

**H1**

> Make language visible.

**Introduction**

> I turn complex language-learning needs into practical systems that help students participate, families understand the journey, and teachers act with greater clarity.

**Primary action**

> Explore the work

**Secondary action**

> See my approach

**Professional proof line**

> 15+ years across international classrooms, teacher development, family communication, and multilingual learning systems.

#### Signature visual content

The Language Access Ecosystem contains four interactive nodes:

| Node | Short label | Revealed thought |
| --- | --- | --- |
| Students | Participate | Language support should open access without lowering the thinking. |
| Families | Understand | Families deserve school information they can understand and use. |
| Teachers | Act | Specialist knowledge matters most when it becomes a practical next move. |
| Systems | Connect | Shared language helps schools make more consistent support decisions. |

**Non-interactive fallback sentence**

> One learner is supported by a connected ecosystem of families, teachers, and school systems.

### Section 2 — Point of view

**Section label**

> Point of view

**Statement**

> Multilingual learners are not behind. They are building language, identity, confidence, and academic access at the same time.

**Supporting copy**

> Good support does not simplify the learner. It makes the path into rigorous learning more visible—and gives the people around that learner clearer ways to help.

**Transition line**

> Each project begins with a recurring point of friction.

### Section 3 — Work introduction

**Anchor:** `#work`

**Section label**

> Selected systems

**H2**

> Built from the classroom outward.

**Introduction**

> These products began with problems I encountered in multilingual classrooms: language data that families could not interpret, curriculum supports scattered across too many places, and planning knowledge that was difficult to turn into everyday action.

### Section 4 — Flagship 01: Multilingual Family Ecosystem

**Project label**

> Research → Family understanding → Everyday action

**H2**

> From scores to shared understanding.

**Problem statement**

> Language data was being used, but its meaning was not always clear to the families and educators supporting multilingual learners.

**Project summary**

> My 2026 action research investigated that gap. It led to My Multilingual Family, a multilingual guide that explains language development in accessible terms, and then to LinguaFlow Family, which turns that understanding into practical activities, parent learning, and stronger school conversations.

**Evidence statement**

> In early feedback, 6 of 6 respondents rated the guide “very useful,” and 2 of 2 family respondents said they understood WIDA levels “much better.” These are early findings, not a long-term impact evaluation.

**Primary action**

> Read the case study

**Secondary actions**

- Visit My Multilingual Family
- Explore LinguaFlow Family
- Read the capstone

**Visual sequence**

1. A hard-to-interpret language score or framework fragment.
2. Research connections forming between family, teacher, and school understanding.
3. My Multilingual Family interface.
4. LinguaFlow Family activity and school-connection states.

### Section 5 — Flagship 02: EALDesk Elementary

**Project label**

> Curriculum system · Elementary EAL

**H2**

> Make the next teaching move clearer.

**Problem statement**

> Teachers need to connect literacy goals, language demands, learner proficiency, and practical scaffolds—but that knowledge is often spread across disconnected documents and tools.

**Project summary**

> EALDesk brings Reader’s Workshop, Writer’s Workshop, WIDA-informed supports, assessment guidance, translation practices, mentor texts, and classroom strategies into one teacher-facing system.

**Product principle**

> Choose one purposeful support for the moment in front of you—without adding more noise to the day.

**Primary action**

> Read the case study

**Secondary action**

> Open EALDesk

**Visual sequence**

1. Disconnected curriculum and language-support fragments.
2. A single workshop path becomes visible.
3. Task and WIDA-level choices update the support.
4. A detailed unit demonstrates language demands and differentiation.

### Section 6 — Flagship 03: Scaffold

**Project label**

> AI-assisted planning workspace · Beta

**H2**

> From rough ideas to teachable language support.

**Problem statement**

> A teacher may know the content goal but still need time and specialist knowledge to design explicit language objectives, vocabulary, sentence frames, and differentiated participation.

**Project summary**

> Scaffold helps teachers turn rough planning notes into structured lesson support for multilingual learners. Its Lesson Planner and Classroom Copilot organize teacher input into practical language moves that can be reviewed, adapted, and used in context.

**Responsible-technology statement**

> AI can reduce planning friction. The teacher still decides what fits the learners, curriculum, and classroom.

**Status note**

> Scaffold is currently in Beta. Its workflows and outputs are actively being tested and refined.

**Primary action**

> Read the case study

**Secondary action**

> Try the Beta

**Visual sequence**

1. Rough notes enter the workspace.
2. Objectives, vocabulary, sentence frames, and activities take shape.
3. The teacher reviews and adapts the result.
4. Classroom Copilot produces support for an immediate teaching moment.

### Section 7 — Supporting tools

**Section label**

> Focused tools

**H2**

> Smaller systems. Specific moments.

**Introduction**

> Some problems call for a broad platform. Others need one carefully designed workflow that helps an educator move forward.

#### LinguaFlow Teacher

**Status label**

> Mentor-text planning workspace

**Title**

> Build a text around what students need to notice.

**Summary**

> LinguaFlow Teacher helps educators create purposeful mentor texts around context, Key Language Use, language features, and the teaching move that comes next.

**Action**

> Open LinguaFlow Teacher

#### Classroom Support Compass

**Status label**

> Student-support reference

**Title**

> Move from an observed need to a practical first response.

**Summary**

> Classroom Support Compass organizes universal and targeted strategies so teachers can find useful next steps and enter support conversations with clearer evidence.

**Action**

> Open Classroom Support Compass

**Presentation constraint**

Keep the portfolio version school-neutral. Do not show SSIS branding or imply institutional endorsement.

### Section 8 — Research

**Anchor:** `#research`

**Section label**

> Research into practice

**H2**

> Investigate the gap before designing the tool.

**Body**

> My 2026 MLRC Action Research Capstone examined whether teacher-designed WIDA support tools could strengthen shared understanding among EAL teachers, classroom teachers, school leaders, and families. The work revealed a deeper problem of practice: data alone does not create access. People need language, context, and practical ways to act on what the data means.

**Research pathway**

> Problem of practice → Action research → Family-guide prototype → Public resource → Continued learning

**Actions**

- Read the capstone
- Explore the family case study

### Section 9 — Approach

**Anchor:** `#approach`

**Section label**

> Pedagogy and product principles

**H2**

> Human judgment is the system.

**Introduction**

> My work sits at the intersection of EAL instruction, teacher collaboration, family communication, and responsible technology.

#### Principle 1

**Language is participation**

> Good scaffolding does not water down thinking. It opens the door to participation.

#### Principle 2

**Home language is an asset**

> Learners should not have to leave their strongest language—or part of their identity—outside the learning process.

#### Principle 3

**Technology serves judgment**

> AI should reduce friction without replacing teacher expertise, relationships, context, or care.

#### Teaching and Learning Cycle

Present the cycle compactly:

1. Build context.
2. Model and deconstruct.
3. Construct together.
4. Compose independently.

**Connection line**

> This cycle shapes the classroom routines, resources, and teacher tools I build.

### Section 10 — About

**Anchor:** `#about`

**Section label**

> Educator first. Systems thinker always.

**H2**

> Classroom depth. Systems perspective.

**Short biography**

> I’m Federico Orozco, an EAL specialist and multilingual learning designer with more than 15 years of experience across international education, teacher development, and language instruction in South Korea and China. I build tools because I keep encountering important problems that deserve clearer, more sustainable solutions.

**Experience proof**

- EAL Specialist Teacher, Suzhou, China.
- Elementary English teaching, Seoul, South Korea.
- Head teacher training and professional learning design.
- MA in TEFL, CELTA, and a Washington, DC ESOL teaching license.
- Ongoing learning in WIDA, Universal Design for Learning, differentiation, and multilingual research.

**Actions**

- Download résumé
- View LinkedIn
- View GitHub

### Section 11 — Closing invitation

**Prompt**

> Have a shared problem to solve?

**H2**

> Let’s make the path clearer.

**Body**

> I’m interested in thoughtful collaborations around multilingual learning, teacher tools, family communication, educational technology, and responsible AI.

**Primary action**

> Start a conversation

**Footer links**

- LinkedIn
- GitHub
- Résumé
- Capstone
- My Multilingual Family
- LinguaFlow Teacher

## 6. Case-study information architecture

Each flagship route follows the same logic while allowing a different visual composition.

### Case-study header

- Project number and category.
- Project name.
- One-sentence problem.
- Audience.
- Status.
- Live-product action.
- Hero product evidence.

### Story sequence

1. **The friction** — the recurring real-world problem.
2. **What I noticed** — the insight or research that changed the approach.
3. **The response** — what the product enables.
4. **How it works** — a short annotated walkthrough.
5. **Key decisions** — two or three meaningful product, content, or interaction choices.
6. **Evidence and limits** — verified feedback, current status, and what has not been proven.
7. **What I learned** — concise reflection.
8. **What comes next** — honest roadmap or open question.
9. **Next project** — guided continuation through the portfolio.

### Role language

Use specific contribution labels where evidence supports them:

- Product concept
- Research
- EAL content design
- Information architecture
- Interaction and interface direction
- Prototyping and development
- Testing and iteration

Do not claim sole ownership of third-party frameworks, generated assets, institutional materials, or work completed collaboratively without confirming attribution.

## 7. Case-study copy briefs

### Multilingual Family Ecosystem

**Case-study title**

> Turning language data into shared understanding

**Deck**

> An action-research project that evolved into two connected family tools: one makes language development easier to understand; the other helps families put that understanding into practice.

**Central decision**

> Explain the why, then make the next helpful action obvious.

**Evidence treatment**

Show the early-response figures beside the sample size and limitation, never as an oversized impact claim without context.

### EALDesk Elementary

**Case-study title**

> Making specialist language support usable in the teaching moment

**Deck**

> A teacher-facing literacy system that connects workshop tasks, language demands, WIDA-informed differentiation, and practical classroom moves.

**Central decision**

> Begin with the task in front of the teacher, then reveal only the support needed for that moment.

### Scaffold

**Case-study title**

> Designing AI around teacher judgment

**Deck**

> A Beta planning workspace that transforms rough lesson ideas into reviewable language objectives, vocabulary, sentence frames, and classroom support.

**Central decision**

> Treat AI output as editable planning material, not a finished teaching decision.

## 8. Content hierarchy rules

### Use problem-first headlines

Prefer:

> From scores to shared understanding.

Avoid:

> Introducing My Multilingual Family.

### Keep technical detail subordinate

Technology may appear in case-study metadata or decision notes when it explains a constraint or capability. Do not lead homepage stories with framework names, hosting platforms, or libraries.

### Separate evidence from aspiration

- **Evidence:** verified features, source material, early feedback with sample size, public status.
- **Judgment:** design rationale and professional reflection.
- **Aspiration:** future features, broader adoption, or intended impact.

Label each honestly through wording and placement.

### Status labels

- My Multilingual Family: Live.
- LinguaFlow Family: Live.
- EALDesk Elementary: Live.
- Scaffold: Beta.
- LinguaFlow Teacher: use the current confirmed public status before launch; do not inherit learner-platform Beta language automatically.
- Classroom Support Compass: do not show an institutional status or adoption claim.

## 9. Mobile reading order

Mobile should preserve the narrative while simplifying spatial interaction:

1. Identity and “Make language visible.”
2. One-sentence introduction.
3. Primary action.
4. Four ecosystem nodes as a vertical connected sequence.
5. Point of view.
6. Three flagship stories.
7. Two supporting tools.
8. Research.
9. Approach.
10. About and credentials.
11. Contact.

Project screenshots should appear immediately after each problem statement on mobile. Do not place long animation sequences between the problem and product evidence.

## 10. Accessibility and content requirements

- All project meaning must exist in HTML text, not only canvas or animation.
- Ecosystem nodes must be reachable and understandable by keyboard.
- Each screenshot needs alt text describing the product decision it demonstrates.
- Status must be expressed in text, not color alone.
- Case-study reading order must remain logical without CSS positioning.
- Evidence figures must retain sample-size context for screen-reader users.
- Navigation labels should describe destinations; avoid ambiguous icon-only controls.
- Reduced-motion mode should replace spatial transformations with direct state changes or crossfades.

## 11. Phase 2 completion checklist

- [x] One-sentence concept defined.
- [x] Audience promise defined.
- [x] Creative constraints defined.
- [x] MVP sitemap defined.
- [x] Desktop and mobile navigation defined.
- [x] Homepage sequence defined.
- [x] Homepage copy drafted.
- [x] Flagship hierarchy incorporated.
- [x] Supporting-project copy drafted.
- [x] Research, approach, and about copy drafted.
- [x] Case-study structure defined.
- [x] Status and evidence rules documented.
- [x] Mobile reading order documented.
- [x] Accessibility content requirements documented.

## 12. Phase 2 approvals

- [x] Hero introduction approved through progression into Phase 3.
- [x] Action research, My Multilingual Family, and LinguaFlow Family approved as one connected flagship story.
- [x] Primary portfolio contact confirmed as `forozc1@gmail.com`.
- [x] Supporting project confirmed as LinguaFlow Teacher, focused exclusively on teacher-created mentor texts; the learner platform will become Lingua Bridge and remains outside this MVP.
