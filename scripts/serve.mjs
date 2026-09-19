import http from 'node:http';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.xml':'application/xml; charset=utf-8'};
const routes=new Set(['index.html','about.html','achievements.html','experience.html','projects.html','research.html','posts.html','404.html','sitemap.xml']);
const flag=process.argv.indexOf('--port');
const port=Number(flag>=0?process.argv[flag+1]:process.env.PORT||4173);
const server=http.createServer(async(req,res)=>{
  if(!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
  try {
    const parsed=new URL(req.url,'http://localhost');
    let name=decodeURIComponent(parsed.pathname).replace(/^\/Portfolio(?:\/|$)/,'/').replace(/^\//,'');
    if(!name) name='index.html';
    const target=path.resolve(root,name);
    if(!target.startsWith(root)||(!routes.has(name)&&!/^assets\/[a-zA-Z0-9._/-]+$/.test(name))) throw new Error('Not found');
    const bytes=await readFile(target);
    res.writeHead(200,{'Content-Type':types[path.extname(name)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
    res.end(req.method==='HEAD'?undefined:bytes);
  } catch {
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
    res.end(req.method==='HEAD'?undefined:await readFile(path.join(root,'404.html')));
  }
});
server.listen(port,'0.0.0.0',()=>console.log(`Portfolio preview: http://localhost:${port}`));
