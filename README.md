# Jaiwanth Karthi M K | Portfolio

A fully static, multi-page portfolio, written from scratch for the GitHub repository **Portfolio**

## Link

Pages link: `https://coderalpha9.github.io/Portfolio/`

## Structure

| Path | Purpose |
| --- | --- |
| `index.html`, `about.html`, `achievements.html`, `experience.html`, `projects.html`, `research.html`, `posts.html` | Complete, pre-rendered pages |
| `404.html` | Custom missing-page response |
| `assets/` | Styles, interaction code, favicon, and supplied profile photograph |
| `content/` | Editable profile, work, projects, achievements, research, and posts |
| `scripts/build.mjs` | Dependency-free static page generator |
| `scripts/check.mjs` | Internal link, asset, text, accessibility markup, and colour-contrast checks |
| `scripts/import-linkedin.py` | Optional, review-first import of post links from your own LinkedIn archive |
| `.nojekyll` | Keeps the repository as plain static assets |
| `sitemap.xml` | Public page index |

Node.js 20 or newer is needed only if you edit content and regenerate the pages. There are no npm dependencies and no external font, analytics, or UI-library requests. See `RUN.md` for preview and editing steps.

## LinkedIn updates

To import new posts, export LinkedIn data and preview the `Shares.csv` file with:

```sh
python scripts/import-linkedin.py /path/to/Shares.csv
```

This command does not change files. After reviewing the proposed entries, rerun with `--apply`, inspect `content/posts-import.json`, and regenerate. Curated entries in `content/posts.json` take precedence. The importer requires a canonical post URL and a valid date, skips rows containing academic-score terms, strips em dashes, and never copies the archive into the site. Keep exports outside the repository or in the ignored `private/` directory. This importer covers posts only; update other sections in their JSON files.

## Ownership

Personal content and the supplied photograph belong to their owner. No third-party template, remote fonts, stock photographs, or copied website code are included. No open-source licence is implied for personal content or images.
