const C='curso-instalador-carregadores-v11';
const A=['./','./index.html','./styles.css','./app.js','./course-data.js','./wiring-data.js','./qrcode-local.js','./manifest.webmanifest','./validar.html'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin===location.origin && /(?:index\.html|styles\.css|app\.js|course-data\.js|wiring-data\.js|qrcode-local\.js)$/.test(url.pathname)){
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)));
  }else{
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{if(resp.ok&&url.origin===location.origin){const cp=resp.clone();caches.open(C).then(c=>c.put(e.request,cp));}return resp;})));
  }
});
