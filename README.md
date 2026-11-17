# Federico Orozco — portfolio

EAL Specialist · Learning Designer.

I design practical tools, teacher learning, and family resources, many of them AI-powered, that help schools serve multilingual learners.

## Local review

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4182
```

Build with `npm run build`. The current revision is on `codex/portfolio-feedback`; changes to this branch do not deploy GitHub Pages.

## Structure

The page contains a hero, proof strip, point of view, five project rows, leadership evidence, capstone, approach, experience and credentials, About/contact, and footer.

- `src/main.tsx`: approved copy, project links, experience, course data, and the centralized contact email.
- `src/styles.css`: shared containers, fonts, palette, typography, and component styling.
- `src/compact-ui.css`: tablet, mobile, and reduced-motion rules.
- `public/fonts/`: self-hosted Inter and Source Serif 4 with OFL licenses.
- `public/assets/resources/`: teacher introductions and the capstone.
- The full CV is kept outside this repository and offered by email on request; no résumé PDF is published.

Read [AGENTS.md](AGENTS.md) for ongoing design/content rules and [the revision review](docs/revision-review.md) for verification and outstanding content.

Historical design phases remain under `docs/` for reference; they are not current copy specifications.
