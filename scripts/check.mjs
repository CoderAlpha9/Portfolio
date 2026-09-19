import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const htmlFiles = (await readdir(root)).filter(f=>f.endsWith('.html'));
assert.equal(htmlFiles.length, 8, 'Expected seven portfolio pages and a 404 page');
const idsByPage = new Map();
const contentByPage = new Map();
for(const name of htmlFiles) {
  const html=await readFile(path.join(root,name),'utf8');
  contentByPage.set(name,html);
  assert(!html.includes('\u2014'), `${name}: em dash found`);
  assert(!/\b(lorem ipsum|coming soon|todo|your name|placeholder)\b/i.test(html),`${name}: unfinished text`);
  assert(!/\b(CGPA|GPA|percentile)\b/i.test(html),`${name}: private academic data`);
  assert(!/href=["'][^"']*(?:resume|res\.pdf)/i.test(html),`${name}: private resume link`);
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${name}: exactly one H1`);
  assert(html.includes('lang="en"')&&html.includes('name="viewport"'),`${name}: missing document metadata`);
  assert(html.includes('Skip to content'),`${name}: missing skip link`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,`${name}: duplicate ID`);
  idsByPage.set(name,new Set(ids));
  for(const image of html.matchAll(/<img\s[^>]*>/g)) assert(/\balt="[^"]+"/.test(image[0]),`${name}: image without alt text`);
  for(const url of html.matchAll(/(?:href|src)="([^"]+)"/g)) assert(!/^(?:javascript:|http:|#?$)/i.test(url[1]),`${name}: invalid URL ${url[1]}`);
}
let links=0;
for(const [name,html] of contentByPage) {
  for(const [,attr,raw] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if(/^(?:https:|mailto:|tel:|data:)/i.test(raw)) continue;
    const [target,fragment]=raw.split('#');
    if(target.startsWith('/Portfolio/')) continue;
    const file=target||name;
    const destination=path.resolve(root,file);
    assert(destination.startsWith(root),`${name}: path escape`);
    assert((await stat(destination)).isFile(),`${name}: missing local file ${file}`);
    if(fragment) assert(idsByPage.get(file)?.has(fragment),`${name}: missing anchor ${raw}`);
    links++;
  }
}
for(const file of (await readdir(path.join(root,'content'))).filter(f=>f.endsWith('.json'))) {
  const raw=await readFile(path.join(root,'content',file),'utf8');
  assert(!raw.includes('\u2014'),`${file}: em dash`);
  const value=JSON.parse(raw);
  function scan(v) {
    if(Array.isArray(v)) return v.forEach(scan);
    if(v&&typeof v==='object') { for(const [k,x] of Object.entries(v)) { if(k==='url') {const u=new URL(x);assert(['https:','mailto:','tel:'].includes(u.protocol));} scan(x); } }
  }
  scan(value);
}
const colors={paper:'#f7f5ef',surface:'#fffdf8',ink:'#17342b',body:'#37463f',muted:'#606b61',emerald:'#116447',gold:'#79591e'};
function luminance(hex) {const a=hex.slice(1).match(/../g).map(c=>parseInt(c,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return a[0]*.2126+a[1]*.7152+a[2]*.0722;}
function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
for(const foreground of ['ink','body','muted','emerald','gold']) for(const bg of ['paper','surface']) assert(contrast(colors[foreground],colors[bg])>=4.5,`${foreground}/${bg}: insufficient text contrast`);
assert(contrast('#fffdf8',colors.emerald)>=4.5,'Button text contrast');
console.log(`PASS: ${htmlFiles.length} pages; ${links} local links/assets; unique IDs; image alt text; privacy/text checks; all main text colours exceed 4.5:1 contrast.`);
