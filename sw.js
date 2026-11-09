const C='pp2',S=['./','index.html','manifest.json','icon-192.png','icon-512.png'],put=(r,n)=>{const c=n.clone();caches.open(C).then(x=>x.put(r,c));return n};
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(S)));
self.onactivate=e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))));
self.onfetch=e=>{const r=e.request;if(r.method!='GET'||!r.url.startsWith('http'))return;e.respondWith(new URL(r.url).origin==location.origin?fetch(r).then(n=>put(r,n)).catch(()=>caches.match(r)):caches.match(r).then(h=>h||fetch(r).then(n=>put(r,n))))};
