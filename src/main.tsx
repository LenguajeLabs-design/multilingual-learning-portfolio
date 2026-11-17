import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./compact-ui.css";

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;
const contactEmail = "hello@federicoorozco.co";
const cvRequest = `mailto:${contactEmail}?subject=CV%20request`;
const linkedIn = "https://www.linkedin.com/in/federico-orozco-m-a-687b5431/";
const profileLabel = "EAL Specialist · Learning Designer";
const summary = "I design practical tools, teacher learning, and family resources, many of them AI-powered, that help schools serve multilingual learners.";

const ecosystemNodes = [
  { id: "students", label: "Students", verb: "Participate", thought: "Open access without lowering the thinking." },
  { id: "families", label: "Families", verb: "Understand", thought: "Make language development easier to understand and support." },
  { id: "teachers", label: "Teachers", verb: "Act", thought: "Turn language research into the next teaching move." },
  { id: "systems", label: "Schools", verb: "Connect", thought: "Bring classroom teaching, teacher learning, and families together." },
] as const;

function Ecosystem() {
  const [active, setActive] = useState(2);
  return (
    <div className="ecosystem" role="group" aria-label="Support around the learner">
      <div className="ecosystem-stage">
        <svg className="ecosystem-paths" viewBox="0 0 500 460" aria-hidden="true">
          <circle cx="250" cy="230" r="172" /><circle cx="250" cy="230" r="118" />
          <path d="M250 70V390M70 230H430" /><circle className="orbit-point" cx="250" cy="58" r="4" />
        </svg>
        <div className="ecosystem-center"><span>At the heart</span><strong>The learner</strong></div>
        {ecosystemNodes.map((node, index) => (
          <button key={node.id} type="button" className={`ecosystem-node node-${node.id} ${index === active ? "is-active" : ""}`}
            aria-pressed={index === active} onClick={() => setActive(index)} onPointerEnter={() => setActive(index)}>
            <span className="node-index">0{index + 1}</span>
            <span><strong>{node.label}</strong><small>{node.verb}</small></span>
          </button>
        ))}
      </div>
      <p className="ecosystem-thought" aria-live="polite"><span>{ecosystemNodes[active].label}</span>{ecosystemNodes[active].thought}</p>
    </div>
  );
}

const projects = [
  {
    name: "LinguaFlow Teacher", status: "Live", audience: "Teachers", logo: "lingua-icon.png",
    href: "https://www.readlinguaflow.com/", action: "Open project",
    description: "Mentor texts and language analysis for purposeful classroom planning.",
    contribution: "Make instructional decisions explicit.", evidence: "Used by teachers at SSIS.",
    download: "resources/linguaflow-teacher-introduction.pdf",
    // TODO: Add an authentic LinguaFlow Teacher screenshot.
  },
  {
    name: "My Multilingual Family", status: "Live", audience: "Families", logo: "mmlf-logo.svg",
    href: "https://www.mymultilingualfamily.com/", action: "Open project",
    description: "A WIDA family guide in 7 languages.", contribution: "Strengthen family understanding and partnership.",
    evidence: "English, Spanish, French, Chinese, Japanese, Korean, and German · organized around the six WIDA levels.",
    screenshot: "family-guide.png",
  },
  {
    name: "Scaffold", status: "Live beta", audience: "Teachers", logo: "scaffold-icon.png",
    href: "https://lenguajelabs-design.github.io/scaffold", action: "Open beta",
    description: "Turn teacher input into structured language support.", contribution: "Support teacher planning and language instruction.",
    evidence: "Piloted with teachers at SSIS.", download: "resources/scaffold-teacher-introduction.pdf",
    // TODO: Add an authentic Scaffold screenshot.
  },
  {
    name: "The Language Support Toolkit", status: "Live", audience: "Teachers", logo: "language-support-toolkit-logo.png",
    href: "https://lenguajelabs-design.github.io/Language-Support-Toolkit./#/", action: "Explore toolkit",
    description: "Language supports and adaptable AI prompts for everyday lessons.", contribution: "Translate language demands into classroom support.",
    download: "resources/language-support-toolkit-teacher-introduction.pdf",
    // TODO: Add verified evidence and an authentic Language Support Toolkit screenshot.
  },
  {
    name: "Classroom Compass", status: "Live", audience: "Teachers", logo: "classroom-compass-mark.svg",
    href: "https://lenguajelabs-design.github.io/classroom-compass/", action: "Open project",
    description: "A co-created guide for navigating classroom decisions.", contribution: "Co-create guidance teachers can use.",
    // TODO: Add verified evidence and an authentic Classroom Compass screenshot.
  },
];

