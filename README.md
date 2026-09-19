# Jaiwanth Karthi Portfolio

A static portfolio built with Astro and TypeScript. It is designed for GitHub Pages and keeps all public content in a small set of typed data files.

## Design goals

- AI, ML and deep learning first
- Software systems, data analytics and full stack work next
- Quantitative research as a supporting area
- Calm dark green visual system
- One interaction-led visual on the homepage
- Separate pages for About, Achievements, Experience, Projects, Research & Writing, and Posts
- Optional media and links with no empty placeholders
- No backend or database

## Run locally

```bash
npm install
npm run dev
```

Astro will print a local URL, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The static site is generated in `dist/`.

## Publish with GitHub Pages

The cleanest setup is a repository named:

```text
CoderAlpha9.github.io
```

Push the repository to the `main` branch. In GitHub, open:

`Settings -> Pages -> Build and deployment -> Source -> GitHub Actions`

The included workflow will build and deploy the site.

If your GitHub username or repository arrangement changes, update `site` in `astro.config.mjs` or set the `SITE_URL` environment variable.

## Edit content

Most content lives in:

```text
src/data/profile.ts
src/data/achievements.ts
src/data/experience.ts
src/data/projects.ts
src/data/research.ts
src/data/posts.ts
```

The UI automatically hides optional images, links, contact fields, and sections when their values are missing.

### Add your email or phone

Open `src/data/profile.ts` and set the relevant values in `contacts`.

Empty values are intentionally not rendered.

### Add an image

Put the file under:

```text
public/media/
```

Then add:

```ts
image: {
  src: "/media/example.webp",
  alt: "Useful description of the image"
}
```

Cards without an image remain fully styled and do not render a placeholder.

### Add links

Content items use a generic link array:

```ts
links: [
  { label: "GitHub", url: "https://github.com/..." },
  { label: "Certificate", url: "https://..." }
]
```

Add only links that are useful to a recruiter or technical reviewer.

## LinkedIn import helper

A conservative import helper is included for future profile updates:

```bash
npm run sync:linkedin -- /path/to/extracted-linkedin-export
```

The script reads only an allowlist of professional profile files if they exist and writes a private staging summary to:

```text
linkedin-export/normalized.json
```

That directory is ignored by Git. The importer never publishes data automatically. Review changes and copy only the information you want into the typed data files.

This is deliberate. It keeps the public portfolio curated and prevents a raw account export from being committed.

## Project structure

```text
src/
  components/
  data/
  layouts/
  lib/
  pages/
  styles/
public/
  media/
.github/
  workflows/
scripts/
```

The site is intentionally small. It does not use a CMS, backend, database, animation library, or component framework.
