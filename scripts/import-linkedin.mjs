import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];

if (!input) {
  console.error("Usage: npm run sync:linkedin -- /path/to/extracted-linkedin-export");
  process.exit(1);
}

const root = path.resolve(input);

if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
  console.error("Expected an extracted LinkedIn export directory.");
  process.exit(1);
}

const allowlist = [
  "Profile.csv",
  "Positions.csv",
  "Education.csv",
  "Projects.csv",
  "Honors.csv",
  "Certifications.csv",
  "Skills.csv",
  "Courses.csv",
  "Languages.csv",
  "Volunteer Experience.csv",
  "Volunteering.csv",
  "Shares.csv",
  "Rich Media.csv"
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (ch === '"') {
      quoted = !quoted;
    } else if (ch === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((ch === "\n" || ch === "\r") && !quoted) {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(cell.trim());
      cell = "";
      if (row.some(Boolean)) rows.push(row);
      row = [];
    } else {
      cell += ch;
    }
  }

  if (cell.length || row.length) {
    row.push(cell.trim());
    if (row.some(Boolean)) rows.push(row);
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map((header) => header.trim());
  return rows.slice(1).map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]))
  );
}

const output = {
  importedAt: new Date().toISOString(),
  source: path.basename(root),
  files: {}
};

for (const fileName of allowlist) {
  const filePath = path.join(root, fileName);
  if (!fs.existsSync(filePath)) continue;

  const raw = fs.readFileSync(filePath, "utf8");
  output.files[fileName] = parseCsv(raw);
}

const destinationDir = path.resolve("linkedin-export");
fs.mkdirSync(destinationDir, { recursive: true });
const destination = path.join(destinationDir, "normalized.json");
fs.writeFileSync(destination, JSON.stringify(output, null, 2));

console.log(`Imported ${Object.keys(output.files).length} allowlisted files.`);
console.log(`Review the normalized staging data at ${destination}`);
console.log("Nothing was published or copied into the website automatically.");
