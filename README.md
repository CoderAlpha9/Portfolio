# Jaiwanth Karthi Portfolio

Static Astro portfolio configured specifically for the GitHub repository:

```text
Portfolio
```

and the GitHub Pages project URL:

```text
https://coderalpha9.github.io/Portfolio/
```

The site is built into the `docs/` folder so GitHub Pages can publish it directly from the `main` branch. No GitHub Actions workflow is required.

## Local development

Install dependencies once:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Because this repository is configured with the `/Portfolio/` base path, Astro will serve the project under that path locally.

## Build the deployable site

Run:

```bash
npm run build
```

Astro writes the complete static site to:

```text
docs/
```

Commit both the source files and the generated `docs/` folder.

## GitHub Pages setup without workflows

Open the `Portfolio` repository on GitHub.

Go to:

```text
Settings -> Pages
```

Under `Build and deployment` choose:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

Click `Save`.

GitHub will publish:

```text
https://coderalpha9.github.io/Portfolio/
```

Whenever you change the website:

```bash
npm run build
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will serve the newly committed `docs/` output.

## Important

Do not select `/ (root)` as the Pages folder for this Astro source repository. The source files are not directly browser-ready. Use `/docs`, which contains the built static HTML, CSS and JavaScript.

The file:

```text
public/.nojekyll
```

is copied into `docs/` during each build so GitHub Pages serves Astro's `_astro` asset directory correctly.

## Edit content

Most public content is in:

```text
src/data/profile.ts
src/data/achievements.ts
src/data/experience.ts
src/data/projects.ts
src/data/research.ts
src/data/posts.ts
```

Optional images are stored under `public/media/`.

No image placeholder is rendered when an item has no image.

## Contact fields

Email and phone are intentionally blank until you add verified values in:

```text
src/data/profile.ts
```

The site automatically hides empty contact fields.

## LinkedIn update helper

You can stage selected information from an extracted LinkedIn data export with:

```bash
npm run sync:linkedin -- /path/to/extracted-linkedin-export
```

The script writes private staging data under:

```text
linkedin-export/
```

That folder is ignored by Git. Nothing is published automatically.
