import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./compact-ui.css";

type EcosystemKey = "students" | "families" | "teachers" | "systems";
type Language = "en" | "es" | "zh" | "ko";

const languageLabels: Record<Language, string> = {
  en: "EN",
  es: "ES",
  zh: "中文",
  ko: "한국어",
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    work: "Work", leadership: "Leadership", approach: "Approach", about: "About", conversation: "Start a conversation",
    eyebrow: "English-language learning leader · EAL educator", hero: "Building stronger systems for multilingual learners.",
    intro: "I connect classroom practice, teacher development, family partnership, and practical tools so English-language learning becomes more coherent across a school.",
    explore: "Explore the work", approachLink: "See my approach", meet: "Meet the person behind the work", proof: "15+ years across international classrooms, teacher development, family communication, and multilingual learning systems.",
    point: "Multilingual learners are not behind. They are building language, identity, confidence, and academic access at the same time.", pointBody: "Good support does not simplify the learner. It makes the path into rigorous learning more visible—and gives the people around that learner clearer ways to help.",
    leadershipTitle: "Coherence across language, learning, and people.", leadershipBody: "I help schools make the needs of multilingual learners visible—and turn that visibility into shared practice, stronger support, and clearer next steps.",
    research: "Research & capstone", capstoneTitle: "From scores to shared understanding.", capstoneBody: "An action-research project developed through the Multilingual Learning Research Center, translating WIDA language-development information into a clearer resource for teachers, families, and school leaders.", read: "Read the capstone", visit: "Visit My Multilingual Family",
    selected: "Selected leadership work", workTitle: "Ideas made useful for real school communities.", workBody: "These projects show how I translate language-learning insight into tools, guidance, and shared practice for teachers and families.",
    caseStudies: "Leadership case studies", caseTitle: "Five projects, five ways to strengthen language-learning systems.", caseBody: "Explore the work by the leadership contribution it represents.", credentials: "Credentials", credentialsTitle: "Classroom depth. Systems perspective.", aboutTitle: "English-language leader. Builder of coherent systems.",
  },
  es: {
    work: "Trabajo", leadership: "Liderazgo", approach: "Enfoque", about: "Sobre mí", conversation: "Iniciar una conversación",
    eyebrow: "Líder de aprendizaje del inglés · Educador EAL", hero: "Construyo sistemas más sólidos para estudiantes multilingües.",
    intro: "Conecto la práctica en el aula, el desarrollo docente, la colaboración con las familias y herramientas prácticas para que el aprendizaje del inglés sea más coherente en toda la escuela.", explore: "Explorar el trabajo", approachLink: "Ver mi enfoque", meet: "Conoce a la persona detrás del trabajo", proof: "Más de 15 años en aulas internacionales, desarrollo docente, comunicación con familias y sistemas de aprendizaje multilingüe.", point: "Los estudiantes multilingües no están atrasados. Están construyendo lenguaje, identidad, confianza y acceso académico al mismo tiempo.", pointBody: "El apoyo adecuado no simplifica al estudiante. Hace más visible el camino hacia un aprendizaje riguroso y ofrece a quienes lo acompañan formas más claras de ayudar.", leadershipTitle: "Coherencia entre lenguaje, aprendizaje y personas.", leadershipBody: "Ayudo a las escuelas a visibilizar las necesidades de los estudiantes multilingües y convertirlas en prácticas compartidas, apoyos más sólidos y próximos pasos claros.", research: "Investigación y proyecto final", capstoneTitle: "De las puntuaciones a la comprensión compartida.", capstoneBody: "Un proyecto de investigación-acción que convierte la información sobre el desarrollo lingüístico en un recurso más claro para docentes, familias y líderes escolares.", read: "Leer el proyecto", visit: "Visitar My Multilingual Family", selected: "Trabajo de liderazgo seleccionado", workTitle: "Ideas útiles para comunidades escolares reales.", workBody: "Estos proyectos muestran cómo convierto ideas sobre el aprendizaje de idiomas en herramientas, orientación y prácticas compartidas.", caseStudies: "Casos de liderazgo", caseTitle: "Cinco proyectos para fortalecer los sistemas de aprendizaje lingüístico.", caseBody: "Explora el trabajo según la contribución de liderazgo que representa.", credentials: "Credenciales", credentialsTitle: "Profundidad en el aula. Perspectiva sistémica.", aboutTitle: "Líder de aprendizaje del inglés. Constructor de sistemas coherentes.",
  },
  zh: {
    work: "项目", leadership: "领导力", approach: "方法", about: "关于我", conversation: "开始交流",
    eyebrow: "英语语言学习领导者 · EAL 教育者", hero: "为多语学习者建立更强的支持系统。", intro: "我连接课堂实践、教师发展、家庭合作与实用工具，让英语语言学习在学校中更加连贯。", explore: "探索我的项目", approachLink: "了解我的方法", meet: "认识项目背后的我", proof: "拥有超过 15 年国际课堂、教师发展、家庭沟通与多语学习系统经验。", point: "多语学习者并不是落后者。他们正在同时建立语言、身份、信心与学术参与能力。", pointBody: "好的支持不会简化学习者，而是让通往严谨学习的路径更加清晰，也让身边的人知道如何提供帮助。", leadershipTitle: "让语言、学习与人形成连贯的系统。", leadershipBody: "我帮助学校看见多语学习者的需求，并将这些需求转化为共同实践、更强的支持与清晰的下一步。", research: "研究与毕业项目", capstoneTitle: "从分数到共同理解。", capstoneBody: "一项行动研究项目，将语言发展信息转化为教师、家庭和学校领导者更容易理解和使用的资源。", read: "阅读项目", visit: "访问 My Multilingual Family", selected: "精选领导力工作", workTitle: "让想法服务于真实的学校社区。", workBody: "这些项目展示了我如何把语言学习洞见转化为工具、指导与共同实践。", caseStudies: "领导力案例", caseTitle: "五个项目，五种强化语言学习系统的方式。", caseBody: "按项目所体现的领导力贡献浏览这些工作。", credentials: "资历", credentialsTitle: "深厚的课堂经验。系统性的视角。", aboutTitle: "英语语言学习领导者。连贯系统的建设者。",
  },
  ko: {
    work: "프로젝트", leadership: "리더십", approach: "접근 방식", about: "소개", conversation: "대화 시작하기",
    eyebrow: "영어 학습 리더 · EAL 교육자", hero: "다언어 학습자를 위한 더 강한 시스템을 만듭니다.", intro: "교실 실천, 교사 성장, 가족 협력, 실용적인 도구를 연결하여 학교 전체의 영어 학습을 더욱 일관되게 만듭니다.", explore: "프로젝트 보기", approachLink: "접근 방식 보기", meet: "이 일을 만든 사람 만나기", proof: "국제 교실, 교사 개발, 가족 소통, 다언어 학습 시스템 분야에서 15년 이상의 경험을 쌓았습니다.", point: "다언어 학습자는 뒤처진 것이 아닙니다. 그들은 언어, 정체성, 자신감, 학업 참여를 동시에 만들어 가고 있습니다.", pointBody: "좋은 지원은 학습자를 단순화하지 않습니다. 깊이 있는 학습으로 가는 길을 더 분명하게 만들고, 주변 사람들이 도울 수 있는 방법을 보여 줍니다.", leadershipTitle: "언어, 학습, 사람을 하나의 시스템으로 연결합니다.", leadershipBody: "학교가 다언어 학습자의 필요를 분명히 보고, 이를 공동의 실천과 더 강한 지원, 명확한 다음 단계로 바꾸도록 돕습니다.", research: "연구 및 캡스톤", capstoneTitle: "점수에서 공동의 이해로.", capstoneBody: "언어 발달 정보를 교사, 가족, 학교 리더가 더 쉽게 이해하고 활용할 수 있는 자료로 바꾼 실행 연구 프로젝트입니다.", read: "프로젝트 읽기", visit: "My Multilingual Family 방문", selected: "주요 리더십 프로젝트", workTitle: "실제 학교 공동체에 도움이 되는 아이디어.", workBody: "이 프로젝트들은 언어 학습에 대한 통찰을 도구, 안내, 공동 실천으로 연결하는 방식을 보여 줍니다.", caseStudies: "리더십 사례", caseTitle: "언어 학습 시스템을 강화하는 다섯 가지 프로젝트.", caseBody: "각 프로젝트가 보여 주는 리더십 기여를 기준으로 살펴보세요.", credentials: "자격", credentialsTitle: "교실의 깊이. 시스템적 관점.", aboutTitle: "영어 학습 리더. 일관된 시스템의 설계자.",
  },
};

