"""Import post links from an owner's LinkedIn Shares.csv export without replacing curated posts."""
import argparse
import csv
import datetime
import json
import re
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent


def normalise_key(value):
    return re.sub(r"[^a-z]", "", value.lower())


def parse_date(value):
    for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d", "%m/%d/%Y %H:%M:%S", "%m/%d/%Y"):
        try:
            return datetime.datetime.strptime(value.strip(), fmt).date().isoformat()
        except ValueError:
            pass
    try:
        return datetime.datetime.fromisoformat(value.replace("Z", "+00:00")).date().isoformat()
    except ValueError:
        return None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv_file", type=Path, help="Path to your own Shares.csv export")
    parser.add_argument("--apply", action="store_true", help="Save reviewed candidates to content/posts-import.json")
    args = parser.parse_args()
    curated = json.loads((ROOT / "content/posts.json").read_text(encoding="utf-8"))
    output = ROOT / "content/posts-import.json"
    existing = json.loads(output.read_text(encoding="utf-8")) if output.exists() else []
    known = {item["url"] for item in curated + existing}
    candidates = []
    skipped = 0
    with args.csv_file.open(encoding="utf-8-sig", newline="") as source:
        reader = csv.DictReader(source)
        for row in reader:
            fields = {normalise_key(k): (v or "").strip() for k, v in row.items() if k}
            url = fields.get("sharelink") or fields.get("shareurl") or fields.get("url") or ""
            parsed = urlparse(url)
            if parsed.scheme != "https" or parsed.hostname not in {"www.linkedin.com", "linkedin.com"} or not parsed.path.startswith(("/posts/", "/feed/update/")):
                skipped += 1
                continue
            url = parsed._replace(query="", fragment="").geturl()
            body = fields.get("sharecommentary") or fields.get("commentary") or fields.get("text") or ""
            date = parse_date(fields.get("date") or fields.get("sharedate") or "")
            if not date or not body or re.search(r"\b(cgpa|gpa|percentile|grades?|marks?|scores?)\b", body, re.I):
                skipped += 1
                continue
            if url in known:
                continue
            body = body.replace(chr(0x2014), ". ")
            body = re.sub(r"https?://\S+|#\w+", "", body)
            body = re.sub(r"\s+", " ", body).strip()
            if not body:
                skipped += 1
                continue
            first = re.split(r"(?<=[.!?])\s+", body)[0]
            title = first if len(first) <= 100 else first[:97].rsplit(" ", 1)[0] + "..."
            summary = body if len(body) <= 240 else body[:237].rsplit(" ", 1)[0] + "..."
            candidates.append({"title": title, "date": date, "topic": "Notes", "summary": summary, "url": url})
            known.add(url)
    print(json.dumps(candidates, ensure_ascii=False, indent=2))
    print(f"\n{len(candidates)} new posts; {skipped} rows skipped. Curated entries were preserved.")
    if args.apply:
        output.write_text(json.dumps(existing + candidates, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("Saved content/posts-import.json. Review the text, then run npm run build and npm test.")
    else:
        print("Preview only. Review the candidates before running again with --apply.")


if __name__ == "__main__":
    main()
