import { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function LiveTeacherApp() {
  const [loaded, setLoaded] = useState(false);
  return (
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
      <div className={`live-frame ${loaded ? "is-loaded" : ""}`}>
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
      </div>
    </div>
  );
}

const strategyPathways = [
  { challenge: "Make a text accessible", symbol: "¶", moves: ["Preview key vocabulary with visuals", "Build background knowledge before reading", "Think aloud while reading a text"] },
  { challenge: "Get students talking", symbol: "“", moves: ["Pause for Turn-and-Talk with sentence stems", "Use wait time intentionally", "Teach accountable talk stems"] },
  { challenge: "Teach vocabulary", symbol: "Aa", moves: ["Preview key vocabulary with visuals", "Teach vocabulary using gestures and actions", "Highlight cognates and cross-language connections"] },
  { challenge: "Support writing", symbol: "✎", moves: ["Use oral rehearsal before writing", "Deconstruct a mentor text", "Color-code parts of a paragraph"] },
];

function StrategyPathfinder() {
  const [activePath, setActivePath] = useState(0);
  const pathway = strategyPathways[activePath];

  return (
    <div className="strategy-pathfinder" data-reveal>
      <div className="strategy-challenges">
        <p>Start with the classroom moment</p>
        {strategyPathways.map((item, index) => (
          <button type="button" className={activePath === index ? "is-active" : ""} aria-pressed={activePath === index} onClick={() => setActivePath(index)} key={item.challenge}>
            <span>{item.symbol}</span>
            <strong>{item.challenge}</strong>
            <small>Find useful moves →</small>
          </button>
        ))}
      </div>
      <div className="strategy-results" aria-live="polite">
        <div className="strategy-results-heading" key={pathway.challenge}>
          <span>Three moves to try</span>
          <h3>{pathway.challenge}</h3>
        </div>
        <ol key={`moves-${pathway.challenge}`}>
          {pathway.moves.map((move, index) => (
            <li key={move}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{move}</p>
              <small>{index === 0 ? "Before" : "During"}</small>
            </li>
          ))}
        </ol>
        <a href="https://lenguajelabs-design.github.io/Lingua-Strategies/" target="_blank" rel="noreferrer">Explore all 52 strategies ↗</a>
      </div>
    </div>
  );
}

const ealDeskPaths = [
  { moment: "During a lesson", need: "I need one support now", route: "Quick Tools", description: "Find a sentence frame, scaffold, or response option you can use immediately.", tags: ["Task", "WIDA level", "Response option"] },
  { moment: "Choosing an approach", need: "I know the language need", route: "Strategy Bank", description: "Match a specific reading, writing, or speaking need to a practical teaching move.", tags: ["Language domain", "Learner need", "Teaching move"] },
  { moment: "Planning ahead", need: "I’m planning a workshop", route: "Writing Toolkit", description: "See unit goals, language demands, scaffolds, and differentiation together.", tags: ["Unit goal", "Language demand", "Differentiation"] },
];

function EALDeskPath() {
  const [activePath, setActivePath] = useState(0);
  const path = ealDeskPaths[activePath];
  return (
    <div className="ealdesk-path" data-reveal>
      <div className="ealdesk-paths">
        <p>What do you need today?</p>
        {ealDeskPaths.map((item, index) => (
          <button type="button" className={activePath === index ? "is-active" : ""} aria-pressed={activePath === index} onClick={() => setActivePath(index)} key={item.need}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{item.moment}</small>
            <strong>{item.need}</strong>
          </button>
        ))}
      </div>
      <div className="ealdesk-converge" aria-live="polite">
        <div className="curriculum-fragments" key={`fragments-${path.route}`}>
          {path.tags.map((tag, index) => <span style={{ "--fragment": index } as React.CSSProperties} key={tag}>{tag}</span>)}
        </div>
        <Arrow direction="down" />
        <article key={path.route}>
          <span>One clear path</span>
          <h3>{path.route}</h3>
          <p>{path.description}</p>
          <small>More support is not always better. Start with the one move that helps a learner begin.</small>
        </article>
      </div>
    </div>
  );
}

function ScaffoldTransformation() {
  const [isBuilt, setIsBuilt] = useState(false);
  return (
    <div className={`scaffold-transform ${isBuilt ? "is-built" : ""}`}>
      <div className="scaffold-input">
        <div className="scaffold-window-label"><span>Teacher input</span><small>Rough notes are enough</small></div>
        <div className="scaffold-context"><span>Grade 3</span><span>WIDA 1–2</span><span>Math</span></div>
        <p>Students are comparing fractions with visual models. Include partner talk, key vocabulary, and a quick exit ticket.</p>
        <button type="button" onClick={() => setIsBuilt((value) => !value)}>{isBuilt ? "Show rough notes" : "Build sample scaffold"} <Arrow /></button>
        <small>Planning exemplar · No student information</small>
      </div>
      <div className="scaffold-output" aria-live="polite">
        {!isBuilt ? (
          <div className="scaffold-empty">
            <span>Structured support appears here</span>
            <p>Objectives · vocabulary · sentence frames · lesson sequence · assessment</p>
          </div>
        ) : (
          <article>
            <div className="scaffold-output-head"><span>Editable lesson support</span><strong>Fractions as Fair Shares</strong></div>
            <div><span>Language objective</span><p>Students will name and compare fractions using half, third, and fourth.</p></div>
            <div><span>Key vocabulary</span><p>fraction · equal parts · numerator · denominator</p></div>
            <div><span>Sentence frame</span><p>“This fraction is bigger / smaller because ___.”</p></div>
            <div><span>Teacher move</span><p>Rehearse each comparison orally before writing, then reduce the frame as independence grows.</p></div>
          </article>
        )}
      </div>
    </div>
  );
}

function LiveFamilyGuide() {
  const [loaded, setLoaded] = useState(false);
  return (
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
      <div className={`live-frame ${loaded ? "is-loaded" : ""}`}>
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
      </div>
    </div>
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
          <p>Selected systems</p>
        </div>
        <div data-reveal>
          <h2 id="work-title">Built from the classroom outward.</h2>
          <p>
            The work begins with a teacher trying to make language visible—and grows into practical
            systems for families, classrooms, and schools.
          </p>
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

      <section className="strategies-story" aria-labelledby="strategies-title">
        <div className="strategies-intro" data-reveal>
          <div>
            <p className="project-count">02 / Featured project</p>
            <p className="project-kicker">Multilingual teaching field guide</p>
          </div>
          <h2 id="strategies-title">Know what to do tomorrow.</h2>
          <div>
            <p className="project-problem">Teachers often recognize the classroom challenge before they know which practical language-support move to try next.</p>
            <p className="project-summary">Lingua Strategies organizes 52 research-informed moves around the moment in front of the teacher—without requiring a sign-up or a long professional-learning detour.</p>
          </div>
        </div>
        <StrategyPathfinder />
      </section>

      <section className="family-story" aria-labelledby="family-title">
        <div className="family-story-top">
          <div className="family-story-copy" data-reveal>
            <p className="project-count">03 / Flagship story</p>
            <p className="project-kicker">Research → Family understanding → Everyday action</p>
            <h2 id="family-title">From scores to shared understanding.</h2>
            <p className="project-problem">
              Language data was being used, but its meaning was not always clear to the families and
              educators supporting multilingual learners.
            </p>
            <p className="project-summary">
              My 2026 action research investigated that gap. It led to My Multilingual Family, a guide
              that explains language development clearly, and then to LinguaFlow Family, which turns
              that understanding into practical family action.
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
            <span className="research-node research-node-c">Everyday action</span>
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
            <a href="https://lenguajelabs-design.github.io/LinguaFlow-Family/#/today">
              Explore LinguaFlow Family ↗
            </a>
          </div>
        </div>
      </section>

      <section className="ealdesk-story" aria-labelledby="ealdesk-title">
        <div className="ealdesk-heading" data-reveal>
          <div>
            <p className="project-count">04 / Featured project</p>
            <p className="project-kicker">Elementary EAL curriculum system</p>
          </div>
          <h2 id="ealdesk-title">Make the next teaching move clearer.</h2>
          <div>
            <p className="project-problem">Teachers need to connect literacy goals, language demands, learner proficiency, and practical scaffolds—but that knowledge is often spread across disconnected documents and tools.</p>
            <p className="project-summary">EALDesk brings workshop planning, WIDA-informed supports, assessment guidance, translation practices, and classroom strategies into one teacher-facing system.</p>
          </div>
        </div>
        <EALDeskPath />
        <div className="ealdesk-actions" data-reveal>
          <p><span>Read the task. Name the language need.</span> Choose one purposeful support.</p>
          <a className="button button-ink" href="https://lenguajelabs-design.github.io/EALDesk-Elementary/" target="_blank" rel="noreferrer">Open EALDesk <Arrow /></a>
        </div>
      </section>

      <section className="scaffold-story" aria-labelledby="scaffold-title">
        <div className="scaffold-heading" data-reveal>
          <div>
            <p className="project-count">05 / Product experiment</p>
            <p className="project-kicker">AI-assisted planning workspace</p>
            <span className="beta-badge">Beta</span>
          </div>
          <h2 id="scaffold-title">From rough ideas to teachable language support.</h2>
          <div>
            <p className="project-problem">A teacher may know the content goal but still need time and specialist knowledge to design explicit language objectives, vocabulary, sentence frames, and differentiated participation.</p>
            <p className="project-summary">Scaffold organizes teacher input into structured lesson support that can be reviewed, adapted, saved, and printed.</p>
          </div>
        </div>
        <ScaffoldTransformation />
        <div className="scaffold-actions" data-reveal>
          <p><span>Technology serves judgment.</span> The teacher still decides what fits the learners, curriculum, and classroom.</p>
          <div><span>Beta · Actively being refined</span><a href="https://lenguajelabs-design.github.io/scaffold/" target="_blank" rel="noreferrer">Try Scaffold Beta ↗</a></div>
        </div>
      </section>

      <section className="focused-tools" aria-labelledby="focused-title">
        <div className="focused-heading" data-reveal>
          <div><p>Supporting tool</p><h2 id="focused-title">Smaller systems. Specific moments.</h2></div>
          <p>Some problems call for a broad platform. Others need one carefully designed workflow that helps an educator move forward.</p>
        </div>
        <article className="compass-card" data-reveal>
          <div className="compass-copy">
            <span>Classroom Support Compass</span>
            <h3>Move from an observed need to a practical first response.</h3>
            <p>Compass organizes classroom concerns into clear support areas, universal strategies to try first, and more targeted options when additional support is needed.</p>
            <a href="https://compass-lenguajelab.replit.app/ssis/" target="_blank" rel="noreferrer">Open current prototype ↗</a>
          </div>
          <div className="compass-flow" aria-label="Example support pathway">
            <div className="compass-observation"><span>What are you seeing?</span><strong>Difficulty with phonics or decoding</strong></div>
            <Arrow direction="down" />
            <div className="compass-area"><span>Support area</span><strong>Literacy</strong></div>
            <div className="compass-tiers">
              <div><span>Tier 1 · Universal</span><p>Audio and read-along books</p><p>Visual writing supports</p></div>
              <div><span>Tier 2 · Targeted</span><p>Small-group phonics</p><p>Multisensory practice</p></div>
            </div>
          </div>
        </article>
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
              <div><span>2022 — 2025</span><h3>Universal Design for Learning</h3><p>Explore · Apply · Differentiated Instruction Made Practical</p></div>
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
