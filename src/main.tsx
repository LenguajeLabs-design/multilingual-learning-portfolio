import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./compact-ui.css";

type EcosystemKey = "students" | "families" | "teachers" | "systems";

type EcosystemNode = {
  id: EcosystemKey;
  index: string;
  label: string;
  verb: string;
  thought: string;
  x: number;
  y: number;
};

const ecosystemNodes: EcosystemNode[] = [
  {
    id: "students",
    index: "01",
    label: "Students",
    verb: "Participate",
    thought: "Open access without lowering the thinking.",
    x: 50,
    y: 13,
  },
  {
    id: "families",
    index: "02",
    label: "Families",
    verb: "Understand",
    thought: "Make the journey understandable and usable.",
    x: 84,
    y: 49,
  },
  {
    id: "teachers",
    index: "03",
    label: "Teachers",
    verb: "Act",
    thought: "Turn expertise into a practical next move.",
    x: 50,
    y: 84,
  },
  {
    id: "systems",
    index: "04",
    label: "Systems",
    verb: "Connect",
    thought: "Create shared language for better decisions.",
    x: 16,
    y: 49,
  },
];

function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow arrow-${direction}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Ecosystem() {
  const [active, setActive] = useState<EcosystemKey>("teachers");
  const stageRef = useRef<HTMLDivElement>(null);
  const activeNode = useMemo(
    () => ecosystemNodes.find((node) => node.id === active) ?? ecosystemNodes[1],
    [active],
  );

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  }

  return (
    <div
      className="ecosystem"
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--pointer-x", "0");
        event.currentTarget.style.setProperty("--pointer-y", "0");
      }}
      aria-label="Language access ecosystem"
    >
      <div className="ecosystem-glow" aria-hidden="true" />
      <div className="ecosystem-orbit orbit-a" aria-hidden="true" />
      <div className="ecosystem-orbit orbit-b" aria-hidden="true" />
      <svg className="ecosystem-lines" aria-hidden="true" viewBox="0 0 100 100">
        <path d="M50 13 L84 49 L50 84 L16 49 Z" />
        <path d="M50 13 L50 84 M16 49 L84 49" />
      </svg>

      <div className="ecosystem-center" aria-hidden="true">
        <span>Language</span>
        <strong>access</strong>
      </div>

      {ecosystemNodes.map((node) => (
        <button
          className={`ecosystem-node node-${node.id} ${active === node.id ? "is-active" : ""}`}
          key={node.id}
          type="button"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          aria-pressed={active === node.id}
          onClick={() => setActive(node.id)}
          onPointerEnter={() => setActive(node.id)}
        >
          <span className="node-index">{node.index}</span>
          <span className="node-copy">
            <strong>{node.label}</strong>
            <small>{node.verb}</small>
          </span>
        </button>
      ))}

      <p className="ecosystem-thought" aria-live="polite">
        <span>{activeNode.label}</span>
        {activeNode.thought}
      </p>
    </div>
  );
}

const mentorSteps = [
  { label: "Context", detail: "Grade 4 · Science · Adaptation" },
  { label: "Key Language Use", detail: "Explain" },
  { label: "Language Features", detail: "Cause, effect, and precise verbs" },
  { label: "Mentor Text", detail: "Age-respectful and editable" },
  { label: "Teaching Move", detail: "Notice → rehearse → transfer" },
];