function ProjectRows() {
  return <div className="case-study-list">{projects.map((project) => (
    <article className="case-study-row" key={project.name}>
      <div className="case-study-identity">
        <div className="project-logo"><img src={asset(project.logo)} alt={`${project.name} logo`} width="72" height="72" /></div>
        <div><p className="project-status"><i className={project.status === "Live beta" ? "is-beta" : ""} aria-hidden="true" />{project.status}<span>·</span>{project.audience}</p>
          <h3>{project.name}</h3><p className="project-description">{project.description}</p></div>
      </div>
      <div className="case-study-contribution">
        <p className="eyebrow">Contribution</p><p>{project.contribution}</p>
        {project.evidence && <small>{project.evidence}</small>}
        {project.screenshot && <details className="project-preview"><summary>View the tool</summary><img src={asset(project.screenshot)} alt="My Multilingual Family interface showing the six WIDA levels" width="1280" height="977" loading="lazy" /></details>}
      </div>
      <div className="case-study-actions">
        <a className="project-link" href={project.href}>{project.action} <span aria-hidden="true">↗</span></a>
        {project.download && <a className="download-link" href={asset(project.download)} download>Teacher introduction <span aria-hidden="true">↓</span></a>}
      </div>
    </article>
  ))}</div>;
}

// TODO: Supply 1–2 approved quotes with name and role. Empty by design: no placeholder quotes can ship.
const approvedTestimonials: { quote: string; name: string; role: string }[] = [];
function Testimonials() {
  if (!approvedTestimonials.length) return null;
  return <aside className="container testimonials" aria-label="Colleague reflections">{approvedTestimonials.map((item) =>
    <figure key={item.name}><blockquote>{item.quote}</blockquote><figcaption>{item.name} · {item.role}</figcaption></figure>)}</aside>;
}

const focus = [
  { title: "Teacher development", description: "Design professional learning that helps teachers notice language and act on it.", evidence: "100+ teachers trained in Seoul · 5–6 PD sessions led at SSIS" },
  { title: "Family partnership", description: "Make language development easier for families to understand and support at home.", evidence: "Monthly subject word banks sent home · Family guide in 7 languages" },
  { title: "Practical tools", description: "Build tools that turn language research into classroom-ready support.", evidence: "5 tools built · 3 in use at SSIS" },
  { title: "Evidence into action", description: "Use assessment data and research to guide decisions.", evidence: "MLRC action-research capstone on WIDA scores · 2 years as an iTEP proficiency rater" },
];
const approach = [
  { title: "Find the friction", description: "start from a recurring problem teachers or families actually face." },
  { title: "Ground it in research", description: "draw on second-language acquisition, WIDA, and UDL." },
  { title: "Build with teachers", description: "prototype quickly and test it in real classrooms." },
  { title: "Refine and share", description: "improve from feedback and make it easy for others to use." },
];
const roles = [
  { date: "2022 — Present · China", title: "EAL Specialist Teacher", school: "Suzhou Singapore International School", tile: "SSIS",
    description: "Supports Grade 4–5 multilingual learners and partners with classroom teachers. Led or co-led 5–6 staff PD sessions on language-aware teaching. Co-produces monthly family word banks for every subject, with kid-friendly definitions and images, plus a curated Padlet of videos and articles. Built LinguaFlow Teacher, Scaffold, and My Multilingual Family for use across the school." },
  { date: "2019 — 2022 · South Korea", title: "5th Grade English Teacher", school: "Kyungbok Elementary", logo: "credentials/kyungbok.png",
    description: "Designed communicative, task-based instruction across reading, writing, speaking, and listening." },
  { date: "2017 — 2019 · Remote", title: "English Proficiency Assessment Rater", school: "iTEP International", tile: "iTEP",
    description: "Scored spoken English for the ECAT assessment using standardized rubrics, with ongoing calibration for inter-rater reliability." },
  { date: "2011 — 2019 · South Korea", title: "Head Teacher Trainer", school: "Seoul Metropolitan Office of Education", logo: "credentials/smoe.png",
    description: "Taught intensive English programs for students, then moved into teacher training: trained 100+ Korean English teachers through monthly two-week programs, designed 3–4 training programs (including one for vice principals), and mentored 8–10 native English-speaking trainers." },
];
const courses = [
  { name: "WIDA Writing Institute: Writing with Multilingual Learners", institution: "Wisconsin Center for Education Products and Services (WCEPS), UW–Madison", year: "2026" },
  { name: "Articulating the Intangibles of Teaching", institution: "Harvard Graduate School of Education, Professional Education", year: "2025" },
  { name: "Universal Design for Learning: Apply", institution: "HGSE Professional Education, with CAST", year: "2025" },
  { name: "Universal Design for Learning: Explore", institution: "HGSE Professional Education", year: "2024" },
  { name: "Differentiated Instruction Made Practical", institution: "HGSE Professional Education", year: "2022" },
];

