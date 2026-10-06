const C='curso-recarga-v6';const A=['./','./index.html','./styles.css','./app.js','./course-data.js','./manifest.webmanifest','./validar.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));