const extraTranslations: Record<Language, Record<string, string>> = {
  en: {
    students: "Students", families: "Families", teachers: "Teachers", systems: "Systems", participate: "Participate", understand: "Understand", act: "Act", connect: "Connect",
    program: "Program coherence", teacherDevelopment: "Teacher development", familyPartnership: "Family partnership", evidence: "Evidence into action", leadershipContribution: "Leadership contribution", openProject: "Open project", live: "Live", liveBeta: "Live beta", teachersAudience: "Teachers", familiesAudience: "Families", aboutFederico: "About Federico",
  },
  es: {
    students: "Estudiantes", families: "Familias", teachers: "Docentes", systems: "Sistemas", participate: "Participar", understand: "Comprender", act: "Actuar", connect: "Conectar",
    program: "Coherencia del programa", teacherDevelopment: "Desarrollo docente", familyPartnership: "Colaboración familiar", evidence: "De la evidencia a la acción", leadershipContribution: "Contribución de liderazgo", openProject: "Abrir proyecto", live: "Activo", liveBeta: "Beta activa", teachersAudience: "Docentes", familiesAudience: "Familias", aboutFederico: "Sobre Federico",
  },
  zh: {
    students: "学生", families: "家庭", teachers: "教师", systems: "系统", participate: "参与", understand: "理解", act: "行动", connect: "连接",
    program: "项目连贯性", teacherDevelopment: "教师发展", familyPartnership: "家庭合作", evidence: "从证据到行动", leadershipContribution: "领导力贡献", openProject: "打开项目", live: "上线", liveBeta: "测试版", teachersAudience: "教师", familiesAudience: "家庭", aboutFederico: "关于 Federico",
  },
  ko: {
    students: "학생", families: "가족", teachers: "교사", systems: "시스템", participate: "참여", understand: "이해", act: "실천", connect: "연결",
    program: "프로그램의 일관성", teacherDevelopment: "교사 성장", familyPartnership: "가족 협력", evidence: "근거에서 실천으로", leadershipContribution: "리더십 기여", openProject: "프로젝트 열기", live: "운영 중", liveBeta: "베타 운영", teachersAudience: "교사", familiesAudience: "가족", aboutFederico: "Federico 소개",
  },
};

