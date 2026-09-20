# Jaiwanth Karthi | Portfolio

A fully static, multi-page portfolio, written from scratch for the GitHub repository **Portfolio**. Warm paper, emerald, and restrained dark gold. Real content is rendered into HTML, so the site is readable without JavaScript. The only JavaScript enhances mobile navigation and the small neural-network illustration.

## Publish on GitHub Pages

1. Extract this ZIP. Open the enclosed `Portfolio` folder.
2. Upload its **contents** to the root of your GitHub repository named `Portfolio`. `index.html`, `assets`, and the other HTML files must be at the repository root, not inside an extra folder.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/ (root)**. Save.
6. GitHub will publish the site at `https://coderalpha9.github.io/Portfolio/`. Allow a few minutes for the deployment.

No custom workflows, installation, or build step are required to publish the included pages. GitHub itself may show an internal Pages deployment run even with branch deployment. If replacing an older deployment, use this complete tree and set Pages to the root folder; an old `/docs` setting will serve the old site.

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

## Content and privacy

- Content is based on the supplied career information and public LinkedIn profile at `https://www.linkedin.com/in/jaiwanth-karthi/`, with direct project and post links where verified.
- The supplied photograph is the only profile image. It is displayed at a modest size, with no generated portrait or visual placeholders.
- The private resume is not included. Academic scores, grades, marks, and entrance-exam results are not included.
- The contact section contains verified LinkedIn and GitHub links. Email and phone were unavailable, so neither is invented or displayed as an empty field. Add verified contact links in `content/profile.json` if desired, using `mailto:` or `tel:` URLs.
- Exact dates are omitted where the source did not establish them. Professional entries are ordered by relevance to AI and software work, not strictly by date.
- Patent projects are explicitly labelled as work in progress. No grant, application number, published paper, or performance benchmark is invented.
- Empty publications and articles arrays are supported but not rendered. Add actual records when available. Existing project updates are listed under Posts rather than presented as research publications.
- Five canonical post links were independently retrieved for this build. The page also links to the full LinkedIn activity feed. It does not claim to contain all LinkedIn activity.
- New content can include an optional `images` array: each item has `src`, `alt`, `width`, and `height`. Only supplied images render; no missing-image cards appear. Put image assets in `assets/` and use relative paths.
- No old portfolio source code was reused. There is no tracking, contact form, or backend collecting visitor information.

## Design and accessibility

The page hierarchy uses editorial serif headings and system sans-serif body text. Borders and spacing organise content without oversized cards, pill controls, gradients, or heavy animation. Emerald is the functional accent. Dark antique gold `#79591E` is restricted to selected achievement labels and has more than 4.5:1 contrast on both light backgrounds.

All substantive content is available without JavaScript. Navigation and interactive controls support keyboard use, and the neural illustration also supports touch. Reduced-motion preferences are respected. Pages include a skip link, descriptive image text, semantic headings, responsive layouts, canonical metadata, and a print stylesheet.

## LinkedIn updates

There is no automatic scraping or unauthorised LinkedIn synchronisation. To import new posts, export your own LinkedIn data and preview the `Shares.csv` file with:

```sh
python scripts/import-linkedin.py /path/to/Shares.csv
```

This command does not change files. After reviewing the proposed entries, rerun with `--apply`, inspect `content/posts-import.json`, and regenerate. Curated entries in `content/posts.json` take precedence. The importer requires a canonical post URL and a valid date, skips rows containing academic-score terms, strips em dashes, and never copies the archive into the site. Keep exports outside the repository or in the ignored `private/` directory. This importer covers posts only; update other sections in their JSON files.

## Ownership

Personal content and the supplied photograph belong to their owner. No third-party template, remote fonts, stock photographs, or copied website code are included. No open-source licence is implied for personal content or images.
