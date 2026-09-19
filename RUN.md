# Preview and update

## Open immediately

Open `index.html` in your browser. Relative links, local images, styles, and interactions work without a server.

For a local HTTP preview, run this in the extracted `Portfolio` directory:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. Press Ctrl+C in the terminal to stop the server.

## Edit content

1. Edit the relevant JSON file in `content/`.
2. Run the commands below from the `Portfolio` directory using Node.js 20 or newer.
3. Preview the updated HTML and upload all changed files to GitHub.

```sh
npm run build
npm test
```

There is no `npm install` step. Content changes must be rebuilt because visitors receive HTML, not a client-side JSON application. CSS and JavaScript edits in `assets/` take effect directly.

## Git commands for a new local checkout

If uploading through GitHub's web interface, skip this section. Otherwise, create an empty GitHub repository named `Portfolio` and use:

```sh
git init -b main
git add .
git commit -m "Build professional portfolio"
git remote add origin https://github.com/CoderAlpha9/Portfolio.git
git push -u origin main
```

If the GitHub repository already contains commits, clone it first, copy these files into that checkout, inspect `git status`, then commit and push normally. Do not force-push or erase existing history. Keep personal documents and exports out of the repository.

## GitHub Pages settings

Use **Deploy from a branch > main > / (root)**, then Save. Do not choose `/docs`. No workflow file is included or required. The ZIP already contains the generated HTML. Upload the folder's contents, not the ZIP file or the enclosing folder.

The production URL is `https://coderalpha9.github.io/Portfolio/`. Relative internal links also work when previewed locally. If the account or repository name changes later, update the canonical URL in `scripts/build.mjs` and the 404 return-home path, then rebuild.

## Verification included

`npm test` verifies all generated pages and local targets, fragment anchors, image alternative text, one main heading per page, duplicate IDs, privacy-sensitive academic terms, unfinished text, em dashes, and the main text colour contrasts. It does not guarantee the future availability of external websites. LinkedIn may require visitors to sign in.