function useSiteLanguage() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("site-language") as Language) || "en");
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-Hans" : language; localStorage.setItem("site-language", language); }, [language]);
  return { language, setLanguage, t: (key: string) => extraTranslations[language][key] || translations[language][key] || extraTranslations.en[key] || translations.en[key] || key };
}

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

function Ecosystem({ t }: { t: (key: string) => string }) {
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

      <div className="ecosystem-center" aria-live="polite">
        <span>Language access</span>
        <strong>{activeNode.verb}</strong>
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
            <strong>{t(node.id)}</strong>
            <small>{t(node.verb.toLowerCase())}</small>
          </span>
        </button>
      ))}

      <p className="ecosystem-thought" aria-live="polite">
        <span>{t(activeNode.id)}</span>
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

const portfolioApps = [
  { name: "LinguaFlow Teacher", status: "Live", audience: "Teachers", description: "Mentor texts and language analysis for purposeful classroom planning.", href: "https://www.readlinguaflow.com/", asset: "lingua-icon.png", logoClass: "app-card-logo", image: "photography/classroom-teacher-students.jpg", action: "Open project", download: "resources/linguaflow-teacher-introduction.pdf" },
  { name: "My Multilingual Family", status: "Live", audience: "Families", description: "A clearer guide to language development for families.", href: "https://www.mymultilingualfamily.com/", asset: "mmlf-logo.svg", logoClass: "app-card-logo app-card-logo-square", image: "photography/family-reading-together.jpg", action: "Open project" },
  { name: "Scaffold", status: "Live beta", audience: "Teachers", description: "Turn rough teacher input into structured language support.", href: "https://lenguajelabs-design.github.io/scaffold", asset: "scaffold-lockup.png", logoClass: "app-card-logo app-card-logo-light", image: "photography/classroom-teacher-students.jpg", action: "Open beta", download: "resources/scaffold-teacher-introduction.pdf" },
  { name: "The Language Support Toolkit", status: "Live", audience: "Teachers", description: "Practical language supports and adaptable AI prompts for everyday lessons.", href: "https://lenguajelabs-design.github.io/Language-Support-Toolkit./#/", asset: "language-support-toolkit-logo.png", logoClass: "app-card-logo app-card-logo-toolkit", image: "photography/classroom-teacher-students.jpg", action: "Explore toolkit", download: "resources/language-support-toolkit-teacher-introduction.pdf" },
  { name: "Classroom Compass", status: "Live", audience: "Teachers", description: "A practical co-created guide for navigating classroom decisions.", href: "https://lenguajelabs-design.github.io/classroom-compass/", asset: "https://lenguajelabs-design.github.io/classroom-compass/classroom-compass-mark.svg", logoClass: "app-card-logo app-card-logo-square", image: "photography/classroom-teacher-students.jpg", action: "Open project" },
];