function MentorTextStudio() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <div className="mentor-studio" data-reveal>
      <div className="mentor-studio-bar">
        <div className="mentor-brand">
          <span className="mentor-mark">L</span>
          <span>
            <strong>LinguaFlow Teacher</strong>
            <small>Mentor Text Workspace</small>
          </span>
        </div>
        <span className="mentor-status">Draft saved</span>
      </div>

      <div className="mentor-studio-grid">
        <div className="mentor-decisions">
          <p className="mentor-pane-label">Instructional decisions</p>
          {mentorSteps.map((step, index) => (
            <button
              type="button"
              className={activeStep === index ? "is-active" : ""}
              aria-pressed={activeStep === index}
              onClick={() => setActiveStep(index)}
              key={step.label}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </span>
            </button>
          ))}
        </div>

        <article className="mentor-document" aria-label="Generated mentor text example">
          <div className="mentor-document-meta">
            <span>Mentor text · Explanatory</span>
            <span>Grade 4</span>
          </div>
          <h3>How Arctic Foxes Survive the Cold</h3>
          <p>
            An Arctic fox survives because its body is built for extreme cold. Its thick fur
            <mark> traps warm air</mark> close to the skin, while its small ears
            <mark> reduce heat loss</mark>. Even its paws are covered in fur, so the fox can walk
            across snow and ice without losing as much body heat.
          </p>
          <p>
            When the seasons change, the fox changes too. Its coat becomes brown in summer and white
            in winter. <mark>As a result,</mark> the fox can hide from predators and move closer to
            its prey.
          </p>
          <div className="mentor-feature-note">
            <span>Language feature</span>
            Cause-and-effect relationships are made visible without simplifying the science.
          </div>
        </article>

        <aside className="mentor-move">
          <p className="mentor-pane-label">Teaching move</p>
          <span className="move-number">01</span>
          <h3>Notice how explanations connect cause and effect.</h3>
          <p>Invite students to find what happens and why. Rehearse the relationship orally before writing.</p>
          <div className="sentence-frame">
            <span>Try saying</span>
            “Because ___, the fox can ___.”
          </div>
          <button type="button">Edit teaching move</button>
        </aside>
      </div>
    </div>
  );
}

function ExpandedProductPreview({ title, src, allow, onClose }: { title: string; src: string; allow?: string; onClose: () => void }) {
  return createPortal(
    <div className="product-preview-modal" role="dialog" aria-modal="true" aria-label={`Expanded ${title}`}>
      <iframe title={title} src={src} referrerPolicy="strict-origin-when-cross-origin" allow={allow} />
      <button className="live-frame-close" type="button" onClick={onClose} autoFocus>
        Close preview <span aria-hidden="true">×</span>
      </button>
    </div>,
    document.body,
  );
}

function LiveTeacherApp() {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expanded]);

  return (
    <>
    <div className="teacher-live-demo" data-reveal>
      <div className="teacher-live-bar">
        <div className="mentor-brand">
          <span className="mentor-mark">L</span>
          <span>
            <strong>LinguaFlow Teacher</strong>
            <small>Live mentor-text planning workspace</small>
          </span>
        </div>
        <a href="https://www.readlinguaflow.com/" target="_blank" rel="noreferrer">
          Open full app ↗
        </a>
      </div>
      <div className="teacher-live-note">
        <span>Try it here</span>
        Move from instructional context to an editable mentor text and a practical teaching move.
      </div>
      <div className={`live-frame live-frame-teacher ${loaded ? "is-loaded" : ""}`}>
        <div className="live-frame-status" role="status">
          <span className="live-frame-pulse" aria-hidden="true" />
          <strong>Loading the live workspace…</strong>
          <small>If it takes too long, <a href="https://www.readlinguaflow.com/" target="_blank" rel="noreferrer">open LinguaFlow Teacher directly ↗</a></small>
        </div>
        <iframe
          title="Interactive LinguaFlow Teacher mentor-text workspace"
          src="https://www.readlinguaflow.com/"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="clipboard-write"
          onLoad={() => setLoaded(true)}
        />
        {loaded && (
          <button className="live-frame-expand" type="button" onClick={() => setExpanded(true)} aria-expanded="false">
            <span>Explore the live workspace</span>
            <strong>Click to expand</strong>
          </button>
        )}
      </div>
    </div>
    {expanded && <ExpandedProductPreview title="LinguaFlow Teacher mentor-text workspace" src="https://www.readlinguaflow.com/" allow="clipboard-write" onClose={() => setExpanded(false)} />}
    </>
  );
}