function App() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Person", name: "Federico Orozco",
      url: "https://federicoorozco.co/", jobTitle: profileLabel, description: summary,
      email: `mailto:${contactEmail}`, sameAs: [linkedIn],
    }) }} />
    <a className="skip-link" href="#work">Skip to selected work</a>
    <header className="site-header container" id="top">
      <a className="wordmark" href="#top">Federico Orozco<span>.</span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#experience">Experience</a><a href="#about">About</a><a href={cvRequest}>Request CV</a></nav>
      <a className="header-contact" href={`mailto:${contactEmail}`}><span className="contact-long">Start a conversation</span><span className="contact-short">Email</span><span aria-hidden="true">↗</span></a>
    </header>
    <main>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">{profileLabel}</p>
          <h1 id="hero-title">Practical tools and teacher learning <em>for multilingual learners.</em></h1>
          <p className="hero-intro">I'm an EAL specialist with 17 years in language education across Korea and China. I design tools, training, and family resources, many of them AI-powered, that turn language research into what teachers and families can use on Monday.</p>
          <div className="hero-actions"><a className="button" href="#work">Explore the work <span aria-hidden="true">↓</span></a><a className="text-link" href="#approach">See my approach <span aria-hidden="true">↗</span></a></div>
          <a className="hero-person" href="#about"><img src={asset("federico-orozco-headshot.jpeg")} alt="" width="64" height="64" /><span><strong>Federico Orozco</strong><small>{profileLabel}</small><small>17 years in language education across Korea and China.</small></span></a>
        </div>
        <Ecosystem />
      </section>
      <section className="proof-strip container" aria-label="Experience and work in numbers">
        {[["17", "years in language education"], ["20,000+", "students taught"], ["100+", "Korean English teachers trained"], ["7", "languages in the family guide"]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
      </section>
      <section className="point-of-view section container" aria-labelledby="point-title">
        <p className="eyebrow section-label">Point of view</p>
        <div><h2 id="point-title">Multilingual learners are not behind. They are building <em>language, identity, confidence,</em> and academic access at the same time.</h2><p className="section-description">Good support does not simplify the learner. It opens the path into rigorous learning—and gives the people around that learner clearer ways to help.</p></div>
      </section>
      <section className="work-section section container" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Five projects, five ways to support multilingual learners.</h2></div><p>Tools and resources shaped by classroom teaching, teacher learning, and conversations with families.</p></div>
        <ProjectRows />
      </section>
      <Testimonials />
      <section className="focus-section section container" id="leadership" aria-labelledby="focus-title">
        <div className="section-heading"><div><p className="eyebrow">Leadership focus</p><h2 id="focus-title">From experience to shared practice.</h2></div><p>Teacher learning, family partnership, and tools built around the needs of a school.</p></div>
        <div className="focus-grid">{focus.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p><small>{item.evidence}</small></article>)}</div>
      </section>
      <section className="capstone-section section container" id="research" aria-labelledby="capstone-title">
        <p className="eyebrow section-label">Research &amp; capstone</p>
        <div className="capstone-layout"><div><p className="eyebrow">MLRC Action Research Capstone</p><h2 id="capstone-title">From scores to shared understanding.</h2><p className="section-description">An action-research project developed through the Multilingual Learning Research Center, translating WIDA language-development information into a clearer resource for teachers, families, and school leaders.</p>
          <div className="capstone-actions"><a className="button" href={asset("resources/suzhou-singapore-mlrc-capstone.pdf")} download>Read the capstone <span aria-hidden="true">↓</span></a><a className="text-link" href="https://www.mymultilingualfamily.com/">Visit My Multilingual Family <span aria-hidden="true">↗</span></a></div></div>
          <aside className="capstone-note"><p className="eyebrow">Research in practice</p><p>Making language-development information easier to understand and use.</p><small>Suzhou Singapore International School</small></aside>
        </div>
      </section>
      <section className="approach-band" id="approach" aria-labelledby="approach-title"><div className="section container"><p className="eyebrow">Approach</p><h2 id="approach-title">Find the friction. Make the next move visible.</h2><ol className="approach-grid">{approach.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol></div></section>
      <section className="experience-section section container" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><div><p className="eyebrow">Experience &amp; credentials</p><h2 id="experience-title">Classroom depth.<br /><em>A wider perspective.</em></h2></div><div><p>17 years in language education: teacher training, classroom teaching, language assessment, and EAL support in South Korea and China.</p><a className="text-link resume-link" href={cvRequest}>Full CV available on request <span aria-hidden="true">↗</span></a></div></div>
        <div className="experience-grid">
          <div><h3 className="eyebrow column-label">Selected experience</h3><ol className="timeline">{roles.map((role) => <li key={role.title}><div className="experience-logo">{role.logo ? <img src={asset(role.logo)} alt={`${role.school} logo`} width="72" height="72" /> : <span>{role.tile}</span>}</div><div><p className="role-date">{role.date}</p><h4>{role.title}</h4><p className="institution">{role.school}</p><p className="role-description">{role.description}</p></div></li>)}</ol><p className="earlier-career"><strong>Earlier career · 2006 — 2009 · Chicago</strong>Multilingual data analysis (Spanish &amp; Italian) at Accuity and editorial research management at Schofield Media.</p></div>
          <div className="education-column"><h3 className="eyebrow column-label">Education &amp; professional learning</h3><h4 className="group-title">Degrees</h4>
            <div className="degree"><img src={asset("credentials/nsu.png")} alt="Nova Southeastern University logo" width="64" height="64" /><div><h5>Master of Arts in TEFL</h5><p>Nova Southeastern University</p><small>2012 — 2014</small></div></div>
            <div className="degree"><img src={asset("credentials/uic.png")} alt="University of Illinois Chicago logo" width="64" height="64" /><div><h5>Bachelor's Degree, Italian Studies</h5><p>University of Illinois Chicago</p><small>2000 — 2005</small></div></div>
            <h4 className="group-title">Professional learning</h4><ul className="course-list"><li><h5>{courses[0].name}</h5><p>{courses[0].institution}</p><small>{courses[0].year}</small></li></ul>
            <div className="professional-education"><div className="professional-education-heading"><img src={asset("credentials/harvard-gse.png")} alt="Harvard Graduate School of Education logo" width="56" height="56" /><p>Harvard Graduate School of Education<span>Professional Education</span></p></div><ul className="course-list">{courses.slice(1).map((course) => <li key={course.name}><h5>{course.name}</h5><p>{course.institution}</p><small>{course.year}</small></li>)}</ul></div>
            <h4 className="group-title">Licenses &amp; certificates</h4><ul className="qualification-list"><li>CELTA</li><li>Washington, DC teaching license</li></ul>
          </div>
        </div>
      </section>
      <section className="about-section section container" id="about" aria-labelledby="about-title">
        <div className="about-portrait"><img src={asset("federico-orozco-headshot.jpeg")} alt="Federico Orozco" width="800" height="800" loading="lazy" /></div><div><p className="eyebrow">About Federico</p><h2 id="about-title">Classroom teacher.<br /><em>Learning designer.</em></h2>
          <p className="section-description">I'm an EAL specialist and learning designer with 17 years in language education, after an earlier career in multilingual research and data.</p><p className="section-description">I connect pedagogy, research, and practical design to help schools serve multilingual learners, building tools, teacher learning, and family resources that people actually use.</p>
          <div className="about-links"><a className="button" href={`mailto:${contactEmail}`}>Start a conversation <span aria-hidden="true">↗</span></a><a className="text-link" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
    <footer className="site-footer container"><div><a className="wordmark" href="#top">Federico Orozco<span>.</span></a><p>{profileLabel}</p></div><p className="footer-summary">{summary}</p><div className="footer-contact"><a href={`mailto:${contactEmail}`}>{contactEmail} <span aria-hidden="true">↗</span></a><a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></footer>
  </>;
}

createRoot(document.getElementById("root")!).render(<App />);