const leadershipContributions = [
  "Make instructional decisions visible.",
  "Strengthen family understanding and partnership.",
  "Structure teacher planning and language support.",
  "Turn language demands into practical classroom support.",
  "Co-create practical classroom guidance.",
];

function LeadershipCaseStudies({ t }: { t: (key: string) => string }) {
  return (
    <div className="case-study-list" aria-label="Leadership case studies">
      {portfolioApps.map((app, index) => (
        <div className="case-study-row" key={app.name}>
          <span className="case-study-identity">
            <span className={`case-study-logo ${app.logoClass}`}>
              <img src={app.asset.startsWith("http") ? app.asset : `${import.meta.env.BASE_URL}assets/${app.asset}`} alt={`${app.name} logo`} />
            </span>
            <span>
              <strong>{app.name}</strong>
              <small><i className={app.status === "Live beta" ? "is-beta" : ""} />{app.status === "Live beta" ? t("liveBeta") : t("live")} <b>·</b> {app.audience === "Teachers" ? t("teachersAudience") : t("familiesAudience")}</small>
            </span>
          </span>
          <span className="case-study-contribution"><small>{t("leadershipContribution")}</small><span>{leadershipContributions[index]}</span></span>
          <span className="case-study-action">
            <a href={app.href}>{t("openProject")} <b aria-hidden="true">↗</b></a>
            {app.download && <a className="case-study-download" href={`${import.meta.env.BASE_URL}assets/${app.download}`} download>Teacher introduction ↓</a>}
          </span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const { language, setLanguage, t } = useSiteLanguage();
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
            <a href="#work">{t("work")}</a>
            <a href="#leadership">{t("leadership")}</a>
            <a href="#approach">{t("approach")}</a>
            <a href="#about">{t("about")}</a>
          </nav>
          <div className="language-switcher" aria-label="Choose language">
            {(["en", "es", "zh", "ko"] as Language[]).map((option) => (
              <button key={option} type="button" className={language === option ? "is-active" : ""} aria-pressed={language === option} onClick={() => setLanguage(option)}>
                {languageLabels[option]}
              </button>
            ))}
          </div>
          <a className="header-contact" href="mailto:forozc1@gmail.com">
            <span className="contact-long">{t("conversation")}</span>
            <span className="contact-short">Email</span>
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{t("eyebrow")}</p>
            <h1 id="hero-title">
              {t("hero").split(" ").slice(0, 3).join(" ")} <span>{t("hero").split(" ").slice(3).join(" ")}</span>
            </h1>
            <p className="hero-intro">
              {t("intro")}
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">
                {t("explore")} <Arrow direction="down" />
              </a>
              <a className="text-link text-link-light" href="#approach">
                {t("approachLink")} <span aria-hidden="true">↗</span>
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
                <small>{t("meet")}</small>
                <strong>Federico Orozco</strong>
                <em>Educator · Program thinker · Learning designer</em>
              </span>
              <b aria-hidden="true">↘</b>
            </a>
            <p className="hero-proof">
              {t("proof")}
            </p>
          </div>

          <Ecosystem t={t} />
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
            {t("point")}
          </h2>
          <p>
            {t("pointBody")}
          </p>
        </div>
        <p className="point-transition" data-reveal>
          Each project begins with a recurring point of friction.
          <Arrow direction="down" />
        </p>
      </section>

      <section className="leadership-signal" id="leadership" aria-labelledby="leadership-title">
        <div className="section-index" data-reveal>
          <span>02</span>
          <p>Leadership focus</p>
        </div>
        <div className="leadership-intro" data-reveal>
          <h2 id="leadership-title">{t("leadershipTitle")}</h2>
          <p>{t("leadershipBody")}</p>
        </div>
        <div className="leadership-pillars" data-reveal>
          <article><span>01</span><h3>{t("program")}</h3><p>Connect language support across classrooms, grade levels, and the wider school experience.</p></article>
          <article><span>02</span><h3>{t("teacherDevelopment")}</h3><p>Design practical professional learning that helps teachers notice language and act on it.</p></article>
          <article><span>03</span><h3>{t("familyPartnership")}</h3><p>Make language development easier for families to understand, discuss, and support.</p></article>
          <article><span>04</span><h3>{t("evidence")}</h3><p>Use learner needs, classroom insight, and research to guide thoughtful decisions.</p></article>
        </div>
      </section>

      <section className="capstone-section" id="research" aria-labelledby="capstone-title">
        <div className="section-index" data-reveal>
          <span>03</span>
          <p>{t("research")}</p>
        </div>
        <div className="capstone-layout" data-reveal>
          <div className="capstone-copy">
            <p className="section-index-label">MLRC Action Research Capstone</p>
            <h2 id="capstone-title">{t("capstoneTitle")}</h2>
            <p>{t("capstoneBody")}</p>
            <div className="capstone-actions">
              <a href="/assets/resources/suzhou-singapore-mlrc-capstone.pdf" download>
                {t("read")} <span aria-hidden="true">↓</span>
              </a>
              <a href="https://www.mymultilingualfamily.com/" target="_blank" rel="noreferrer">
                {t("visit")} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="capstone-meta">
            <span>Research in practice</span>
            <strong>Making language-development information easier to understand and use.</strong>
            <small>MLRC Action Research Capstone · Suzhou Singapore International School</small>
          </div>
        </div>
      </section>

      <section className="work-intro" id="work" aria-labelledby="work-title">
        <div className="section-index section-index-dark" data-reveal>
          <span>03</span>
          <p>{t("selected")}</p>
        </div>
        <div data-reveal>
          <h2 id="work-title">{t("workTitle")}</h2>
          <p>{t("workBody")}</p>
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
            <p className="section-index-label">{t("caseStudies")}</p>
            <h2 id="directory-title">{t("caseTitle")}</h2>
          </div>
          <p>{t("caseBody")}</p>
        </div>
        <LeadershipCaseStudies t={t} />
      </section>

      <section className="compact-credentials" aria-labelledby="credentials-title">
        <div className="credentials-heading">
          <p className="section-index-label">{t("credentials")}</p>
          <h2 id="credentials-title">{t("credentialsTitle")}</h2>
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
          <p className="about-kicker">{t("aboutFederico")}</p>
          <h2 id="about-title">{t("aboutTitle")}</h2>
          <p>
            I’m an English-language learning leader and EAL educator with more than 15 years across
            international classrooms, teacher development, family communication, and learning systems.
          </p>
          <p>
            I connect pedagogy, research, careful language, and practical design to help schools make
            multilingual learning more coherent for students, teachers, and families.
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