function LiveFamilyGuide() {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expanded]);

  return (
    <>
    <div className="family-live-demo" data-reveal>
      <div className="family-live-bar">
        <div>
          <span className="family-mark">MF</span>
          <span>
            <strong>My Multilingual Family</strong>
            <small>Live product · choose any WIDA level</small>
          </span>
        </div>
        <a href="https://www.mymultilingualfamily.com/" target="_blank" rel="noreferrer">
          Open full site ↗
        </a>
      </div>
      <div className="family-live-note">
        <span>Try it here</span>
        Select a level to see the real guide change across language domains, school supports, and home actions.
      </div>
      <div className={`live-frame live-frame-family ${loaded ? "is-loaded" : ""}`}>
        <div className="live-frame-status" role="status">
          <span className="live-frame-pulse" aria-hidden="true" />
          <strong>Loading the live family guide…</strong>
          <small>If it takes too long, <a href="https://www.mymultilingualfamily.com/" target="_blank" rel="noreferrer">open the guide directly ↗</a></small>
        </div>
        <iframe
          title="Interactive Multilingual Learner Family Guide"
          src="https://www.mymultilingualfamily.com/"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setLoaded(true)}
        />
        {loaded && (
          <button className="live-frame-expand" type="button" onClick={() => setExpanded(true)} aria-expanded="false">
            <span>Explore the live family guide</span>
            <strong>Click to expand</strong>
          </button>
        )}
      </div>
    </div>
    {expanded && <ExpandedProductPreview title="My Multilingual Family guide" src="https://www.mymultilingualfamily.com/" onClose={() => setExpanded(false)} />}
    </>
  );
}

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Federico Orozco, home">
            Federico Orozco<span>.</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="mailto:forozc1@gmail.com">
            <span className="contact-long">Start a conversation</span>
            <span className="contact-short">Email</span>
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">EAL educator · Multilingual learning designer</p>
            <h1 id="hero-title">
              Make language
              <span>visible.</span>
            </h1>
            <p className="hero-intro">
              I turn complex language-learning needs into practical systems that help students
              participate, families understand the journey, and teachers act with greater clarity.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">
                Explore the work <Arrow direction="down" />
              </a>
              <a className="text-link text-link-light" href="#approach">
                See my approach <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a className="hero-person" href="#about" aria-label="About Federico Orozco">
              <img
                src={`${import.meta.env.BASE_URL}assets/federico-orozco-headshot.jpeg`}
                alt=""
                width="800"
                height="800"
              />
              <span>
                <small>Meet the person behind the work</small>
                <strong>Federico Orozco</strong>
                <em>Educator · Researcher · Product builder</em>
              </span>
              <b aria-hidden="true">↘</b>
            </a>
            <p className="hero-proof">
              15+ years across international classrooms, teacher development, family communication,
              and multilingual learning systems.
            </p>
          </div>

          <Ecosystem />
        </div>

        <div className="hero-foot" aria-hidden="true">
          <span>One learner</span>
          <span className="hero-foot-line" />
          <span>A connected ecosystem</span>
        </div>
      </section>

      <section className="point-of-view" aria-labelledby="point-title">
        <div className="section-index" data-reveal>
          <span>01</span>
          <p>Point of view</p>
        </div>
        <div className="point-copy" data-reveal>
          <h2 id="point-title">
            Multilingual learners are not behind. They are building
            <em> language, identity, confidence,</em> and academic access at the same time.
          </h2>
          <p>
            Good support does not simplify the learner. It makes the path into rigorous learning
            more visible—and gives the people around that learner clearer ways to help.
          </p>
        </div>
        <p className="point-transition" data-reveal>
          Each project begins with a recurring point of friction.
          <Arrow direction="down" />
        </p>
      </section>

      <section className="work-intro" id="work" aria-labelledby="work-title">
        <div className="section-index section-index-dark" data-reveal>
          <span>02</span>
          <p>Selected work</p>
        </div>
        <div data-reveal>
          <h2 id="work-title">Built from the classroom outward.</h2>
          <p>
            Two projects that make complex language-learning decisions clearer for teachers and
            families.
          </p>
          <div className="compact-project-links" aria-label="Selected projects">
            <a href="https://www.readlinguaflow.com/" target="_blank" rel="noreferrer">LinguaFlow Teacher ↗</a>
            <a href="https://lenguajelabs-design.github.io/scaffold" target="_blank" rel="noreferrer">Scaffold beta ↗</a>
            <a href="https://www.mymultilingualfamily.com/" target="_blank" rel="noreferrer">My Multilingual Family ↗</a>
          </div>
        </div>
      </section>

      <section className="app-directory" aria-labelledby="directory-title">
        <div className="directory-heading">
          <div>
            <p className="section-index-label">Project directory</p>
            <h2 id="directory-title">Useful tools, made close to the work.</h2>
          </div>
          <p>Browse the projects by audience and stage. Open any one to see the work in context.</p>
        </div>
        <div className="app-grid">
          <a className="app-card app-card-featured" href="https://www.readlinguaflow.com/" target="_blank" rel="noreferrer">
            <span className="app-card-mark app-card-logo"><img src={`${import.meta.env.BASE_URL}assets/lingua-icon.png`} alt="LinguaFlow logo" /></span><span className="app-status">Live</span>
            <h3>LinguaFlow Teacher</h3><p>Mentor texts and language analysis for purposeful classroom planning.</p><span className="app-meta">Teachers · Open project ↗</span>
          </a>
          <a className="app-card" href="https://www.mymultilingualfamily.com/" target="_blank" rel="noreferrer">
            <span className="app-card-mark app-card-logo app-card-logo-square"><img src={`${import.meta.env.BASE_URL}assets/mmlf-logo.svg`} alt="My Multilingual Family logo" /></span><span className="app-status">Live</span>
            <h3>My Multilingual Family</h3><p>A clearer guide to language development for families.</p><span className="app-meta">Families · Open project ↗</span>
          </a>
          <a className="app-card" href="https://lenguajelabs-design.github.io/scaffold" target="_blank" rel="noreferrer">
            <span className="app-card-mark app-card-logo app-card-logo-light"><img src={`${import.meta.env.BASE_URL}assets/scaffold-logo.png`} alt="Scaffold logo" /></span><span className="app-status app-status-beta">Live beta</span>
            <h3>Scaffold</h3><p>Turn rough teacher input into structured language support.</p><span className="app-meta">Teachers · Open beta ↗</span>
          </a>
          <a className="app-card" href="https://lenguajelabs-design.github.io/Lingua-Strategies/" target="_blank" rel="noreferrer">
            <span className="app-card-mark app-card-logo"><img src={`${import.meta.env.BASE_URL}assets/lingua-strategies-logo.png`} alt="Lingua Strategies logo" /></span><span className="app-status">Live</span>
            <h3>Lingua Strategies</h3><p>Research-informed moves for the classroom moment in front of you.</p><span className="app-meta">Teachers · Explore guide ↗</span>
          </a>
        </div>
      </section>

      <section className="compact-credentials" aria-labelledby="credentials-title">
        <div className="credentials-heading">
          <p className="section-index-label">Credentials</p>
          <h2 id="credentials-title">Classroom depth. Systems perspective.</h2>
        </div>
        <div className="credentials-grid">
          <div className="credential-chip"><span><strong>M.A. in TEFL</strong><small>Nova Southeastern University</small></span></div>
          <div className="credential-chip"><span><strong>B.A. Italian Studies</strong><small>University of Illinois Chicago</small></span></div>
          <div className="credential-chip"><span><strong>Professional development</strong><small>Continuing learning in language, teaching, and design</small></span></div>
          <div className="credential-chip credential-chip-text"><span><strong>Additional qualifications</strong><small>CELTA · Teaching license · Child protection</small></span></div>
        </div>
      </section>

      <section className="teacher-story" aria-labelledby="teacher-title">
        <div className="teacher-story-heading" data-reveal>
          <div>
            <p className="project-count">01 / Lead flagship</p>
            <p className="project-kicker">Mentor-text planning workspace</p>
          </div>
          <p className="teacher-need">A recurring teacher need</p>
        </div>

        <div className="teacher-story-copy" data-reveal>
          <h2 id="teacher-title">Build the text your students need to see.</h2>
          <div>
            <p className="project-problem">
              Teachers need mentor texts that model the exact language work in front of their
              students—not another generic passage that happens to be at the right level.
            </p>
            <p className="project-summary">
              LinguaFlow Teacher turns instructional decisions into an editable mentor text. Start
              with context, Key Language Use, and language features; leave with a purposeful text and
              the teaching move that makes it useful.
            </p>
          </div>
        </div>

        <LiveTeacherApp />

        <div className="teacher-actions" data-reveal>
          <p>
            <span>Not text generation.</span>
            Instructional design made visible.
          </p>
          <a className="button button-light" href="https://www.readlinguaflow.com/">
            Open LinguaFlow Teacher <Arrow />
          </a>
        </div>
      </section>

      <section className="scaffold-story" aria-labelledby="scaffold-title">
        <div className="scaffold-heading" data-reveal>
          <p className="project-count">03 / Live beta</p>
          <p className="project-kicker">AI-assisted planning workspace</p>
          <h2 id="scaffold-title">From rough ideas to teachable language support.</h2>
          <p className="project-summary">
            Scaffold is a live beta workspace that turns teacher input into structured lesson support
            that can be reviewed, adapted, saved, and printed.
          </p>
          <a className="button button-light" href="https://lenguajelabs-design.github.io/scaffold" target="_blank" rel="noreferrer">
            Try the Scaffold beta ↗
          </a>
        </div>
      </section>

      <section className="family-story" aria-labelledby="family-title">
        <div className="family-story-top">
          <div className="family-story-copy" data-reveal>
            <p className="project-count">02 / Flagship story</p>
            <p className="project-kicker">Research → Family understanding</p>
            <h2 id="family-title">From scores to shared understanding.</h2>
            <p className="project-problem">
              Language data was being used, but its meaning was not always clear to the families and
              educators supporting multilingual learners.
            </p>
            <p className="project-summary">
              My 2026 action research investigated that gap. It led to My Multilingual Family, a guide
              that explains language development clearly and gives families practical ways to support
              the journey.
            </p>
            <a className="button button-ink" href="#family-preview">
              Follow the story <Arrow direction="down" />
            </a>
          </div>

          <div className="research-orbit" data-reveal aria-label="Research to product pathway">
            <div className="research-ring" aria-hidden="true" />
            <div className="research-core">
              <span>Problem of practice</span>
              <strong>Clarity</strong>
            </div>
            <span className="research-node research-node-a">Action research</span>
            <span className="research-node research-node-b">Family guide</span>
            <span className="research-node research-node-c">Family action</span>
          </div>
        </div>

        <div className="family-product" id="family-preview">
          <LiveFamilyGuide />
          <div className="evidence-card" data-reveal>
            <p className="evidence-label">Growing through educator networks</p>
            <h3>Useful enough to pass along.</h3>
            <p className="evidence-summary">
              Educators have shared the guide with their own LinkedIn networks, extending it beyond
              the people it was first shown to.
            </p>
            <p className="evidence-summary">
              Teachers in different countries are passing it along as a practical way to make
              multilingual development easier for families to understand.
            </p>
            <div className="evidence-signals" aria-label="Signals of reach">
              <span>Teacher shared</span>
              <span>Across countries</span>
            </div>
            <small>Qualitative reach signal; public share counts are not presented.</small>
          </div>
        </div>

        <div className="family-actions" data-reveal>
          <p>
            <span>Explain the why.</span>
            Make the next helpful action obvious.
          </p>
          <div>
            <a href="https://www.mymultilingualfamily.com/">Visit the family guide ↗</a>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading" data-reveal>
          <div>
            <p>Experience & credentials</p>
            <h2 id="experience-title">
              Classroom depth.
              <em> Systems perspective.</em>
            </h2>
          </div>
          <div>
            <p>
              More than 15 years across international education, teacher development, language
              instruction, and multilingual-learner support in China and South Korea.
            </p>
            <a className="button button-ink" href={`${import.meta.env.BASE_URL}resources/federico-orozco-resume.pdf`}>
              Download résumé <Arrow />
            </a>
          </div>
        </div>

        <div className="experience-grid">
          <div className="role-list" data-reveal>
            <p className="experience-column-label">Selected experience</p>
            <article className="role-item role-item-current">
              <div className="role-mark role-mark-text">SSIS</div>
              <div>
                <span>2022 — present · China</span>
                <h3>EAL Specialist Teacher</h3>
                <strong>Suzhou Singapore International School</strong>
                <p>Supports multilingual learners, collaborates with classroom teachers, and strengthens family communication and school-wide EAL systems.</p>
              </div>
            </article>
            <article className="role-item">
              <div className="role-mark">
                <img src={`${import.meta.env.BASE_URL}assets/credentials/kyungbok.png`} alt="Kyungbok Elementary School" />
              </div>
              <div>
                <span>2019 — 2022 · South Korea</span>
                <h3>5th Grade English Teacher</h3>
                <strong>Kyungbok Elementary</strong>
                <p>Designed communicative, task-based instruction across reading, writing, speaking, and listening.</p>
              </div>
            </article>
            <article className="role-item">
              <div className="role-mark">
                <img src={`${import.meta.env.BASE_URL}assets/credentials/smoe.png`} alt="Seoul Metropolitan Office of Education" />
              </div>
              <div>
                <span>2011 — 2019 · South Korea</span>
                <h3>Head Teacher Trainer</h3>
                <strong>Seoul Metropolitan Office of Education</strong>
                <p>Designed research-based professional learning, coached teachers, built training curricula, and mentored new trainer recruits.</p>
              </div>
            </article>
          </div>

          <div className="credential-list" data-reveal>
            <p className="experience-column-label">Education & professional learning</p>
            <article>
              <div className="credential-logo"><img src={`${import.meta.env.BASE_URL}assets/credentials/nsu.png`} alt="Nova Southeastern University" /></div>
              <div><span>2012 — 2014</span><h3>Master of Arts in TEFL</h3><p>Nova Southeastern University</p></div>
            </article>
            <article>
              <div className="credential-logo"><img src={`${import.meta.env.BASE_URL}assets/credentials/uic.png`} alt="University of Illinois Chicago" /></div>
              <div><span>2000 — 2005</span><h3>Bachelor’s Degree, Italian Studies</h3><p>University of Illinois Chicago</p></div>
            </article>
            <article>
              <div className="credential-logo"><img src={`${import.meta.env.BASE_URL}assets/credentials/harvard-gse.png`} alt="Harvard Graduate School of Education" /></div>
              <div><span>Professional development</span><h3>Continuing learning in language, teaching, and design</h3><p>Ongoing professional learning</p></div>
            </article>
            <div className="qualification-list" aria-label="Additional qualifications">
              <span>CELTA</span>
              <span>Washington, DC teaching license</span>
              <span>Child protection</span>
              <span>Children’s mental wellbeing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-portrait" data-reveal>
          <img
            src={`${import.meta.env.BASE_URL}assets/federico-orozco-headshot.jpeg`}
            alt="Federico Orozco"
            width="800"
            height="800"
          />
          <span aria-hidden="true">FO.</span>
        </div>
        <div className="about-copy" data-reveal>
          <p className="about-kicker">About Federico</p>
          <h2 id="about-title">Educator first. Product builder because the work demanded it.</h2>
          <p>
            I’m an EAL educator and multilingual-learning designer with more than 15 years across
            international classrooms, teacher development, family communication, and learning systems.
          </p>
          <p>
            I build practical tools when an important classroom need is clear but the next helpful
            action is not. The work connects pedagogy, research, careful language, and product design.
          </p>
          <div className="about-links">
            <a className="button button-light" href="mailto:forozc1@gmail.com">
              Start a conversation <Arrow />
            </a>
            <a href="#top">Back to the beginning ↑</a>
          </div>
        </div>
      </section>

      <footer className="prototype-tail" id="approach">
        <p>Working approach</p>
        <h2>Find the friction. Make the next move visible.</h2>
        <p>
          Each project begins with a recurring problem of practice, then turns research and classroom
          judgment into something people can understand and use.
        </p>
        <a href="mailto:forozc1@gmail.com">forozc1@gmail.com ↗</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
